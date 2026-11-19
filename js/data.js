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

   Campos opcionales (si no se ponen, simplemente no se muestran):
     - galeria:    ["archivo-02.jpg", ...]  fotos adicionales del carrusel de la ficha.
                   El título y la descripción de cada foto salen de
                   tools/imagenes-seo.json (campos "title" y "caption")
     - requisito:  { etiqueta:{es,en}, texto:{es,en} }  condición para reservar.
                   La etiqueta sale como franja sobre la foto de la tarjeta y el
                   texto como aviso destacado al inicio de la ficha
     - nivel (solo hoteles): "4-estrellas" | "5-estrellas" | "luxury"  categoría del hotel
     - ciudad (solo hoteles): id del destino donde está el hotel; su ficha muestra
                   el bloque "Hotel recomendado" con los hoteles de ese destino
     - portadaProvisional: true  la imagen de la tarjeta es un placeholder:
                   el carrusel muestra solo las fotos de "galeria"
     - ruta:       { es, en }  lugares del recorrido (tarjeta y ficha)
     - incluye:    { es:[...], en:[...] }  servicios incluidos (ficha)
     - itinerario: { es:[[etapa, texto], ...], en:[...] }  recorrido por etapas (ficha)
     - momentos:   { es:[[titulo, texto], ...], en:[...] }  en lugar de "itinerario", para
                   viajes que se viven sin días numerados (ficha: "Momentos del viaje")
     - destacados: { es:[...], en:[...] }  lo más destacado, en lista con check (ficha)
   ========================================================= */

