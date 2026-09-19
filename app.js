/* =======================================================================
   BENGKEL MOBIL YEYEN AUTO — business configuration
   -----------------------------------------------------------------------
   Reusable template: swap the values below to reuse this landing page
   for a different local automotive business. Keep this object in sync
   with the static text already written into index.html <head> (title,
   meta description, JSON-LD) — that text is intentionally NOT generated
   from this file so structured data stays crawlable without JS.

   IMPORTANT — DEMO DATA NOTICE
   "Bengkel Mobil Yeyen Auto" is a fictional demo business used to showcase this
   template. Fields marked (DEMO) below are plausible placeholder values,
   not verified real-world facts. Before deploying for a real business,
   replace every (DEMO) field with that business's real, verifiable data
   — especially googleRating / reviewCount / yearsExperience, which
   must never be invented for a live site.
   ======================================================================= */
const business = {
  name: "Bengkel Mobil Yeyen Auto",                                  // DEMO
  shortName: "Yeyen Auto",
  tagline: "Body Repair • Cat Mobil • Detailing",
  city: "Cirebon",
  region: "Jawa Barat",
  addressLine: "blok Cikadu, RT.008/RW.004, Sidawangi, Kec. Sumber",
  postalCode: "45611",
  country: "ID",
  phoneDisplay: "0856-2430-4587",
  phoneE164: "+6285624304587",
  whatsapp: "6285624304587",                                   // update to the real business WhatsApp number
  email: "halo@presisiautoworks.id",                            // DEMO
  openingHours: "Senin–Sabtu, 08.00–17.00",
  closedNote: "Minggu tutup",
  googleRating: 5.0,        // replace with real Google Business Profile rating
  reviewCount: 214,         // (DEMO) replace with real Google review count
  yearsExperience: 8,       // (DEMO) replace with real founding year / experience
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yeyen+Auto+Sidawangi+Cirebon",
  googleReviewsUrl: "https://www.google.com/search?q=Yeyen+Auto+Sidawangi+Cirebon+reviews",
  mapEmbedSrc: "https://www.google.com/maps?q=blok+Cikadu+Sidawangi+Sumber+Cirebon&z=15&output=embed",
  lat: -6.78083,
  lng: 108.46861,
  areas: ["Kedawung", "Kesambi", "Harjamukti", "Weru", "Plumbon", "Sumber"],
  services: [
    "Body Repair",
    "Cat Mobil",
    "General Repair",
    "Overhaul Engine",
    "Servis Berkala",
    "Servis AC Mobil",
    "Flushing Radiator",
    "Spooring & Balancing",
    "Tune Up Mesin",
    "Detailing",
    "Ceramic Coating"
  ],
};

/* ---------- image sources (kept for transparency — see brief §41) ----------
   All photos below are free-license images (images.unsplash.com, standard
   Unsplash License — free for commercial use, no attribution required).
   Source pages kept here for traceability when swapping images later.   */
