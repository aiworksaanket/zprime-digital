import { describe, expect, it } from "vitest";
import { createInquiry } from "./inquiry";

const inbox = "team.zprimedigital@gmail.com";

const valid = {
  name: "Azim Patel",
  company: "Northwind",
  email: "azim@northwind.test",
  phone: "+91 99606 19125",
  requirement: "seo",
};

describe("createInquiry", () => {
  it("returns a composed inquiry on a valid payload", () => {
    const result = createInquiry(valid, { to: inbox });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.to).toBe(inbox);
    expect(result.value.requirementLabel).toBe("SEO");
    expect(result.value.subject).toBe("Audit request — Northwind (SEO)");
    expect(result.value.body).toContain("Name: Azim Patel");
    expect(result.value.body).toContain("Requirement: SEO");
  });

  it("rejects an empty form", () => {
    const result = createInquiry(
      { name: "", company: "", email: "", phone: "", requirement: "" },
      { to: inbox },
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.name).toBeDefined();
    expect(result.error.company).toBeDefined();
    expect(result.error.email).toBeDefined();
    expect(result.error.phone).toBeDefined();
    expect(result.error.requirement).toBeDefined();
  });

  it("rejects a bad email", () => {
    const result = createInquiry({ ...valid, email: "not-an-email" }, { to: inbox });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.email).toBe("Enter a valid email.");
    expect(result.error.name).toBeUndefined();
  });

  it("rejects a short phone number", () => {
    const result = createInquiry({ ...valid, phone: "123 45" }, { to: inbox });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.phone).toMatch(/10 digits/);
  });

  it("trims fields before composing", () => {
    const result = createInquiry(
      { ...valid, name: "  Azim Patel  ", company: "  Northwind  " },
      { to: inbox },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.name).toBe("Azim Patel");
    expect(result.value.company).toBe("Northwind");
  });
});
