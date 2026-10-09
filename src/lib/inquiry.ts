import { requirements, type RequirementValue } from "../content/site";

export type InquiryInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
};

export type FieldName = keyof InquiryInput;

export type FieldErrors = Partial<Record<FieldName, string>>;

export type Inquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: RequirementValue;
  requirementLabel: string;
  to: string;
  subject: string;
  body: string;
};

export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIREMENT_VALUES = new Set(requirements.map((item) => item.value));

function trim(value: string): string {
  return value.trim();
}

function digitCount(value: string): number {
  return (value.match(/\d/g) ?? []).length;
}

function isRequirement(value: string): value is RequirementValue {
  return REQUIREMENT_VALUES.has(value as RequirementValue);
}

function requirementLabel(value: RequirementValue): string {
  const match = requirements.find((item) => item.value === value);
  return match?.label ?? value;
}

export function createInquiry(
  input: InquiryInput,
  options: { to: string },
): Result<Inquiry, FieldErrors> {
  const name = trim(input.name);
  const company = trim(input.company);
  const email = trim(input.email);
  const phone = trim(input.phone);
  const requirement = trim(input.requirement);

  const error: FieldErrors = {};

  if (name.length < 2) {
    error.name = "Enter your name.";
  }

  if (company.length < 2) {
    error.company = "Enter your company.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    error.email = "Enter a valid email.";
  }

  if (digitCount(phone) < 10) {
    error.phone = "Enter a phone number with at least 10 digits.";
  }

  if (!isRequirement(requirement)) {
    error.requirement = "Choose a requirement.";
  }

  if (Object.keys(error).length > 0) {
    return { ok: false, error };
  }

  const label = requirementLabel(requirement as RequirementValue);
  const subject = `Audit request — ${company} (${label})`;
  const body = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Requirement: ${label}`,
    "",
    "Sent from the Zprime Digital studio site.",
  ].join("\n");

  return {
    ok: true,
    value: {
      name,
      company,
      email,
      phone,
      requirement: requirement as RequirementValue,
      requirementLabel: label,
      to: options.to,
      subject,
      body,
    },
  };
}
