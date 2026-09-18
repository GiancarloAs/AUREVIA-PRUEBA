/* =========================================================
   AUREVIA — Lógica principal del sitio
   ========================================================= */

/* ---------- 1. Idioma (ES/EN) ---------- */
const UI_STRINGS = {
  es: {
    nav_inicio: "Inicio", nav_destinos: "Destinos", nav_experiencias: "Experiencias",
    nav_nosotros: "Sobre Nosotros", nav_contacto: "Contacto", cta_reservar: "Reservar viaje",
    hero_cta_1: "Explorar destinos", hero_cta_2: "Ver experiencias",
    ver_todos: "Ver todos", ver_detalle: "Ver detalle", reservar_esto: "Consultar disponibilidad",
    form_titulo: "Empecemos a planear tu viaje", form_enviar: "Enviar solicitud",
    form_exito: "Gracias — tu solicitud fue registrada. Un especialista de AUREVIA te escribirá en menos de 24 horas.",
    todas: "Todas"
  },
  en: {
    nav_inicio: "Home", nav_destinos: "Destinations", nav_experiencias: "Experiences",
    nav_nosotros: "About Us", nav_contacto: "Contact", cta_reservar: "Book a trip",
    hero_cta_1: "Explore destinations", hero_cta_2: "View experiences",
    ver_todos: "View all", ver_detalle: "View detail", reservar_esto: "Check availability",
    form_titulo: "Let's start planning your trip", form_enviar: "Send request",
    form_exito: "Thank you — your request was received. An AUREVIA specialist will reach out within 24 hours.",
    todas: "All"
  }
};

function getLang(){ return localStorage.getItem("aurevia_lang") || "es"; }
function setLang(lang){
  localStorage.setItem("aurevia_lang", lang);
  applyLang();
}
function t(key){
  const lang = getLang();
  return (UI_STRINGS[lang] && UI_STRINGS[lang][key]) || UI_STRINGS.es[key] || key;
}
/** Devuelve el campo bilingüe correcto de un objeto de data.js: pick({es:'', en:''}) */
function pick(field){
  if (field == null) return "";
  const lang = getLang();
  return typeof field === "object" ? (field[lang] || field.es) : field;
}

function applyLang(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  // Vuelve a pintar cualquier contenido dinámico ya renderizado (tarjetas, etc.)
  document.dispatchEvent(new CustomEvent("aurevia:lang-changed"));
}

/* ---------- 2. Header: menú móvil + estado activo ---------- */
function initHeader(){
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav){
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.innerHTML = open ? ICONS.close : ICONS.menu;
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.innerHTML = ICONS.menu;
    }));
  }
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  if (toggle) toggle.innerHTML = ICONS.menu;
}

/* ---------- 3. Tarjetas de destinos / experiencias ---------- */
function cardTemplate(item, kind){
  const facts = kind === "destino"
    ? `<span>${ICONS.clock}${pick(item.duracion)}</span><span>${ICONS.mountain}${item.altitud}</span>`
    : `<span>${ICONS.clock}${pick(item.duracion)}</span><span>${ICONS.users}${pick(item.grupo)}</span>`;
  return `
  <article class="card" data-id="${item.id}" data-kind="${kind}">
    <div class="card-media">
      <img src="img/${item.imagen}" alt="${pick(item.nombre)}" loading="lazy">
      <span class="card-tag">${item.categoria || ""}</span>
    </div>
    <div class="card-body">
      <h3>${pick(item.nombre)}</h3>
      <p>${pick(item.resumen)}</p>
      <div class="card-meta">${facts}</div>
      <button class="card-open" data-open-modal="${item.id}" data-kind="${kind}">
        ${t("ver_detalle")} ${ICONS.arrowRight}
      </button>
    </div>
  </article>`;
}

function renderGrid(containerId, kind, list, limit){
  const el = document.getElementById(containerId);
  if (!el) return;
  const data = limit ? list.slice(0, limit) : list;
  el.innerHTML = data.map(item => cardTemplate(item, kind)).join("");
}

function renderAllGrids(){
  if (document.getElementById("home-destinos")){
    renderGrid("home-destinos", "destino", AUREVIA_DATA.destinos, 6);
  }
  if (document.getElementById("home-experiencias")){
    renderGrid("home-experiencias", "experiencia", AUREVIA_DATA.experiencias, 3);
  }
  if (document.getElementById("destinos-grid")){
    renderFilteredGrid("destinos-grid", "destino", AUREVIA_DATA.destinos);
  }
  if (document.getElementById("experiencias-grid")){
    renderFilteredGrid("experiencias-grid", "experiencia", AUREVIA_DATA.experiencias);
  }
  if (document.getElementById("allies-track")){
    renderAllies();
  }
}

/* ---------- 3b. Listado con filtro por categoría (destinos.html / experiencias.html) ---------- */
function renderFilteredGrid(containerId, kind, list){
  const el = document.getElementById(containerId);
  const filterRow = document.querySelector(`[data-filter-for="${containerId}"]`);
  const draw = (cat) => {
    const filtered = cat === "all" ? list : list.filter(i => i.categoria === cat);
    el.innerHTML = filtered.map(item => cardTemplate(item, kind)).join("");
    bindModalTriggers();
  };
  if (filterRow && !filterRow.dataset.bound){
    const cats = ["all", ...new Set(list.map(i => i.categoria))];
    filterRow.innerHTML = cats.map(c =>
      `<button data-cat="${c}" class="${c === "all" ? "is-active" : ""}">${c === "all" ? t("todas") : c}</button>`
    ).join("");
    filterRow.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      filterRow.querySelectorAll("button").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      draw(btn.dataset.cat);
    });
    filterRow.dataset.bound = "true";
  }
  draw(document.querySelector(`[data-filter-for="${containerId}"] .is-active`)?.dataset.cat || "all");
}

