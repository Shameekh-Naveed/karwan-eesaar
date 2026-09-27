/**
 * Single source of truth for every lead-capture form on the site.
 * The client renders from these definitions and the API route validates
 * against the same ones, so the two can never drift apart.
 */

/** Hidden field real people never fill in; bots usually do. */
export const HONEYPOT_FIELD = "company_website";

export type FieldType = "text" | "tel" | "email" | "number" | "select" | "textarea";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  options?: readonly string[];
  min?: number;
  max?: number;
  /** Spans both columns on wider screens */
  wide?: boolean;
}

export interface FormDef {
  id: string;
  /** Shown in notification subject lines */
  title: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  fields: readonly FieldDef[];
}

const nameField: FieldDef = {
  name: "name",
  label: "Full name",
  type: "text",
  required: true,
  autoComplete: "name",
};

const phoneField: FieldDef = {
  name: "phone",
  label: "Phone / WhatsApp",
  type: "tel",
  required: true,
  placeholder: "03XX-XXXXXXX",
  autoComplete: "tel",
};

const ageField: FieldDef = {
  name: "age",
  label: "Age",
  type: "number",
  required: true,
  min: 14,
  max: 90,
};

const cityField: FieldDef = {
  name: "city",
  label: "City",
  type: "text",
  required: true,
  placeholder: "e.g. Mansehra",
  autoComplete: "address-level2",
};

export const forms = {
  volunteer: {
    id: "volunteer",
    title: "Volunteer application",
    submitLabel: "Sign me up",
    successTitle: "JazakAllah, you're on the list!",
    successMessage: "Our team will call or WhatsApp you within a few days.",
    fields: [
      nameField,
      phoneField,
      ageField,
      cityField,
      {
        name: "qualification",
        label: "Qualification",
        type: "text",
        required: true,
        placeholder: "e.g. BS Computer Science",
      },
      {
        name: "interest",
        label: "How would you like to help?",
        type: "select",
        required: true,
        options: [
          "Field drives (rations, relief, winter)",
          "Teaching / IT classes",
          "Social media & design",
          "Event support",
          "Wherever I'm needed",
        ],
      },
      {
        name: "message",
        label: "Anything else? (optional)",
        type: "textarea",
        wide: true,
      },
    ],
  },
  internship: {
    id: "internship",
    title: "Internship application",
    submitLabel: "Apply for internship",
    successTitle: "Application received!",
    successMessage:
      "We'll review it and get back to you by phone or WhatsApp. Keep an eye out.",
    fields: [
      nameField,
      phoneField,
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
      },
      ageField,
      cityField,
      {
        name: "institution",
        label: "University / college",
        type: "text",
        required: true,
      },
      {
        name: "program",
        label: "Degree & semester",
        type: "text",
        required: true,
        placeholder: "e.g. BBA, 6th semester",
      },
      {
        name: "area",
        label: "Area you want to work in",
        type: "select",
        required: true,
        options: [
          "Social media & content",
          "Graphic design",
          "Events & field operations",
          "Fundraising & donor relations",
          "Research & documentation",
          "IT / web",
        ],
      },
      {
        name: "duration",
        label: "Duration",
        type: "select",
        required: true,
        options: ["4 weeks", "6 weeks", "8 weeks", "3 months"],
      },
      {
        name: "message",
        label: "Why do you want to intern with us? (optional)",
        type: "textarea",
        wide: true,
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Website message",
    submitLabel: "Send message",
    successTitle: "Message sent!",
    successMessage: "Thank you. We'll get back to you shortly.",
    fields: [
      nameField,
      phoneField,
      {
        name: "email",
        label: "Email (optional)",
        type: "email",
        autoComplete: "email",
        wide: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
        wide: true,
      },
    ],
  },
} as const satisfies Record<string, FormDef>;

export type FormId = keyof typeof forms;

export function isFormId(value: string): value is FormId {
  return Object.prototype.hasOwnProperty.call(forms, value);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns cleaned values, or a map of field name to error message. */
export function validateSubmission(
  form: FormDef,
  input: Record<string, unknown>
):
  | { ok: true; values: Record<string, string> }
  | { ok: false; errors: Record<string, string> } {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const field of form.fields) {
    const raw = input[field.name];
    const value = typeof raw === "string" ? raw.trim() : "";
    const maxLength = field.type === "textarea" ? 3000 : 200;

    if (!value) {
      if (field.required) errors[field.name] = "Required";
      continue;
    }
    if (value.length > maxLength) {
      errors[field.name] = "Too long";
      continue;
    }

    if (field.type === "email" && !EMAIL_RE.test(value)) {
      errors[field.name] = "Enter a valid email";
    } else if (field.type === "tel") {
      const digits = value.replace(/\D/g, "");
      if (!/^[+\d\s()-]+$/.test(value) || digits.length < 10 || digits.length > 15) {
        errors[field.name] = "Enter a valid phone number";
      }
    } else if (field.type === "number") {
      const n = Number(value);
      if (!Number.isInteger(n) || (field.min !== undefined && n < field.min) || (field.max !== undefined && n > field.max)) {
        errors[field.name] = `Enter a number from ${field.min} to ${field.max}`;
      }
    } else if (field.type === "select" && !field.options?.includes(value)) {
      errors[field.name] = "Choose an option";
    }

    values[field.name] = value;
  }

  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, values };
}
