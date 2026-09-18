/* =========================================================
   AUREVIA — Librería de iconos de stock (SVG inline)
   Estilo trazo fino tipo Feather/Lucide (licencia MIT),
   redibujados a mano para no depender de CDNs externos.
   Uso: ICONS.pin  → devuelve el string SVG listo para insertar.
   ========================================================= */

const ICONS = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg>`,

  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polyline points="15 6 9 12 15 18"/></svg>`,

  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polyline points="9 6 15 12 9 18"/></svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>`,

  mountain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 19h18L15 6l-4 6.5L9 10 3 19z"/></svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 19c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5"/><circle cx="17" cy="8.5" r="2.4"/><path d="M16 13.6c2.6.3 4.5 2.1 4.5 4.4"/></svg>`,

  guide: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.3"/><path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/><path d="M9 8l1.3 1.6L15 6.5"/></svg>`,

  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 18v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M13 13h6a2 2 0 0 1 2 2v3"/><line x1="3" y1="18" x2="21" y2="18"/><line x1="3" y1="11" x2="3" y2="21"/><line x1="21" y1="16" x2="21" y2="21"/></svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="5" width="17" height="15.5" rx="1"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5.5" width="18" height="13" rx="1"/><polyline points="3.5 6.5 12 13 20.5 6.5"/></svg>`,

  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.5 3.5h3l1.4 4.3-2.2 1.7a11.5 11.5 0 0 0 5.8 5.8l1.7-2.2 4.3 1.4v3c0 1-.9 1.8-1.9 1.6C10.8 18.4 5.6 13.2 4 5.4c-.2-1 .6-1.9 1.6-1.9z"/></svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5A9.4 9.4 0 0 0 3.8 16.9L2.5 21.5l4.7-1.2A9.4 9.4 0 1 0 12 2.5zm0 1.9a7.5 7.5 0 0 1 6.2 11.8l-.2.3.5 2-2-.6-.3.2A7.5 7.5 0 1 1 12 4.4zm-3.2 3.7c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.8 4.5 3.8 2.2.9 2.7.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.4-.3-.2-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.8"/><circle cx="16.8" cy="7.2" r="1"/></svg>`,

  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H9.1v2.8h2.4V21"/></svg>`,

  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 3h2.2c.2 1.6 1.2 3 2.8 3.5v2.3c-1.2-.1-2.2-.5-3-1.1v6.6c0 3-2.4 5.4-5.4 5.4S5.7 17.3 5.7 14.3c0-2.9 2.3-5.3 5.2-5.4v2.3a3 3 0 1 0 3 3V3z"/></svg>`,

  snapchat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3.5c2.6 0 4 1.9 4 4.2 0 1 0 2 .2 2.4.2.5 1 1 1.9 1.1-.1.7-1 1.2-1.7 1.5.2.6.9 1.5 2.1 1.7-.2.7-1.2 1.1-1.9 1.2-.2.6-.5 1.1-1.5 1.1-.9 0-1.4-.4-2.6-.4-1.1 0-1.7.4-2.5.4-1 0-1.3-.5-1.5-1.1-.7-.1-1.7-.5-1.9-1.2 1.2-.2 1.9-1.1 2.1-1.7-.7-.3-1.6-.8-1.7-1.5.9-.1 1.7-.6 1.9-1.1.2-.4.2-1.4.2-2.4 0-2.3 1.4-4.2 4-4.2z"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 12.5 9.5 18 20 6"/></svg>`,

  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.7 6 6.5.6-4.9 4.4 1.5 6.4L12 16.9l-5.8 3.3 1.5-6.4-4.9-4.4 6.5-.6z"/></svg>`,

  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6z"/><polyline points="9 12 11 14 15.5 9.5"/></svg>`,

  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13 13 8.5 15.5 11 11"/></svg>`
};
