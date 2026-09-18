/* =========================================================
   AUREVIA — Fuente única de datos
   ---------------------------------------------------------
   Para agregar un nuevo destino o experiencia NO se toca
   ningún archivo .html: solo se agrega un objeto nuevo aquí
   abajo y aparecerá automáticamente en:
     - la vista previa de la home
     - el listado completo de destinos.html / experiencias.html
     - la ventana modal de detalle
     - el selector del formulario de contacto
   ========================================================= */

const AUREVIA_DATA = {

  destinos: [
    {
      id: "cusco-ciudad",
      imagen: "destino-cusco-ciudad-01.jpg",
      categoria: "ciudad",
      duracion: { es: "1–2 días", en: "1–2 days" },
      altitud: "3,399 m s.n.m.",
      nombre: { es: "Cusco Ciudad", en: "Cusco City" },
      resumen: {
        es: "La antigua capital inca: calles de piedra, plazas coloniales y el punto de partida de todo viaje al Valle Sagrado.",
        en: "The former Inca capital: cobblestone streets, colonial plazas and the starting point for every trip into the Sacred Valley."
      },
      descripcion: {
        es: "Un recorrido curado por el centro histórico, la Plaza de Armas, Qorikancha y los miradores de San Blas, con tiempo reservado para talleres textiles y gastronomía local de autor.",
        en: "A curated walk through the historic center, the Plaza de Armas, Qorikancha and the San Blas viewpoints, with time set aside for textile workshops and local fine dining."
      }
    },
    {
      id: "valle-sagrado",
      imagen: "destino-valle-sagrado-01.jpg",
      categoria: "naturaleza",
      duracion: { es: "1 día", en: "1 day" },
      altitud: "2,800 m s.n.m.",
      nombre: { es: "Valle Sagrado", en: "Sacred Valley" },
      resumen: {
        es: "Andenes agrícolas, mercados tradicionales y los pueblos vivos de Pisac y Ollantaytambo.",
        en: "Agricultural terraces, traditional markets and the living villages of Pisac and Ollantaytambo."
      },
      descripcion: {
        es: "Una jornada privada por Pisac y Ollantaytambo con guía especializado en historia andina, transporte con chofer dedicado y paradas fotográficas exclusivas.",
        en: "A private day through Pisac and Ollantaytambo with an Andean-history specialist guide, dedicated driver and exclusive photo stops."
      }
    },
    {
      id: "machu-picchu",
      imagen: "destino-machu-picchu-01.jpg",
      categoria: "icono",
      duracion: { es: "1 día", en: "1 day" },
      altitud: "2,430 m s.n.m.",
      nombre: { es: "Machu Picchu", en: "Machu Picchu" },
      resumen: {
        es: "La ciudadela inca más icónica del mundo, con acceso preferente y guía privado.",
        en: "The world's most iconic Inca citadel, with preferred access and a private guide."
      },
      descripcion: {
        es: "Tren de lujo desde el Valle Sagrado, ingreso en horario preferente para evitar aglomeraciones y guía privado certificado durante todo el recorrido.",
        en: "Luxury train from the Sacred Valley, preferred-time entry to avoid crowds, and a certified private guide throughout the visit."
      }
    },
    {
      id: "montana-7-colores",
      imagen: "destino-montana-7-colores-01.jpg",
      categoria: "naturaleza",
      duracion: { es: "1 día", en: "1 day" },
      altitud: "5,036 m s.n.m.",
      nombre: { es: "Montaña de 7 Colores", en: "Rainbow Mountain" },
      resumen: {
        es: "Vinicunca, la formación geológica multicolor más fotografiada de los Andes.",
        en: "Vinicunca, the Andes' most photographed multicolor geological formation."
      },
      descripcion: {
        es: "Salida temprana con aclimatación previa, caballos disponibles para el tramo final y equipo de oxígeno portátil incluido por precaución.",
        en: "Early departure with prior acclimatization, horses available for the final stretch and portable oxygen equipment included as a precaution."
      }
    },
    {
      id: "laguna-humantay",
      imagen: "destino-laguna-humantay-01.jpg",
      categoria: "naturaleza",
      duracion: { es: "1 día", en: "1 day" },
      altitud: "4,200 m s.n.m.",
      nombre: { es: "Laguna Humantay", en: "Humantay Lake" },
      resumen: {
        es: "Aguas turquesa al pie del nevado Salkantay, en una caminata corta y muy escénica.",
        en: "Turquoise waters at the foot of the Salkantay glacier, on a short and highly scenic hike."
      },
      descripcion: {
        es: "Ascenso guiado de dificultad moderada, desayuno de trekking incluido y tiempo libre en la laguna para fotografía y contemplación.",
        en: "Guided moderate-difficulty ascent, trekking breakfast included and free time at the lake for photography and quiet contemplation."
      }
    },
    {
      id: "siete-lagunas",
      imagen: "destino-siete-lagunas-01.jpg",
      categoria: "naturaleza",
      duracion: { es: "1 día", en: "1 day" },
      altitud: "4,600 m s.n.m.",
      nombre: { es: "7 Lagunas", en: "Seven Lakes" },
      resumen: {
        es: "Un circuito remoto de siete lagunas glaciares para viajeros que buscan lo inexplorado.",
        en: "A remote circuit of seven glacial lakes for travelers seeking the unexplored."
      },
      descripcion: {
        es: "Ruta de baja concurrencia turística, con arriero y equipo de montaña incluidos, pensada para quienes ya conocen los destinos clásicos del Cusco.",
        en: "A low-traffic route with muleteer and mountain gear included, designed for travelers who already know Cusco's classic destinations."
      }
    },
    {
      id: "camino-inka",
      imagen: "destino-camino-inka-01.jpg",
      categoria: "trekking",
      duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
      altitud: "4,215 m s.n.m. (Warmiwañusca)",
      nombre: { es: "Camino Inka", en: "Inca Trail" },
      resumen: {
        es: "El trekking histórico hacia Machu Picchu, con campamentos de lujo y equipo de porteadores certificados.",
        en: "The historic trek to Machu Picchu, with luxury camping and certified porter crews."
      },
      descripcion: {
        es: "Cuatro días de trekking con carpas de alta gama, chef de montaña, oxígeno de emergencia y llegada a la Puerta del Sol al amanecer.",
        en: "Four days of trekking with high-end tents, a mountain chef, emergency oxygen, and sunrise arrival at the Sun Gate."
      }
    }
  ],

  experiencias: [
    {
      id: "boda-andina",
      imagen: "experiencia-boda-andina-01.jpg",
      categoria: "celebracion",
      duracion: { es: "Personalizado", en: "Custom" },
      grupo: { es: "2 – 80 invitados", en: "2 – 80 guests" },
      nombre: { es: "Boda Andina", en: "Andean Wedding" },
      resumen: {
        es: "Una ceremonia íntima con ritual andino, vistas a los Andes y producción integral a cargo de AUREVIA.",
        en: "An intimate ceremony with Andean ritual, Andes views and full production handled by AUREVIA."
      },
      descripcion: {
        es: "Diseño de ceremonia con pago a la tierra (Pachamama), locación exclusiva, coordinación de banquete, música en vivo y logística completa de invitados internacionales.",
        en: "Ceremony design with an offering to Pachamama, exclusive venue, banquet coordination, live music and full logistics for international guests."
      }
    },
    {
      id: "huerto-mesa",
      imagen: "experiencia-huerto-mesa-01.jpg",
      categoria: "gastronomia",
      duracion: { es: "Medio día", en: "Half day" },
      grupo: { es: "2 – 12 personas", en: "2 – 12 people" },
      nombre: { es: "Del Huerto a tu Mesa", en: "From the Orchard to Your Table" },
      resumen: {
        es: "Cosecha guiada en un huerto andino seguida de una experiencia culinaria privada con chef local.",
        en: "A guided harvest in an Andean orchard followed by a private culinary experience with a local chef."
      },
      descripcion: {
        es: "Recolección de insumos de temporada junto a productores locales y almuerzo de autor preparado frente al comensal, maridado con bebidas regionales.",
        en: "Seasonal ingredient gathering alongside local producers and a chef's-table lunch prepared in front of guests, paired with regional drinks."
      }
    },
    {
      id: "desayuno-huaynapicchu",
      imagen: "experiencia-desayuno-huaynapicchu-01.jpg",
      categoria: "icono",
      duracion: { es: "Medio día", en: "Half day" },
      grupo: { es: "2 – 6 personas", en: "2 – 6 people" },
      nombre: { es: "Desayuno con Vista al Huaynapicchu", en: "Breakfast with a View of Huaynapicchu" },
      resumen: {
        es: "Un desayuno privado servido en un mirador exclusivo frente a Machu Picchu y el Huaynapicchu.",
        en: "A private breakfast served at an exclusive viewpoint facing Machu Picchu and Huaynapicchu."
      },
      descripcion: {
        es: "Acceso anticipado antes de la apertura general, mesa dispuesta en mirador reservado y menú de desayuno gourmet con productos peruanos.",
        en: "Early access before general opening, table set at a reserved viewpoint, and a gourmet breakfast menu featuring Peruvian ingredients."
      }
    }
  ],

  aliados: [
    { nombre: "Palacio Nazarenas", tipo: { es: "Hotel aliado", en: "Partner hotel" }, imagen: "aliado-hotel-01.jpg" },
    { nombre: "Inkaterra La Casona", tipo: { es: "Hotel aliado", en: "Partner hotel" }, imagen: "aliado-hotel-02.jpg" },
    { nombre: "Sumaq Machu Picchu", tipo: { es: "Hotel aliado", en: "Partner hotel" }, imagen: "aliado-hotel-03.jpg" },
    { nombre: "Belmond Hiram Bingham", tipo: { es: "Tren aliado", en: "Partner train" }, imagen: "aliado-tren-01.jpg" },
    { nombre: "PeruRail Vistadome", tipo: { es: "Tren aliado", en: "Partner train" }, imagen: "aliado-tren-02.jpg" },
    { nombre: "Inca Rail Private", tipo: { es: "Tren aliado", en: "Partner train" }, imagen: "aliado-tren-03.jpg" }
  ]
};
