/* =========================================================
   AUREVIA — Panel privado de solicitudes
   - Ingreso con correo y contraseña (Supabase Auth)
   - Lee la tabla "solicitudes": la base de datos solo la entrega a la cuenta del panel
   - Descarga en Excel (.xlsx)

   Seguridad de esta página:
   - Los datos nunca se insertan como HTML (solo como texto), así un texto malicioso
     enviado por el formulario no puede ejecutarse aquí.
   - La sesión vive solo en esta pestaña (sessionStorage) y se cierra sola tras
     30 minutos sin actividad.
   - La clave de abajo es la pública del proyecto: por sí sola no permite leer nada.
   ========================================================= */
(function(){
  "use strict";

  const SUPABASE_URL = "https://ddxuhxuwsnygwidutuhs.supabase.co";
  const SUPABASE_KEY = "sb_publishable_za5B5swJm-gmYjGoCIqHqg_HyKFJUUU";
  const CLAVE_SESION = "aurevia_panel_sesion";
  const MINUTOS_INACTIVIDAD = 30;

  // Columnas de la tabla y del Excel, en este orden
  const COLUMNAS = [
    ["creado_en", "Fecha"], ["nombre", "Nombre"], ["apellido", "Apellido"], ["pais", "Nacionalidad"],
    ["telefono", "Teléfono"], ["correo", "Correo"], ["pasaporte", "Pasaporte"],
    ["tipo", "Interés"], ["item_nombre", "Destino / experiencia"],
    ["num_personas", "Personas"], ["categoria_hotel", "Categoría de hotel"], ["hotel_preferido", "Hotel preferido"], ["guia", "Guía"],
    ["num_invitados", "Invitados"], ["fecha_tentativa", "Fecha tentativa"],
    ["mensaje", "Mensaje"], ["idioma", "Idioma"]
  ];
  const NUMERICAS = ["num_personas", "num_invitados"];
  // Códigos que guarda el formulario → texto que se ve en la tabla y el Excel
  const CATEGORIAS_HOTEL = { "4-estrellas": "Categoría 4 Estrellas", "5-estrellas": "Categoría 5 Estrellas", "luxury": "Luxury" };
  const GUIAS = { es: "Español", en: "Inglés", fr: "Francés", pt: "Portugués" };

  const $ = id => document.getElementById(id);
  let sesion = null;      // { access_token, refresh_token, correo }
  let filas = [];         // todas las solicitudes
  let visibles = [];      // las que pasan el filtro de búsqueda
  let reloj = null;

  /* ---------- Sesión ---------- */
  function guardarSesion(s){
    sesion = s;
    try {
      if (s) sessionStorage.setItem(CLAVE_SESION, JSON.stringify(s));
      else sessionStorage.removeItem(CLAVE_SESION);
    } catch (e) { /* sin almacenamiento: la sesión dura lo que dure la página */ }
  }
  function leerSesion(){
    try { return JSON.parse(sessionStorage.getItem(CLAVE_SESION)); } catch (e) { return null; }
  }
  async function auth(ruta, cuerpo){
    const res = await fetch(SUPABASE_URL + "/auth/v1/" + ruta, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": SUPABASE_KEY },
      body: JSON.stringify(cuerpo)
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) { const err = new Error(json.msg || json.error_description || "error"); err.status = res.status; throw err; }
    return json;
  }
  async function renovarSesion(){
    if (!sesion || !sesion.refresh_token) return false;
    try {
      const j = await auth("token?grant_type=refresh_token", { refresh_token: sesion.refresh_token });
      guardarSesion({ access_token: j.access_token, refresh_token: j.refresh_token, correo: sesion.correo });
      return true;
    } catch (e) { return false; }
  }
  async function cerrarSesion(mensaje){
    const token = sesion && sesion.access_token;
    guardarSesion(null);
    filas = []; visibles = [];
    $("tabla-cuerpo").replaceChildren();
    clearTimeout(reloj);
    mostrarLogin(mensaje);
    if (token){
      // invalida la sesión también en el servidor; si falla, localmente ya está cerrada
      fetch(SUPABASE_URL + "/auth/v1/logout", {
        method: "POST", headers: { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + token }
      }).catch(() => {});
    }
  }
  function reiniciarReloj(){
    clearTimeout(reloj);
    if (!sesion) return;
    reloj = setTimeout(() => cerrarSesion("La sesión se cerró por inactividad."), MINUTOS_INACTIVIDAD * 60000);
  }

  /* ---------- Vistas ---------- */
  function aviso(id, texto){
    const el = $(id);
    el.textContent = texto || "";
    el.hidden = !texto;
  }
  function mostrarLogin(mensaje){
    $("vista-panel").hidden = true;
    $("vista-login").hidden = false;
    $("clave").value = "";
    aviso("login-aviso", mensaje);
    $("correo").focus();
  }
  function mostrarPanel(){
    $("vista-login").hidden = true;
    $("vista-panel").hidden = false;
    $("usuario").textContent = sesion.correo;
    reiniciarReloj();
    cargar();
  }

  /* ---------- Datos ---------- */
  async function pedirPagina(desde, hasta){
    return fetch(SUPABASE_URL + "/rest/v1/solicitudes?select=*&order=creado_en.desc", {
      headers: {
        "apikey": SUPABASE_KEY, "Authorization": "Bearer " + sesion.access_token,
        "Range-Unit": "items", "Range": desde + "-" + hasta
      }
    });
  }
  async function cargar(){
    aviso("panel-aviso", "");
    $("resumen").textContent = "Cargando…";
    $("btn-actualizar").disabled = true;
    try {
      const todas = [];
      const PASO = 1000;
      for (let desde = 0; ; desde += PASO){
        let res = await pedirPagina(desde, desde + PASO - 1);
        if (res.status === 401 && await renovarSesion()) res = await pedirPagina(desde, desde + PASO - 1);
        if (res.status === 401) { cerrarSesion("La sesión venció. Ingresa de nuevo."); return; }
        if (res.status === 416) break; // no hay más filas
        if (!res.ok) throw new Error("HTTP " + res.status);
        const lote = await res.json();
        todas.push(...lote);
        if (lote.length < PASO) break;
      }
      filas = todas;
      filtrar();
    } catch (e) {
      $("resumen").textContent = "";
      aviso("panel-aviso", "No se pudieron cargar las solicitudes. Revisa tu conexión y pulsa Actualizar.");
    } finally {
      $("btn-actualizar").disabled = false;
    }
  }

  function formato(clave, valor){
    if (valor === null || valor === undefined || valor === "") return "";
    if (clave === "creado_en"){
      const d = new Date(valor);
      return isNaN(d) ? String(valor) : d.toLocaleString("es-PE", { dateStyle: "short", timeStyle: "short" });
    }
    if (clave === "fecha_tentativa"){
      const p = String(valor).split("-");
      return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : String(valor);
    }
    if (clave === "tipo") return valor === "destino" ? "Destino" : "Experiencia";
    if (clave === "categoria_hotel") return CATEGORIAS_HOTEL[valor] || String(valor);
    if (clave === "guia") return GUIAS[valor] || String(valor);
    if (clave === "idioma") return String(valor).toUpperCase();
    return String(valor);
  }

  function filtrar(){
    const q = $("buscar").value.trim().toLowerCase();
    visibles = !q ? filas : filas.filter(f =>
      COLUMNAS.some(([clave]) => formato(clave, f[clave]).toLowerCase().includes(q)));
    pintar();
  }

  function pintar(){
    const cuerpo = $("tabla-cuerpo");
    const frag = document.createDocumentFragment();
    visibles.forEach(f => {
      const tr = document.createElement("tr");
      COLUMNAS.forEach(([clave]) => {
        const td = document.createElement("td");
        td.textContent = formato(clave, f[clave]);   // siempre como texto, nunca como HTML
        if (clave === "mensaje") td.className = "largo";
        if (NUMERICAS.includes(clave)) td.className = "num";
        tr.appendChild(td);
      });
      frag.appendChild(tr);
    });
    cuerpo.replaceChildren(frag);
    $("vacio").hidden = filas.length > 0;
    document.querySelector(".tabla-wrap").hidden = filas.length === 0;
    $("btn-excel").disabled = visibles.length === 0;
    $("resumen").textContent = filas.length === visibles.length
      ? filas.length + (filas.length === 1 ? " solicitud" : " solicitudes")
      : visibles.length + " de " + filas.length + " solicitudes";
  }

  /* ---------- Excel ---------- */
  function descargarExcel(){
    if (!visibles.length || typeof XLSX === "undefined") {
      aviso("panel-aviso", "No se pudo generar el Excel. Recarga la página e inténtalo de nuevo.");
      return;
    }
    const datos = [COLUMNAS.map(c => c[1])];
    visibles.forEach(f => datos.push(COLUMNAS.map(([clave]) => {
      const v = f[clave];
      if (v === null || v === undefined) return "";
      if (NUMERICAS.includes(clave)) return Number(v);
      // todo lo demás va como texto: Excel no lo interpreta como fórmula
      return formato(clave, v);
    })));
    const hoja = XLSX.utils.aoa_to_sheet(datos);
    hoja["!cols"] = COLUMNAS.map(([clave]) => ({ wch: clave === "mensaje" ? 60 : clave === "correo" || clave === "item_nombre" ? 30 : 18 }));
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Solicitudes");
    const hoy = new Date();
    const fecha = hoy.getFullYear() + "-" + String(hoy.getMonth() + 1).padStart(2, "0") + "-" + String(hoy.getDate()).padStart(2, "0");
    XLSX.writeFile(libro, "aurevia-solicitudes-" + fecha + ".xlsx");
  }

  /* ---------- Inicio ---------- */
  $("tabla-cabeza").append(...COLUMNAS.map(([, titulo]) => {
    const th = document.createElement("th");
    th.scope = "col"; th.textContent = titulo;
    return th;
  }));

  $("form-login").addEventListener("submit", async (e) => {
    e.preventDefault();
    const correo = $("correo").value.trim();
    const clave = $("clave").value;
    if (!correo || !clave){ aviso("login-aviso", "Escribe tu correo y tu contraseña."); return; }
    const boton = $("btn-entrar");
    boton.disabled = true; boton.textContent = "Ingresando…";
    aviso("login-aviso", "");
    try {
      const j = await auth("token?grant_type=password", { email: correo, password: clave });
      guardarSesion({ access_token: j.access_token, refresh_token: j.refresh_token, correo: (j.user && j.user.email) || correo });
      mostrarPanel();
    } catch (err) {
      aviso("login-aviso", err.status === 429
        ? "Demasiados intentos. Espera unos minutos y vuelve a probar."
        : err.status === 400 ? "Correo o contraseña incorrectos."
        : "No se pudo ingresar. Revisa tu conexión e inténtalo de nuevo.");
    } finally {
      boton.disabled = false; boton.textContent = "Ingresar";
    }
  });
  $("btn-salir").addEventListener("click", () => cerrarSesion(""));
  $("btn-actualizar").addEventListener("click", cargar);
  $("btn-excel").addEventListener("click", descargarExcel);
  $("buscar").addEventListener("input", filtrar);
  ["click", "keydown", "scroll", "pointermove"].forEach(ev =>
    document.addEventListener(ev, reiniciarReloj, { passive: true, capture: true }));

  // Si la página se muestra dentro de otra (un marco), no se usa: evita el engaño por superposición
  if (window.top !== window.self){ document.body.replaceChildren(); return; }

  sesion = leerSesion();
  if (sesion && sesion.access_token) mostrarPanel(); else mostrarLogin("");
})();
