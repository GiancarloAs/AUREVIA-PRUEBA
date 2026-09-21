/* =========================================================
   AUREVIA — Lógica principal del sitio
   ========================================================= */

/* ---------- 1. Idioma (ES/EN) ---------- */
const UI_STRINGS = {
  es: {
    nav_inicio: "Inicio", nav_destinos: "Destinos", nav_experiencias: "Experiencias",
    nav_aliados: "Aliados", nav_nosotros: "Sobre Nosotros", nav_contacto: "Contacto",
    cta_reservar: "Reservar viaje",
    hero_title: "Viajes de autor por el corazón de los Andes",
    hero_lede: "AUREVIA diseña itinerarios privados, guías especializados y logística impecable para quienes viajan pocas veces al año, pero quieren que cada una sea inolvidable.",
    hero_cta_1: "Explorar destinos", hero_cta_2: "Ver experiencias",
    ver_todos: "Ver todos", ver_detalle: "Ver detalle", reservar_esto: "Consultar disponibilidad",
    todas: "Todas",

    destinos_home_title: "Lugares que definen un viaje por el Perú andino",
    experiencias_home_title: "Momentos diseñados, no solo visitados",
    aliados_kicker: "Aliados estratégicos",
    aliados_home_title: "Hoteles y trenes seleccionados por su estándar de servicio",
    aliados_page_title: "Los aliados con los que viajas",
    aliados_page_lede: "Cada hotel y cada tren de este listado pasó por una evaluación directa de AUREVIA antes de sumarse como aliado — no son acuerdos comerciales genéricos.",

    about_kicker: "Sobre AUREVIA",
    about_title: "Concierge de viaje, no una agencia más",
    about_text: "Cada itinerario se construye desde cero junto al viajero: sin paquetes cerrados, con un solo punto de contacto del inicio al regreso.",
    about_cta: "Conocer AUREVIA",

    contact_lede: "Cuéntanos qué destino o experiencia te interesa y un especialista de AUREVIA te contactará con una propuesta a medida.",
    whatsapp_cta: "¿Prefieres no llenar el formulario? Escríbenos directo por WhatsApp.",
    whatsapp_btn: "Chatear por WhatsApp",

    label_nombre: "Nombre", label_apellido: "Apellido", label_pais: "Nacionalidad",
    label_pasaporte: "N° de pasaporte (opcional)", label_telefono: "Teléfono / WhatsApp",
    label_correo: "Correo electrónico", label_tipo_viaje: "Me interesa",
    opt_destino: "Un destino", opt_experiencia: "Una experiencia",
    label_item_select: "Selecciona", label_num_personas: "Número de personas",
    label_categoria_hotel: "Categoría de hotel",
    opt_hotel_boutique: "Boutique de lujo", opt_hotel_5estrellas: "5 estrellas", opt_hotel_premium: "Premium con encanto",
    label_guia: "Idioma del guía", opt_guia_es: "Español", opt_guia_en: "Inglés", opt_guia_fr: "Francés", opt_guia_pt: "Portugués",
    label_num_invitados: "Número de invitados", label_fecha: "Fecha tentativa",
    label_mensaje: "Cuéntanos algo más sobre tu viaje (opcional)",

    form_titulo: "Empecemos a planear tu viaje", form_enviar: "Enviar solicitud",
    form_note: "Al enviar este formulario, tus datos se almacenan de forma segura para que un especialista de AUREVIA pueda contactarte.",
    form_required_note: "Los campos marcados con * son obligatorios.",
    form_exito: "Gracias — tu solicitud fue registrada. Un especialista de AUREVIA te escribirá en menos de 24 horas.",

    footer_tagline: "Viajes de autor por Cusco, el Valle Sagrado y Machu Picchu, diseñados con estándar de concierge privado.",
    footer_explorar: "Explorar", footer_compania: "Compañía", footer_seguenos: "Síguenos",
    footer_historia: "Nuestra historia", footer_location: "Cusco, Perú",

    destinos_hero_title: "Siete lugares, un mismo estándar de servicio",
    destinos_hero_lede: "Desde Cusco Ciudad hasta el Camino Inka: cada destino se recorre con guía privado, transporte dedicado y tiempos pensados para viajar sin prisa.",
    destinos_cta_kicker: "¿No encuentras lo que buscas?",
    destinos_cta_title: "También diseñamos rutas a medida fuera de este listado",
    destinos_cta_text: "Comparte tus fechas e intereses y armamos un itinerario exclusivo, incluso combinando varios destinos en un mismo viaje.",

    experiencias_hero_title: "Momentos que no están en ningún itinerario estándar",
    experiencias_hero_lede: "De una boda al pie de los Andes a un desayuno privado frente al Huaynapicchu: cada experiencia se produce a medida del grupo.",
    experiencias_cta_kicker: "A tu medida",
    experiencias_cta_title: "¿Tienes una celebración en mente que no está aquí?",
    experiencias_cta_text: "Aniversarios, retiros de empresa o celebraciones familiares: diseñamos la experiencia desde cero junto a ti.",

    about_hero_title: "Un concierge de viaje construido desde Cusco",
    about_hero_lede: "AUREVIA nace de la certeza de que los Andes merecen contarse con detalle, sin apuro y con un único punto de contacto de principio a fin.",
    about_history_kicker: "Nuestra historia",
    about_history_title: "De guías de montaña a diseñadores de viajes",
    about_history_p1: "AUREVIA empezó como un grupo pequeño de guías cusqueños que notó una brecha: viajeros exigentes que llegaban a Cusco con un itinerario genérico, comprado a distancia, que no reflejaba ni el ritmo ni los intereses reales del grupo.",
    about_history_p2: "Hoy diseñamos cada viaje desde cero — destino, experiencia, hospedaje y transporte — y lo acompañamos con un solo interlocutor durante todo el proceso, antes, durante y después del viaje.",
    stat_destinos: "Destinos curados", stat_experiencias: "Experiencias exclusivas", stat_respuesta: "Tiempo de respuesta",
    values_kicker: "Nuestros valores", values_title: "Lo que guía cada itinerario que diseñamos",
    value1_title: "Confianza", value1_text: "Guías certificados, transporte verificado y comunicación transparente sobre costos, tiempos y condiciones de cada destino.",
    value2_title: "Sofisticación", value2_text: "Detalles pensados para viajeros que valoran el buen servicio sin necesitar que se lo expliquen.",
    value3_title: "Exclusividad", value3_text: "Itinerarios privados, sin combinarse con grupos ajenos, y acceso preferente en los puntos de mayor demanda.",
    value4_title: "Raíz andina", value4_text: "Alianzas directas con comunidades y productores locales en cada destino y experiencia que ofrecemos.",
    closing_kicker: "Hablemos de tu viaje", closing_title: "Cuéntanos qué estás imaginando",
    closing_text: "Un especialista de AUREVIA te responderá en menos de 24 horas con una propuesta inicial.",

    modal_tips_heading: "Consejos para tu viaje",
    aria_abrir_menu: "Abrir menú", aria_cerrar: "Cerrar", aria_anterior: "Anterior", aria_siguiente: "Siguiente"
  },
  en: {
    nav_inicio: "Home", nav_destinos: "Destinations", nav_experiencias: "Experiences",
    nav_aliados: "Partners", nav_nosotros: "About Us", nav_contacto: "Contact",
    cta_reservar: "Book a trip",
    hero_title: "Bespoke journeys through the heart of the Andes",
    hero_lede: "AUREVIA designs private itineraries, specialist guides and flawless logistics for travelers who journey only a few times a year — and want every one to be unforgettable.",
    hero_cta_1: "Explore destinations", hero_cta_2: "View experiences",
    ver_todos: "View all", ver_detalle: "View detail", reservar_esto: "Check availability",
    todas: "All",

    destinos_home_title: "Places that define a journey through the Peruvian Andes",
    experiencias_home_title: "Moments designed, not just visited",
    aliados_kicker: "Strategic partners",
    aliados_home_title: "Hotels and trains selected for their standard of service",
    aliados_page_title: "The partners you travel with",
    aliados_page_lede: "Every hotel and train on this list went through a direct AUREVIA evaluation before joining as a partner — these aren't generic commercial deals.",

    about_kicker: "About AUREVIA",
    about_title: "A travel concierge, not just another agency",
    about_text: "Every itinerary is built from scratch with the traveler: no closed packages, with a single point of contact from start to return.",
    about_cta: "Discover AUREVIA",

    contact_lede: "Tell us which destination or experience interests you and an AUREVIA specialist will reach out with a tailored proposal.",
    whatsapp_cta: "Would rather skip the form? Message us directly on WhatsApp.",
    whatsapp_btn: "Chat on WhatsApp",

    label_nombre: "First name", label_apellido: "Last name", label_pais: "Nationality",
    label_pasaporte: "Passport number (optional)", label_telefono: "Phone / WhatsApp",
    label_correo: "Email address", label_tipo_viaje: "I'm interested in",
    opt_destino: "A destination", opt_experiencia: "An experience",
    label_item_select: "Select", label_num_personas: "Number of travelers",
    label_categoria_hotel: "Hotel category",
    opt_hotel_boutique: "Luxury boutique", opt_hotel_5estrellas: "5-star", opt_hotel_premium: "Premium with charm",
    label_guia: "Guide language", opt_guia_es: "Spanish", opt_guia_en: "English", opt_guia_fr: "French", opt_guia_pt: "Portuguese",
    label_num_invitados: "Number of guests", label_fecha: "Tentative date",
    label_mensaje: "Tell us more about your trip (optional)",

    form_titulo: "Let's start planning your trip", form_enviar: "Send request",
    form_note: "By submitting this form, your details are stored securely so an AUREVIA specialist can reach out to you.",
    form_required_note: "Fields marked with * are required.",
    form_exito: "Thank you — your request was received. An AUREVIA specialist will reach out within 24 hours.",

    footer_tagline: "Bespoke journeys through Cusco, the Sacred Valley and Machu Picchu, designed to a private-concierge standard.",
    footer_explorar: "Explore", footer_compania: "Company", footer_seguenos: "Follow us",
    footer_historia: "Our story", footer_location: "Cusco, Peru",

    destinos_hero_title: "Seven places, one standard of service",
    destinos_hero_lede: "From Cusco City to the Inca Trail: every destination is toured with a private guide, dedicated transport and a pace built for unhurried travel.",
    destinos_cta_kicker: "Can't find what you're looking for?",
    destinos_cta_title: "We also design custom routes beyond this list",
    destinos_cta_text: "Share your dates and interests and we'll build an exclusive itinerary, even combining several destinations into one trip.",

    experiencias_hero_title: "Moments no standard itinerary includes",
    experiencias_hero_lede: "From a wedding at the foot of the Andes to a private breakfast facing Huaynapicchu: every experience is produced around the group.",
    experiencias_cta_kicker: "Tailored to you",
    experiencias_cta_title: "Have a celebration in mind that isn't listed here?",
    experiencias_cta_text: "Anniversaries, company retreats or family celebrations: we design the experience from scratch together with you.",

    about_hero_title: "A travel concierge built from Cusco",
    about_hero_lede: "AUREVIA was born from the conviction that the Andes deserve to be told in detail, unhurried, through a single point of contact from start to finish.",
    about_history_kicker: "Our story",
    about_history_title: "From mountain guides to trip designers",
    about_history_p1: "AUREVIA started as a small group of Cusco-based guides who noticed a gap: demanding travelers arriving in Cusco with a generic itinerary, bought from afar, that reflected neither the pace nor the real interests of the group.",
    about_history_p2: "Today we design every trip from scratch — destination, experience, lodging and transport — and support it through a single point of contact throughout the entire process, before, during and after the trip.",
    stat_destinos: "Curated destinations", stat_experiencias: "Exclusive experiences", stat_respuesta: "Response time",
    values_kicker: "Our values", values_title: "What guides every itinerary we design",
    value1_title: "Trust", value1_text: "Certified guides, verified transport and transparent communication about costs, timing and conditions for every destination.",
    value2_title: "Sophistication", value2_text: "Details designed for travelers who appreciate good service without needing it explained.",
    value3_title: "Exclusivity", value3_text: "Private itineraries, never combined with outside groups, with preferred access at the highest-demand sites.",
    value4_title: "Andean roots", value4_text: "Direct partnerships with local communities and producers across every destination and experience we offer.",
    closing_kicker: "Let's talk about your trip", closing_title: "Tell us what you're imagining",
    closing_text: "An AUREVIA specialist will respond within 24 hours with an initial proposal.",

    modal_tips_heading: "Travel tips",
    aria_abrir_menu: "Open menu", aria_cerrar: "Close", aria_anterior: "Previous", aria_siguiente: "Next"
  }
};

