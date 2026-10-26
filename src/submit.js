import { EMAIL } from "./data";
import { track } from "./analytics";

/* Where form submissions go (all configured at build time, see .env.example):
   1. Zoho CRM Web-to-Lead, so every enquiry becomes a Lead.
   2. Optional Web3Forms/Formspree endpoint for an email copy to the office.
   If neither is configured, or Zoho cannot be reached, the visitor's email app opens with the details
   pre-filled so no enquiry is lost. */
const ZOHO_URL = import.meta.env.VITE_ZOHO_WEBFORM_URL; // e.g. https://crm.zoho.com/crm/WebToLeadForm
const ZOHO_KEY1 = import.meta.env.VITE_ZOHO_XNQSJSDP;
const ZOHO_KEY2 = import.meta.env.VITE_ZOHO_XMIWTLD;
const ZOHO_SOURCE = import.meta.env.VITE_ZOHO_LEAD_SOURCE; // optional, must match an existing Lead Source option
const EMAIL_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const EMAIL_KEY = import.meta.env.VITE_FORM_ACCESS_KEY;

const zohoReady = Boolean(ZOHO_URL && ZOHO_KEY1 && ZOHO_KEY2);
const emailReady = Boolean(EMAIL_ENDPOINT && (!/web3forms/i.test(EMAIL_ENDPOINT) || EMAIL_KEY));

async function sendToZoho(lead) {
  const p = new URLSearchParams();
  p.set("xnQsjsdp", ZOHO_KEY1);
  p.set("xmIwtLD", ZOHO_KEY2);
  p.set("actionType", "TGVhZHM="); // "Leads"
  p.set("returnURL", "null");
  p.set("First Name", lead.first || "");
  p.set("Last Name", lead.last || lead.first || "Website enquiry");
  p.set("Email", lead.email || "");
  p.set("Phone", lead.phone || "");
  if (lead.street) p.set("Street", lead.street);
  if (lead.city) p.set("City", lead.city);
  if (lead.state) p.set("State", lead.state);
  if (lead.zip) p.set("Zip Code", lead.zip);
  if (lead.country) p.set("Country", lead.country);
  p.set("Description", lead.description || "");
  if (ZOHO_SOURCE) p.set("Lead Source", ZOHO_SOURCE);
  // Zoho's form endpoint does not send CORS headers, so the response is opaque; a thrown error means it was unreachable.
  await fetch(ZOHO_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: p.toString(), keepalive: true });
}

async function sendEmailCopy(subject, fields) {
  const res = await fetch(EMAIL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ subject, from_name: "All Weather Driving School website", ...fields, access_key: EMAIL_KEY }),
  });
  if (!res.ok) throw new Error("Form service error");
}

/* subject/fields: readable summary. lead: structured values for Zoho. form: "registration" | "contact" (for analytics). */
export async function submitForm({ subject, fields, lead, form = "form", course = "" }) {
  const body = Object.entries(fields).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  const jobs = [];
  if (zohoReady && lead) jobs.push(sendToZoho({ ...lead, description: `${lead.description || ""}\n\nSubmitted on allweatherdrivingschool.com (${form}).`.trim() }));
  if (emailReady) jobs.push(sendEmailCopy(subject, fields));

  if (jobs.length) {
    const results = await Promise.allSettled(jobs);
    if (results.some((r) => r.status === "fulfilled")) {
      track("generate_lead", { form_name: form, course, destination: zohoReady ? "zoho" : "email" });
      return { mode: "sent", body };
    }
  }
  track("generate_lead", { form_name: form, course, destination: "mailto" });
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  return { mode: "email", body, href };
}