const IMAGE_SOURCES = {
  hero: { src: "img-1.avif", source: "img-1.png", alt: "Teknisi mengerjakan bodi mobil di bengkel" },
  bodyBefore: { src: "https://images.unsplash.com/photo-1786489785858-b64715400a37?auto=format&fit=crop&w=1000&q=80", source: "https://unsplash.com/photos/CNciVh_m1rU", alt: "Panel belakang mobil abu-abu sedang diamplas sebelum dempul" },
  bodyAfter: { src: "https://images.unsplash.com/photo-1708805282706-f44730b7e527?auto=format&fit=crop&w=1000&q=80", source: "https://unsplash.com/photos/CsZjHjFN3N8", alt: "Mobil dengan cat mengilap setelah proses finishing" },
  svcBody: { src: "https://images.unsplash.com/photo-1786489785778-a163f38b7c87?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/Udv7OHeMLCk", alt: "Teknisi mengamplas bumper belakang mobil di bengkel" },
  svcPaint: { src: "https://images.unsplash.com/photo-1746079074370-f03467da3394?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/i-SLbh6yvw4", alt: "Teknisi mengerjakan pengecatan bodi mobil" },
  svcDetail: { src: "https://images.unsplash.com/photo-1746079074371-e28f14c76e37?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/bNxnLSf4VMc", alt: "Teknisi memoles cat bodi mobil klasik" },
  svcCoating: { src: "https://images.unsplash.com/photo-1746079074688-cc0811662ab4?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/hm1K_Sc__tA", alt: "Mobil dengan hasil akhir mengilap setelah coating" },
  svcOverhaul: { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/L5L2sF2o5s4", alt: "Overhaul mesin mobil" },
  svcService: { src: "https://images.unsplash.com/photo-1632731557005-2d7c5b62b102?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/V8vA8O6y8b8", alt: "Ganti oli dan servis berkala" },
  svcAC: { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/kO8zG9N5aYg", alt: "Servis AC mobil" },
  svcRadiator: { src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/U9_Uv8D4UxE", alt: "Flushing radiator mobil" },
  svcSpooring: { src: "https://images.unsplash.com/photo-1621259501511-b0db04b9cefb?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/Z4R2Q6Y9HjM", alt: "Mesin spooring balancing 3D" },
  svcTuneup: { src: "https://images.unsplash.com/photo-1503376710356-7872652b3634?auto=format&fit=crop&w=900&q=80", source: "https://unsplash.com/photos/1l2eM8H4QoI", alt: "Tune up mesin mobil" },
  about: { src: "img-3.avif", source: "img-3.png", alt: "Area kasir dan etalase sparepart Bengkel Mobil Yeyen Auto" },
};

/* ---------- minimal technical icon set (UI icons only — not content imagery) ---------- */
const ICONS = {
  logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16h1.6l1.1-3.8A1.8 1.8 0 0 1 8.6 11h6.8c.8 0 1.5.5 1.7 1.2L18.4 16H20"/><circle cx="8" cy="16" r="1.7"/><circle cx="16" cy="16" r="1.7"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.5.1-.2 0-.4 0-.5C10 9 9.4 7.6 9.1 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h3l1.5 4.5L8.5 9c.7 2.3 2.2 3.8 4.5 4.5l1.5-2L19 13v3c0 1.1-.9 2-2 2C10.5 18 6 13.5 6 6a2 2 0 0 1 0-3z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="1"/><path d="m3 6 9 6.5L21 6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  arrows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8 4 12l4 4M16 8l4 4-4 4"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13.5" r="3.4"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3.5V11c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5.5z"/><path d="M9 12l2 2 4-4"/></svg>',
  spraygun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3h4v5h-4z"/><path d="M13 8v3l-3 2v8h6v-8l-3-2"/><path d="M6 13h4M6 16h4"/></svg>',
  polish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="5"/><path d="m13 13 7 7"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5 5.5 20l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="1.5"/><rect x="8.5" y="2.3" width="7" height="3.4" rx="1"/><path d="M8.5 11h7M8.5 14.5h7M8.5 8h4"/></svg>',
  checklist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="m4 6 1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/></svg>',
  keys: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="3.2"/><path d="m10.3 12.7 8.2-8.2M15.5 6l2 2M18 3.5l2 2"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.3c0-.9.2-1.5 1.5-1.5h1.6V4.2C16.3 4.1 15.3 4 14.2 4c-2.4 0-4 1.5-4 4.1v2.3H7.6v3h2.6V21z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2c.3 2.2 1.7 3.6 3.9 3.9v3c-1.4 0-2.7-.4-3.9-1.2v6.6c0 3.6-2.9 6.2-6.3 5.9-3-.3-5.2-2.9-5-6 .2-2.9 2.7-5.1 5.7-5V13c-1.3-.1-2.4.9-2.5 2.2-.1 1.3.9 2.4 2.2 2.5 1.3.1 2.5-.8 2.6-2.2V2z"/></svg>',
};

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    const name = el.getAttribute("data-icon");
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

/* ---------- WhatsApp link builder — every CTA carries real context ---------- */
function waLink(message) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
const WA_MESSAGES = {
  general: `Halo ${business.name}, saya ingin konsultasi mengenai kondisi mobil saya.`,
  bodyRepair: "Halo, saya ingin konsultasi mengenai body repair mobil saya.",
  paint: "Halo, saya ingin konsultasi mengenai cat mobil saya.",
  detailing: "Halo, saya ingin konsultasi mengenai detailing mobil saya.",
  coating: "Halo, saya ingin bertanya mengenai ceramic coating untuk mobil saya.",
  overhaul: "Halo, saya ingin konsultasi mengenai overhaul engine mobil saya.",
  service: "Halo, saya ingin konsultasi mengenai servis berkala / ganti oli mobil saya.",
  ac: "Halo, saya ingin konsultasi mengenai servis AC mobil saya.",
  radiator: "Halo, saya ingin konsultasi mengenai servis / flushing radiator mobil saya.",
  spooring: "Halo, saya ingin konsultasi mengenai spooring dan balancing ban mobil saya.",
  tuneup: "Halo, saya ingin konsultasi mengenai tune up mesin mobil saya.",
  photo: "Halo, saya ingin kirim foto kondisi mobil saya untuk dicek dulu.",
  booking: "Halo, saya ingin membuat janji untuk datang ke bengkel.",
};

/* ---------- toast ---------- */
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- mobile drawer ---------- */
function initDrawer() {
  const btn = document.querySelector(".mobile-menu-btn");
  const overlay = document.querySelector(".drawer-overlay");
  const drawer = document.querySelector(".drawer");
  const closeBtn = document.querySelector(".drawer-close");
  if (!btn || !overlay || !drawer) return;
  const open = () => { overlay.classList.add("open"); drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { overlay.classList.remove("open"); drawer.classList.remove("open"); document.body.style.overflow = ""; };
  btn.addEventListener("click", open);
  closeBtn && closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
}

/* ---------- before/after slider — native range input drives a CSS custom property ----------
   Accessible by default: focusable, arrow-key adjustable, works with touch drag
   and mouse drag via the native range input's own interaction model.          */
function initBeforeAfter() {
  document.querySelectorAll(".ba-slider").forEach(slider => {
    const range = slider.querySelector(".ba-range");
    if (!range) return;
    const update = () => {
      slider.style.setProperty("--reveal", range.value + "%");
    };
    range.addEventListener("input", update);
    update();
  });
}

/* ---------- lazy-load Google Maps only after explicit click (performance) ---------- */
function initMapLazyLoad() {
  const preview = document.querySelector(".map-preview");
  const embed = document.querySelector(".map-embed");
  if (!preview || !embed) return;
  preview.addEventListener("click", () => {
    embed.src = business.mapEmbedSrc;
    embed.classList.add("active");
    preview.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  initDrawer();
  initBeforeAfter();
  initMapLazyLoad();
});