const CATEGORY_LABELS = {
  ciudad: { es: "Ciudad", en: "City" },
  naturaleza: { es: "Naturaleza", en: "Nature" },
  icono: { es: "Ícono", en: "Icon" },
  trekking: { es: "Trekking", en: "Trekking" },
  celebracion: { es: "Celebración", en: "Celebration" },
  gastronomia: { es: "Gastronomía", en: "Gastronomy" },
  hotel: { es: "Hotel", en: "Hotel" },
  tren: { es: "Tren", en: "Train" }
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
function categoryLabel(slug){
  return CATEGORY_LABELS[slug] ? pick(CATEGORY_LABELS[slug]) : (slug || "");
}

function applyLang(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.setAttribute("alt", t(el.dataset.i18nAlt)); });
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  // Vuelve a pintar cualquier contenido dinámico ya renderizado (tarjetas, filtros, etc.)
  document.dispatchEvent(new CustomEvent("aurevia:lang-changed"));
}

/* ---------- 2. Header: menú móvil, estado activo y sombra al hacer scroll ---------- */
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

  const header = document.querySelector(".site-header");
  if (header){
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
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
      <span class="card-tag">${categoryLabel(item.categoria)}</span>
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
  if (document.getElementById("aliados-grid")){
    renderAliadosGrid();
  }
  if (document.getElementById("allies-track")){
    renderAllies();
  }
  bindModalTriggers();
}