/* ---------- 4. Aliados estratégicos (carrusel) ---------- */
function renderAllies(){
  const track = document.getElementById("allies-track");
  track.innerHTML = AUREVIA_DATA.aliados.map(a => `
    <div class="ally">
      <div class="ally-media"><img src="img/${a.imagen}" alt="${a.nombre}" loading="lazy"></div>
      <span>${a.nombre}<br><small>${pick(a.tipo)}</small></span>
    </div>`).join("");

  const prev = document.getElementById("allies-prev");
  const next = document.getElementById("allies-next");
  if (prev) prev.innerHTML = ICONS.chevronLeft;
  if (next) next.innerHTML = ICONS.chevronRight;
  prev?.addEventListener("click", () => track.scrollBy({ left: -220, behavior: "smooth" }));
  next?.addEventListener("click", () => track.scrollBy({ left: 220, behavior: "smooth" }));
}

/* ---------- 5. Modal de detalle ---------- */
function findItem(kind, id){
  const list = kind === "destino" ? AUREVIA_DATA.destinos : AUREVIA_DATA.experiencias;
  return list.find(i => i.id === id);
}

function openModal(kind, id){
  const item = findItem(kind, id);
  if (!item) return;
  const overlay = document.getElementById("detail-modal");
  const facts = kind === "destino"
    ? `<li>${ICONS.clock}${pick(item.duracion)}</li><li>${ICONS.mountain}Altitud: ${item.altitud}</li>`
    : `<li>${ICONS.clock}${pick(item.duracion)}</li><li>${ICONS.users}${pick(item.grupo)}</li>`;

  overlay.querySelector(".modal-media img").src = `img/${item.imagen}`;
  overlay.querySelector(".modal-media img").alt = pick(item.nombre);
  overlay.querySelector(".modal-body h3").textContent = pick(item.nombre);
  overlay.querySelector(".modal-body p").textContent = pick(item.descripcion);
  overlay.querySelector(".modal-facts").innerHTML = facts;
  const cta = overlay.querySelector(".modal-body .btn");
  cta.href = `index.html?tipo=${kind}&item=${item.id}#contacto`;
  cta.textContent = t("reservar_esto");
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  document.getElementById("detail-modal")?.classList.remove("is-open");
  document.body.style.overflow = "";
}

function bindModalTriggers(){
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.kind, btn.dataset.openModal));
  });
}

function initModal(){
  const overlay = document.getElementById("detail-modal");
  if (!overlay) return;
  overlay.querySelector(".modal-close").innerHTML = ICONS.close;
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  bindModalTriggers();
}

/* ---------- 6. Formulario de contacto dinámico ---------- */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if (!form) return;

  const tipoSelect = form.querySelector("#tipo-viaje");
  const itemSelect = form.querySelector("#item-select");
  const destinoFields = form.querySelector('[data-dynamic="destino"]');
  const experienciaFields = form.querySelector('[data-dynamic="experiencia"]');

  function fillItemOptions(kind){
    const list = kind === "destino" ? AUREVIA_DATA.destinos : AUREVIA_DATA.experiencias;
    itemSelect.innerHTML = list.map(i => `<option value="${i.id}">${pick(i.nombre)}</option>`).join("");
  }

  function toggleDynamicFields(kind){
    destinoFields?.classList.toggle("is-visible", kind === "destino");
    experienciaFields?.classList.toggle("is-visible", kind === "experiencia");
  }

  tipoSelect.addEventListener("change", () => {
    fillItemOptions(tipoSelect.value);
    toggleDynamicFields(tipoSelect.value);
  });

  // Preselección desde la URL (ej. viene de una tarjeta de destinos.html)
  const params = new URLSearchParams(location.search);
  const urlKind = params.get("tipo");
  const urlItem = params.get("item");
  fillItemOptions(tipoSelect.value);
  toggleDynamicFields(tipoSelect.value);
  if (urlKind && (urlKind === "destino" || urlKind === "experiencia")){
    tipoSelect.value = urlKind;
    fillItemOptions(urlKind);
    toggleDynamicFields(urlKind);
    if (urlItem) itemSelect.value = urlItem;
    setTimeout(() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }), 300);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    /* Aquí se conecta el envío real (Supabase + correo corporativo) según
       lo definido en la cotización. Esta es la maqueta de front-end. */
    form.reset();
    fillItemOptions(tipoSelect.value);
    document.getElementById("form-success")?.classList.add("is-visible");
  });
}

/* ---------- 7. Año dinámico en footer ---------- */
function initFooterYear(){
  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
}

/* ---------- 8. Inyección del logo SVG en todos los .logo-mark ---------- */
function initLogoMarks(){
  document.querySelectorAll(".logo-mark").forEach(el => {
    el.innerHTML = `
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2H58V58H2V2Z" stroke="currentColor" stroke-width="2.4"/>
      <path d="M2 34L20 14L34 30L44 18L58 34" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M2 44L24 20L58 44" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
    </svg>`;
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  initHeader();
  initLogoMarks();
  renderAllGrids();
  initModal();
  initContactForm();
  initFooterYear();
});
document.addEventListener("aurevia:lang-changed", () => {
  renderAllGrids();
  bindModalTriggers();
});
