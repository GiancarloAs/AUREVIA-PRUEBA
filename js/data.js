/* =========================================================
   AUREVIA — Fuente única de datos
   ---------------------------------------------------------
   Para agregar un nuevo destino, experiencia o aliado NO se
   toca ningún archivo .html: solo se agrega un objeto nuevo
   aquí abajo y aparecerá automáticamente en:
     - la vista previa de la home
     - el listado completo de destinos.html / experiencias.html / aliados.html
     - la ventana modal de detalle (con sus consejos de viaje)
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
      },
      consejos: {
        es: [
          "La altura (3,399 m) puede causar puna/soroche: llega con 1 día extra antes de actividades físicas.",
          "Lleva ropa en capas — las mañanas son frescas y el sol del mediodía es fuerte.",
          "Las calles del centro son empedradas: usa calzado cerrado y cómodo, no sandalias."
        ],
        en: [
          "Altitude (3,399 m) can cause altitude sickness: arrive at least 1 day early before physical activities.",
          "Pack in layers — mornings are cold and midday sun is strong.",
          "Old-town streets are cobblestone: wear closed, comfortable shoes rather than sandals."
        ]
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
      },
      consejos: {
        es: [
          "Menor altitud que Cusco: buen primer día para aclimatar antes de subir a zonas más altas.",
          "Lleva efectivo en soles para el mercado artesanal de Pisac — no todos los puestos tienen POS.",
          "Protector solar y sombrero: hay poca sombra en los andenes durante el día."
        ],
        en: [
          "Lower altitude than Cusco: a good first day to acclimatize before heading higher.",
          "Bring cash in soles for the Pisac craft market — not every stall takes cards.",
          "Sunscreen and a hat: there's little shade on the terraces during the day."
        ]
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
      },
      consejos: {
        es: [
          "Clima húmedo y cambiante: lleva capa impermeable ligera incluso en temporada seca.",
          "El ingreso es por horario fijo marcado en tu boleto — no se puede cambiar el mismo día.",
          "Lleva tu pasaporte físico: es obligatorio para el control de acceso a la ciudadela.",
          "Repelente de mosquitos — hay zonas con presencia de insectos cerca del río."
        ],
        en: [
          "Humid, changeable weather: bring a light waterproof layer even in the dry season.",
          "Entry is by a fixed time slot on your ticket — it can't be changed on the same day.",
          "Bring your physical passport: it's required for entry control at the citadel.",
          "Insect repellent — there are mosquitoes near the river areas."
        ]
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
      },
      consejos: {
        es: [
          "Altitud extrema (5,036 m): imprescindible llegar ya aclimatado tras 2–3 días en Cusco.",
          "Temperaturas bajo cero en la madrugada — gorro, guantes y chaqueta gruesa son obligatorios.",
          "El tramo final es a pie sobre terreno irregular: calzado de trekking, no zapatillas urbanas.",
          "Consulta con tu médico si tienes condiciones cardíacas o respiratorias antes de subir."
        ],
        en: [
          "Extreme altitude (5,036 m): arrive already acclimatized after 2–3 days in Cusco.",
          "Below-freezing temperatures at dawn — hat, gloves and a heavy jacket are essential.",
          "The final stretch is on foot over uneven ground: trekking shoes, not everyday sneakers.",
          "Check with your doctor first if you have heart or respiratory conditions."
        ]
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
      },
      consejos: {
        es: [
          "Caminata de ida de aprox. 1h30 en subida constante: buen estado físico recomendado.",
          "Lleva capas removibles — se suda en el ascenso y refresca fuerte junto a la laguna glaciar.",
          "Bloqueador solar de alta protección: la radiación a esta altitud es mucho más intensa."
        ],
        en: [
          "About a 1.5-hour uphill hike each way: reasonable fitness recommended.",
          "Bring removable layers — you'll warm up on the climb and it turns cold by the glacial lake.",
          "High-SPF sunscreen: UV radiation is far more intense at this altitude."
        ]
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
      },
      consejos: {
        es: [
          "Ruta remota sin cobertura móvil: informa tu itinerario a alguien de confianza antes de salir.",
          "Recomendado solo si ya estás aclimatado — no es una primera excursión de altura.",
          "Lleva más agua e hidratación de la que crees necesitar; no hay puntos de reabastecimiento."
        ],
        en: [
          "Remote route with no mobile signal: share your itinerary with someone before heading out.",
          "Recommended only if you're already acclimatized — not a first high-altitude outing.",
          "Bring more water than you think you'll need; there are no refill points along the way."
        ]
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
      },
      consejos: {
        es: [
          "Los permisos son limitados y se agotan con meses de anticipación: reserva con la mayor antelación posible.",
          "Empaca ligero — hay un límite de peso para el equipaje que llevan los porteadores (usualmente 7 kg).",
          "El segundo día (Warmiwañusca, 4,215 m) es el más exigente: entrena caminata en pendiente antes del viaje.",
          "Botas de trekking ya usadas previamente (no estrenar en el camino) y bastones de trekking."
        ],
        en: [
          "Permits are limited and sell out months ahead: book as early as possible.",
          "Pack light — there's a weight limit for the bag carried by porters (usually 7 kg).",
          "Day two (Warmiwañusca, 4,215 m) is the toughest: train on uphill hiking before the trip.",
          "Broken-in trekking boots (never brand new) and trekking poles are strongly recommended."
        ]
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
      },
      consejos: {
        es: [
          "Define el número final de invitados con al menos 60 días de anticipación para la logística de altura.",
          "Sugiere a tus invitados extranjeros llegar 1–2 días antes para aclimatarse antes de la ceremonia.",
          "Recomienda calzado cómodo a los invitados si la locación tiene terreno irregular o andenes."
        ],
        en: [
          "Confirm the final guest count at least 60 days ahead for high-altitude logistics.",
          "Suggest foreign guests arrive 1–2 days early to acclimatize before the ceremony.",
          "Recommend comfortable footwear to guests if the venue has uneven ground or terraces."
        ]
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
      },
      consejos: {
        es: [
          "Avísanos con anticipación sobre alergias o restricciones alimentarias del grupo.",
          "Ropa que no te importe ensuciar un poco — la cosecha se hace directo en el huerto.",
          "Repelente de insectos y protector solar, ya que buena parte se hace al aire libre."
        ],
        en: [
          "Let us know in advance about any allergies or dietary restrictions in the group.",
          "Wear clothes you don't mind getting a little dirty — the harvest happens right in the field.",
          "Insect repellent and sunscreen, since most of it takes place outdoors."
        ]
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
      },
      consejos: {
        es: [
          "Salida muy temprano desde Aguas Calientes: descansa bien la noche previa.",
          "Las mañanas pueden ser neblinosas y frías — lleva una chaqueta abrigadora.",
          "Cámara con batería cargada: la luz de la mañana sobre la ciudadela es el momento estrella."
        ],
        en: [
          "Very early departure from Aguas Calientes: get a good night's rest beforehand.",
          "Mornings can be foggy and cold — bring a warm jacket.",
          "Bring a charged camera: morning light over the citadel is the highlight moment."
        ]
      }
    }
  ],

  aliados: [
    {
      id: "palacio-nazarenas",
      nombre: "Palacio Nazarenas",
      categoria: "hotel",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-01.jpg",
      descripcion: {
        es: "Antiguo convento colonial en el centro de Cusco, hoy un hotel de gran lujo con oxígeno en cada habitación.",
        en: "A former colonial convent in the heart of Cusco, now a grand-luxury hotel with in-room oxygen enrichment."
      }
    },
    {
      id: "inkaterra-la-casona",
      nombre: "Inkaterra La Casona",
      categoria: "hotel",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-02.jpg",
      descripcion: {
        es: "Mansión del siglo XVI convertida en boutique hotel íntimo, a pasos de la Plaza de Armas de Cusco.",
        en: "A 16th-century mansion turned intimate boutique hotel, steps from Cusco's Plaza de Armas."
      }
    },
    {
      id: "sumaq-machu-picchu",
      nombre: "Sumaq Machu Picchu",
      categoria: "hotel",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-03.jpg",
      descripcion: {
        es: "Hotel 5 estrellas junto al río Vilcanota en Aguas Calientes, a minutos de la ciudadela.",
        en: "A 5-star hotel beside the Vilcanota River in Aguas Calientes, minutes from the citadel."
      }
    },
    {
      id: "belmond-hiram-bingham",
      nombre: "Belmond Hiram Bingham",
      categoria: "tren",
      tipo: { es: "Tren aliado", en: "Partner train" },
      imagen: "aliado-tren-01.jpg",
      descripcion: {
        es: "El tren más exclusivo a Machu Picchu, con brunch de varios tiempos y música en vivo a bordo.",
        en: "The most exclusive train to Machu Picchu, with a multi-course brunch and live music on board."
      }
    },
    {
      id: "perurail-vistadome",
      nombre: "PeruRail Vistadome",
      categoria: "tren",
      tipo: { es: "Tren aliado", en: "Partner train" },
      imagen: "aliado-tren-02.jpg",
      descripcion: {
        es: "Ventanales panorámicos de piso a techo para no perder detalle del paisaje del Valle Sagrado.",
        en: "Floor-to-ceiling panoramic windows so no view of the Sacred Valley landscape is missed."
      }
    },
    {
      id: "inca-rail-private",
      nombre: "Inca Rail Private",
      categoria: "tren",
      tipo: { es: "Tren aliado", en: "Partner train" },
      imagen: "aliado-tren-03.jpg",
      descripcion: {
        es: "Vagón privado reservable en exclusiva para el grupo, ideal para familias y celebraciones.",
        en: "A private carriage bookable exclusively for your group, ideal for families and celebrations."
      }
    }
  ]
};