/* ---------- 3b. Listado con filtro por categoría (destinos.html / experiencias.html) ---------- */
const ACTIVE_FILTERS = {};

function renderFilteredGrid(containerId, kind, list){
  const el = document.getElementById(containerId);
  const filterRow = document.querySelector(`[data-filter-for="${containerId}"]`);
  if (!(containerId in ACTIVE_FILTERS)) ACTIVE_FILTERS[containerId] = "all";

  const draw = () => {
    const cat = ACTIVE_FILTERS[containerId];
    const filtered = cat === "all" ? list : list.filter(i => i.categoria === cat);
    el.innerHTML = filtered.map(item => cardTemplate(item, kind)).join("");
    bindModalTriggers();
  };

  if (filterRow){
    const cats = ["all", ...new Set(list.map(i => i.categoria))];
    filterRow.innerHTML = cats.map(c =>
      `<button data-cat="${c}" class="${c === ACTIVE_FILTERS[containerId] ? "is-active" : ""}">${c === "all" ? t("todas") : categoryLabel(c)}</button>`
    ).join("");
    if (!filterRow.dataset.bound){
      filterRow.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        ACTIVE_FILTERS[containerId] = btn.dataset.cat;
        filterRow.querySelectorAll("button").forEach(b => b.classList.toggle("is-active", b === btn));
        draw();
      });
      filterRow.dataset.bound = "true";
    }
  }
  draw();
}

