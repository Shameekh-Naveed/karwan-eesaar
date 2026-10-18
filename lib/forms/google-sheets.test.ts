import { test } from "node:test";
import assert from "node:assert/strict";
import { createVerify, generateKeyPairSync } from "node:crypto";
import {
  appendSubmissionToSheet,
  createJwtAssertion,
  parseServiceAccount,
} from "./google-sheets.ts";

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});
const account = { client_email: "bot@proj.iam.gserviceaccount.com", private_key: privateKey };

test("parseServiceAccount accepts raw JSON and base64, fixes escaped newlines", () => {
  const json = JSON.stringify({ client_email: "a@b", private_key: "-----BEGIN\nX\n-----END" });
  assert.equal(parseServiceAccount(json).private_key, "-----BEGIN\nX\n-----END");
  const b64 = Buffer.from(json).toString("base64");
  assert.equal(parseServiceAccount(b64).client_email, "a@b");
  assert.throws(() => parseServiceAccount("{}"), /client_email/);
});

test("createJwtAssertion produces an RS256 JWT that verifies", () => {
  const jwt = createJwtAssertion(account, 1_700_000_000);
  const [h, c, s] = jwt.split(".");
  assert.deepEqual(JSON.parse(Buffer.from(h, "base64url").toString()), { alg: "RS256", typ: "JWT" });
  const claims = JSON.parse(Buffer.from(c, "base64url").toString());
  assert.equal(claims.iss, account.client_email);
  assert.equal(claims.aud, "https://oauth2.googleapis.com/token");
  assert.equal(claims.exp - claims.iat, 3600);
  const v = createVerify("RSA-SHA256");
  v.update(`${h}.${c}`);
  assert.ok(v.verify(publicKey, Buffer.from(s, "base64url")));
});

type Call = { url: string; method: string; body?: unknown };
function mockFetch(script: (call: Call, n: number) => { status: number; json?: unknown }) {
  const calls: Call[] = [];
  const fetchImpl = (async (url: string | URL, init?: RequestInit) => {
    const call: Call = {
      url: String(url),
      method: init?.method ?? "GET",
      body: typeof init?.body === "string" ? JSON.parse(init.body) : init?.body,
    };
    calls.push(call);
    const r = script(call, calls.length);
    return new Response(JSON.stringify(r.json ?? {}), { status: r.status });
  }) as unknown as typeof fetch;
  return { calls, fetchImpl };
}

const base = { spreadsheetId: "SHEET1", account, tab: "Volunteer sign-up", headers: ["Submitted at", "Name"], row: ["now", "Ali"] };

test("first submission to an existing empty tab writes headers then the row", async () => {
  const { calls, fetchImpl } = mockFetch((call) => {
    if (call.url.includes("oauth2")) return { status: 200, json: { access_token: "tok" } };
    if (call.url.includes("A1%3AA1")) return { status: 200, json: {} };
    return { status: 200 };
  });
  await appendSubmissionToSheet({ ...base, fetchImpl });
  assert.equal(calls.length, 3);
  assert.match(calls[1].url, /SHEET1\/values\/'Volunteer%20sign-up'!A1%3AA1/);
  const append = calls[2];
  assert.match(append.url, /:append\?valueInputOption=RAW&insertDataOption=INSERT_ROWS$/);
  assert.deepEqual((append.body as { values: string[][] }).values, [["Submitted at", "Name"], ["now", "Ali"]]);
});

test("later submissions append only the row", async () => {
  const { calls, fetchImpl } = mockFetch((call) => {
    if (call.url.includes("oauth2")) return { status: 200, json: { access_token: "tok" } };
    if (call.url.includes("A1%3AA1")) return { status: 200, json: { values: [["Submitted at"]] } };
    return { status: 200 };
  });
  await appendSubmissionToSheet({ ...base, fetchImpl });
  assert.deepEqual((calls[2].body as { values: string[][] }).values, [["now", "Ali"]]);
});

test("a missing tab is created, then headers and row are written", async () => {
  const { calls, fetchImpl } = mockFetch((call) => {
    if (call.url.includes("oauth2")) return { status: 200, json: { access_token: "tok" } };
    if (call.url.includes("A1%3AA1")) return { status: 400 };
    return { status: 200 };
  });
  await appendSubmissionToSheet({ ...base, fetchImpl });
  assert.equal(calls.length, 4);
  assert.match(calls[2].url, /SHEET1:batchUpdate$/);
  assert.deepEqual(calls[2].body, { requests: [{ addSheet: { properties: { title: "Volunteer sign-up" } } }] });
  assert.deepEqual((calls[3].body as { values: string[][] }).values, [["Submitted at", "Name"], ["now", "Ali"]]);
});

test("a permission error names the service account to share with", async () => {
  const { fetchImpl } = mockFetch((call) =>
    call.url.includes("oauth2") ? { status: 200, json: { access_token: "tok" } } : { status: 403 }
  );
  await assert.rejects(appendSubmissionToSheet({ ...base, fetchImpl }), /bot@proj\.iam\.gserviceaccount\.com/);
});

test("a failed token exchange is reported", async () => {
  const { fetchImpl } = mockFetch(() => ({ status: 401 }));
  await assert.rejects(appendSubmissionToSheet({ ...base, fetchImpl }), /token exchange failed \(401\)/);
});
