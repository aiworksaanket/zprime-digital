import { site } from "../content/site";
import { createInquiry, type FieldName } from "../lib/inquiry";
import { toMailtoHref } from "../lib/mailto";

const FIELDS: FieldName[] = ["name", "company", "email", "phone", "requirement"];

function fieldEl(form: HTMLFormElement, name: FieldName): HTMLElement | null {
  return form.querySelector(`[name="${name}"]`);
}

function errorEl(form: HTMLFormElement, name: FieldName): HTMLElement | null {
  return form.querySelector(`[data-error-for="${name}"]`);
}

function setErrors(form: HTMLFormElement, errors: Partial<Record<FieldName, string>>): void {
  for (const name of FIELDS) {
    const field = fieldEl(form, name);
    const message = errorEl(form, name);
    const text = errors[name] ?? "";
    if (field) {
      field.setAttribute("aria-invalid", text ? "true" : "false");
    }
    if (message) {
      message.textContent = text;
    }
  }
}

function readInput(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    company: String(data.get("company") ?? ""),
    email: String(data.get("email") ?? ""),
    phone: String(data.get("phone") ?? ""),
    requirement: String(data.get("requirement") ?? ""),
  };
}

function initInquiryForm(form: HTMLFormElement): void {
  const success = form.querySelector<HTMLElement>("[data-success]");
  const copyBtn = form.querySelector<HTMLButtonElement>("[data-copy-email]");
  const copyLabel = copyBtn?.querySelector("[data-copy-label]");

  for (const name of FIELDS) {
    const field = fieldEl(form, name);
    field?.addEventListener("blur", () => {
      const result = createInquiry(readInput(form), { to: site.inbox });
      if (result.ok) {
        setErrors(form, {});
        return;
      }
      const only = result.error[name] ? { [name]: result.error[name] } : {};
      const current = errorEl(form, name);
      if (current) current.textContent = only[name] ?? "";
      field.setAttribute("aria-invalid", only[name] ? "true" : "false");
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = createInquiry(readInput(form), { to: site.inbox });
    if (!result.ok) {
      setErrors(form, result.error);
      const first = FIELDS.find((name) => result.error[name]);
      fieldEl(form, first ?? "name")?.focus();
      return;
    }

    setErrors(form, {});
    window.location.href = toMailtoHref(result.value);
    if (success) {
      success.hidden = false;
    }
    form.setAttribute("data-sent", "true");
  });

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(site.inbox);
      if (copyLabel) copyLabel.textContent = copyBtn.dataset.copied ?? "Email copied";
    } catch {
      if (copyLabel) copyLabel.textContent = site.inbox;
    }
  });
}

const form = document.querySelector<HTMLFormElement>("[data-inquiry-form]");
if (form) initInquiryForm(form);