/* ---------- 4. Aliados estratégicos (carrusel de la home) ---------- */
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

/* ---------- 4b. Página completa de aliados (aliados.html) ---------- */
function allyCardTemplate(a){
  const icon = a.categoria === "hotel" ? ICONS.bed : ICONS.train;
  return `
  <article class="ally-card" data-id="${a.id}">
    <div class="card-media">
      <img src="img/${a.imagen}" alt="${a.nombre}" loading="lazy">
      <span class="card-tag">${categoryLabel(a.categoria)}</span>
    </div>
    <div class="card-body">
      <span class="ally-kind">${icon}&nbsp; ${pick(a.tipo)}</span>
      <h3>${a.nombre}</h3>
      <p>${pick(a.descripcion)}</p>
    </div>
  </article>`;
}

function renderAliadosGrid(){
  const el = document.getElementById("aliados-grid");
  const filterRow = document.querySelector('[data-filter-for="aliados-grid"]');
  if (!("aliados-grid" in ACTIVE_FILTERS)) ACTIVE_FILTERS["aliados-grid"] = "all";
  const list = AUREVIA_DATA.aliados;

  const draw = () => {
    const cat = ACTIVE_FILTERS["aliados-grid"];
    const filtered = cat === "all" ? list : list.filter(i => i.categoria === cat);
    el.innerHTML = filtered.map(allyCardTemplate).join("");
  };

  if (filterRow){
    const cats = ["all", ...new Set(list.map(i => i.categoria))];
    filterRow.innerHTML = cats.map(c =>
      `<button data-cat="${c}" class="${c === ACTIVE_FILTERS["aliados-grid"] ? "is-active" : ""}">${c === "all" ? t("todas") : categoryLabel(c)}</button>`
    ).join("");
    if (!filterRow.dataset.bound){
      filterRow.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        ACTIVE_FILTERS["aliados-grid"] = btn.dataset.cat;
        filterRow.querySelectorAll("button").forEach(b => b.classList.toggle("is-active", b === btn));
        draw();
      });
      filterRow.dataset.bound = "true";
    }
  }
  draw();
}

