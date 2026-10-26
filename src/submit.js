import { EMAIL } from "./data";

/* Sends the form to VITE_FORM_ENDPOINT (Web3Forms, Formspree or similar) when configured.
   Otherwise falls back to a pre-filled email to the school office, so no registration is lost. */
export async function submitForm({ subject, fields }) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  const key = import.meta.env.VITE_FORM_ACCESS_KEY;
  // Web3Forms needs an access key; without one, fall back to the pre-filled email instead of failing.
  const usable = endpoint && (!/web3forms/i.test(endpoint) || key);
  const body = Object.entries(fields).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  if (usable) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ subject, from_name: "All Weather Driving School website", ...fields, access_key: key }),
    });
    if (!res.ok) throw new Error("Form service error");
    return { mode: "sent", body };
  }
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  return { mode: "email", body, href };
}
