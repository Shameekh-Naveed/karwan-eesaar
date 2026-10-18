import { createSign } from "node:crypto";

/**
 * Appends form submissions to a Google Sheet using a service account.
 *
 * Deliberately dependency-free: the service-account JWT is signed with
 * Node's crypto and the Sheets REST API is called with fetch, so the
 * serverless bundle stays small. No `@/` imports so this file can also be
 * run directly by Node for tests.
 */

export interface ServiceAccount {
  client_email: string;
  private_key: string;
  token_uri?: string;
}

const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_TOKEN_URI = "https://oauth2.googleapis.com/token";

/** Accepts the key file's JSON as-is, or base64-encoded (easier to paste into some env UIs). */
export function parseServiceAccount(raw: string): ServiceAccount {
  const text = raw.trim();
  const json = text.startsWith("{") ? text : Buffer.from(text, "base64").toString("utf8");
  const parsed = JSON.parse(json) as Partial<ServiceAccount>;
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error("Service account JSON needs client_email and private_key");
  }
  return {
    client_email: parsed.client_email,
    // Env UIs sometimes store the key with literal "\n" sequences
    private_key: parsed.private_key.replace(/\\n/g, "\n"),
    token_uri: parsed.token_uri,
  };
}

function base64url(input: Buffer | string) {
  return Buffer.from(input).toString("base64url");
}

/** RS256-signed JWT the token endpoint exchanges for an access token. */
export function createJwtAssertion(account: ServiceAccount, nowSeconds = Math.floor(Date.now() / 1000)) {
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: account.client_email,
      scope: SCOPE,
      aud: account.token_uri ?? DEFAULT_TOKEN_URI,
      iat: nowSeconds,
      exp: nowSeconds + 3600,
    })
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(account.private_key);
  return `${header}.${claims}.${base64url(signature)}`;
}

type Fetch = typeof fetch;

async function getAccessToken(account: ServiceAccount, fetchImpl: Fetch) {
  const res = await fetchImpl(account.token_uri ?? DEFAULT_TOKEN_URI, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: createJwtAssertion(account),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    throw new Error(`Google token exchange failed (${res.status})`);
  }
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Google token response had no access_token");
  return data.access_token;
}

async function sheetsRequest(
  fetchImpl: Fetch,
  token: string,
  path: string,
  init: { method?: string; body?: unknown } = {}
) {
  const res = await fetchImpl(`${SHEETS_API}/${path}`, {
    method: init.method ?? "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init.body !== undefined && { "Content-Type": "application/json" }),
    },
    body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
    signal: AbortSignal.timeout(10_000),
  });
  return res;
}

/** A1 ranges need the tab name quoted when it has spaces or punctuation. */
function tabRange(tab: string, cells: string) {
  return encodeURIComponent(`'${tab.replace(/'/g, "''")}'!${cells}`);
}

export interface AppendOptions {
  spreadsheetId: string;
  account: ServiceAccount;
  /** Tab (worksheet) name; created with the header row if it does not exist yet */
  tab: string;
  headers: readonly string[];
  row: readonly string[];
  fetchImpl?: Fetch;
}

/**
 * Appends one row. On the first submission to a tab it also creates the tab
 * (if missing) and writes the header row, so the team never has to set up
 * columns by hand.
 */
export async function appendSubmissionToSheet({
  spreadsheetId,
  account,
  tab,
  headers,
  row,
  fetchImpl = fetch,
}: AppendOptions) {
  const token = await getAccessToken(account, fetchImpl);

  // Does the tab exist, and does it have a header row yet?
  const probe = await sheetsRequest(fetchImpl, token, `${spreadsheetId}/values/${tabRange(tab, "A1:A1")}`);
  let needsHeader: boolean;
  if (probe.ok) {
    const data = (await probe.json()) as { values?: string[][] };
    needsHeader = !data.values?.[0]?.[0];
  } else if (probe.status === 400) {
    // "Unable to parse range": the tab does not exist, so create it
    const created = await sheetsRequest(fetchImpl, token, `${spreadsheetId}:batchUpdate`, {
      method: "POST",
      body: { requests: [{ addSheet: { properties: { title: tab } } }] },
    });
    if (!created.ok) {
      throw new Error(`Could not create sheet tab "${tab}" (${created.status})`);
    }
    needsHeader = true;
  } else {
    throw new Error(`Google Sheets read failed (${probe.status}); is the sheet shared with ${account.client_email}?`);
  }

  const values = needsHeader ? [headers, row] : [row];
  const appended = await sheetsRequest(
    fetchImpl,
    token,
    `${spreadsheetId}/values/${tabRange(tab, "A1")}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    { method: "POST", body: { values } }
  );
  if (!appended.ok) {
    throw new Error(`Google Sheets append failed (${appended.status})`);
  }
}
