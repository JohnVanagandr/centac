export const ofertaData = [
  {
    id: 1, // Puedes ajustar este ID según el orden de tu arreglo
    slug: "electricidad",
    title: "ELECTRICIDAD",
    subtitle: "Instalaciones y sistemas eléctricos industriales",

    // Datos específicos del diseño de la presentación [cite: 190, 191, 192, 193, 194, 195, 196]
    resolution: "Resolución 3241 del 27 de septiembre de 2022", // Extraído del footer legal del PDF [cite: 242]
    duration: "1 semestre",
    modality: "Presencial",
    titleObtained: "Técnico Laboral en Instalaciones Eléctricas Industriales",
    isTop: true,
    iconName: "lightning", // Usamos el ícono del rayo que ya teníamos configurado

    // Imagen de fondo de alta calidad para el Hero (Aproximación temática)
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop",

    desc: "El Técnico Laboral en Electricidad Industrial está orientado a la formación integral de personal capacitado para intervenir sistemas eléctricos residenciales e industriales, aplicando principios de electricidad básica, normativa vigente, cálculos eléctricos, automatismo y control de motores.",

    aboutHighlights: [
      "El programa permite al estudiante desarrollar habilidades para el diseño, instalación, mantenimiento y diagnóstico de sistemas eléctricos, bajo criterios de seguridad, eficiencia y cumplimiento normativo.",
      "Con nuestro programa obtienes la formación requerida para acceder a la matrícula profesional CONTE en las categorías TE1, TE2, TE4 y TE6, y te acompañamos en el proceso de solicitud ante la entidad.",
    ],

    learnings: [
      {
        title: "Electricidad básica y aplicada",
        text: "Comprender los fundamentos de la corriente, voltaje, resistencia y el uso de instrumentos de medición.",
        icon: "lightning",
      },
      {
        title: "Instalaciones eléctricas",
        text: "Diseñar y ejecutar cableado estructurado tanto para entornos residenciales como de alta exigencia industrial.",
        icon: "tools",
      },
      {
        title: "Automatismo y control",
        text: "Ensamblar y mantener tableros de control y sistemas automatizados para el manejo de motores industriales.",
        icon: "gear",
      },
      {
        title: "Seguridad y normativa",
        text: "Aplicar estrictamente el RETIE y otras normativas vigentes para prevenir riesgos eléctricos en el área de trabajo.",
        icon: "shield",
      },
    ],

    // Malla curricular (Los sub-ítems fueron inferidos académicamente ya que el PDF solo da los títulos principales) [cite: 205, 208, 211, 212, 215, 218, 219, 221, 222, 224, 225]
    modules: [
      {
        number: 1,
        title: "Electricidad básica",
        items: [
          "Conceptos fundamentales de electricidad",
          "Magnitudes eléctricas y sus unidades",
          "Uso del multímetro y pinza amperimétrica",
        ],
      },
      {
        number: 2,
        title: "Leyes eléctricas y circuitos",
        items: [
          "Ley de Ohm y Ley de Watt",
          "Circuitos en serie, paralelo y mixtos",
          "Cálculo de caídas de tensión",
        ],
      },
      {
        number: 3,
        title: "Electricidad residencial",
        items: [
          "Interpretación de planos eléctricos",
          "Instalación de tomacorrientes e interruptores",
          "Armado de tableros de distribución residencial",
        ],
      },
      {
        number: 4,
        title: "Instalaciones eléctricas según normativa",
        items: [
          "Introducción y aplicación del RETIE",
          "Código Eléctrico Colombiano (NTC 2050)",
          "Dimensionamiento de conductores y protecciones",
        ],
      },
      {
        number: 5,
        title: "Introducción a la electricidad industrial",
        items: [
          "Sistemas trifásicos vs monofásicos",
          "Componentes de tableros industriales",
          "Contactores y relés térmicos",
        ],
      },
      {
        number: 6,
        title: "Cálculos eléctricos industriales",
        items: [
          "Cálculo de potencia y factor de potencia",
          "Selección de protecciones (Breakers, fusibles)",
          "Compensación de energía reactiva",
        ],
      },
      {
        number: 7,
        title: "Máquinas y transformadores eléctricos",
        items: [
          "Principios de funcionamiento de transformadores",
          "Conexiones de transformadores trifásicos",
          "Mantenimiento básico de transformadores",
        ],
      },
      {
        number: 8,
        title: "Motores eléctricos",
        items: [
          "Tipos de motores AC y DC",
          "Conexiones estrella y triángulo",
          "Diagnóstico y pruebas de aislamiento",
        ],
      },
      {
        number: 9,
        title: "Automatismo eléctrico",
        items: [
          "Lectura de diagramas de control e potencia",
          "Arranque directo y arranque estrella-triángulo",
          "Uso de temporizadores y finales de carrera",
        ],
      },
      {
        number: 10,
        title: "Seguridad y riesgo eléctrico",
        items: [
          "Identificación de riesgos eléctricos",
          "Equipos de protección personal (EPP) y dieléctricos",
          "Primeros auxilios en caso de choque eléctrico",
          "Las 5 reglas de oro de la electricidad",
        ],
      },
    ],

    // Perfiles y Docente (Se inferieron los roles de egresado basándose en la información principal del programa)
    instructor: {
      name: "Ing. Especialista", // El PDF no menciona el nombre exacto [cite: 207]
      role: "Especialista en Automatismo y Control Industrial",
    },

    profiles: {
      egresado:
        "El egresado estará en capacidad de diseñar, instalar y mantener sistemas eléctricos residenciales e industriales, cumpliendo con la normativa RETIE y aplicando automatismo para el control de motores.",
      profesional: [
        "Técnico electricista industrial o residencial",
        "Auxiliar de mantenimiento eléctrico",
        "Ensamblador de tableros de control",
        "Asistente en proyectos de iluminación y redes",
      ],
    },

    // Testimonios (Inferidos a partir de los nombres encontrados en el PDF) [cite: 220, 223, 233]
    testimonials: [
      {
        name: "Jhonatan G.",
        text: "La calidad de los tableros y equipos en los talleres hace que aprendamos exactamente lo que nos piden en la industria.",
        rating: 5,
      },
      {
        name: "Jose M.",
        text: "Gracias a este programa logré sacar mi matrícula profesional CONTE sin complicaciones y conseguir un mejor empleo.",
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    slug: "refrigeracion",
    title: "SISTEMAS DE REFRIGERACIÓN",
    subtitle: "Instalación y mantenimiento aplicada a equipos",

    // Datos específicos del diseño de la presentación
    resolution: "Resolución del 11 de abril de 2025",
    duration: "40 horas",
    modality: "Presencial",
    titleObtained:
      "Curso de Instalación y Mantenimiento de Refrigeración y Aires Acondicionados",
    isTop: true,
    iconName: "snowflake", // Ícono temático para refrigeración

    // Imagen de fondo temática para el Hero
    img: "https://images.unsplash.com/photo-1741062206165-7d8cba15a6ff?q=80&w=2000&auto=format&fit=crop",

    desc: "El programa está orientado en el análisis, diagnóstico y mantenimiento de sistemas de refrigeración y climatización. El estudiante adquiere conocimientos en electricidad básica aplicada, ciclo de refrigeración por compresión de vapor, termodinámica, soldadura y tuberías de cobre.",

    aboutHighlights: [
      "La formación permite desarrollar habilidades para identificar anomalías, interpretar planos eléctricos y garantizar el funcionamiento seguro y eficiente de los sistemas de aire acondicionado.",
      "El enfoque es 100% práctico, orientado a la correcta instalación y al mantenimiento preventivo y correctivo de equipos residenciales y comerciales, cumpliendo con estándares de eficiencia energética.",
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Electricidad aplicada",
        text: "Interpretar circuitos eléctricos y parámetros técnicos del sistema de refrigeración.",
        icon: "lightning",
      },
      {
        title: "Ciclo de refrigeración",
        text: "Comprender el funcionamiento del ciclo por compresión de vapor y sus componentes críticos.",
        icon: "gear",
      },
      {
        title: "Instalación y soldadura",
        text: "Realizar soldadura en tuberías de cobre e instalar sistemas de climatización de forma profesional.",
        icon: "tools",
      },
      {
        title: "Mantenimiento técnico",
        text: "Aplicar protocolos de mantenimiento preventivo y correctivo a equipos de refrigeración y aire acondicionado.",
        icon: "shield",
      },
    ],

    // Malla curricular (Estructurada para mantener los 10 módulos premium)
    modules: [
      {
        number: 1,
        title: "Electricidad básica aplicada a refrigeración",
        items: [
          "Conceptos de voltaje, amperaje y resistencia",
          "Uso del multímetro y pinza voltiamperimétrica",
          "Componentes eléctricos: capacitores, relés y protectores térmicos",
        ],
      },
      {
        number: 2,
        title: "Fundamentos de termodinámica",
        items: [
          "Principios de calor y temperatura",
          "Estados de la materia y transferencia de calor",
          "Presión y relación con la temperatura de saturación",
        ],
      },
      {
        number: 3,
        title: "Ciclo de refrigeración por compresión",
        items: [
          "Etapas del ciclo: compresión, condensación, expansión y evaporación",
          "Diagrama de Mollier (Presión vs Entalpía)",
          "Análisis del flujo del refrigerante",
        ],
      },
      {
        number: 4,
        title: "Componentes mecánicos del sistema",
        items: [
          "Tipos de compresores (Recíprocos, Rotativos, Scroll)",
          "Condensadores y evaporadores (Intercambiadores)",
          "Dispositivos de expansión: tubo capilar y válvulas",
        ],
      },
      {
        number: 5,
        title: "Fluidos refrigerantes y lubricantes",
        items: [
          "Clasificación y propiedades de los refrigerantes (R134a, R410A, R600a)",
          "Impacto ambiental y normativa de seguridad",
          "Tipos de aceites y compatibilidad",
        ],
      },
      {
        number: 6,
        title: "Tuberías y procesos de soldadura",
        items: [
          "Manejo de tubería de cobre: corte, abocinado y doblado",
          "Soldadura oxiacetilénica y con plata",
          "Pruebas de hermeticidad con nitrógeno",
        ],
      },
      {
        number: 7,
        title: "Instalación de Aires Acondicionados (Mini-Split)",
        items: [
          "Ubicación estratégica de unidades interna y externa",
          "Proceso de vacío y deshidratación del sistema",
          "Carga de refrigerante por peso y presión",
        ],
      },
      {
        number: 8,
        title: "Mantenimiento preventivo y limpieza",
        items: [
          "Protocolo de limpieza de serpentines y filtros",
          "Verificación de drenajes y niveles de ruido",
          "Ajuste de conexiones eléctricas y mecánicas",
        ],
      },
      {
        number: 9,
        title: "Diagnóstico y reparación de fallas",
        items: [
          "Identificación de fugas y obstrucciones",
          "Fallas en el sistema de arranque y compresor",
          "Uso de manómetros para diagnóstico de rendimiento",
        ],
      },
      {
        number: 10,
        title: "Buenas prácticas y recuperación de gases",
        items: [
          "Técnicas de recuperación y reciclaje de refrigerantes",
          "Normas de seguridad industrial y salud ocupacional",
          "Evaluación práctica final en equipos reales",
        ],
      },
    ],

    // Perfiles e Instructor
    instructor: {
      name: "Especialista en Climatización",
      role: "Técnico Senior en Refrigeración Comercial e Industrial",
    },

    profiles: {
      egresado:
        "El egresado estará en capacidad de realizar diagnósticos, instalaciones y mantenimientos de sistemas de refrigeración, garantizando el correcto funcionamiento, eficiencia energética y seguridad de los equipos.",
      profesional: [
        "Auxiliar de mantenimiento de sistemas de climatización",
        "Instalador de equipos de refrigeración residencial y comercial",
        "Soporte técnico para empresas de servicios",
        "Técnico independiente en reparación de aires acondicionados",
      ],
    },

    // Testimonios
    testimonials: [
      {
        name: "Alejandro S.",
        text: "Las prácticas ayudan a entender el funcionamiento completo del sistema, desde la electricidad hasta la carga de gas.",
        rating: 5,
      },
      {
        name: "Julio D.",
        text: "Las explicaciones del docente fueron muy claras, especialmente en la parte de diagnóstico de fallas.",
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    slug: "mecanica-de-motos",
    title: "MECÁNICA DE MOTOS",
    subtitle: "Mantenimiento y diagnóstico especializado",

    // Datos específicos del diseño de la presentación
    resolution: "Resolución 0932 del 11 de abril de 2025",
    duration: "2 semestres",
    modality: "Presencial",
    titleObtained: "Técnico Laboral en Mecánica de Motos",
    isTop: true,
    iconName: "piston",

    // Imagen de fondo de alta calidad para el Hero
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",

    desc: "El Técnico Laboral en Mecánica de Motos está orientado a la formación de personal capacitado para comprender el funcionamiento, mantenimiento y diagnóstico inicial de motocicletas, aplicando buenas prácticas de seguridad y servicio.",

    aboutHighlights: [
      "El estudiante desarrolla habilidades para el manejo de herramientas del taller, comprende los principios del motor, los sistemas de transmisión, combustión y electricidad, así como el mantenimiento de los sistemas de control y seguridad.",
      "La formación está orientada a la práctica, permitiendo aplicar procedimientos básicos de mantenimiento y diagnóstico con criterios de seguridad y calidad en el servicio, preparándolo para desempeñarse en el servicio de motocicletas.",
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Funcionamiento del motor",
        text: "Comprender los principios del motor de 2 y 4 tiempos y sus sistemas principales.",
        icon: "engine",
      },
      {
        title: "Mantenimiento mecánico",
        text: "Realizar mantenimiento básico y técnico en los sistemas de la motocicleta.",
        icon: "tools",
      },
      {
        title: "Sistemas eléctricos",
        text: "Diagnosticar y revisar sistemas eléctricos, batería, carga y encendido.",
        icon: "lightning",
      },
      {
        title: "Seguridad y control",
        text: "Intervenir sistemas de frenos, suspensión, dirección y rodamiento de forma segura.",
        icon: "shield",
      },
    ],

    // (Malla curricular)
    modules: [
      {
        number: 1,
        title: "Introducción a la mecánica de motocicletas",
        items: [
          "Introducción a la mecánica de motos",
          "Funcionamiento general de la motocicleta",
          "Normas básicas de seguridad y servicio",
          "Organización del taller",
        ],
      },
      {
        number: 2,
        title: "Metrología y herramientas de taller",
        items: [
          "Metrología básica",
          "Manejo de herramientas basicas",
          "Herramientas técnicas y de precisión",
          "Buenas prácticas en el uso de herramientas",
        ],
      },
      {
        number: 3,
        title: "Principios básicos del motor",
        items: [
          "Principios de funcionamiento del motor",
          "Motor de 2 tiempos vs motor de 4 tiempos",
          "Ciclos de trabajo del motor",
        ],
      },
      {
        number: 4,
        title: "Componentes internos del motor",
        items: [
          "Cilindro",
          "Pistón",
          "Anillos",
          "Biela",
          "Función y mantenimiento basico",
        ],
      },
      {
        number: 5,
        title: "Sistemas del motor",
        items: [
          "Sistema de lubricación",
          "Tipos de lubricación",
          "Sistema de enfriamiento",
          "Importancia del control térmico",
        ],
      },
      {
        number: 6,
        title: "Sistema de transmisión",
        items: [
          "Embrague: funcionamiento y ajuste",
          "Caja de cambios",
          "Transmisión secundaria",
          "Cadena, piñón y corona",
        ],
      },
      {
        number: 7,
        title: "Sistemas de control y seguridad",
        items: [
          "Sistema de frenos",
          "Suspensión delantera",
          "Suspension trasera",
          "Dirección",
          "Rodamientos",
        ],
      },
      {
        number: 8,
        title: "Sistema de combustión",
        items: [
          "Funcionamiento del carburador",
          "Tipos de carburador",
          "Partes del carburador",
          "Mantenimiento y ajuste",
        ],
      },
      {
        number: 9,
        title: "Sistema eléctrico de la motocicleta",
        items: [
          "Uso del multimetro",
          "Bateria",
          "Sistema de carga y arranque",
          "Sistema de encendido",
          "Lectura de diagramas eléctricos",
        ],
      },
      {
        number: 10,
        title: "Diagnóstico eléctrico e inyección básica",
        items: [
          "Diagnostico de fallas eléctricas",
          "Procedimientos básicos de verificación",
          "Conocimiento básico de inyección electrónica",
          "Evaluación práctica final",
        ],
      },
    ],

    // Perfiles y Docente
    instructor: {
      name: "Edwin P. Russi",
      role: "Especialista en reparación y mantenimiento",
    },

    profiles: {
      egresado:
        "El egresado estará en capacidad de realizar mantenimiento a motocicletas, diagnosticar fallas mecánicas y eléctricas, intervenir sistemas de transmisión y combustión con seguridad, aplicando buenas prácticas de servicio.",
      profesional: [
        "Auxiliar de mecánica de motocicletas",
        "Técnico en mantenimiento de motos",
        "Operario de taller",
        "Apoyo en diagnóstico y reparación básica",
      ],
    },
    // Testimonios
    testimonials: [
      {
        name: "Michael T.",
        text: "El ambiente es muy agradable, uno se siente en confianza para preguntar.",
        rating: 5,
      },
      {
        name: "Nicolas U.",
        text: "Las clases son claras, se nota la experiencia del docente.",
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    slug: "soldadura-smaw",
    title: "SOLDADURA SMAW",
    subtitle: "Soldadura manual con Electrodo Revestido", //

    // Datos específicos del diseño de la presentación
    resolution: "Resolución 0837 del 11 de abril de 2008", //
    duration: "40 horas", //
    modality: "Presencial", //
    titleObtained: "Curso de Soldadura SMAW", //
    isTop: false,
    iconName: "fire",

    // Imagen de fondo temática para el Hero
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop",

    desc: "El programa de Soldadura SMAW sumerge al estudiante en el dominio de uno de los procesos más versátiles y demandados del mercado. A través de una formación intensiva y práctica, se busca fortalecer la destreza manual, la precisión y la confianza necesarias para el entorno laboral real.", //

    aboutHighlights: [
      "La formación está orientada a la práctica intensiva, permitiendo al estudiante aprender desde los principios básicos hasta la correcta ejecución de la soldadura bajo normas de seguridad.", //
      "El curso se enfoca en el desarrollo de habilidades técnicas para la fundición y unión de metales, garantizando la resistencia y calidad exigida en la industria metalmecánica.", //
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Técnicas de soldadura", //
        text: "Comprender los diferentes métodos de aporte para fundir y unir metales de forma eficiente.", //
        icon: "fire",
      },
      {
        title: "Equipos y seguridad", //
        text: "Conocimiento profundo de equipos, herramientas y aplicación estricta de normas de seguridad (EPP).", //
        icon: "shield",
      },
      {
        title: "Tipos de electrodos", //
        text: "Identificar y seleccionar los electrodos adecuados para garantizar la resistencia estructural.", //
        icon: "tools",
      },
      {
        title: "Precisión y Calidad", //
        text: "Desarrollar la destreza manual necesaria para realizar cordones de soldadura con criterios técnicos.", //
        icon: "gear",
      },
    ],

    // Malla curricular (Basada en los módulos del PDF y complementada para el diseño)
    modules: [
      {
        number: 1,
        title: "Fundamentos básicos de soldadura", //
        items: [
          "Introducción a la soldadura SMAW", //
          "Conceptos básicos y terminología", //
          "Principio del proceso de arco eléctrico", //
          "Seguridad básica y uso de EPP", //
        ],
      },
      {
        number: 2,
        title: "Definiciones técnicas y normativas", //
        items: [
          "Tipos de electrodos y sus aplicaciones", //
          "Corriente, polaridad y amperaje", //
          "Normas técnicas de soldadura básica", //
        ],
      },
      {
        number: 3,
        title: "Equipos de soldadura",
        items: [
          "Fuentes de poder y máquinas soldadoras",
          "Partes del equipo SMAW",
          "Mantenimiento preventivo del equipo",
        ],
      },
      {
        number: 4,
        title: "Preparación de materiales",
        items: [
          "Limpieza de juntas y superficies",
          "Tipos de juntas (a tope, en T, traslape)",
          "Uso de herramientas de corte y desbaste",
        ],
      },
      {
        number: 5,
        title: "Encendido y control del arco",
        items: [
          "Técnicas de cebado del arco",
          "Manejo de la longitud del arco",
          "Control del baño de fusión",
        ],
      },
      {
        number: 6,
        title: "Posiciones de soldadura (1G y 1F)",
        items: [
          "Soldadura en posición plana",
          "Ejecución de cordones de relleno",
          "Control de la velocidad de avance",
        ],
      },
      {
        number: 7,
        title: "Defectología en soldadura",
        items: [
          "Identificación de porosidad y grietas",
          "Inclusiones de escoria y falta de fusión",
          "Acciones correctivas en el proceso",
        ],
      },
      {
        number: 8,
        title: "Introducción a posiciones avanzadas",
        items: [
          "Principios de soldadura horizontal (2G)",
          "Ángulos de inclinación del electrodo",
          "Técnicas de oscilación",
        ],
      },
      {
        number: 9,
        title: "Criterios de inspección visual",
        items: [
          "Evaluación de la estética del cordón",
          "Medición de penetración y refuerzo",
          "Uso de galgas de soldadura",
        ],
      },
      {
        number: 10,
        title: "Evaluación y retroalimentación", //
        items: [
          "Prueba práctica de desempeño", //
          "Análisis de muestras soldadas",
          "Retroalimentación final del instructor", //
        ],
      },
    ],

    // Perfiles y Docente
    instructor: {
      name: "Instructor Especialista",
      role: "Técnico Experto en Procesos de Soldadura Industrial",
    },

    profiles: {
      egresado:
        "El egresado podrá desempeñarse en talleres metalmecánicos, realizar apoyo en mantenimiento industrial y ejecutar trabajos de soldadura estructural básica con criterios de calidad.", //
      profesional: [
        "Soldador SMAW básico", //
        "Auxiliar de soldadura", //
        "Operador en talleres metalmecánicos", //
        "Apoyo en mantenimiento de estructuras", //
      ],
    },

    // Testimonios
    testimonials: [
      {
        name: "Carlos M.", //
        text: "Instalaciones adecuadas y muy buena organización en las prácticas.", //
        rating: 5,
      },
      {
        name: "Julio G.", //
        text: "Excelente enfoque práctico y buena orientación del instructor durante el curso.", //
        rating: 5,
      },
    ],
  },
  {
    id: 6,
    slug: "soldadura-mig-tig",
    title: "SOLDADURA MIG Y TIG",
    subtitle: "Soldadura manual con gas",

    // Datos específicos del diseño de la presentación
    resolution: "Resolución del 11 de abril de 2020",
    duration: "40 horas",
    modality: "Presencial",
    titleObtained: "Curso de Soldadura Mig y Tig",
    isTop: true,
    iconName: "fire",

    // Imagen de fondo temática para el Hero
    img: "https://images.unsplash.com/photo-1665492085149-21fcb2617dba?q=80&w=2000&auto=format&fit=crop",

    desc: "El Programa de Soldadura MIG y TIG está orientado en los procesos de soldadura con gas protector, enfocado en el proceso TIG (GTAW) y el proceso MIG-MAG. Es una formación diseñada para quienes buscan alta precisión y acabados de calidad industrial en diversos materiales.",

    aboutHighlights: [
      "El estudiante adquiere conocimientos técnicos sobre normativas, definiciones del procedimiento, equipos, consumibles y posiciones de trabajo para la aplicación de soldadura en diferentes materiales y espesores.",
      "La metodología se basa en la práctica constante y la evaluación de destreza, proporcionando retroalimentación técnica para fortalecer las habilidades necesarias en entornos reales de trabajo.",
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Proceso TIG (GTAW)",
        text: "Comprender y aplicar el proceso TIG, sus normativas, equipos especializados y técnicas de soldadura de alta precisión.",
        icon: "lightning",
      },
      {
        title: "Proceso MIG-MAG",
        text: "Utilizar correctamente el proceso MIG-MAG seleccionando el tipo de material, gas protector y alambre adecuado.",
        icon: "fire",
      },
      {
        title: "Equipos y consumibles",
        text: "Identificar componentes de los equipos, tipos de aportes, gases de protección y calibres de alambre según la junta.",
        icon: "tools",
      },
      {
        title: "Práctica y destreza",
        text: "Desarrollar habilidades prácticas en todas las posiciones mediante ejercicios guiados y evaluados bajo criterios técnicos.",
        icon: "gear",
      },
    ],

    // Malla curricular (Módulos extraídos del PDF)
    modules: [
      {
        number: 1,
        title: "Introducción al proceso TIG (GTAW)",
        items: [
          "Introducción al proceso TIG (Tungsten Inert Gas)",
          "Significados y normativas de uso del proceso",
          "Seguridad específica para soldadura con gas",
        ],
      },
      {
        number: 2,
        title: "Definiciones y procedimientos TIG",
        items: [
          "Definiciones del procedimiento GTAW",
          "Tipos de electrodos de tungsteno",
          "Preparación de la punta y afilado",
        ],
      },
      {
        number: 3,
        title: "Equipos y consumibles TIG",
        items: [
          "Configuración de la fuente de poder",
          "Gases de protección (Argón y mezclas)",
          "Varillas de aporte y selección según material",
        ],
      },
      {
        number: 4,
        title: "Técnicas de aplicación TIG",
        items: [
          "Control del pedal y amperaje",
          "Técnica de alimentación de varilla",
          "Soldadura en acero al carbono y acero inoxidable",
        ],
      },
      {
        number: 5,
        title: "Introducción al proceso MIG-MAG (GMAW)",
        items: [
          "Principios del proceso MIG-MAG",
          "Diferencias entre transferencia por cortocircuito, globular y spray",
          "Ventajas y aplicaciones industriales",
        ],
      },
      {
        number: 6,
        title: "Equipos y sistemas MIG-MAG",
        items: [
          "Unidad de alimentación de alambre",
          "Antorchas y boquillas",
          "Ajuste de velocidad de alambre y voltaje",
        ],
      },
      {
        number: 7,
        title: "Consumibles y gases MIG",
        items: [
          "Tipos de alambres sólidos y tubulares",
          "Mezclas de gases (CO2, Argón/CO2)",
          "Calibres y diámetros de alambre",
        ],
      },
      {
        number: 8,
        title: "Práctica intensiva MIG-MAG",
        items: [
          "Soldadura en todas las posiciones",
          "Uniones en diferentes diámetros y espesores",
          "Control de salpicaduras y penetración",
        ],
      },
      {
        number: 9,
        title: "Defectología y normas",
        items: [
          "Identificación de fallas comunes en procesos con gas",
          "Causas y soluciones de porosidad",
          "Criterios de aceptación visual",
        ],
      },
      {
        number: 10,
        title: "Evaluación y retroalimentación",
        items: [
          "Evaluación de habilidades y destreza",
          "Reinducción de temas críticos",
          "Retroalimentación final del programa",
        ],
      },
    ],

    // Perfiles e Instructor
    instructor: {
      name: "Instructor Técnico",
      role: "Experto en Soldadura de Alta Precisión (MIG/TIG)",
    },

    profiles: {
      egresado:
        "El egresado dominará los procesos de soldadura protegida por gas, con capacidad para trabajar en aceros especiales, aluminio y estructuras de alta exigencia con acabados estéticos y funcionales.",
      profesional: [
        "Soldador TIG especializado",
        "Soldador MIG-MAG industrial",
        "Fabricante de estructuras en acero inoxidable",
        "Operario de soldadura de precisión",
      ],
    },

    // Testimonios
    testimonials: [
      {
        name: "Angel Q.",
        text: "Los tips del instructor ayudan mucho a mejorar y a corregir errores técnicos de inmediato.",
        rating: 5,
      },
      {
        name: "Luis E.",
        text: "Se nota el enfoque práctico y la experiencia del docente en cada clase.",
        rating: 5,
      },
    ],
  },
  {
    id: 7,
    slug: "camaras-seguridad",
    title: "SISTEMAS Y CÁMARAS DE SEGURIDAD",
    subtitle: "Videovigilancia y seguridad electrónica aplicada",

    // Datos específicos del diseño de la presentación
    resolution: "Resolución del 11 de abril de 2025",
    duration: "40 horas",
    modality: "Presencial",
    titleObtained:
      "Curso de Instalación y Mantenimiento de Cámaras y Alarmas de Seguridad",
    isTop: false,
    iconName: "shield",

    // Imagen de fondo temática para el Hero
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop",

    desc: "El Programa de CCTV y Alarmas está orientado a la formación en sistemas de videovigilancia y seguridad electrónica, enfocado en el conocimiento, instalación, configuración y mantenimiento de sistemas reales utilizados en entornos residenciales, comerciales e industriales.",

    aboutHighlights: [
      "A través de una metodología progresiva y práctica, el estudiante aprende a identificar los diferentes tipos de cámaras, grabadores, cableado, dispositivos de almacenamiento y sistemas de alarmas.",
      "La formación desarrolla habilidades para implementar soluciones de seguridad funcionales y confiables, permitiendo al estudiante realizar configuraciones de software y visualización remota en dispositivos móviles.",
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Sistemas CCTV",
        text: "Comprender el funcionamiento y las aplicaciones de los sistemas de videovigilancia analógicos e IP.",
        icon: "lightning",
      },
      {
        title: "Cámaras y Grabadores",
        text: "Identificar, instalar y configurar cámaras, DVR, NVR y sus principales componentes de hardware.",
        icon: "gear",
      },
      {
        title: "Instalación y Cableado",
        text: "Seleccionar correctamente cables, conectores y dispositivos de transmisión según el entorno de instalación.",
        icon: "tools",
      },
      {
        title: "Alarmas y seguridad",
        text: "Instalar y configurar sistemas de alarmas, sensores de movimiento y canales de control de intrusión.",
        icon: "shield",
      },
    ],

    // Malla curricular (Estructurada para mantener los 10 módulos premium)
    modules: [
      {
        number: 1,
        title: "Fundamentos de CCTV y seguridad electrónica",
        items: [
          "Introducción a los sistemas de videovigilancia",
          "Historia y evolución de la seguridad electrónica",
          "Conceptos básicos de óptica y luz",
        ],
      },
      {
        number: 2,
        title: "Tecnología de cámaras y lentes",
        items: [
          "Tipos de cámaras (Bullet, Domo, PTZ)",
          "Resoluciones y formatos de video",
          "Visión nocturna e infrarrojos",
        ],
      },
      {
        number: 3,
        title: "Medios de transmisión y cableado",
        items: [
          "Cable coaxial y conectores BNC",
          "Cable UTP y video baluns",
          "Fuentes de alimentación y cajas de distribución",
        ],
      },
      {
        number: 4,
        title: "Grabadores digitales (DVR)",
        items: [
          "Hardware y conexiones traseras",
          "Instalación y configuración de discos duros",
          "Configuración de grabación por movimiento",
        ],
      },
      {
        number: 5,
        title: "Configuración de red y monitoreo",
        items: [
          "Configuración de red local (LAN)",
          "Apertura de puertos y DDNS",
          "Visualización en smartphones y PC",
        ],
      },
      {
        number: 6,
        title: "Introducción a la tecnología IP",
        items: [
          "Diferencias entre análogo e IP",
          "Cámaras IP y grabadores NVR",
          "Switches PoE y configuración básica",
        ],
      },
      {
        number: 7,
        title: "Sistemas de detección de intrusión",
        items: [
          "Componentes de un sistema de alarma",
          "Tipos de zonas de seguridad",
          "Paneles de control y teclados",
        ],
      },
      {
        number: 8,
        title: "Sensores y dispositivos periféricos",
        items: [
          "Sensores de movimiento (PIR)",
          "Contactos magnéticos para puertas y ventanas",
          "Sirenas y dispositivos de notificación",
        ],
      },
      {
        number: 9,
        title: "Mantenimiento y diagnóstico",
        items: [
          "Mantenimiento preventivo de cámaras",
          "Detección de fallas en video y alimentación",
          "Herramientas de diagnóstico técnico",
        ],
      },
      {
        number: 10,
        title: "Diseño de proyectos de seguridad",
        items: [
          "Levantamiento de información en campo",
          "Ubicación estratégica de dispositivos",
          "Normativa legal y ética en videovigilancia",
          "Evaluación práctica final",
        ],
      },
    ],

    // Perfiles e Instructor
    instructor: {
      name: "Especialista en Seguridad",
      role: "Técnico Experto en Seguridad Electrónica y Redes",
    },

    profiles: {
      egresado:
        "El egresado podrá desempeñarse como instalador de sistemas CCTV analógico e IP, instalador de alarmas, soporte técnico en sistemas de vigilancia y técnico independiente en seguridad electrónica residencial y comercial.",
      profesional: [
        "Instalador de sistemas CCTV y Alarmas",
        "Soporte técnico en seguridad electrónica",
        "Asesor de ventas en equipos de seguridad",
        "Integrador de soluciones de videovigilancia",
      ],
    },

    // Testimonios
    testimonials: [
      {
        name: "Camilo G.",
        text: "El curso es muy completo, la aplicación práctica es la mejor forma de aprender realmente cómo configurar los equipos.",
        rating: 5,
      },
      {
        name: "Nicolas H.",
        text: "La formación es muy buena. Se trabaja con equipos reales y escenarios que uno se encuentra en el trabajo diario.",
        rating: 5,
      },
    ],
  },
  {
    id: 8,
    slug: "reparacion-computadores",
    title: "REPARACIÓN DE COMPUTADORES",
    subtitle: "Diagnóstico y mantenimiento de hardware y software",

    // Datos específicos del diseño de la presentación
    resolution: "Resolución del 11 de abril de 2025",
    duration: "40 horas",
    modality: "Presencial",
    titleObtained: "Curso de Instalación y Mantenimiento de Computadores",
    isTop: false,
    iconName: "cpu", // O "cpu" si tienes ese ícono disponible

    // Imagen de fondo temática para el Hero
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2000&auto=format&fit=crop",

    desc: "El programa está orientado a la formación en el reconocimiento, funcionamiento, diagnóstico y mantenimiento de los componentes físicos y lógicos de un computador. El estudiante adquiere conocimientos sólidos para intervenir equipos reales de forma segura y eficiente.",

    aboutHighlights: [
      "El curso profundiza en la interacción entre hardware y software, cubriendo desde electricidad básica aplicada hasta sistemas de refrigeración, almacenamiento y periféricos.",
      "La formación combina fundamentos teóricos con prácticas intensivas, preparando al estudiante para garantizar el correcto funcionamiento de equipos de escritorio y portátiles en entornos profesionales.",
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Componentes del computador",
        text: "Identificar y comprender el funcionamiento de los componentes internos y externos de una PC.",
        icon: "gear",
      },
      {
        title: "Electricidad aplicada",
        text: "Aplicar conceptos básicos de voltaje, corriente, potencia y ley de Ohm en equipos de cómputo.",
        icon: "lightning",
      },
      {
        title: "Diagnóstico de hardware",
        text: "Detectar fallas comunes en computadores mediante análisis técnico y verificación de componentes.",
        icon: "tools",
      },
      {
        title: "Mantenimiento y reparación",
        text: "Realizar mantenimiento preventivo y correctivo en equipos de escritorio y portátiles.",
        icon: "shield",
      },
    ],

    // Malla curricular (Estructurada para mantener los 10 módulos premium)
    modules: [
      {
        number: 1,
        title: "Fundamentos de computación y sistemas informáticos",
        items: [
          "Conceptos básicos de informática",
          "Evolución del hardware y software",
          "Arquitectura básica de un sistema informático",
        ],
      },
      {
        number: 2,
        title: "Arquitectura interna: La Placa Base y Procesador",
        items: [
          "Identificación de sockets y chipsets",
          "Funcionamiento de la CPU y memoria caché",
          "Buses de datos y ranuras de expansión",
        ],
      },
      {
        number: 3,
        title: "Memoria y Almacenamiento",
        items: [
          "Tipos de memoria RAM (DDR3, DDR4, DDR5)",
          "Dispositivos de almacenamiento (HDD, SSD, M.2)",
          "Configuración de particiones y sistemas de archivos",
        ],
      },
      {
        number: 4,
        title: "Electricidad básica y Fuentes de Poder",
        items: [
          "Uso del multímetro en la reparación de PC",
          "Voltajes de salida de la fuente de poder",
          "Protección contra sobrecargas y estática",
        ],
      },
      {
        number: 5,
        title: "Sistemas de refrigeración",
        items: [
          "Importancia del control térmico",
          "Tipos de disipadores y ventiladores",
          "Aplicación correcta de pasta térmica",
        ],
      },
      {
        number: 6,
        title: "Puertos, cables y periféricos",
        items: [
          "Interfaces de video (HDMI, DisplayPort, VGA)",
          "Conectores USB, SATA y alimentación",
          "Configuración de periféricos de entrada y salida",
        ],
      },
      {
        number: 7,
        title: "Instalación de Sistemas Operativos",
        items: [
          "Configuración de la BIOS/UEFI",
          "Instalación desde cero de Windows y Linux",
          "Gestión de usuarios y seguridad básica",
        ],
      },
      {
        number: 8,
        title: "Software y Controladores (Drivers)",
        items: [
          "Búsqueda e instalación de drivers oficiales",
          "Optimización del inicio del sistema",
          "Herramientas esenciales de mantenimiento lógico",
        ],
      },
      {
        number: 9,
        title: "Diagnóstico de fallas comunes",
        items: [
          "Interpretación de pitidos de la placa base",
          "Análisis de pantallas azules (BSOD)",
          "Pruebas de estrés para hardware",
        ],
      },
      {
        number: 10,
        title: "Mantenimiento preventivo y correctivo",
        items: [
          "Protocolos de limpieza física profunda",
          "Sustitución de componentes defectuosos",
          "Armado y desarmado completo de equipos reales",
          "Evaluación práctica final",
        ],
      },
    ],

    // Perfiles e Instructor
    instructor: {
      name: "Especialista en Hardware",
      role: "Técnico Senior en Soporte Informático y Sistemas",
    },

    profiles: {
      egresado:
        "El egresado podrá realizar mantenimiento y reparación de equipos de cómputo, diagnosticar fallas de hardware, instalar software y desempeñarse en áreas de soporte técnico o de forma independiente.",
      profesional: [
        "Auxiliar de soporte técnico",
        "Técnico de hardware",
        "Asistente en áreas de sistemas",
        "Operario de servicio en empresas de tecnología",
        "Técnico independiente en reparación de computadores",
      ],
    },

    // Testimonios
    testimonials: [
      {
        name: "Julian A.",
        text: "Aprendí a identificar fallas y a entender cómo funciona el hardware de manera muy clara.",
        rating: 5,
      },
      {
        name: "Sebastian R.",
        text: "Este programa facilita el mantenimiento y la reparación de equipos reales. Muy recomendado.",
        rating: 5,
      },
    ],
  },
  {
    id: 9,
    slug: "reparacion-celulares",
    title: "REPARACIÓN DE CELULARES",
    subtitle: "Diagnóstico, micro-soldadura y reparación",

    // Datos específicos del diseño de la presentación
    resolution: "Resolución del 11 de abril de 2025",
    duration: "40 horas",
    modality: "Presencial",
    titleObtained: "Curso de Reparación y Mantenimiento de Celulares",
    isTop: false,
    iconName: "smartphone",

    // Imagen de fondo temática para el Hero
    img: "https://images.unsplash.com/photo-1576613109753-27804de2cba8?q=80&w=2000&auto=format&fit=crop",

    desc: "El programa está orientado a la reparación avanzada de dispositivos móviles, combinando conocimientos de hardware, software y micro-soldadura aplicada. El estudiante aprende a diagnosticar fallas, reemplazar componentes y manejar herramientas actualizadas, integrando nociones de emprendimiento para el entorno técnico y comercial.",

    aboutHighlights: [
      "La formación abarca desde el cambio de periféricos básicos hasta técnicas avanzadas de micro-soldadura en componentes SMD e IC Chips, utilizando maquinaria de última generación.",
      "El curso integra el uso de software de diagnóstico y control de trabajo, preparando al estudiante no solo para reparar, sino para administrar su propio servicio técnico o laboratorio de electrónica móvil.",
    ],

    // Sección: ¿Qué vas a aprender?
    learnings: [
      {
        title: "Diagnóstico técnico",
        text: "Identificar fallas comunes en dispositivos móviles mediante análisis profundo de hardware y software.",
        icon: "lightning",
      },
      {
        title: "Reparación de componentes",
        text: "Realizar cambio de partes, periféricos y solución de problemas mecánicos y electrónicos frecuentes.",
        icon: "tools",
      },
      {
        title: "Micro-soldadura avanzada",
        text: "Aplicar técnicas de micro-soldadura en placas base, componentes SMD y circuitos integrados (IC Chips).",
        icon: "fire",
      },
      {
        title: "Herramientas y software",
        text: "Manejar estaciones de calor, microscopios y software especializado de diagnóstico y flasheo.",
        icon: "gear",
      },
    ],

    // Malla curricular (Estructurada para mantener los 10 módulos premium)
    modules: [
      {
        number: 1,
        title: "Introducción al mundo de la telefonía móvil",
        items: [
          "Panorama del mercado de reparación de celulares",
          "Administración básica del servicio técnico",
          "Emprendimiento aplicado a la reparación",
        ],
      },
      {
        number: 2,
        title: "Arquitectura y componentes de hardware",
        items: [
          "Identificación de partes internas",
          "Diferencias entre tecnologías de pantallas (LCD, OLED, AMOLED)",
          "Estructura de la placa base (Mainboard)",
        ],
      },
      {
        number: 3,
        title: "Herramientas y estación de trabajo",
        items: [
          "Uso correcto del multímetro y fuente de poder",
          "Manejo de la estación de calor y cautín",
          "Herramientas de apertura y pegantes especiales",
        ],
      },
      {
        number: 4,
        title: "Desarme y cambio de periféricos",
        items: [
          "Técnicas de apertura segura de dispositivos",
          "Cambio de pantallas y visores",
          "Sustitución de baterías, cámaras y flexores",
        ],
      },
      {
        number: 5,
        title: "Electrónica aplicada y lectura de esquemas",
        items: [
          "Componentes electrónicos en dispositivos móviles",
          "Interpretación de planos esquemáticos y layout",
          "Seguimiento de líneas de voltaje en la placa",
        ],
      },
      {
        number: 6,
        title: "Técnicas de Micro-soldadura",
        items: [
          "Remoción y limpieza de soldadura vieja",
          "Técnicas de Reballing básico",
          "Soldadura de conectores de carga y FPC",
        ],
      },
      {
        number: 7,
        title: "Reparación avanzada de placa base",
        items: [
          "Diagnóstico de cortos en líneas principales",
          "Identificación de fallas en integrados de carga (U2/Tristar)",
          "Intervención de componentes SMD",
        ],
      },
      {
        number: 8,
        title: "Software de diagnóstico y recuperación",
        items: [
          "Uso de software para pruebas de hardware",
          "Flasheo y actualización de sistemas operativos",
          "Cuentas de usuario y bloqueos de seguridad",
        ],
      },
      {
        number: 9,
        title: "Sistemas operativos y optimización",
        items: [
          "Diferencias técnicas entre Android e iOS",
          "Root, Jailbreak y particiones del sistema",
          "Copia de seguridad y migración de datos",
        ],
      },
      {
        number: 10,
        title: "Gestión técnica y evaluación final",
        items: [
          "Control de calidad y garantías",
          "Atención al cliente y presupuestos técnicos",
          "Evaluación práctica de reparación real",
        ],
      },
    ],

    // Perfiles e Instructor
    instructor: {
      name: "Especialista en Micro-electrónica",
      role: "Técnico Experto en Reparación de Dispositivos Móviles",
    },

    profiles: {
      egresado:
        "El egresado estará en capacidad de realizar diagnósticos avanzados, reparaciones de hardware y software, y micro-soldadura en dispositivos móviles, aplicando criterios técnicos y administrativos de calidad.",
      profesional: [
        "Técnico en reparación de dispositivos móviles",
        "Auxiliar de servicio técnico en telefonía celular",
        "Operario de laboratorio de reparación electrónica",
        "Técnico independiente con enfoque en emprendimiento",
        "Apoyo técnico en centros de servicio y tiendas tecnológicas",
      ],
    },

    // Testimonios
    testimonials: [
      {
        name: "Miguel Z.",
        text: "El curso es muy completo y el docente tiene mucha paciencia para explicar las técnicas de soldadura.",
        rating: 5,
      },
      {
        name: "Eduardo H.",
        text: "Este programa facilita mucho el aprendizaje con equipos reales y herramientas de última tecnología.",
        rating: 5,
      },
    ],
  },
];
