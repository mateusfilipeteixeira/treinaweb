const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
}

const banner = document.querySelector("[data-cookie-banner]");
const acceptButton = document.querySelector("[data-cookie-accept]");
const rejectButton = document.querySelector("[data-cookie-reject]");
const consentKey = "trilha_web_cookie_consent";

function loadAnalytics(measurementId) {
  if (!measurementId || window.__analyticsLoaded) {
    return;
  }

  window.__analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

if (banner && window.siteAnalytics?.measurementId) {
  const savedChoice = window.localStorage.getItem(consentKey);

  if (savedChoice === "accepted") {
    loadAnalytics(window.siteAnalytics.measurementId);
  } else if (!savedChoice) {
    banner.hidden = false;
  }

  acceptButton?.addEventListener("click", () => {
    window.localStorage.setItem(consentKey, "accepted");
    banner.hidden = true;
    loadAnalytics(window.siteAnalytics.measurementId);
  });

  rejectButton?.addEventListener("click", () => {
    window.localStorage.setItem(consentKey, "rejected");
    banner.hidden = true;
  });
}