const AUREVIA_DATA = {

  destinos: [
    {
      id: "cusco-ciudad",
      imagen: "destino-cusco-ciudad-01.jpg",
      galeria: ["destino-cusco-ciudad-02.jpg", "destino-cusco-ciudad-03.jpg", "destino-cusco-ciudad-04.jpg"],
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
      destacados: {
        es: [
          "Cusco histórico, la capital del Imperio inca, en recorrido privado."
        ],
        en: [
          "Historic Cusco, capital of the Inca Empire, on a private tour."
        ]
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
      galeria: ["destino-valle-sagrado-02.jpg", "destino-valle-sagrado-03.jpg", "destino-valle-sagrado-04.jpg", "destino-valle-sagrado-05.jpg", "destino-valle-sagrado-06.jpg"],
      categoria: "naturaleza",
      duracion: { es: "1 a 2 días", en: "1 to 2 days" },
      altitud: "2,800 – 3,760 m s.n.m.",
      nombre: { es: "Valle Sagrado", en: "Sacred Valley" },
      resumen: {
        es: "Andenes, salineras y pueblos vivos: Chinchero, Moray, Maras, Urubamba, Ollantaytambo y Pisac.",
        en: "Terraces, salt pans and living villages: Chinchero, Moray, Maras, Urubamba, Ollantaytambo and Pisac."
      },
      descripcion: {
        es: "Una jornada privada por Chinchero, Moray, las Salineras de Maras, Urubamba, Ollantaytambo y Pisac, con guía especializado en historia andina, transporte con chofer dedicado y paradas fotográficas exclusivas.",
        en: "A private journey through Chinchero, Moray, the Maras salt pans, Urubamba, Ollantaytambo and Pisac, with an Andean-history specialist guide, dedicated driver and exclusive photo stops."
      },
      destacados: {
        es: [
          "Terrazas incas de Pisac, con vistas abiertas sobre el Valle Sagrado.",
          "Almuerzo gourmet en la Hacienda Sarapampa.",
          "Moray, el laboratorio agrícola de los incas.",
          "El arte textil de Chinchero, una tradición andina viva.",
          "Degustación de cocina andina de alto nivel."
        ],
        en: [
          "The Inca terraces of Pisac, with sweeping views over the Sacred Valley.",
          "Gourmet lunch at Hacienda Sarapampa.",
          "Moray, the agricultural laboratory of the Incas.",
          "Chinchero's textile art, a living Andean tradition.",
          "A tasting of refined Andean cuisine."
        ]
      },
      consejos: {
        es: [
          "El fondo del valle (unos 2,800 m) es más bajo que Cusco y es buena base para aclimatarse, pero Chinchero y Moray superan los 3,500 m: conviene visitarlos con al menos un día de aclimatación.",
          "Recorrer los seis lugares en un solo día es una jornada larga, de la mañana a la noche: en dos días se disfruta con más calma.",
          "Lleva efectivo en soles para el mercado artesanal de Pisac — no todos los puestos tienen POS.",
          "Protector solar y sombrero: hay poca sombra en los andenes durante el día."
        ],
        en: [
          "The valley floor (around 2,800 m) is lower than Cusco and a good base to acclimatize, but Chinchero and Moray rise above 3,500 m: visit them after at least one day of acclimatization.",
          "Covering all six places in a single day makes for a long day, from morning to night: over two days it's far more relaxed.",
          "Bring cash in soles for the Pisac craft market — not every stall takes cards.",
          "Sunscreen and a hat: there's little shade on the terraces during the day."
        ]
      }
    },
    {
      id: "machu-picchu",
      imagen: "destino-machu-picchu-01.jpg",
      galeria: ["destino-machu-picchu-02.jpg", "destino-machu-picchu-03.jpg", "destino-machu-picchu-04.jpg"],
      categoria: "icono",
      duracion: { es: "1 día", en: "1 day" },
      altitud: "2,430 m s.n.m.",
      nombre: { es: "Machu Picchu", en: "Machu Picchu" },
      resumen: {
        es: "La ciudadela inca más icónica del mundo, con guía privado y el horario de ingreso más tranquilo.",
        en: "The world's most iconic Inca citadel, with a private guide and the quietest entry time."
      },
      descripcion: {
        es: "Tren panorámico Vistadome desde el Valle Sagrado, o el Hiram Bingham de Belmond para una experiencia de lujo; entrada reservada con anticipación en el circuito y la hora más tranquilos, y guía privado certificado durante todo el recorrido.",
        en: "Vistadome panoramic train from the Sacred Valley, or Belmond's Hiram Bingham for a luxury experience; entry booked well ahead on the quietest circuit and time slot, and a certified private guide throughout the visit."
      },
      destacados: {
        es: [
          "Tren panorámico Vistadome hasta Machu Picchu.",
          "Machu Picchu, una maravilla del mundo, en una visita exclusiva."
        ],
        en: [
          "Vistadome panoramic train to Machu Picchu.",
          "Machu Picchu, a wonder of the world, on an exclusive visit."
        ]
      },
      consejos: {
        es: [
          "Clima húmedo y cambiante: lleva capa impermeable ligera incluso en temporada seca.",
          "Las entradas se venden por circuito y horario, con cupos limitados: el horario de tu boleto es fijo y no se puede cambiar el mismo día.",
          "Lleva tu pasaporte físico: es obligatorio para el control de acceso a la ciudadela.",
          "Repelente de mosquitos — hay zonas con presencia de insectos cerca del río."
        ],
        en: [
          "Humid, changeable weather: bring a light waterproof layer even in the dry season.",
          "Tickets are sold by circuit and time slot, with limited capacity: the time on your ticket is fixed and can't be changed on the same day.",
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
      galeria: ["destino-camino-inka-02.jpg", "destino-camino-inka-03.jpg"],
      categoria: "trekking",
      duracion: { es: "4 días / 3 noches", en: "4 days / 3 nights" },
      altitud: "4,215 m s.n.m. (Warmiwañusca)",
      nombre: { es: "Camino Inka", en: "Inca Trail" },
      resumen: {
        es: "El trekking histórico hacia Machu Picchu, con servicio de campamento premium y porteadores certificados.",
        en: "The historic trek to Machu Picchu, with premium camping service and certified porters."
      },
      descripcion: {
        es: "Cuatro días de trekking con carpas de calidad superior en los campamentos autorizados del camino, chef de montaña, oxígeno de emergencia y llegada a la Puerta del Sol al amanecer.",
        en: "Four days of trekking with superior-quality tents at the trail's authorized campsites, a mountain chef, emergency oxygen and arrival at the Sun Gate at sunrise."
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
      galeria: ["experiencia-boda-andina-02.jpg", "experiencia-boda-andina-03.jpg"],
      categoria: "celebracion",
      duracion: { es: "Personalizado", en: "Custom" },
      grupo: { es: "2 – 80 invitados", en: "2 – 80 guests" },
      nombre: { es: "Boda Andina", en: "Andean Wedding" },
      resumen: {
        es: "Una antigua tradición andina celebrada en plena naturaleza del Valle Sagrado: una boda distinta, con producción integral a cargo de AUREVIA.",
        en: "An ancient Andean tradition celebrated in the heart of the Sacred Valley's nature: a different kind of wedding, fully produced by AUREVIA."
      },
      descripcion: {
        es: "En la tradición andina, el matrimonio une profundamente a dos personas a través de las fuerzas de la naturaleza, que las protegen para una vida llena de felicidad. Celebramos esta antigua ceremonia en un entorno natural del Valle Sagrado de los Incas, guiada por sabios andinos y su ofrenda a la Pachamama. Del resto nos encargamos nosotros: locación, banquete, música en vivo y la logística de los invitados que llegan de fuera. Una opción ideal para quienes buscan una boda diferente.",
        en: "In Andean tradition, marriage deeply unites two people through the forces of nature, which protect them for a life full of happiness. We celebrate this ancient ceremony in a natural setting in the Sacred Valley of the Incas, guided by Andean elders and their offering to Pachamama. We take care of everything else: venue, banquet, live music and logistics for guests arriving from abroad. An ideal choice for couples looking for a different kind of wedding."
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
      id: "pedida-de-mano",
      imagen: "experiencia-pedida-de-mano-01.jpg",
      galeria: ["experiencia-pedida-de-mano-02.jpg"],
      categoria: "celebracion",
      duracion: { es: "Medio día", en: "Half day" },
      grupo: { es: "Para dos", en: "For two" },
      nombre: { es: "Pedida de Mano en los Andes", en: "Proposal in the Andes" },
      resumen: {
        es: "Un arco de flores en lo alto de los Andes, con los nevados de fondo y un fotógrafo que registra el momento sin que se note.",
        en: "A floral arch high in the Andes, with snow peaks behind and a photographer who captures the moment unseen."
      },
      descripcion: {
        es: "Organizamos la sorpresa de principio a fin: traslado privado a una explanada en las alturas, un arco decorado con flores frescas frente a los nevados y un fotógrafo que acompaña a distancia para que la propuesta se viva sin interrupciones.",
        en: "We plan the surprise from start to finish: a private transfer to a high plateau, an arch dressed with fresh flowers facing the snow peaks, and a photographer who follows from a distance so the proposal unfolds without interruption."
      },
      consejos: {
        es: [
          "Cuéntanos la idea con tiempo: coordinamos todo contigo de forma discreta para que tu pareja no sospeche nada.",
          "La explanada está a gran altitud: conviene programar la propuesta después de dos o tres días en Cusco.",
          "Lleva abrigo aunque haya sol: en la altura el viento es frío y el clima cambia rápido."
        ],
        en: [
          "Tell us your idea early: we coordinate everything with you discreetly so your partner suspects nothing.",
          "The plateau sits at high altitude: plan the proposal after two or three days in Cusco.",
          "Bring a warm layer even on sunny days: at altitude the wind is cold and the weather changes fast."
        ]
      }
    },
    {
      id: "huerto-mesa",
      imagen: "experiencia-huerto-mesa-01.jpg",
      galeria: ["experiencia-cusco-a-la-mesa-01.jpg"],
      categoria: "gastronomia",
      duracion: { es: "Medio día", en: "Half day" },
      grupo: { es: "2 – 12 personas", en: "2 – 12 people" },
      nombre: { es: "Del Huerto a tu Mesa", en: "From the Orchard to Your Table" },
      resumen: {
        es: "Cosecha guiada en un huerto andino seguida de una experiencia culinaria privada con chef local.",
        en: "A guided harvest in an Andean orchard followed by a private culinary experience with a local chef."
      },
      descripcion: {
        es: "Recolección de insumos de temporada junto a productores locales y almuerzo de autor preparado frente al comensal, maridado con bebidas regionales. Puede vivirse por separado o como parte de la experiencia Cusco a la Mesa.",
        en: "Gathering seasonal produce with local growers, followed by a signature lunch cooked in front of you and paired with regional drinks. It can be enjoyed on its own or as part of the Cusco at the Table experience."
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
      galeria: ["experiencia-desayuno-huaynapicchu-02.jpg"],
      categoria: "icono",
      duracion: { es: "Medio día", en: "Half day" },
      grupo: { es: "2 – 6 personas", en: "2 – 6 people" },
      requisito: {
        etiqueta: { es: "Exclusivo huéspedes Sanctuary Lodge", en: "Sanctuary Lodge guests only" },
        texto: {
          es: "Esta experiencia es exclusiva para huéspedes del Sanctuary Lodge. Para reservarla es necesario estar alojado en el hotel.",
          en: "This experience is exclusive to guests of Sanctuary Lodge. A stay at the hotel is required to book it."
        }
      },
      nombre: { es: "Desayuno con Vista al Huaynapicchu", en: "Breakfast with a View of Huaynapicchu" },
      resumen: {
        es: "Los desayunos de Belmond: comienza el día contemplando la belleza de Machu Picchu, con el Huaynapicchu enfrente. Reservado para huéspedes del Sanctuary Lodge.",
        en: "Belmond breakfasts: start the day taking in the beauty of Machu Picchu, with Huaynapicchu right in front of you. Reserved for guests of Sanctuary Lodge."
      },
      descripcion: {
        es: "Comienza el día desayunando y contemplando la belleza de Machu Picchu en la terraza del Sanctuary Lodge de Belmond, el único hotel junto al ingreso a la ciudadela. Una mesa servida con calma entre el bosque, con productos peruanos y el Huaynapicchu enfrente, mientras la luz de la mañana va descubriendo las montañas.",
        en: "Start the day with breakfast while taking in the beauty of Machu Picchu on the terrace of Belmond's Sanctuary Lodge, the only hotel beside the entrance to the citadel. An unhurried table among the forest, with Peruvian produce and Huaynapicchu in front of you, as the morning light slowly reveals the mountains."
      },
      consejos: {
        es: [
          "Reserva tu estadía en el Sanctuary Lodge con anticipación: es el único hotel junto al ingreso a Machu Picchu y tiene pocas habitaciones.",
          "Las mañanas pueden ser neblinosas y frías — lleva una chaqueta abrigadora.",
          "Cámara con batería cargada: la luz de la mañana sobre la ciudadela es el momento estrella."
        ],
        en: [
          "Book your stay at Sanctuary Lodge well ahead: it is the only hotel beside the entrance to Machu Picchu and has few rooms.",
          "Mornings can be foggy and cold — bring a warm jacket.",
          "Bring a charged camera: morning light over the citadel is the highlight moment."
        ]
      }
    },

    /* ---- Viajes completos (itinerarios de varios días) ----
       BORRADOR: rutas, días y servicios deben validarse con operaciones antes de publicar. */
    {
      id: "luna-de-miel-andes",
      imagen: "experiencia-luna-de-miel-01.jpg",
      galeria: ["experiencia-luna-de-miel-02.jpg", "destino-valle-sagrado-01.jpg", "destino-valle-sagrado-03.jpg", "destino-valle-sagrado-06.jpg", "destino-machu-picchu-01.jpg", "destino-cusco-ciudad-01.jpg"],
      categoria: "viaje",
      duracion: { es: "10 días sugeridos", en: "10 suggested days" },
      grupo: { es: "Viaje privado", en: "Private journey" },
      nombre: { es: "Luna de Miel en los Andes", en: "Honeymoon in the Andes" },
      ruta: {
        es: "Valle Sagrado · Chinchero · Maras y Moray · Camino Inka · Machu Picchu · Cusco · Palcoyo",
        en: "Sacred Valley · Chinchero · Maras & Moray · Inca Trail · Machu Picchu · Cusco · Palcoyo"
      },
      resumen: {
        es: "Diez días para empezar la vida juntos sin prisa: amaneceres sobre el Valle Sagrado, la llegada a Machu Picchu a pie y cenas privadas que no olvidarán.",
        en: "Ten unhurried days to begin life together: sunrises over the Sacred Valley, arriving at Machu Picchu on foot, and private dinners you won't forget."
      },
      descripcion: {
        es: "No es un tour con horarios: es un viaje para dos que avanza a su ritmo, del silencio del Valle Sagrado a la llegada a pie a Machu Picchu, con tiempo de sobra para simplemente estar juntos.",
        en: "This isn't a tour with a timetable: it's a journey for two that moves at your own pace, from the quiet of the Sacred Valley to arriving at Machu Picchu on foot, with plenty of time to simply be together."
      },
      incluye: {
        es: ["Guía privado", "Traslados", "Alojamiento", "Entradas"],
        en: ["Private guide", "Transfers", "Accommodation", "Entrance tickets"]
      },
      momentos: {
        es: [
          ["Despertar en el Valle Sagrado", "Los primeros días, sin prisa y a menor altura que Cusco, mientras el cuerpo se acostumbra y el valle amanece."],
          ["Cuatrimotos por Moray y Maras", "Un paseo por la meseta entre las terrazas circulares de Moray y las salineras de Maras, con los nevados de fondo."],
          ["Las tejedoras de Chinchero", "Una tarde con las artesanas que mantienen vivo el tejido andino."],
          ["Un jacuzzi frente a las montañas", "Al caer la tarde, agua caliente al aire libre con los Andes delante, en alojamientos seleccionados."],
          ["Llegar a Machu Picchu a pie", "El tramo corto del Camino Inka hasta la Puerta del Sol y, al día siguiente, la ciudadela con calma."],
          ["Cusco para dos", "San Blas y el centro histórico a su aire, con una cena privada para celebrar."],
          ["Palcoyo, lejos de las multitudes", "La montaña de colores por su ruta más tranquila, ya aclimatados."]
        ],
        en: [
          ["Waking up in the Sacred Valley", "The first days, unhurried and lower than Cusco, while your body adjusts and the valley wakes up."],
          ["Quad bikes through Moray and Maras", "A ride across the plateau between the circular terraces of Moray and the Maras salt pans, with snow peaks behind."],
          ["The weavers of Chinchero", "An afternoon with the artisans who keep Andean weaving alive."],
          ["A hot tub facing the mountains", "As evening falls, warm water in the open air with the Andes in front of you, at selected lodges."],
          ["Arriving at Machu Picchu on foot", "The short Inca Trail to the Sun Gate and, the next day, the citadel at an easy pace."],
          ["Cusco for two", "San Blas and the historic center on your own terms, with a private dinner to celebrate."],
          ["Palcoyo, away from the crowds", "The rainbow mountain by its quietest route, once you're acclimatized."]
        ]
      },
      consejos: {
        es: [
          "El tramo corto del Camino Inka requiere permiso y los cupos son limitados: conviene reservar con meses de anticipación.",
          "El viaje empieza en el Valle Sagrado, a menor altitud que Cusco, para aclimatarse de forma gradual.",
          "Palcoyo está cerca de los 4,900 m: por eso se visita al final, ya aclimatados."
        ],
        en: [
          "The short Inca Trail requires a permit and spaces are limited: book months in advance.",
          "The trip starts in the Sacred Valley, lower than Cusco, so you acclimatize gradually.",
          "Palcoyo sits at nearly 4,900 m, which is why it comes at the end, once you're acclimatized."
        ]
      }
    },
    {
      id: "cusco-a-la-mesa",
      imagen: "experiencia-cusco-a-la-mesa-01.jpg",
      galeria: ["destino-valle-sagrado-01.jpg"],
      categoria: "gastronomia",
      duracion: { es: "1 día", en: "1 day" },
      grupo: { es: "2 – 12 personas", en: "2 – 12 people" },
      nombre: { es: "Cusco a la Mesa", en: "Cusco at the Table" },
      ruta: {
        es: "Cusco · Moray · Valle Sagrado",
        en: "Cusco · Moray · Sacred Valley"
      },
      resumen: {
        es: "La cocina andina desde su origen, en un solo día: del mercado de San Pedro a los cultivos de altura del Valle Sagrado y una cena de autor en Cusco.",
        en: "Andean cuisine from its source, in a single day: from San Pedro market to the high-altitude crops of the Sacred Valley and a signature dinner in Cusco."
      },
      descripcion: {
        es: "Un día para recorrer la cocina andina de principio a fin: el mercado donde compran los cusqueños, las terrazas de Moray donde los incas ensayaban sus cultivos, un almuerzo con lo cosechado en el valle y, de vuelta en Cusco, una cena de autor que reinterpreta los ingredientes de altura.",
        en: "A day to experience Andean cuisine from start to finish: the market where locals shop, the Moray terraces where the Incas trialed their crops, a lunch made with produce harvested in the valley and, back in Cusco, a signature dinner that reinterprets highland ingredients."
      },
      incluye: {
        es: ["Guía privado", "Traslados", "Reservas en restaurantes"],
        en: ["Private guide", "Transfers", "Restaurant reservations"]
      },
      momentos: {
        es: [
          ["Mañana en el mercado de San Pedro", "Frutas, panes y quesos de la región, de la mano de alguien que conoce cada puesto."],
          ["Moray, el laboratorio de los incas", "Las terrazas donde los incas ensayaron cultivos a distintas alturas, para entender de dónde viene lo que se come."],
          ["Almuerzo en el Valle Sagrado", "Del huerto a la mesa en hoteles del valle como Tambo del Inka, con lo recién cosechado, o una pachamanca cocinada bajo piedras calientes."],
          ["Cena de cocina andina de autor", "De vuelta en Cusco, los ingredientes de altura reinterpretados por los cocineros que hoy marcan la escena de la ciudad."]
        ],
        en: [
          ["Morning at San Pedro market", "Regional fruit, breads and cheeses, guided by someone who knows every stall."],
          ["Moray, the Incas' laboratory", "The terraces where the Incas trialed crops at different altitudes, to understand where the food comes from."],
          ["Lunch in the Sacred Valley", "Farm to table at valley hotels such as Tambo del Inka, with freshly harvested produce, or a pachamanca cooked under hot stones."],
          ["A signature Andean dinner", "Back in Cusco, highland ingredients reinterpreted by the cooks now shaping the city's food scene."]
        ]
      },
      consejos: {
        es: [
          "Es una jornada completa, de la mañana a la noche: conviene programarla después de uno o dos días en Cusco, ya aclimatados (Moray está a unos 3,500 m).",
          "Los restaurantes más solicitados se reservan con semanas de anticipación: cuanto antes confirmes la fecha, mejor.",
          "Avísanos con anticipación sobre alergias o restricciones alimentarias del grupo."
        ],
        en: [
          "It's a full day, from morning to night: plan it after one or two days in Cusco, once acclimatized (Moray sits at around 3,500 m).",
          "The most sought-after restaurants book up weeks ahead: the sooner you confirm the date, the better.",
          "Let us know in advance about any allergies or dietary restrictions in the group."
        ]
      }
    },
    {
      id: "peru-en-familia",
      imagen: "experiencia-peru-en-familia-01.jpg",
      portadaProvisional: true,
      galeria: ["destino-valle-sagrado-02.jpg", "destino-machu-picchu-01.jpg", "destino-cusco-ciudad-02.jpg"],
      categoria: "viaje",
      duracion: { es: "8 días / 7 noches", en: "8 days / 7 nights" },
      grupo: { es: "Viaje privado", en: "Private journey" },
      nombre: { es: "Perú en Familia", en: "Peru with the Family" },
      ruta: {
        es: "Lima · Valle Sagrado · Laguna Piuray · Machu Picchu · Huaynapicchu · Cusco · Circuito Mágico del Agua",
        en: "Lima · Sacred Valley · Piuray Lake · Machu Picchu · Huaynapicchu · Cusco · Magic Water Circuit"
      },
      resumen: {
        es: "Un viaje pensado para que grandes y chicos lo disfruten por igual: kayak en la laguna Piuray, picnic entre montañas y Machu Picchu a un ritmo cómodo.",
        en: "A trip designed for grown-ups and kids alike: kayaking on Piuray Lake, a picnic among the mountains and Machu Picchu at a comfortable pace."
      },
      descripcion: {
        es: "Un itinerario con el ritmo de una familia: actividades al aire libre, trayectos cortos y tiempo para descansar, sin dejar fuera lo esencial del Perú.",
        en: "An itinerary at a family's pace: outdoor activities, short transfers and time to rest, without leaving out the essentials of Peru."
      },
      incluye: {
        es: ["Guía privado", "Traslados", "Alojamiento", "Entradas"],
        en: ["Private guide", "Transfers", "Accommodation", "Entrance tickets"]
      },
      itinerario: {
        es: [
          ["Día 1 · Lima", "Llegada, traslado y primera tarde tranquila en la ciudad."],
          ["Días 2 y 3 · Valle Sagrado y laguna Piuray", "Vuelo a Cusco y bajada directa al valle, más bajo, para aclimatarse. Al día siguiente, kayak en la laguna Piuray y picnic entre montañas."],
          ["Días 4 y 5 · Machu Picchu", "Tren desde Ollantaytambo y visita guiada a la ciudadela. Subida al Huaynapicchu opcional, según la edad de los viajeros."],
          ["Día 6 · Cusco", "Un recorrido por la ciudad pensado para niños, ya aclimatados."],
          ["Día 7 · Lima", "Regreso a Lima y noche en el Circuito Mágico del Agua."],
          ["Día 8 · Regreso", "Traslado al aeropuerto y vuelo de retorno."]
        ],
        en: [
          ["Day 1 · Lima", "Arrival, transfer and a relaxed first afternoon in the city."],
          ["Days 2–3 · Sacred Valley & Piuray Lake", "Flight to Cusco and straight down to the lower valley to acclimatize. The next day, kayaking on Piuray Lake and a picnic among the mountains."],
          ["Days 4–5 · Machu Picchu", "Train from Ollantaytambo and a guided visit to the citadel. Optional Huaynapicchu climb, depending on the travelers' ages."],
          ["Day 6 · Cusco", "A kid-friendly tour of the city, now acclimatized."],
          ["Day 7 · Lima", "Return to Lima and an evening at the Magic Water Circuit."],
          ["Day 8 · Departure", "Airport transfer and return flight."]
        ]
      },
      consejos: {
        es: [
          "Lleva el pasaporte físico de cada viajero, incluidos los niños: es obligatorio para ingresar a Machu Picchu.",
          "La subida al Huaynapicchu tiene restricción de edad y cupos limitados; la confirmamos según las edades del grupo.",
          "Se duerme primero en el Valle Sagrado, más bajo que Cusco, y el primer día allí no tiene actividades exigentes: así todos se aclimatan.",
          "El Circuito Mágico del Agua no abre todos los días: ajustamos la noche en Lima a su horario."
        ],
        en: [
          "Bring every traveler's physical passport, children included: it's required to enter Machu Picchu.",
          "The Huaynapicchu climb has an age restriction and limited spaces; we confirm it based on the group's ages.",
          "The first nights are in the Sacred Valley, lower than Cusco, and the first day there has no demanding activities: that way everyone acclimatizes.",
          "The Magic Water Circuit isn't open every day: we fit the Lima evening to its schedule."
        ]
      }
    }
  ],

  aliados: [
    {
      id: "costa-del-sol-cusco",
      nombre: "Costa del Sol Cusco",
      categoria: "hotel",
      nivel: "4-estrellas",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-04.jpg",
      descripcion: {
        es: "Hotel de categoría 4 estrellas en una casona colonial con patio de arcos, en el centro histórico de Cusco.",
        en: "A 4-star hotel in a colonial mansion with an arched courtyard, in Cusco's historic center."
      }
    },
    {
      id: "novotel-cusco",
      nombre: "Novotel Cusco",
      categoria: "hotel",
      nivel: "4-estrellas",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-05.jpg",
      descripcion: {
        es: "Casona colonial restaurada a pocas cuadras de la Plaza de Armas, con el confort de una cadena internacional.",
        en: "A restored colonial mansion a few blocks from the Plaza de Armas, with the comfort of an international chain."
      }
    },
    {
      id: "san-agustin-plaza",
      nombre: "San Agustín Plaza",
      categoria: "hotel",
      nivel: "4-estrellas",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-06.jpg",
      descripcion: {
        es: "Hotel de categoría 4 estrellas a pasos de la Plaza de Armas, con vistas a los techos de la ciudad.",
        en: "A 4-star hotel steps from the Plaza de Armas, with views over the city's rooftops."
      }
    },
    {
      id: "aranwa-cusco",
      nombre: "Aranwa Cusco Boutique Hotel",
      categoria: "hotel",
      nivel: "5-estrellas",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-07.jpg",
      descripcion: {
        es: "Casona colonial convertida en hotel boutique, con arte virreinal en sus salones, en el centro de Cusco.",
        en: "A colonial mansion turned boutique hotel, with colonial-era art in its lounges, in central Cusco."
      }
    },
    {
      id: "casa-andina-premium-cusco",
      nombre: "Casa Andina Premium Cusco",
      categoria: "hotel",
      nivel: "5-estrellas",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-08.jpg",
      descripcion: {
        es: "Casona colonial con patio central y fuente de piedra, cerca de la Plaza de Armas.",
        en: "A colonial mansion with a central courtyard and stone fountain, near the Plaza de Armas."
      }
    },
    {
      id: "palacio-del-inka",
      nombre: "Palacio del Inka, a Luxury Collection Hotel",
      categoria: "hotel",
      nivel: "5-estrellas",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-09.jpg",
      descripcion: {
        es: "Casona histórica frente al Qorikancha, con un gran patio cubierto y salones de época.",
        en: "A historic mansion facing the Qorikancha, with a grand covered courtyard and period lounges."
      }
    },
    {
      id: "sumaq-machu-picchu",
      nombre: "Sumaq Machu Picchu",
      categoria: "hotel",
      nivel: "5-estrellas",
      ciudad: "machu-picchu",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-03.jpg",
      descripcion: {
        es: "Hotel 5 estrellas junto al río Vilcanota en Aguas Calientes, a minutos de la ciudadela.",
        en: "A 5-star hotel beside the Vilcanota River in Aguas Calientes, minutes from the citadel."
      }
    },
    {
      id: "belmond-monasterio",
      nombre: "Belmond Hotel Monasterio",
      categoria: "hotel",
      nivel: "luxury",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-10.jpg",
      descripcion: {
        es: "Antiguo seminario del siglo XVI con claustro de piedra y capilla barroca, en pleno centro de Cusco.",
        en: "A 16th-century former seminary with a stone cloister and baroque chapel, in the heart of Cusco."
      }
    },
    {
      id: "palacio-nazarenas",
      nombre: "Palacio Nazarenas",
      categoria: "hotel",
      nivel: "luxury",
      ciudad: "cusco-ciudad",
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
      nivel: "luxury",
      ciudad: "cusco-ciudad",
      tipo: { es: "Hotel aliado", en: "Partner hotel" },
      imagen: "aliado-hotel-02.jpg",
      descripcion: {
        es: "Mansión del siglo XVI convertida en boutique hotel íntimo, a pasos de la Plaza de Armas de Cusco.",
        en: "A 16th-century mansion turned intimate boutique hotel, steps from Cusco's Plaza de Armas."
      }
    },
    {
      id: "perurail-vistadome",
      nombre: "PeruRail Vistadome",
      categoria: "tren",
      empresa: "perurail",
      tipo: { es: "PeruRail", en: "PeruRail" },
      clase: { es: "Panorámico", en: "Panoramic" },
      imagen: "aliado-tren-02.jpg",
      salida: { es: "Cusco, Urubamba u Ollantaytambo", en: "Cusco, Urubamba or Ollantaytambo" },
      duracion: { es: "Aprox. 1 h 30 desde Ollantaytambo", en: "Approx. 1 h 30 from Ollantaytambo" },
      descripcion: {
        es: "Ventanas en el techo y en los costados para seguir el Valle Sagrado y el cañón del Urubamba sin perder detalle.",
        en: "Roof and side windows to follow the Sacred Valley and the Urubamba canyon in full detail."
      },
      incluye: [
          { es: "Ventanas panorámicas en techo y laterales", en: "Panoramic roof and side windows" },
          { es: "Snack andino incluido", en: "Andean snack included" },
          { es: "Audioguía del recorrido", en: "Audio guide of the route" },
          { es: "Danzas y desfile de baby alpaca al regreso", en: "Dances and baby alpaca show on the return" }
      ]
    },
    {
      id: "perurail-vistadome-observatory",
      nombre: "PeruRail Vistadome Observatory",
      categoria: "tren",
      empresa: "perurail",
      tipo: { es: "PeruRail", en: "PeruRail" },
      clase: { es: "Panorámico premium", en: "Premium panoramic" },
      imagen: "aliado-tren-04.jpg",
      salida: { es: "Cusco u Ollantaytambo", en: "Cusco or Ollantaytambo" },
      duracion: { es: "Aprox. 1 h 30 desde Ollantaytambo", en: "Approx. 1 h 30 from Ollantaytambo" },
      descripcion: {
        es: "Un vagón observatorio con balcón al aire libre para sentir el aire de los Andes, y un vagón bar con música y danzas en vivo.",
        en: "An observatory car with an open-air balcony to feel the Andean air, and a bar car with live music and dances."
      },
      incluye: [
          { es: "Vagón observatorio con balcón al aire libre", en: "Observatory car with open-air balcony" },
          { es: "Vagón bar con música y danzas en vivo", en: "Bar car with live music and dances" },
          { es: "Asientos con mesa individual", en: "Seats with individual tables" },
          { es: "Snacks y bebidas incluidos", en: "Snacks and drinks included" }
      ]
    },
    {
      id: "belmond-hiram-bingham",
      nombre: "Belmond Hiram Bingham",
      categoria: "tren",
      empresa: "perurail",
      tipo: { es: "Belmond · vía PeruRail", en: "Belmond · via PeruRail" },
      clase: { es: "Lujo", en: "Luxury" },
      imagen: "aliado-tren-01.jpg",
      salida: { es: "Estación Poroy (Cusco)", en: "Poroy station (Cusco)" },
      duracion: { es: "Aprox. 3 h 30 desde Poroy", en: "Approx. 3 h 30 from Poroy" },
      descripcion: {
        es: "Vagones de madera al estilo de los años 20, alta cocina a bordo y el día completo resuelto hasta la ciudadela.",
        en: "1920s-style wooden carriages, fine dining on board and the whole day arranged up to the citadel."
      },
      incluye: [
          { es: "Brunch a la ida y cena a la vuelta", en: "Brunch on the way out, dinner on the way back" },
          { es: "Vagón observatorio y bar con música en vivo", en: "Observation and bar car with live music" },
          { es: "Bus exclusivo hasta Machu Picchu", en: "Exclusive bus up to Machu Picchu" },
          { es: "Visita guiada a la ciudadela", en: "Guided visit of the citadel" }
      ]
    },
    {
      id: "inca-rail-360",
      nombre: "Inca Rail The 360°",
      categoria: "tren",
      empresa: "incarail",
      tipo: { es: "Inca Rail", en: "Inca Rail" },
      clase: { es: "Panorámico", en: "Panoramic" },
      imagen: "aliado-tren-05.jpg",
      salida: { es: "Ollantaytambo · bus + tren desde Cusco", en: "Ollantaytambo · bus + train from Cusco" },
      duracion: { es: "Aprox. 1 h 30 desde Ollantaytambo", en: "Approx. 1 h 30 from Ollantaytambo" },
      descripcion: {
        es: "Pensado para fotografiar: ventanas panorámicas y un vagón observatorio abierto para salir durante el trayecto.",
        en: "Made for photographers: panoramic windows and an open observatory car you can step out to during the ride."
      },
      incluye: [
          { es: "Vagón observatorio al aire libre", en: "Open-air observatory car" },
          { es: "Ventanas panorámicas con protección UV", en: "Panoramic windows with UV protection" },
          { es: "Snacks de cortesía con insumos locales", en: "Complimentary snacks with local ingredients" },
          { es: "Música en vivo al regreso", en: "Live music on the return" }
      ]
    },
    {
      id: "inca-rail-prime",
      nombre: "Inca Rail The Prime",
      categoria: "tren",
      empresa: "incarail",
      tipo: { es: "Inca Rail", en: "Inca Rail" },
      clase: { es: "Superior", en: "Superior" },
      imagen: "aliado-tren-06.jpg",
      salida: { es: "Ollantaytambo · bus + tren desde Cusco", en: "Ollantaytambo · bus + train from Cusco" },
      duracion: { es: "Aprox. 1 h 30 desde Ollantaytambo", en: "Approx. 1 h 30 from Ollantaytambo" },
      descripcion: {
        es: "Asientos reclinables, vagón comedor y servicio atento en un ambiente tranquilo, ideal para familias.",
        en: "Reclining seats, a dining car and attentive service in a calm setting, ideal for families."
      },
      incluye: [
          { es: "Embarque prioritario", en: "Priority boarding" },
          { es: "Asientos amplios y reclinables", en: "Spacious reclining seats" },
          { es: "Vagón comedor y snack andino", en: "Dining car and Andean snack" },
          { es: "Música andina en vivo", en: "Live Andean music" }
      ]
    },
    {
      id: "inca-rail-first-class",
      nombre: "Inca Rail The First Class",
      categoria: "tren",
      empresa: "incarail",
      tipo: { es: "Inca Rail", en: "Inca Rail" },
      clase: { es: "Lujo", en: "Luxury" },
      imagen: "aliado-tren-07.jpg",
      salida: { es: "Ollantaytambo · bus VIP desde Cusco", en: "Ollantaytambo · VIP bus from Cusco" },
      duracion: { es: "Aprox. 1 h 30 desde Ollantaytambo", en: "Approx. 1 h 30 from Ollantaytambo" },
      descripcion: {
        es: "El tren insignia de Inca Rail: menú gourmet, maridaje y un balcón abierto sobre el río Urubamba.",
        en: "Inca Rail's flagship: a gourmet menu, wine pairing and an open balcony over the Urubamba river."
      },
      incluye: [
          { es: "Menú gourmet de tres tiempos", en: "Three-course gourmet menu" },
          { es: "Vinos, cócteles y cóctel de bienvenida", en: "Wines, cocktails and a welcome drink" },
          { es: "Lounge y balcón al aire libre", en: "Lounge and open-air balcony" },
          { es: "Embarque prioritario y bus VIP", en: "Priority boarding and VIP bus" }
      ]
    },
    {
      id: "inca-rail-private",
      nombre: "Inca Rail The Private",
      categoria: "tren",
      empresa: "incarail",
      tipo: { es: "Inca Rail", en: "Inca Rail" },
      clase: { es: "Exclusivo", en: "Exclusive" },
      imagen: "aliado-tren-03.jpg",
      salida: { es: "Ollantaytambo · traslado privado desde Cusco", en: "Ollantaytambo · private transfer from Cusco" },
      duracion: { es: "Aprox. 1 h 30 desde Ollantaytambo", en: "Approx. 1 h 30 from Ollantaytambo" },
      descripcion: {
        es: "Un vagón solo para tu grupo, con lounge, balcón propio y el ritmo que ustedes elijan. Ideal para celebraciones.",
        en: "A carriage just for your group, with its own lounge and balcony at your own pace. Ideal for celebrations."
      },
      incluye: [
          { es: "Vagón, lounge y balcón solo para tu grupo", en: "Carriage, lounge and balcony just for your group" },
          { es: "Menú gourmet de cuatro tiempos", en: "Four-course gourmet menu" },
          { es: "Lounge privado en la estación", en: "Private lounge at the station" },
          { es: "Incluye guía privado, bus y entrada a Machu Picchu", en: "Includes private guide, bus and Machu Picchu entry" }
      ]
    }
  ]
};