/* ---------- 5. Modal de detalle (con consejos de viaje) ---------- */
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
  overlay.querySelector(".modal-body > p").textContent = pick(item.descripcion);
  overlay.querySelector(".modal-facts").innerHTML = facts;

  const tipsWrap = overlay.querySelector(".modal-tips");
  const tips = pick(item.consejos);
  if (Array.isArray(tips) && tips.length){
    tipsWrap.style.display = "";
    tipsWrap.querySelector("h4").textContent = t("modal_tips_heading");
    tipsWrap.querySelector("ul").innerHTML = tips.map(tip => `<li>${ICONS.tip}<span>${tip}</span></li>`).join("");
  } else {
    tipsWrap.style.display = "none";
  }

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
    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";
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
}

/* ---------- 6. Formulario de contacto dinámico (con obligatoriedad real) ---------- */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if (!form) return;

  const tipoSelect = form.querySelector("#tipo-viaje");
  const itemSelect = form.querySelector("#item-select");
  const destinoFields = form.querySelectorAll('[data-dynamic^="destino"]');
  const experienciaFields = form.querySelectorAll('[data-dynamic^="experiencia"]');

  function fillItemOptions(kind){
    const list = kind === "destino" ? AUREVIA_DATA.destinos : AUREVIA_DATA.experiencias;
    itemSelect.innerHTML = list.map(i => `<option value="${i.id}">${pick(i.nombre)}</option>`).join("");
  }

  // Solo los campos del bloque visible (destino o experiencia) son obligatorios;
  // los del bloque oculto se liberan para que el navegador no bloquee el envío.
  function toggleDynamicFields(kind){
    destinoFields.forEach(f => {
      f.classList.toggle("is-visible", kind === "destino");
      const input = f.querySelector("input, select");
      if (input) input.required = (kind === "destino");
    });
    experienciaFields.forEach(f => {
      f.classList.toggle("is-visible", kind === "experiencia");
      const input = f.querySelector("input, select");
      if (input) input.required = (kind === "experiencia");
    });
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
    toggleDynamicFields(tipoSelect.value);
    document.getElementById("form-success")?.classList.add("is-visible");
  });

  document.addEventListener("aurevia:lang-changed", () => fillItemOptions(tipoSelect.value));
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

/* ---------- 9. Botón flotante de WhatsApp ---------- */
function initWhatsappFloat(){
  document.querySelectorAll(".whatsapp-float").forEach(el => {
    if (!el.querySelector("svg")) el.insertAdjacentHTML("afterbegin", ICONS.whatsapp);
  });
  document.querySelectorAll(".ic-whatsapp").forEach(el => { el.innerHTML = ICONS.whatsapp; });
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
  initWhatsappFloat();
});
document.addEventListener("aurevia:lang-changed", () => {
  renderAllGrids();
});
