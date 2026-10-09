import { describe, expect, it } from "vitest";
import { createInquiry } from "./inquiry";
import { toMailtoHref } from "./mailto";

describe("toMailtoHref", () => {
  it("encodes subject and body for a mailto URL", () => {
    const result = createInquiry(
      {
        name: "Azim Patel",
        company: "Northwind",
        email: "azim@northwind.test",
        phone: "+91 99606 19125",
        requirement: "paid",
      },
      { to: "team.zprimedigital@gmail.com" },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    const href = toMailtoHref(result.value);
    expect(href.startsWith("mailto:team.zprimedigital@gmail.com?")).toBe(true);
    expect(href).toContain("subject=");
    expect(href).toContain("body=");
    expect(href).not.toContain(" ");
    expect(decodeURIComponent(href)).toContain("Paid advertising");
  });
});
