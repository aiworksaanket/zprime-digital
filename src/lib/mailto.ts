import type { Inquiry } from "./inquiry";

export function toMailtoHref(inquiry: Inquiry): string {
  const subject = encodeURIComponent(inquiry.subject);
  const body = encodeURIComponent(inquiry.body);
  return `mailto:${inquiry.to}?subject=${subject}&body=${body}`;
}
