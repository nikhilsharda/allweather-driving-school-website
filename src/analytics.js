/* Google Analytics 4. Active only when VITE_GA_MEASUREMENT_ID (G-XXXXXXXXXX) is set at build time.
   Page views are sent on every route change (see Layout.jsx) because this is a single-page app. */
const ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
let ready = false;

export function initAnalytics() {
  if (!ID || ready || typeof window === "undefined") return;
  ready = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", ID, { send_page_view: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ID)}`;
  document.head.appendChild(s);

  // Outbound intent: phone, email and sign-up clicks anywhere on the site.
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("tel:")) track("click_phone", { link_url: href });
    else if (href.startsWith("mailto:")) track("click_email", { link_url: href });
    else if (href.startsWith("/student-registration")) track("click_signup", { link_text: (a.textContent || "").trim().slice(0, 40) });
    else if (/^https?:\/\/(www\.)?(linkedin|instagram)\.com/.test(href)) track("click_social", { link_url: href });
  });
}

export function pageview(path, title) {
  if (!ready) return;
  window.gtag("event", "page_view", { page_path: path, page_location: window.location.origin + path, page_title: title || document.title });
}

export function track(name, params = {}) {
  if (!ready) return;
  window.gtag("event", name, params);
}
