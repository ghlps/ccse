export interface Question {
  id: number;
  section: string;
  question: string;
  options: string[];
  correctAnswer: number;
  comment: string;
}

export const SECTIONS = [
  "Gobierno y legislación",
  "Derechos y deberes",
  "Organización territorial",
  "Cultura y sociedad",
] as const;

export const questions: Question[] = [
  // =============================================
  // SECCIÓN: Gobierno y legislación (1001-1106)
  // =============================================
  {
    id: 1001,
    section: "Gobierno y legislación",
    question: "España es...",
    options: [
      "una monarquía parlamentaria.",
      "una república federal.",
      "una monarquía federal.",
    ],
    correctAnswer: 0,
    comment:
      "El artículo 1.3 de la Constitución de 1978 define la forma política del Estado español como monarquía parlamentaria: el rey es jefe del Estado, pero el poder de decisión política recae en el Gobierno y en el Parlamento, elegidos democráticamente.",
  },
  {
    id: 1002,
    section: "Gobierno y legislación",
    question: "La ley fundamental de España se llama...",
    options: ["Constitución.", "Ley básica.", "Ordenamiento esencial."],
    correctAnswer: 0,
    comment:
      "La Constitución de 1978 es la norma suprema del ordenamiento jurídico español: todas las demás leyes, reglamentos y estatutos deben ajustarse a ella, y su reforma exige procedimientos agravados.",
  },
  {
    id: 1003,
    section: "Gobierno y legislación",
    question:
      "Según la Constitución española, la soberanía nacional reside en...",
    options: [
      "el pueblo español.",
      "el Gobierno del Estado.",
      "el Congreso de los Diputados.",
    ],
    correctAnswer: 0,
    comment:
      "El artículo 1.2 establece que la soberanía nacional reside en el pueblo español, del que emanan todos los poderes del Estado; por eso las Cortes, el Gobierno y los jueces actúan en su nombre, no al revés.",
  },
  {
    id: 1004,
    section: "Gobierno y legislación",
    question: "El Instituto de las Mujeres es...",
    options: ["una institución europea.", "un organismo español.", "una ONG."],
    correctAnswer: 1,
    comment:
      "El Instituto de las Mujeres es un organismo autónomo público adscrito al Ministerio de Igualdad, encargado de promover la igualdad de género y coordinar políticas contra la discriminación y la violencia machista.",
  },
  {
    id: 1005,
    section: "Gobierno y legislación",
    question: "¿Cuándo puedo hacer los trámites en la sede electrónica?",
    options: [
      "En cualquier horario.",
      "Únicamente por la mañana.",
      "De lunes a viernes.",
    ],
    correctAnswer: 0,
    comment:
      "La sede electrónica de la Administración permite realizar trámites administrativos las 24 horas del día, los 365 días del año, sin necesidad de desplazarse a una oficina ni respetar horarios de atención al público.",
  },
  {
    id: 1006,
    section: "Gobierno y legislación",
    question: "El castellano o español es lengua oficial...",
    options: [
      "en toda España.",
      "solo donde no hay otras lenguas.",
      "en toda la península ibérica.",
    ],
    correctAnswer: 0,
    comment:
      "El artículo 3.1 de la Constitución establece el castellano como lengua oficial del Estado en todo el territorio, con el deber de conocerla y el derecho a usarla; esto coexiste con las lenguas cooficiales de algunas comunidades.",
  },
  {
    id: 1007,
    section: "Gobierno y legislación",
    question: "¿Cuál de estas fuerzas de seguridad es de ámbito autonómico?",
    options: ["Policía local.", "Guardia Civil.", "Policía Foral de Navarra."],
    correctAnswer: 2,
    comment:
      "La Policía Foral de Navarra es un cuerpo policial propio de esa comunidad foral, distinto de los cuerpos de ámbito nacional (Policía Nacional, Guardia Civil) y de la policía municipal.",
  },
  {
    id: 1008,
    section: "Gobierno y legislación",
    question: "¿Qué fuerza de seguridad está en toda España?",
    options: [
      "La Policía Foral de Navarra.",
      "El Cuerpo Nacional de Policía.",
      "Los Mossos d'Esquadra.",
    ],
    correctAnswer: 1,
    comment:
      "El Cuerpo Nacional de Policía tiene competencia en todo el territorio nacional, a diferencia de las policías autonómicas (Mossos d'Esquadra, Ertzaintza, Policía Foral), que solo actúan en su comunidad.",
  },
  {
    id: 1009,
    section: "Gobierno y legislación",
    question:
      "En la Constitución se establece la separación de poderes: el poder ejecutivo, el legislativo y el...",
    options: ["judicial.", "informativo.", "político."],
    correctAnswer: 0,
    comment:
      "La Constitución organiza el Estado según la clásica división de poderes de Montesquieu: el ejecutivo (Gobierno), el legislativo (Cortes Generales) y el judicial (jueces y tribunales), cada uno independiente de los otros.",
  },
  {
    id: 1010,
    section: "Gobierno y legislación",
    question: "La bandera de España debe utilizarse...",
    options: [
      "solo los días de fiesta oficial.",
      "en todos los edificios públicos.",
      "solo en actos del Gobierno español.",
    ],
    correctAnswer: 1,
    comment:
      "La bandera de España debe ondear de forma permanente en los edificios públicos y en los actos oficiales, según la Ley 39/1981 que regula el uso de las banderas y enseñas.",
  },
  {
    id: 1011,
    section: "Gobierno y legislación",
    question: "¿Quién es el jefe del Estado en España?",
    options: [
      "El presidente del Gobierno.",
      "El rey.",
      "El ministro de Economía.",
    ],
    correctAnswer: 1,
    comment:
      "El Título II de la Constitución (art. 56) establece que el rey es el jefe del Estado, símbolo de su unidad y permanencia, aunque no gobierna: sus funciones son sobre todo representativas y arbitrales.",
  },
  {
    id: 1012,
    section: "Gobierno y legislación",
    question: "La gestión de la sanidad es competencia de...",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 1,
    comment:
      "Desde el proceso de transferencias autonómicas, la gestión y organización de los servicios de sanidad corresponde a cada comunidad autónoma, mientras el Estado mantiene la coordinación general y la legislación básica.",
  },
  {
    id: 1013,
    section: "Gobierno y legislación",
    question:
      "¿Quién fue el primer presidente del Gobierno de España en democracia?",
    options: [
      "Mariano Rajoy.",
      "Adolfo Suárez.",
      "José Luis Rodríguez Zapatero.",
    ],
    correctAnswer: 1,
    comment:
      "Adolfo Suárez, nombrado presidente en 1976, pilotó la Transición desde el franquismo y fue el primer presidente del Gobierno elegido democráticamente tras la aprobación de la Constitución de 1978.",
  },
  {
    id: 1014,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estos organismos se encarga de interpretar la Constitución?",
    options: [
      "El Poder Constitucional.",
      "El Tribunal Constitucional.",
      "El Consejo General del Poder Judicial.",
    ],
    correctAnswer: 1,
    comment:
      "El Tribunal Constitucional es el máximo intérprete de la Constitución: resuelve recursos de inconstitucionalidad y de amparo, y sus sentencias vinculan a todos los poderes públicos.",
  },
  {
    id: 1015,
    section: "Gobierno y legislación",
    question: "¿Quién modera el funcionamiento de las instituciones españolas?",
    options: [
      "El presidente del Gobierno.",
      "El rey.",
      "El director de la Real Academia Española.",
    ],
    correctAnswer: 1,
    comment:
      "Según el artículo 56 de la Constitución, el rey modera el funcionamiento regular de las instituciones, actuando como árbitro neutral por encima de los partidos, sin ejercer poder ejecutivo directo.",
  },
  {
    id: 1016,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llama la cámara de representación territorial en España?",
    options: [
      "Senado.",
      "Diputación permanente.",
      "Congreso de los Diputados.",
    ],
    correctAnswer: 0,
    comment:
      "El Senado es, por definición constitucional, la cámara de representación territorial, en la que están presentes las comunidades autónomas, aunque en la práctica el Congreso concentra la mayor parte de la iniciativa legislativa.",
  },
  {
    id: 1017,
    section: "Gobierno y legislación",
    question:
      "¿Qué se necesita para hacer trámites por internet con la Administración?",
    options: [
      "Un pasaporte válido.",
      "Una firma electrónica.",
      "Una firma en papel.",
    ],
    correctAnswer: 1,
    comment:
      "Para identificarse y firmar documentos ante la Administración por internet se necesita un certificado o firma electrónica (por ejemplo, DNI electrónico, Cl@ve o un certificado digital reconocido).",
  },
  {
    id: 1018,
    section: "Gobierno y legislación",
    question: "¿Cómo se aprobó la Constitución?",
    options: [
      "Por imposición legal.",
      "Por referéndum.",
      "Por el Tribunal Constitucional.",
    ],
    correctAnswer: 1,
    comment:
      "La Constitución de 1978 fue redactada por una ponencia de las Cortes Constituyentes y aprobada mediante referéndum popular el 6 de diciembre de 1978, con un amplio respaldo ciudadano.",
  },
  {
    id: 1019,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llama la ley más importante de cada comunidad autónoma?",
    options: [
      "Estatuto de Autonomía.",
      "Normativa autonómica.",
      "Ley de la comunidad.",
    ],
    correctAnswer: 0,
    comment:
      "El Estatuto de Autonomía es la norma institucional básica de cada comunidad: fija su nombre, territorio, instituciones propias y las competencias que asume, y solo puede reformarse siguiendo un procedimiento especial.",
  },
  {
    id: 1020,
    section: "Gobierno y legislación",
    question:
      "Las instalaciones culturales y deportivas públicas son competencia del...",
    options: [
      "Ayuntamiento.",
      "Ministerio de Educación, Formación Profesional y Deportes.",
      "Ministerio de Igualdad.",
    ],
    correctAnswer: 0,
    comment:
      "Los servicios y equipamientos de proximidad, como polideportivos, bibliotecas o centros culturales municipales, son competencia del Ayuntamiento, dentro de la Administración local.",
  },
  {
    id: 1021,
    section: "Gobierno y legislación",
    question: "¿Quién dirige la administración militar de España?",
    options: ["Los ayuntamientos.", "El Gobierno.", "Las Cortes Generales."],
    correctAnswer: 1,
    comment:
      "El artículo 97 de la Constitución atribuye al Gobierno la dirección de la Administración militar y de la defensa del Estado, si bien el mando supremo de las Fuerzas Armadas corresponde al rey de forma simbólica.",
  },
  {
    id: 1022,
    section: "Gobierno y legislación",
    question: "¿Qué hay en las Islas Baleares, en vez de diputaciones?",
    options: ["Cabildos.", "Consejos insulares.", "Centros de diputados."],
    correctAnswer: 1,
    comment:
      "En las Islas Baleares, cada isla mayor (Mallorca, Menorca, Ibiza y Formentera) cuenta con un consejo insular, que asume funciones equivalentes a las de una diputación provincial además de competencias propias.",
  },
  {
    id: 1023,
    section: "Gobierno y legislación",
    question: "¿Qué ciudad tiene más habitantes?",
    options: ["Sevilla.", "Barcelona.", "Zaragoza."],
    correctAnswer: 1,
    comment:
      "Barcelona es la segunda ciudad más poblada de España, solo por detrás de Madrid, y supera claramente en número de habitantes a Sevilla y Zaragoza.",
  },
  {
    id: 1024,
    section: "Gobierno y legislación",
    question: "Las Cortes Generales representan...",
    options: [
      "al pueblo español.",
      "a los partidos políticos.",
      "a los ministros.",
    ],
    correctAnswer: 0,
    comment:
      "El artículo 66 de la Constitución dice literalmente que las Cortes Generales representan al pueblo español; sus miembros son elegidos por sufragio universal para ejercer esa representación.",
  },
  {
    id: 1025,
    section: "Gobierno y legislación",
    question: "El Congreso de los Diputados y el Senado constituyen el poder…",
    options: ["ejecutivo.", "legislativo.", "judicial."],
    correctAnswer: 1,
    comment:
      "Congreso y Senado, unidos bajo el nombre de Cortes Generales, ejercen conjuntamente el poder legislativo del Estado: elaboran, debaten y aprueban las leyes.",
  },
  {
    id: 1026,
    section: "Gobierno y legislación",
    question: "¿Cómo pueden los ciudadanos proponer nuevas leyes al Congreso?",
    options: [
      "Reuniendo 500 000 firmas.",
      "Solicitándolo al rey.",
      "Creando una asociación.",
    ],
    correctAnswer: 0,
    comment:
      "La iniciativa legislativa popular, regulada por ley orgánica, exige reunir un mínimo de 500.000 firmas acreditadas de ciudadanos para que una propuesta de ley pueda tramitarse en el Congreso.",
  },
  {
    id: 1027,
    section: "Gobierno y legislación",
    question: "¿Cuántas comunidades autónomas hay en España?",
    options: ["8.", "17.", "25."],
    correctAnswer: 1,
    comment:
      "España está organizada territorialmente en 17 comunidades autónomas, a las que se suman las dos ciudades autónomas de Ceuta y Melilla, cada una con su propio Estatuto e instituciones de autogobierno.",
  },
  {
    id: 1028,
    section: "Gobierno y legislación",
    question: "Los colores de la bandera española son…",
    options: ["blanco y rojo.", "rojo y amarillo.", "amarillo y blanco."],
    correctAnswer: 1,
    comment:
      "La bandera española combina franjas roja, amarilla (gualda) y roja, con el amarillo ocupando el doble de anchura; en los edificios oficiales suele incluir además el escudo nacional.",
  },
  {
    id: 1029,
    section: "Gobierno y legislación",
    question: "¿Dónde está la sede del Gobierno de España?",
    options: ["En Madrid.", "En Barcelona.", "En Sevilla."],
    correctAnswer: 0,
    comment:
      "Madrid es la capital del Estado y sede de las principales instituciones nacionales, entre ellas el Gobierno, las Cortes Generales y la Casa Real.",
  },
  {
    id: 1030,
    section: "Gobierno y legislación",
    question:
      "La bandera azul con 12 estrellas amarillas en círculo es la bandera de…",
    options: [
      "la Unión Europea.",
      "el Parlamento Europeo.",
      "la Comisión de Europa.",
    ],
    correctAnswer: 0,
    comment:
      "La bandera azul con doce estrellas amarillas dispuestas en círculo es el símbolo oficial de la Unión Europea; el número doce representa la perfección y la unidad, no el número de países miembros.",
  },
  {
    id: 1031,
    section: "Gobierno y legislación",
    question: "En las elecciones municipales se vota a…",
    options: [
      "alcaldes y concejales.",
      "ministros y ministras.",
      "diputados y senadores.",
    ],
    correctAnswer: 0,
    comment:
      "En las elecciones municipales los ciudadanos votan a los concejales de su Ayuntamiento; a partir de ellos, en la sesión constitutiva se elige al alcalde o alcaldesa.",
  },
  {
    id: 1032,
    section: "Gobierno y legislación",
    question: "¿Qué lengua es oficial en el País Vasco?",
    options: ["El bable.", "El aragonés.", "El euskera."],
    correctAnswer: 2,
    comment:
      "El euskera es lengua cooficial, junto al castellano, en el País Vasco y en parte de Navarra; es una de las pocas lenguas europeas sin parentesco conocido con las lenguas indoeuropeas.",
  },
  {
    id: 1033,
    section: "Gobierno y legislación",
    question: "Todos los españoles tienen el deber de conocer la lengua…",
    options: [
      "autonómica del Estado.",
      "oficial del Estado.",
      "local del Estado.",
    ],
    correctAnswer: 1,
    comment:
      "El artículo 3.1 de la Constitución impone a todos los españoles el deber de conocer el castellano, lengua oficial del Estado, y el derecho a usarlo en cualquier parte del territorio.",
  },
  {
    id: 1034,
    section: "Gobierno y legislación",
    question:
      "El aranés es una lengua cooficial que se habla en un pequeño territorio de…",
    options: ["Cataluña.", "La Rioja.", "Aragón."],
    correctAnswer: 0,
    comment:
      "El aranés, variante del occitano, es cooficial junto al catalán y el castellano en el Valle de Arán, comarca pirenaica situada en Cataluña.",
  },
  {
    id: 1035,
    section: "Gobierno y legislación",
    question:
      "Las instituciones de una comunidad autónoma son: el consejo de gobierno, el presidente y…",
    options: [
      "el ayuntamiento.",
      "la asamblea legislativa.",
      "la delegación de gobierno.",
    ],
    correctAnswer: 1,
    comment:
      "Cada comunidad autónoma cuenta, como mínimo, con una asamblea legislativa elegida por sufragio, un consejo de gobierno con funciones ejecutivas y un presidente que dirige ambos.",
  },
  {
    id: 1036,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?",
    options: ["El gallego.", "El aragonés.", "El murciano."],
    correctAnswer: 0,
    comment:
      "El gallego es lengua cooficial en Galicia junto al castellano, y comparte raíces con el portugués al proceder ambos del antiguo galaico-portugués medieval.",
  },
  {
    id: 1037,
    section: "Gobierno y legislación",
    question:
      "¿Qué institución tiene como fin la promoción de la enseñanza de la lengua española y la difusión de la cultura en español?",
    options: [
      "El Instituto Nacional de Administración Pública.",
      "El Instituto Nacional de Estadística.",
      "El Instituto Cervantes.",
    ],
    correctAnswer: 2,
    comment:
      "El Instituto Cervantes, creado en 1991, promueve la enseñanza del español y difunde la cultura hispana en el mundo a través de una amplia red de centros en decenas de países.",
  },
  {
    id: 1038,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de los siguientes organismos trabaja para conseguir la normalización lingüística?",
    options: [
      "El Institut Ramon Llull.",
      "El Instituto Cervantes.",
      "La Real Academia Española.",
    ],
    correctAnswer: 2,
    comment:
      "La Real Academia Española (RAE), fundada en 1713, vela por la unidad y correcto uso del español, elaborando el diccionario, la gramática y la ortografía de referencia para todo el mundo hispanohablante.",
  },
  {
    id: 1039,
    section: "Gobierno y legislación",
    question: "¿Dónde vive el presidente del Gobierno?",
    options: [
      "En el Palacio Real.",
      "En el Palacio de la Zarzuela.",
      "En el Palacio de la Moncloa.",
    ],
    correctAnswer: 2,
    comment:
      "El presidente del Gobierno reside y despacha oficialmente en el Complejo de la Moncloa, en Madrid, que también alberga las oficinas de la Presidencia.",
  },
  {
    id: 1040,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de los siguientes cuerpos forma parte de las Fuerzas Armadas de España?",
    options: [
      "La Policía Foral.",
      "La Guardia Civil.",
      "El Ejército del Aire.",
    ],
    correctAnswer: 2,
    comment:
      "El Ejército del Aire y del Espacio, junto al Ejército de Tierra y la Armada, integra las Fuerzas Armadas españolas; la Guardia Civil, en cambio, es una fuerza de seguridad de naturaleza militar pero no forma parte de ellas.",
  },
  {
    id: 1041,
    section: "Gobierno y legislación",
    question: "¿Quiénes forman parte del Gobierno?",
    options: ["Los ministros.", "Los concejales.", "Los alcaldes."],
    correctAnswer: 0,
    comment:
      "El Gobierno está compuesto por el presidente, los vicepresidentes (cuando los hay) y los ministros, que dirigen los distintos departamentos y ejecutan las políticas del Estado.",
  },
  {
    id: 1042,
    section: "Gobierno y legislación",
    question: "España es un…",
    options: [
      "estado social y democrático de Derecho.",
      "estado libre asociado.",
      "estado confederado.",
    ],
    correctAnswer: 0,
    comment:
      "El artículo 1.1 de la Constitución define a España como Estado social y democrático de Derecho, lo que implica el sometimiento de los poderes públicos a la ley y el compromiso con el bienestar social.",
  },
  {
    id: 1043,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de las siguientes siglas corresponde a un partido político?",
    options: ["PP.", "PIB.", "UE."],
    correctAnswer: 0,
    comment:
      "PP corresponde al Partido Popular, una de las principales formaciones políticas españolas; PIB y UE son, en cambio, siglas económicas e institucionales (Producto Interior Bruto y Unión Europea).",
  },
  {
    id: 1044,
    section: "Gobierno y legislación",
    question: "¿Qué título tiene la futura reina, hija del rey?",
    options: [
      "Princesa de Asturias.",
      "Princesa de Aragón.",
      "Duquesa de Alba.",
    ],
    correctAnswer: 0,
    comment:
      "El título de Princesa de Asturias corresponde tradicionalmente al heredero o heredera de la Corona española; lo ostenta actualmente la princesa Leonor.",
  },
  {
    id: 1045,
    section: "Gobierno y legislación",
    question:
      "¿Con qué rey se restaura la democracia en España después del régimen de Franco?",
    options: ["Con Carlos III.", "Con Alfonso XIII.", "Con Juan Carlos I."],
    correctAnswer: 2,
    comment:
      "Juan Carlos I, proclamado rey en 1975 tras la muerte de Franco, impulsó junto a Adolfo Suárez la Transición que devolvió la democracia a España y culminó con la Constitución de 1978.",
  },
  {
    id: 1046,
    section: "Gobierno y legislación",
    question: "¿En qué año se aprobó la Constitución española?",
    options: ["En 1957.", "En 1978.", "En 2001."],
    correctAnswer: 1,
    comment:
      "La Constitución española fue aprobada en referéndum el 6 de diciembre de 1978 y sancionada por el rey ante las Cortes el 27 de diciembre de ese mismo año.",
  },
  {
    id: 1047,
    section: "Gobierno y legislación",
    question: "¿Cuántas comunidades autónomas tienen su propia bandera?",
    options: ["Ninguna.", "Todas.", "Las que tienen una lengua cooficial."],
    correctAnswer: 1,
    comment:
      "Todas las comunidades autónomas cuentan con su propia bandera, reconocida en sus respectivos Estatutos de Autonomía como símbolo de identidad regional, independientemente de que tengan o no lengua cooficial.",
  },
  {
    id: 1048,
    section: "Gobierno y legislación",
    question:
      "¿Qué organismo oficial atiende las quejas de los ciudadanos por el mal funcionamiento de las administraciones?",
    options: [
      "La Oficina de Atención al Consumidor.",
      "La Policía Nacional.",
      "El Defensor del Pueblo.",
    ],
    correctAnswer: 2,
    comment:
      "El Defensor del Pueblo es un alto comisionado de las Cortes Generales que supervisa la actividad de las administraciones públicas y tramita gratuitamente las quejas de los ciudadanos que se sientan perjudicados por ellas.",
  },
  {
    id: 1049,
    section: "Gobierno y legislación",
    question:
      "¿Cuántas firmas, como mínimo, deben recoger los ciudadanos para poder presentar una proposición de ley?",
    options: ["250 000.", "100 000.", "500 000."],
    correctAnswer: 2,
    comment:
      "La ley orgánica reguladora de la iniciativa legislativa popular exige un mínimo de 500.000 firmas acreditadas para que el Congreso admita a trámite una proposición de ley presentada por ciudadanos.",
  },
  {
    id: 1050,
    section: "Gobierno y legislación",
    question:
      "¿A cuál de las siguientes organizaciones internacionales pertenece España?",
    options: [
      "Comunidad de Estados Independientes (CEI).",
      "Fondo Monetario Internacional (FMI).",
      "Unión Económica Euroasiática (UEE).",
    ],
    correctAnswer: 1,
    comment:
      "España es miembro del Fondo Monetario Internacional (FMI) desde 1958, además de pertenecer a organizaciones como la ONU, la OTAN y la Unión Europea; las otras dos opciones agrupan a países del espacio postsoviético.",
  },
  {
    id: 1051,
    section: "Gobierno y legislación",
    question:
      "En la organización de la Administración se distinguen tres niveles: central, autonómica y…",
    options: ["estatal.", "regional.", "local."],
    correctAnswer: 2,
    comment:
      "La Administración pública española se organiza en tres niveles territoriales: la Administración General del Estado (central), las administraciones autonómicas y la Administración local (ayuntamientos y diputaciones).",
  },
  {
    id: 1052,
    section: "Gobierno y legislación",
    question: "El poder legislativo corresponde...",
    options: [
      "al presidente y los ministros.",
      "a los jueces y magistrados.",
      "a los diputados y senadores.",
    ],
    correctAnswer: 2,
    comment:
      "Diputados y senadores, que integran conjuntamente las Cortes Generales, son quienes ejercen el poder legislativo elaborando y aprobando las leyes del Estado.",
  },
  {
    id: 1053,
    section: "Gobierno y legislación",
    question: "¿Dónde vive el rey?",
    options: [
      "En el Palacio de la Moneda.",
      "En el Palacio de la Zarzuela.",
      "En el Palacio de la Moncloa.",
    ],
    correctAnswer: 1,
    comment:
      "El rey y la familia real residen y despachan en el Palacio de la Zarzuela, situado en las afueras de Madrid, mientras que el Palacio Real se usa sobre todo para actos oficiales y de Estado.",
  },
  {
    id: 1054,
    section: "Gobierno y legislación",
    question: "El nombre oficial del parlamento español es…",
    options: ["Cortes Generales.", "Congreso de los Diputados.", "Senado."],
    correctAnswer: 0,
    comment:
      "Cortes Generales es la denominación oficial que la Constitución da al conjunto del Parlamento español, formado por el Congreso de los Diputados y el Senado.",
  },
  {
    id: 1055,
    section: "Gobierno y legislación",
    question:
      "El Instituto de Comercio Exterior de España, el Instituto de las Mujeres y la Dirección General de Tráfico…",
    options: [
      "son organismos autónomos.",
      "dependen de ministerios.",
      "son organismos internacionales.",
    ],
    correctAnswer: 1,
    comment:
      "Estos tres organismos son organismos públicos que dependen orgánicamente de distintos ministerios (Comercio/Industria, Igualdad e Interior, respectivamente), aunque puedan tener cierta autonomía de gestión.",
  },
  {
    id: 1056,
    section: "Gobierno y legislación",
    question: "¿Quién puede reinar en España?",
    options: [
      "Solo los hombres.",
      "Solo las mujeres.",
      "Tanto los hombres como las mujeres.",
    ],
    correctAnswer: 2,
    comment:
      "La Corona española admite tanto a hombres como a mujeres, aunque la Constitución mantiene una preferencia del varón sobre la mujer en igualdad de grado dentro del orden sucesorio, una cláusula que ha sido debatida para su reforma.",
  },
  {
    id: 1057,
    section: "Gobierno y legislación",
    question: "El Tribunal de Cuentas depende de…",
    options: [
      "la Presidencia del Gobierno.",
      "las Cortes Generales.",
      "el Ministerio de Hacienda.",
    ],
    correctAnswer: 1,
    comment:
      "El Tribunal de Cuentas es el órgano fiscalizador supremo de las cuentas del Estado y del sector público, y depende directamente de las Cortes Generales para garantizar su independencia del Gobierno.",
  },
  {
    id: 1058,
    section: "Gobierno y legislación",
    question:
      "¿Quién es la tercera autoridad del Estado, después del rey y el presidente del Gobierno?",
    options: [
      "El presidente del Senado.",
      "El ministro de Economía.",
      "El presidente del Congreso de los Diputados.",
    ],
    correctAnswer: 2,
    comment:
      "En el protocolo del Estado español, el presidente del Congreso de los Diputados ocupa el tercer puesto en el orden de precedencia, inmediatamente después del rey y del presidente del Gobierno.",
  },
  {
    id: 1059,
    section: "Gobierno y legislación",
    question: "¿Qué lengua cooficial se habla en las Islas Baleares?",
    options: ["Gallego.", "Catalán.", "Euskera."],
    correctAnswer: 1,
    comment:
      "El catalán, en su variedad balear, es lengua cooficial junto al castellano en las Islas Baleares, reconocido así en el Estatuto de Autonomía de la comunidad.",
  },
  {
    id: 1060,
    section: "Gobierno y legislación",
    question:
      "La Constitución defiende valores tales como la libertad, la igualdad, el pluralismo político y…",
    options: ["la justicia.", "la solidaridad.", "la fraternidad."],
    correctAnswer: 0,
    comment:
      "El artículo 1.1 recoge la libertad, la justicia, la igualdad y el pluralismo político como los valores superiores del ordenamiento jurídico español, es decir, los principios que inspiran todas las demás normas.",
  },
  {
    id: 1061,
    section: "Gobierno y legislación",
    question:
      "Cuando una ley ya está aprobada, ¿qué necesita para poder aplicarse?",
    options: [
      "Nada.",
      "Normas que la desarrollen.",
      "Ser revisada por el Parlamento.",
    ],
    correctAnswer: 1,
    comment:
      "Muchas leyes son de carácter general y requieren un desarrollo reglamentario posterior, aprobado por el Gobierno, que concrete los detalles necesarios para su aplicación práctica.",
  },
  {
    id: 1062,
    section: "Gobierno y legislación",
    question: "¿Cuántos habitantes hay en España?",
    options: ["95 millones.", "49 millones.", "67 millones."],
    correctAnswer: 1,
    comment:
      "España tiene una población de en torno a 49 millones de habitantes, lo que la sitúa entre los países más poblados de la Unión Europea, por detrás de Alemania, Francia e Italia.",
  },
  {
    id: 1063,
    section: "Gobierno y legislación",
    question: "¿Cuál de estos es un órgano consultivo del Gobierno de España?",
    options: [
      "El Parlamento Europeo.",
      "El Consejo de Estado.",
      "El Tribunal Constitucional.",
    ],
    correctAnswer: 1,
    comment:
      "El Consejo de Estado es el órgano consultivo supremo del Gobierno: emite dictámenes preceptivos, aunque no vinculantes, sobre asuntos jurídicos y administrativos relevantes.",
  },
  {
    id: 1064,
    section: "Gobierno y legislación",
    question: "¿Quién dirige la política interior y exterior de España?",
    options: ["El rey.", "El Gobierno.", "El Congreso de los Diputados."],
    correctAnswer: 1,
    comment:
      "El artículo 97 de la Constitución encomienda al Gobierno la dirección de la política interior y exterior, de la Administración civil y militar, y de la defensa del Estado.",
  },
  {
    id: 1065,
    section: "Gobierno y legislación",
    question: "El Defensor del Pueblo depende de…",
    options: [
      "el Consejo de Ministros.",
      "el Tribunal de Cuentas.",
      "las Cortes Generales.",
    ],
    correctAnswer: 2,
    comment:
      "El Defensor del Pueblo es designado por las Cortes Generales y les rinde cuentas anualmente mediante un informe, lo que refuerza su independencia respecto del Gobierno al que supervisa.",
  },
  {
    id: 1066,
    section: "Gobierno y legislación",
    question: "El Instituto Etxepare tiene como misión la difusión del…",
    options: [
      "euskera y la cultura vasca.",
      "bable y la cultura cántabra.",
      "gallego y la cultura galaica.",
    ],
    correctAnswer: 0,
    comment:
      "El Instituto Etxepare, dependiente del Gobierno vasco, promueve el euskera y la cultura vasca fuera del País Vasco, de forma similar a como el Instituto Cervantes hace con el español.",
  },
  {
    id: 1067,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estas ciudades se encuentra entre las 10 más pobladas de España?",
    options: ["Cádiz.", "Málaga.", "Albacete."],
    correctAnswer: 1,
    comment:
      "Málaga, en la Costa del Sol andaluza, es una de las diez ciudades más pobladas de España y un importante polo turístico y tecnológico.",
  },
  {
    id: 1068,
    section: "Gobierno y legislación",
    question:
      "¿Quién puede realizar trámites en línea ante la Administración Pública?",
    options: [
      "Jueces y magistrados.",
      "Cualquier ciudadano.",
      "Abogados colegiados.",
    ],
    correctAnswer: 1,
    comment:
      "Cualquier ciudadano, español o extranjero residente, puede realizar trámites en línea con la Administración siempre que disponga de un medio de identificación electrónica válido.",
  },
  {
    id: 1069,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama el rey de España?",
    options: ["Juan Carlos I.", "Felipe VI.", "Alfonso XIII."],
    correctAnswer: 1,
    comment:
      "Felipe VI es el actual rey de España, proclamado en junio de 2014 tras la abdicación de su padre, Juan Carlos I.",
  },
  {
    id: 1070,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llama el órgano de gobierno de los jueces y magistrados?",
    options: [
      "Tribunal Supremo.",
      "Consejo General del Poder Judicial.",
      "Consejo de Estado.",
    ],
    correctAnswer: 1,
    comment:
      "El Consejo General del Poder Judicial (CGPJ) es el órgano de gobierno de jueces y magistrados: vela por su independencia y gestiona nombramientos, ascensos e inspecciones dentro de la carrera judicial.",
  },
  {
    id: 1071,
    section: "Gobierno y legislación",
    question: "¿Quién aprueba los presupuestos generales del Estado?",
    options: [
      "Las Cortes Generales.",
      "El Tribunal de Cuentas.",
      "El Gobierno de España.",
    ],
    correctAnswer: 0,
    comment:
      "Aunque es el Gobierno quien elabora el proyecto de Presupuestos Generales del Estado, corresponde a las Cortes Generales examinarlo, enmendarlo y aprobarlo definitivamente cada año.",
  },
  {
    id: 1072,
    section: "Gobierno y legislación",
    question: "La Constitución española es…",
    options: [
      "la ley fundamental.",
      "parte de otra ley.",
      "una ley secundaria.",
    ],
    correctAnswer: 0,
    comment:
      "La Constitución es la ley fundamental y suprema del ordenamiento español, por encima de cualquier otra norma; ninguna ley, decreto o reglamento puede contradecirla.",
  },
  {
    id: 1073,
    section: "Gobierno y legislación",
    question: "Las Cortes Generales están compuestas por el Senado y…",
    options: [
      "el Congreso de los Diputados.",
      "el Tribunal Supremo.",
      "el Consejo de Estado.",
    ],
    correctAnswer: 0,
    comment:
      "Las Cortes Generales forman un sistema bicameral integrado por el Congreso de los Diputados, cámara baja, y el Senado, cámara alta y de representación territorial.",
  },
  {
    id: 1074,
    section: "Gobierno y legislación",
    question: "¿Quién elabora las leyes?",
    options: [
      "El poder ejecutivo.",
      "El poder legislativo.",
      "El poder judicial.",
    ],
    correctAnswer: 1,
    comment:
      "El poder legislativo, encarnado en las Cortes Generales, es el encargado de debatir, enmendar y aprobar las leyes, aunque el Gobierno también puede presentar proyectos de ley.",
  },
  {
    id: 1075,
    section: "Gobierno y legislación",
    question:
      "La defensa de la integridad territorial de España corresponde a…",
    options: [
      "la Policía Nacional y la Guardia Civil.",
      "las Fuerzas Armadas.",
      "la Policía Nacional y las policías autonómicas.",
    ],
    correctAnswer: 1,
    comment:
      "El artículo 8 de la Constitución encomienda a las Fuerzas Armadas (Ejército de Tierra, Armada y Ejército del Aire y del Espacio) garantizar la soberanía e independencia de España y defender su integridad territorial.",
  },
  {
    id: 1076,
    section: "Gobierno y legislación",
    question:
      "El Ejército español participa desde 1989 en misiones de paz de la…",
    options: [
      "Organización de Estados Iberoamericanos (OEI).",
      "Unión Europea Occidental (UEO).",
      "Organización de las Naciones Unidas (ONU).",
    ],
    correctAnswer: 2,
    comment:
      "Desde 1989, con el despliegue de observadores en Centroamérica, las Fuerzas Armadas españolas participan de forma continuada en misiones de paz y ayuda humanitaria bajo mandato de la ONU.",
  },
  {
    id: 1077,
    section: "Gobierno y legislación",
    question: "¿Quién vigila puertos y aeropuertos, fronteras y costas?",
    options: ["La Guardia Civil.", "La Policía local.", "La Policía Nacional."],
    correctAnswer: 0,
    comment:
      "La Guardia Civil, cuerpo de naturaleza militar dependiente de los Ministerios de Interior y Defensa, tiene entre sus funciones la vigilancia de fronteras, costas, puertos y aeropuertos.",
  },
  {
    id: 1078,
    section: "Gobierno y legislación",
    question:
      "¿Quién hace el control de pasaportes en las fronteras de España?",
    options: ["La Guardia Civil.", "La Policía local.", "La Policía Nacional."],
    correctAnswer: 0,
    comment:
      "El control de pasaportes y de la documentación en los pasos fronterizos terrestres, marítimos y aéreos corresponde al Servicio de Control de Fronteras de la Guardia Civil.",
  },
  {
    id: 1079,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de los siguientes políticos ha sido presidente del Gobierno en España?",
    options: ["Manuel Fraga.", "José María Aznar.", "Yolanda Díaz."],
    correctAnswer: 1,
    comment:
      "José María Aznar, líder del Partido Popular, fue presidente del Gobierno de España entre 1996 y 2004, tras dos legislaturas consecutivas.",
  },
  {
    id: 1080,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama la policía autonómica de Cataluña?",
    options: ["Guardia Civil.", "Ertzaintza.", "Mossos d'Esquadra."],
    correctAnswer: 2,
    comment:
      "Los Mossos d'Esquadra son la policía autonómica de Cataluña, con competencias plenas en seguridad ciudadana en gran parte del territorio catalán.",
  },
  {
    id: 1081,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama la policía autonómica del País Vasco?",
    options: ["Ertzaintza.", "Guardia Civil.", "Mossos d'Esquadra."],
    correctAnswer: 0,
    comment:
      "La Ertzaintza es la policía autonómica del País Vasco, creada tras el Estatuto de Gernika y con amplias competencias de seguridad en la comunidad.",
  },
  {
    id: 1082,
    section: "Gobierno y legislación",
    question: "¿Desde qué año es rey Felipe VI?",
    options: ["Desde 1975.", "Desde 2014.", "Desde 2020."],
    correctAnswer: 1,
    comment:
      "Felipe VI es rey desde el 19 de junio de 2014, fecha en que fue proclamado ante las Cortes Generales tras la abdicación de su padre, Juan Carlos I.",
  },
  {
    id: 1083,
    section: "Gobierno y legislación",
    question: "¿Quién regula el tráfico en los pueblos y ciudades?",
    options: ["La Guardia Civil.", "Protección Civil.", "La Policía Local."],
    correctAnswer: 2,
    comment:
      "La Policía Local, dependiente de cada Ayuntamiento, se encarga de regular y ordenar el tráfico dentro del casco urbano, mientras que la Guardia Civil hace lo propio en carreteras interurbanas.",
  },
  {
    id: 1084,
    section: "Gobierno y legislación",
    question: "¿Quién puede presentar una queja al Defensor del Pueblo?",
    options: [
      "Solo los ciudadanos legalmente residentes.",
      "Solo los españoles mayores de 18 años.",
      "Todos los ciudadanos, españoles o extranjeros.",
    ],
    correctAnswer: 2,
    comment:
      "Cualquier persona, sea española o extranjera, con o sin residencia legal e independientemente de su edad, puede presentar una queja gratuita ante el Defensor del Pueblo sin necesidad de abogado.",
  },
  {
    id: 1085,
    section: "Gobierno y legislación",
    question: "En España el voto en las elecciones es…",
    options: ["un derecho.", "un deber.", "una obligación."],
    correctAnswer: 0,
    comment:
      "A diferencia de países como Bélgica o Australia, en España el voto es un derecho de ejercicio libre y no una obligación legal; nadie puede ser sancionado por no votar.",
  },
  {
    id: 1086,
    section: "Gobierno y legislación",
    question: "¿Quién vigila el tráfico en las carreteras?",
    options: [
      "La Guardia Civil.",
      "La Policía Nacional.",
      "El Ejército de Tierra.",
    ],
    correctAnswer: 0,
    comment:
      "La Agrupación de Tráfico de la Guardia Civil es la encargada de vigilar la seguridad vial en las carreteras interurbanas de todo el país.",
  },
  {
    id: 1087,
    section: "Gobierno y legislación",
    question: "¿Qué organismo se encarga de recaudar los impuestos?",
    options: [
      "El Tribunal de Cuentas.",
      "La Agencia Tributaria.",
      "El Consejo Económico y Social.",
    ],
    correctAnswer: 1,
    comment:
      "La Agencia Estatal de Administración Tributaria (Agencia Tributaria) es el organismo responsable de gestionar el sistema fiscal estatal y recaudar los principales impuestos, como el IRPF o el IVA.",
  },
  {
    id: 1088,
    section: "Gobierno y legislación",
    question: "¿Dónde se publican las leyes nacionales?",
    options: [
      "En el boletín del Instituto Nacional de Estadística (INE).",
      "En el Portal de la Administración Electrónica (PAe).",
      "En el Boletín Oficial del Estado (BOE).",
    ],
    correctAnswer: 2,
    comment:
      "El Boletín Oficial del Estado (BOE) es el diario oficial donde se publican las leyes y disposiciones estatales; una norma no entra en vigor hasta que se publica en él.",
  },
  {
    id: 1089,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llaman los órganos de gobierno que solo existen en Canarias?",
    options: ["Cabildos.", "Consejos insulares.", "Diputaciones."],
    correctAnswer: 0,
    comment:
      "En Canarias, cada isla cuenta con un cabildo insular, órgano de gobierno propio equivalente en cierto modo a una diputación provincial pero con competencias reforzadas por su carácter insular.",
  },
  {
    id: 1090,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estos trámites administrativos puede realizarse en la sede electrónica?",
    options: [
      "Tramitar el DNI.",
      "Renovar el pasaporte.",
      "Pagar los impuestos.",
    ],
    correctAnswer: 2,
    comment:
      "El pago de impuestos y otras obligaciones tributarias puede realizarse a través de la sede electrónica de la Agencia Tributaria, sin necesidad de acudir presencialmente a una oficina.",
  },
  {
    id: 1091,
    section: "Gobierno y legislación",
    question:
      "¿Cuál es el número de teléfono de información de la Administración General del Estado?",
    options: ["010.", "060.", "091."],
    correctAnswer: 1,
    comment:
      "El 060 es el teléfono único de información y atención al ciudadano de la Administración General del Estado, mientras que el 091 corresponde a la Policía Nacional y el 010 a la información municipal.",
  },
  {
    id: 1092,
    section: "Gobierno y legislación",
    question: "España está organizada en…",
    options: ["cantones.", "comunidades autónomas.", "estados federales."],
    correctAnswer: 1,
    comment:
      "España se organiza territorialmente en comunidades autónomas, un modelo de descentralización política intermedio entre el Estado unitario clásico y el federalismo, conocido como Estado de las Autonomías.",
  },
  {
    id: 1093,
    section: "Gobierno y legislación",
    question: "¿Cuántos partidos políticos hay en España?",
    options: ["Ninguno.", "Uno.", "Muchos."],
    correctAnswer: 2,
    comment:
      "España cuenta con un sistema multipartidista, garantizado por el pluralismo político reconocido en la Constitución, con numerosos partidos de ámbito nacional, regional y local.",
  },
  {
    id: 1094,
    section: "Gobierno y legislación",
    question: "¿Dónde tiene lugar la investidura del presidente del Gobierno?",
    options: [
      "En el Palacio de la Moncloa.",
      "En el Congreso de los Diputados.",
      "En el Senado.",
    ],
    correctAnswer: 1,
    comment:
      "La sesión de investidura, en la que el candidato debe obtener la confianza de la cámara mediante votación, se celebra en el Congreso de los Diputados, no en el Senado ni en la Moncloa.",
  },
  {
    id: 1095,
    section: "Gobierno y legislación",
    question: "¿Quién tiene el mando supremo de las Fuerzas Armadas?",
    options: [
      "El rey.",
      "El presidente del Gobierno.",
      "El ministro de Defensa.",
    ],
    correctAnswer: 0,
    comment:
      "El artículo 62.h) de la Constitución atribuye al rey el mando supremo de las Fuerzas Armadas, aunque en la práctica la dirección efectiva de la defensa corresponde al Gobierno.",
  },
  {
    id: 1096,
    section: "Gobierno y legislación",
    question:
      "¿Quién es el representante del Estado en una comunidad autónoma?",
    options: [
      "El presidente de la comunidad autónoma.",
      "El delegado del Gobierno.",
      "El presidente de la Asamblea autonómica.",
    ],
    correctAnswer: 1,
    comment:
      "El delegado del Gobierno representa a la Administración General del Estado en cada comunidad autónoma y coordina, entre otras cosas, la actuación de las Fuerzas y Cuerpos de Seguridad del Estado.",
  },
  {
    id: 1097,
    section: "Gobierno y legislación",
    question: "¿Cuántas provincias hay en España?",
    options: ["45.", "50.", "55."],
    correctAnswer: 1,
    comment:
      "España está dividida en 50 provincias, una división administrativa heredada en gran parte de la reforma territorial de 1833, a las que se suman Ceuta y Melilla como ciudades autónomas.",
  },
  {
    id: 1098,
    section: "Gobierno y legislación",
    question: "La enseñanza de las lenguas cooficiales es competencia…",
    options: ["del Estado.", "de la comunidad autónoma.", "de la provincia."],
    correctAnswer: 1,
    comment:
      "La enseñanza y promoción de las lenguas cooficiales corresponde a las comunidades autónomas que las reconocen en su Estatuto, como parte de sus competencias educativas y culturales.",
  },
  {
    id: 1099,
    section: "Gobierno y legislación",
    question: "El poder ejecutivo corresponde…",
    options: [
      "al Gobierno del Estado.",
      "al Congreso y al Senado.",
      "a los jueces y magistrados.",
    ],
    correctAnswer: 0,
    comment:
      "El Gobierno del Estado, formado por el presidente y los ministros, ejerce el poder ejecutivo: dirige la Administración, aplica las leyes y gestiona la política interior y exterior.",
  },
  {
    id: 1100,
    section: "Gobierno y legislación",
    question: "¿Cuántas cámaras hay en el Parlamento español?",
    options: ["Una.", "Dos.", "Tres."],
    correctAnswer: 1,
    comment:
      "El Parlamento español es bicameral: está formado por el Congreso de los Diputados y el Senado, cada uno con funciones y composición diferentes.",
  },
  {
    id: 1101,
    section: "Gobierno y legislación",
    question:
      "El suministro de agua y el alumbrado de las ciudades es competencia de…",
    options: [
      "el ayuntamiento.",
      "el Gobierno autonómico.",
      "el Ministerio de Obras Públicas y Urbanismo.",
    ],
    correctAnswer: 0,
    comment:
      "Servicios básicos de proximidad como el suministro de agua, el alumbrado público o la recogida de basuras son competencia obligatoria de los ayuntamientos, dentro de la Administración local.",
  },
  {
    id: 1102,
    section: "Gobierno y legislación",
    question:
      "En materias como nacionalidad, inmigración, emigración o extranjería solo tiene competencia…",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 0,
    comment:
      "El artículo 149.1.2ª de la Constitución reserva al Estado, en exclusiva, la competencia sobre nacionalidad, inmigración, emigración, extranjería y derecho de asilo.",
  },
  {
    id: 1103,
    section: "Gobierno y legislación",
    question: "¿Cuántas mujeres han sido presidentas de Gobierno en España?",
    options: ["Ninguna.", "Una.", "Dos."],
    correctAnswer: 0,
    comment:
      "Hasta la fecha ninguna mujer ha ocupado la presidencia del Gobierno de España, aunque sí han desempeñado otros cargos de alta responsabilidad, como vicepresidencias o ministerios.",
  },
  {
    id: 1104,
    section: "Gobierno y legislación",
    question: "Las relaciones internacionales son competencia de…",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 0,
    comment:
      "El artículo 149.1.3ª de la Constitución atribuye al Estado, con carácter exclusivo, la competencia sobre relaciones internacionales, entre ellas la política exterior y los tratados con otros países.",
  },
  {
    id: 1105,
    section: "Gobierno y legislación",
    question: "El Ayuntamiento está formado por el alcalde y…",
    options: ["los concejales.", "los diputados.", "los senadores."],
    correctAnswer: 0,
    comment:
      "El Ayuntamiento, órgano de gobierno municipal, lo integran el alcalde o alcaldesa y los concejales elegidos en las elecciones municipales, reunidos en el Pleno.",
  },
  {
    id: 1106,
    section: "Gobierno y legislación",
    question: "¿Quiénes forman el gobierno de las comunidades autónomas?",
    options: [
      "El presidente y los ministros.",
      "El alcalde y los concejales.",
      "El presidente y los consejeros.",
    ],
    correctAnswer: 2,
    comment:
      "El gobierno de cada comunidad autónoma está formado por el presidente y los consejeros, equivalentes autonómicos de los ministros, que dirigen las distintas consejerías.",
  },
  {
    id: 1107,
    section: "Gobierno y legislación",
    question: "¿Cuál es el órgano de gobierno en los municipios?",
    options: ["El ayuntamiento.", "La diputación.", "El cabildo."],
    correctAnswer: 0,
    comment:
      "El ayuntamiento es el órgano de gobierno y administración de cada municipio, presidido por el alcalde y compuesto por el conjunto de concejales.",
  },
  {
    id: 1108,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llaman los órganos de gobierno de las provincias españolas?",
    options: ["Cabildos.", "Consejos insulares.", "Diputaciones."],
    correctAnswer: 2,
    comment:
      "Las diputaciones provinciales son los órganos de gobierno de las provincias, encargadas de coordinar servicios entre los municipios que las integran, salvo en los territorios donde existen cabildos o consejos insulares.",
  },
  {
    id: 1109,
    section: "Gobierno y legislación",
    question: "¿Cuál es el órgano superior del poder ejecutivo?",
    options: ["El Gobierno.", "Las Fuerzas Armadas.", "Las Cortes Generales."],
    correctAnswer: 0,
    comment:
      "El Gobierno, presidido por el presidente y formado por los ministros, es el órgano superior del poder ejecutivo, responsable de dirigir la política nacional e internacional del Estado.",
  },
  {
    id: 1110,
    section: "Gobierno y legislación",
    question: "El idioma español también se llama…",
    options: ["aragonés.", "castellano.", "leonés."],
    correctAnswer: 1,
    comment:
      "Castellano y español son dos nombres equivalentes para el mismo idioma; el término «castellano» recuerda su origen histórico en el antiguo Reino de Castilla.",
  },
  {
    id: 1111,
    section: "Gobierno y legislación",
    question: "¿A quiénes se elige en las elecciones al Parlamento Europeo?",
    options: [
      "A los ministros europeos.",
      "A los consejeros delegados.",
      "A los eurodiputados.",
    ],
    correctAnswer: 2,
    comment:
      "En las elecciones al Parlamento Europeo, que se celebran cada cinco años en todos los países de la Unión, los ciudadanos eligen a los eurodiputados que les representarán en Estrasburgo y Bruselas.",
  },
  {
    id: 1112,
    section: "Gobierno y legislación",
    question: "Los españoles pueden votar a partir de los…",
    options: ["16 años.", "18 años.", "21 años."],
    correctAnswer: 1,
    comment:
      "El derecho al voto en España se adquiere al cumplir los 18 años, edad que coincide además con la mayoría de edad civil y penal.",
  },
  {
    id: 1113,
    section: "Gobierno y legislación",
    question: "Algunos ciudadanos extranjeros pueden votar en las elecciones…",
    options: ["municipales.", "autonómicas.", "generales."],
    correctAnswer: 0,
    comment:
      "Determinados extranjeros residentes, en función de acuerdos de reciprocidad con su país de origen (o por ser ciudadanos de la UE), pueden votar y ser elegidos en las elecciones municipales.",
  },
  {
    id: 1114,
    section: "Gobierno y legislación",
    question: "¿Quién controla la gestión financiera del Estado?",
    options: [
      "El Banco de España.",
      "La Agencia Tributaria.",
      "El Tribunal de Cuentas.",
    ],
    correctAnswer: 2,
    comment:
      "El Tribunal de Cuentas fiscaliza la gestión económico-financiera del Estado y del sector público, comprobando que el gasto se ajusta a los principios de legalidad, eficiencia y economía.",
  },
  {
    id: 1115,
    section: "Gobierno y legislación",
    question: "¿A quiénes se elige en las elecciones generales?",
    options: [
      "A los senadores y diputados.",
      "A los eurodiputados.",
      "A los concejales.",
    ],
    correctAnswer: 0,
    comment:
      "En las elecciones generales, que se celebran normalmente cada cuatro años, los ciudadanos eligen a los diputados del Congreso y a los senadores que formarán las Cortes Generales.",
  },
  {
    id: 1116,
    section: "Gobierno y legislación",
    question: "¿Cuántos miembros tiene el Congreso de los Diputados?",
    options: ["300.", "350.", "400."],
    correctAnswer: 1,
    comment:
      "El Congreso de los Diputados tiene 350 escaños, repartidos entre las circunscripciones provinciales según su población, tal como establece la Ley Orgánica del Régimen Electoral General.",
  },
  {
    id: 1117,
    section: "Gobierno y legislación",
    question: "Los municipios y provincias forman parte de la Administración…",
    options: ["autonómica.", "local.", "central."],
    correctAnswer: 1,
    comment:
      "Municipios y provincias constituyen la Administración local, el nivel de gobierno más cercano al ciudadano, junto con las islas en los territorios que cuentan con cabildos o consejos insulares.",
  },
  {
    id: 1118,
    section: "Gobierno y legislación",
    question: "La comunidad autónoma más poblada de España es…",
    options: ["Andalucía.", "Cataluña.", "Castilla y León."],
    correctAnswer: 0,
    comment:
      "Andalucía, con más de ocho millones de habitantes, es la comunidad autónoma más poblada de España, seguida de cerca por Cataluña y Madrid.",
  },
  {
    id: 1119,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llama la organización que defiende los intereses de los trabajadores?",
    options: ["Asociación.", "Partido.", "Sindicato."],
    correctAnswer: 2,
    comment:
      "El sindicato es la organización que defiende los intereses laborales de los trabajadores, negociando convenios colectivos y representándolos frente a empresarios y Administración.",
  },
  {
    id: 1120,
    section: "Gobierno y legislación",
    question: "¿Quién elige al presidente del Gobierno?",
    options: [
      "El Congreso de los Diputados.",
      "El rey.",
      "El Tribunal Supremo.",
    ],
    correctAnswer: 0,
    comment:
      "Tras las elecciones generales, es el Congreso de los Diputados quien inviste al presidente del Gobierno mediante votación; el rey se limita a proponer al candidato tras consultar con los grupos parlamentarios.",
  },

  // =============================================
  // SECCIÓN: Derechos y deberes (2001-2036)
  // =============================================
  {
    id: 2001,
    section: "Derechos y deberes",
    question:
      "En España, la Constitución obliga a todos los ciudadanos a practicar una religión.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el artículo 16 de la Constitución garantiza la libertad religiosa e ideológica de individuos y comunidades, sin más límite que el orden público; nadie está obligado a practicar ninguna religión ni a declarar sus creencias.",
  },
  {
    id: 2002,
    section: "Derechos y deberes",
    question:
      "Los españoles que obtienen la nacionalidad por residencia deben esperar tres años para poder votar en las elecciones.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: en el momento en que una persona adquiere la nacionalidad española, sea por residencia o por cualquier otra vía, obtiene de inmediato los mismos derechos políticos, incluido el derecho al voto.",
  },
  {
    id: 2003,
    section: "Derechos y deberes",
    question:
      "En España, la Constitución prohíbe la tortura y la pena de muerte.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 15 de la Constitución reconoce el derecho a la vida y a la integridad física y moral, y prohíbe expresamente la tortura, los tratos inhumanos o degradantes y la pena de muerte (salvo lo previsto por las leyes penales militares en tiempo de guerra, ya derogado en la práctica).",
  },
  {
    id: 2004,
    section: "Derechos y deberes",
    question:
      "El funcionamiento de los partidos políticos tiene que ser democrático.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 6 de la Constitución exige que la estructura interna y el funcionamiento de los partidos políticos sean democráticos, como garantía del pluralismo político.",
  },
  {
    id: 2005,
    section: "Derechos y deberes",
    question:
      "Se puede obligar a alguien a decir cuáles son sus ideas políticas o religiosas.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el artículo 16.2 establece que nadie podrá ser obligado a declarar sobre su ideología, religión o creencias, como consecuencia directa de la libertad ideológica reconocida en el mismo artículo.",
  },
  {
    id: 2006,
    section: "Derechos y deberes",
    question:
      "Se puede limitar a una persona el derecho a entrar y salir libremente de España por motivos ideológicos.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el artículo 19 de la Constitución reconoce la libertad de entrada y salida de España, y este derecho no puede ser limitado por motivos políticos o ideológicos.",
  },
  {
    id: 2007,
    section: "Derechos y deberes",
    question:
      "La Educación Primaria (de 6 a 12 años) es gratuita y obligatoria.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la Educación Primaria forma parte, junto a la ESO, de la enseñanza básica que la Constitución declara obligatoria y gratuita para todos los residentes en España entre los 6 y los 16 años.",
  },
  {
    id: 2008,
    section: "Derechos y deberes",
    question:
      "La Constitución garantiza el derecho de los españoles a una vivienda digna.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 47 reconoce el derecho a disfrutar de una vivienda digna y adecuada, aunque, al ser un principio rector de la política social y económica, no es exigible directamente ante los tribunales como un derecho fundamental.",
  },
  {
    id: 2009,
    section: "Derechos y deberes",
    question:
      "En España la policía puede entrar en cualquier casa sin resolución judicial en cualquier momento.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el domicilio es inviolable (art. 18.2 CE); para entrar sin consentimiento del titular hace falta, salvo flagrante delito, una resolución judicial que lo autorice.",
  },
  {
    id: 2010,
    section: "Derechos y deberes",
    question:
      "Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicial.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 18.3 de la Constitución garantiza el secreto de las comunicaciones, especialmente las postales, telegráficas y telefónicas, y solo permite intervenirlas mediante resolución judicial motivada.",
  },
  {
    id: 2011,
    section: "Derechos y deberes",
    question:
      "La Constitución reconoce el derecho de los ciudadanos a asociarse libremente.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 22 de la Constitución reconoce el derecho de asociación, que permite crear libremente entidades sin ánimo de lucro para fines lícitos, sin necesidad de autorización previa.",
  },
  {
    id: 2012,
    section: "Derechos y deberes",
    question:
      "Los profesores pueden enseñar con libertad, dentro de los límites de la Constitución.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la libertad de cátedra, recogida en el artículo 20.1.c) de la Constitución, permite a los docentes transmitir sus conocimientos y opiniones científicas dentro del respeto a los principios constitucionales.",
  },
  {
    id: 2013,
    section: "Derechos y deberes",
    question:
      "La Constitución reconoce únicamente los derechos fundamentales de los españoles.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: muchos derechos del Título I, como la vida, la libertad o la tutela judicial efectiva, se reconocen a toda persona con independencia de su nacionalidad; solo algunos derechos (como el sufragio) se reservan a los españoles.",
  },
  {
    id: 2014,
    section: "Derechos y deberes",
    question: "Los ciudadanos deben colaborar con los jueces si se lo piden.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: colaborar con la Administración de Justicia, por ejemplo declarando como testigo cuando se es requerido, es un deber cívico recogido en el ordenamiento español.",
  },
  {
    id: 2015,
    section: "Derechos y deberes",
    question:
      "La ley limita el acceso de terceras personas a datos de carácter personal.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la legislación de protección de datos personales (en línea con el Reglamento europeo de protección de datos) limita quién puede acceder, tratar o ceder los datos de carácter personal de otras personas.",
  },
  {
    id: 2016,
    section: "Derechos y deberes",
    question:
      "La libertad de prensa está limitada por el respeto al honor de las personas.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: aunque el artículo 20 reconoce la libertad de expresión e información, ese derecho encuentra su límite en el respeto al derecho al honor, a la intimidad y a la propia imagen de las personas (art. 18 CE).",
  },
  {
    id: 2017,
    section: "Derechos y deberes",
    question:
      "En España las causas de separación y divorcio están reguladas por la ley.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el Código Civil regula las causas y el procedimiento de separación y divorcio; desde 2005 el divorcio en España no exige separación previa ni alegar una causa concreta.",
  },
  {
    id: 2018,
    section: "Derechos y deberes",
    question:
      "La atención sanitaria gratuita es solo para personas mayores de 65 años.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el sistema público de salud en España es de cobertura prácticamente universal para toda la población residente, no está limitado a las personas mayores de 65 años.",
  },
  {
    id: 2019,
    section: "Derechos y deberes",
    question: "En España los hombres y las mujeres tienen los mismos derechos.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 14 de la Constitución consagra la igualdad ante la ley y prohíbe cualquier discriminación por razón de sexo, entre otras circunstancias personales o sociales.",
  },
  {
    id: 2020,
    section: "Derechos y deberes",
    question:
      "La enseñanza obligatoria consta de dos etapas: Educación Primaria y Educación Secundaria Obligatoria.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la enseñanza básica obligatoria en España comprende la Educación Primaria (6 a 12 años) y la Educación Secundaria Obligatoria o ESO (12 a 16 años).",
  },
  {
    id: 2021,
    section: "Derechos y deberes",
    question: "En España hay una religión oficial.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el artículo 16.3 establece que ninguna confesión tendrá carácter estatal; España es un Estado aconfesional, aunque coopera con las distintas confesiones religiosas presentes en la sociedad.",
  },
  {
    id: 2022,
    section: "Derechos y deberes",
    question: "La atención sanitaria pública es gratuita.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la atención sanitaria a través del Sistema Nacional de Salud es gratuita en el punto de uso para la persona usuaria, financiada mediante impuestos y cotizaciones.",
  },
  {
    id: 2023,
    section: "Derechos y deberes",
    question: "La enseñanza básica en España es solo para los extranjeros.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la enseñanza básica es obligatoria y gratuita para todos los menores que residen en España, sean españoles o extranjeros, no está reservada a un colectivo en particular.",
  },
  {
    id: 2024,
    section: "Derechos y deberes",
    question: "En España está reconocido el derecho de asociación.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el derecho de asociación, recogido en el artículo 22 de la Constitución, permite a cualquier persona formar parte de asociaciones culturales, deportivas, vecinales o de cualquier otro tipo lícito.",
  },
  {
    id: 2025,
    section: "Derechos y deberes",
    question:
      "Los sindicatos pueden participar en negociaciones con empresarios y con el Gobierno.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: los sindicatos, reconocidos en el artículo 7 de la Constitución como pieza clave de la defensa de los intereses laborales, participan en la negociación colectiva con empresarios y en el diálogo social con el Gobierno.",
  },
  {
    id: 2026,
    section: "Derechos y deberes",
    question: "Los trabajadores tienen derecho a hacer huelga.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el derecho de huelga de los trabajadores está reconocido como derecho fundamental en el artículo 28.2 de la Constitución, con la obligación de mantener unos servicios mínimos esenciales.",
  },
  {
    id: 2027,
    section: "Derechos y deberes",
    question:
      "La libertad ideológica está garantizada solo en parte del territorio nacional.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la libertad ideológica, religiosa y de culto reconocida en el artículo 16 de la Constitución está garantizada por igual en todo el territorio nacional, sin excepciones territoriales.",
  },
  {
    id: 2028,
    section: "Derechos y deberes",
    question:
      "Todos los ciudadanos tienen acceso al sistema de Seguridad Social público, excepto si están desempleados.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: estar desempleado no excluye a nadie del sistema público de Seguridad Social; de hecho, existen prestaciones específicas por desempleo y se mantiene la cobertura sanitaria durante esa situación.",
  },
  {
    id: 2029,
    section: "Derechos y deberes",
    question:
      "Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 45 de la Constitución reconoce el derecho a un medio ambiente adecuado y, de forma correlativa, impone a todos el deber de conservarlo, encomendando a los poderes públicos velar por su protección.",
  },
  {
    id: 2030,
    section: "Derechos y deberes",
    question:
      "En España, los poderes públicos deben proteger la salud y promover el deporte.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 43 de la Constitución reconoce el derecho a la protección de la salud y encomienda a los poderes públicos fomentar la educación sanitaria y la práctica del deporte.",
  },
  {
    id: 2031,
    section: "Derechos y deberes",
    question: "La enseñanza básica en España es obligatoria y gratuita.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la Constitución (art. 27.4) establece que la enseñanza básica, que abarca de los 6 a los 16 años, es obligatoria y gratuita para todos los residentes en España.",
  },
  {
    id: 2032,
    section: "Derechos y deberes",
    question:
      "La ley prohíbe la discriminación por cualquier circunstancia personal o social.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 14 de la Constitución prohíbe la discriminación por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social.",
  },
  {
    id: 2033,
    section: "Derechos y deberes",
    question:
      "En España, los ciudadanos pueden desplazarse libremente por todo el territorio nacional.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 19 de la Constitución garantiza la libertad de circulación y de elección de residencia dentro del territorio nacional, sin necesidad de permisos ni autorizaciones internas.",
  },
  {
    id: 2034,
    section: "Derechos y deberes",
    question:
      "Los jueces administran la justicia en España según las indicaciones del Gobierno.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la independencia judicial es uno de los pilares del Estado de Derecho; los jueces están sometidos únicamente al imperio de la ley, no a instrucciones del Gobierno ni de ningún otro poder.",
  },
  {
    id: 2035,
    section: "Derechos y deberes",
    question:
      "Los españoles deben ayudar en los casos de catástrofe o calamidad pública.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 30.4 de la Constitución habilita a la ley para regular los deberes de los ciudadanos en casos de grave riesgo, catástrofe o calamidad pública, como la colaboración con la protección civil.",
  },
  {
    id: 2036,
    section: "Derechos y deberes",
    question:
      "En España los ciudadanos pueden elegir en qué ciudad quieren vivir.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la libertad de residencia, reconocida en el artículo 19 de la Constitución, permite a cualquier ciudadano elegir libremente el municipio o la comunidad autónoma donde quiere establecerse.",
  },

  // =============================================
  // SECCIÓN: Organización territorial (3001-3024)
  // =============================================
  {
    id: 3001,
    section: "Organización territorial",
    question: "¿Dónde están Cáceres y Badajoz?",
    options: [
      "En el Principado de Asturias.",
      "En Andalucía.",
      "En Extremadura.",
    ],
    correctAnswer: 2,
    comment:
      "Cáceres y Badajoz son las dos únicas provincias que componen la comunidad autónoma de Extremadura, situada en el oeste de España, fronteriza con Portugal.",
  },
  {
    id: 3002,
    section: "Organización territorial",
    question: "¿Cuál es la capital de la Comunidad Valenciana?",
    options: ["Alicante.", "Castellón.", "Valencia."],
    correctAnswer: 2,
    comment:
      "Valencia es la capital de la Comunidad Valenciana y también la tercera ciudad más poblada de España, conocida por su huerta, su puerto y la Ciudad de las Artes y las Ciencias.",
  },
  {
    id: 3003,
    section: "Organización territorial",
    question: "¿Dónde están las islas Baleares?",
    options: [
      "En el mar Cantábrico.",
      "En el mar Mediterráneo.",
      "En el océano Atlántico.",
    ],
    correctAnswer: 1,
    comment:
      "Las Islas Baleares (Mallorca, Menorca, Ibiza y Formentera, entre otras) se sitúan en el mar Mediterráneo, frente a la costa este de la península ibérica.",
  },
  {
    id: 3004,
    section: "Organización territorial",
    question:
      "¿Cómo se llama la extensa llanura situada en el centro de la península ibérica?",
    options: ["Marisma.", "Cordillera.", "Meseta."],
    correctAnswer: 2,
    comment:
      "La Meseta central es la gran llanura elevada que ocupa buena parte del centro de la península ibérica, dividida por el Sistema Central en submeseta norte y submeseta sur.",
  },
  {
    id: 3005,
    section: "Organización territorial",
    question: "El parque nacional de Ordesa está en...",
    options: ["Aragón.", "Navarra.", "Castilla-La Mancha."],
    correctAnswer: 0,
    comment:
      "El Parque Nacional de Ordesa y Monte Perdido se encuentra en el Pirineo aragonés, en la provincia de Huesca, y fue uno de los primeros parques nacionales declarados en España, en 1918.",
  },
  {
    id: 3006,
    section: "Organización territorial",
    question: "¿En qué comunidad autónoma están Guadalajara y Cuenca?",
    options: ["En Castilla y León.", "En Castilla-La Mancha.", "En Cantabria."],
    correctAnswer: 1,
    comment:
      "Guadalajara y Cuenca son dos de las cinco provincias que forman Castilla-La Mancha, junto con Albacete, Ciudad Real y Toledo, capital de la comunidad.",
  },
  {
    id: 3007,
    section: "Organización territorial",
    question:
      "¿Qué comunidad autónoma tiene como capital Santiago de Compostela?",
    options: ["Galicia.", "Asturias.", "Cantabria."],
    correctAnswer: 0,
    comment:
      "Santiago de Compostela, meta final del Camino de Santiago, es la capital de la comunidad autónoma de Galicia, en el noroeste de España.",
  },
  {
    id: 3008,
    section: "Organización territorial",
    question: "¿Dónde está Almería?",
    options: ["En Andalucía.", "En Canarias.", "En Aragón."],
    correctAnswer: 0,
    comment:
      "Almería es una de las ocho provincias de Andalucía, situada en el extremo sureste peninsular, conocida por su clima semidesértico y su producción agrícola bajo plástico.",
  },
  {
    id: 3009,
    section: "Organización territorial",
    question: "La capital de la comunidad autónoma de Galicia es...",
    options: ["A Coruña.", "Vigo.", "Santiago de Compostela."],
    correctAnswer: 2,
    comment:
      "Santiago de Compostela es la capital administrativa de Galicia, aunque A Coruña y Vigo son las ciudades gallegas con mayor población.",
  },
  {
    id: 3010,
    section: "Organización territorial",
    question: "¿Cuál de estos ríos desemboca en el mar Mediterráneo?",
    options: ["El Tajo.", "El Júcar.", "El Duero."],
    correctAnswer: 1,
    comment:
      "El río Júcar nace en la Serranía de Cuenca y desemboca en el mar Mediterráneo, cerca de Cullera (Valencia); el Tajo y el Duero, en cambio, vierten sus aguas en el océano Atlántico.",
  },
  {
    id: 3011,
    section: "Organización territorial",
    question: "¿Dónde está el monte Aneto?",
    options: [
      "En los Pirineos.",
      "En el Sistema Central.",
      "En Sierra Nevada.",
    ],
    correctAnswer: 0,
    comment:
      "El Aneto, con 3.404 metros, es el pico más alto de los Pirineos y de toda Cataluña, y se encuentra en el macizo de la Maladeta, en la provincia de Huesca.",
  },
  {
    id: 3012,
    section: "Organización territorial",
    question: "La ciudad de Vitoria es la sede administrativa de...",
    options: ["Navarra.", "País Vasco.", "La Rioja."],
    correctAnswer: 1,
    comment:
      "Vitoria-Gasteiz es la capital administrativa del País Vasco, sede del Parlamento y del Gobierno vasco, aunque Bilbao es la ciudad más poblada de la comunidad.",
  },
  {
    id: 3013,
    section: "Organización territorial",
    question: "España se divide en...",
    options: [
      "departamentos y regiones.",
      "comunidades y ciudades autónomas.",
      "regiones autónomas y distritos.",
    ],
    correctAnswer: 1,
    comment:
      "España se organiza territorialmente en 17 comunidades autónomas y 2 ciudades autónomas (Ceuta y Melilla), cada una con sus propias instituciones y competencias.",
  },
  {
    id: 3014,
    section: "Organización territorial",
    question: "El parque nacional de Aigüestortes está en...",
    options: ["Cataluña.", "Aragón.", "Castilla y León."],
    correctAnswer: 0,
    comment:
      "El Parque Nacional de Aigüestortes i Estany de Sant Maurici se encuentra en el Pirineo catalán, en la provincia de Lleida, y es el único parque nacional situado íntegramente en Cataluña.",
  },
  {
    id: 3015,
    section: "Organización territorial",
    question: "En el norte de África están Ceuta y...",
    options: ["Almería.", "Melilla.", "Cádiz."],
    correctAnswer: 1,
    comment:
      "Ceuta y Melilla son las dos ciudades autónomas españolas situadas en el norte de África, fronterizas con Marruecos, cada una con su propio Estatuto de Autonomía.",
  },
  {
    id: 3016,
    section: "Organización territorial",
    question:
      "¿En qué lugar de España hay un clima que se caracteriza por inviernos fríos y veranos muy calurosos?",
    options: ["Canarias.", "Comunidad Valenciana."],
    correctAnswer: 1,
    comment:
      "El interior de la Comunidad Valenciana presenta un clima mediterráneo continentalizado, con veranos muy calurosos e inviernos frescos, en contraste con el clima subtropical y suave de Canarias durante todo el año.",
  },
  {
    id: 3017,
    section: "Organización territorial",
    question: "¿Cuál de estos ríos desemboca en el océano Atlántico?",
    options: ["El Guadalquivir.", "El Manzanares.", "El Júcar."],
    correctAnswer: 0,
    comment:
      "El río Guadalquivir, el más largo de Andalucía, desemboca en el océano Atlántico por Sanlúcar de Barrameda, tras atravesar Córdoba y Sevilla.",
  },
  {
    id: 3018,
    section: "Organización territorial",
    question:
      "¿Cuál de estas provincias forma parte de la Comunidad de Castilla y León?",
    options: ["Burgos.", "Huesca.", "Guadalajara."],
    correctAnswer: 0,
    comment:
      "Burgos es una de las nueve provincias de Castilla y León, la comunidad autónoma con mayor extensión territorial de España.",
  },
  {
    id: 3019,
    section: "Organización territorial",
    question: "¿En qué comunidad autónoma está la ciudad de Huesca?",
    options: ["Castilla-La Mancha.", "Aragón.", "Extremadura."],
    correctAnswer: 1,
    comment:
      "Huesca es una de las tres provincias de Aragón, junto con Zaragoza (capital de la comunidad) y Teruel.",
  },
  {
    id: 3020,
    section: "Organización territorial",
    question: "Canarias tiene un clima...",
    options: ["mediterráneo.", "oceánico.", "subtropical."],
    correctAnswer: 2,
    comment:
      "Canarias goza de un clima subtropical suave y estable durante todo el año, gracias a su situación cerca del trópico y a la influencia de los vientos alisios.",
  },
  {
    id: 3021,
    section: "Organización territorial",
    question: "El principal río que desemboca en el mar Mediterráneo es el...",
    options: ["Ebro.", "Duero.", "Tajo."],
    correctAnswer: 0,
    comment:
      "El Ebro es el río de mayor caudal de España y el principal que desemboca en el Mediterráneo, formando un extenso delta en su tramo final en Tarragona.",
  },
  {
    id: 3022,
    section: "Organización territorial",
    question: "España está entre los países de Europa más...",
    options: ["lluviosos.", "montañosos.", "fríos."],
    correctAnswer: 1,
    comment:
      "España es, después de Suiza, el país más montañoso de Europa: la altitud media de su territorio ronda los 650 metros sobre el nivel del mar.",
  },
  {
    id: 3023,
    section: "Organización territorial",
    question: "¿En qué provincia está el parque nacional de Monfragüe?",
    options: ["En Cáceres.", "En Murcia.", "En Ciudad Real."],
    correctAnswer: 0,
    comment:
      "El Parque Nacional de Monfragüe se encuentra en la provincia de Cáceres, en Extremadura, y es uno de los espacios más importantes de Europa para las aves rapaces.",
  },
  {
    id: 3024,
    section: "Organización territorial",
    question: "¿Cuál es la capital de la comunidad autónoma de Extremadura?",
    options: ["Cáceres.", "Badajoz.", "Mérida."],
    correctAnswer: 2,
    comment:
      "Mérida es la capital de Extremadura, aunque no es la ciudad más poblada de la comunidad; fue una importante ciudad romana, hoy Patrimonio de la Humanidad por su conjunto arqueológico.",
  },

  // =============================================
  // SECCIÓN: Cultura y sociedad (4001-4036 y 5001-5084)
  // =============================================
  {
    id: 4001,
    section: "Cultura y sociedad",
    question:
      "Los personajes principales de la novela el Quijote son don Quijote y…",
    options: ["Don Juan.", "Sancho Panza.", "Doña Inés."],
    correctAnswer: 1,
    comment:
      "Sancho Panza es el fiel escudero de don Quijote en la novela de Miguel de Cervantes; su contraste entre idealismo y sentido práctico es uno de los grandes motores de la obra.",
  },
  {
    id: 4002,
    section: "Cultura y sociedad",
    question: "¿Qué científica española es reconocida por sus investigaciones?",
    options: ["Almudena Grandes.", "Montserrat Caballé.", "Margarita Salas."],
    correctAnswer: 2,
    comment:
      "Margarita Salas fue una pionera de la bioquímica y la biología molecular en España, descubridora de la ADN polimerasa del fago Phi29, con aplicaciones muy relevantes en biotecnología.",
  },
  {
    id: 4003,
    section: "Cultura y sociedad",
    question: "¿Quién escribió La casa de Bernarda Alba?",
    options: [
      "Federico García Lorca.",
      "Miguel de Cervantes.",
      "Antonio Machado.",
    ],
    correctAnswer: 0,
    comment:
      "Federico García Lorca escribió el drama La casa de Bernarda Alba, su última obra teatral, que retrata la represión social y familiar en la España rural.",
  },
  {
    id: 4004,
    section: "Cultura y sociedad",
    question: "¿Quién escribió Nada, una novela sobre la posguerra española?",
    options: ["Carmen Laforet.", "Ana María Matute.", "María Dueñas."],
    correctAnswer: 0,
    comment:
      "Carmen Laforet escribió Nada, novela publicada en 1945 que retrata la dureza de la posguerra española, y con la que ganó el primer Premio Nadal con solo 23 años.",
  },
  {
    id: 4005,
    section: "Cultura y sociedad",
    question: "¿Qué músico compuso El amor brujo?",
    options: ["Manuel de Falla.", "Isaac Albéniz.", "Joaquín Rodrigo."],
    correctAnswer: 0,
    comment:
      "Manuel de Falla compuso El amor brujo, un ballet inspirado en el folclore andaluz que incluye piezas tan populares como la Danza ritual del fuego.",
  },
  {
    id: 4006,
    section: "Cultura y sociedad",
    question: "¿Qué es típico en la Noche de San Juan?",
    options: ["Comer uvas.", "Encender hogueras.", "Regalar libros."],
    correctAnswer: 1,
    comment:
      "En la Noche de San Juan (23 de junio), que coincide con el solsticio de verano, es tradicional encender hogueras en la playa o en las plazas para dar la bienvenida al verano.",
  },
  {
    id: 4007,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el instrumento más característico de la música flamenca?",
    options: ["La gaita.", "La guitarra.", "El piano."],
    correctAnswer: 1,
    comment:
      "La guitarra española (o guitarra flamenca) es el instrumento de acompañamiento por excelencia del flamenco, junto al cante y el baile, que forman el llamado «trío flamenco».",
  },
  {
    id: 4008,
    section: "Cultura y sociedad",
    question: "Isabel Coixet es una…",
    options: ["cantante pop.", "bailarina clásica.", "directora de cine."],
    correctAnswer: 2,
    comment:
      "Isabel Coixet es una reconocida directora y guionista de cine española, autora de películas como La vida secreta de las palabras, con proyección internacional.",
  },
  {
    id: 4009,
    section: "Cultura y sociedad",
    question: "Una de las cantantes españolas más famosas actualmente es…",
    options: ["Rosalía.", "Marisol.", "Lola Flores."],
    correctAnswer: 0,
    comment:
      "Rosalía es una de las artistas españolas más populares en la actualidad, conocida por fusionar el flamenco con géneros urbanos y por su proyección internacional.",
  },
  {
    id: 4010,
    section: "Cultura y sociedad",
    question:
      "¿En qué ciudad de España hay una mezquita que es Patrimonio de la Humanidad?",
    options: ["Santiago de Compostela.", "Madrid.", "Córdoba."],
    correctAnswer: 2,
    comment:
      "La Mezquita-Catedral de Córdoba, declarada Patrimonio de la Humanidad por la Unesco en 1984, es uno de los máximos exponentes del arte islámico en Occidente.",
  },
  {
    id: 4011,
    section: "Cultura y sociedad",
    question:
      "¿En qué ciudad de España se encuentra La Alhambra, que es Patrimonio de la Humanidad?",
    options: ["En Sevilla.", "En Córdoba.", "En Granada."],
    correctAnswer: 2,
    comment:
      "La Alhambra, palacio y fortaleza nazarí declarado Patrimonio de la Humanidad, se encuentra en Granada y es uno de los monumentos más visitados de España.",
  },
  {
    id: 4012,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el nombre de la directora española que ha destacado por su mirada crítica y por modernizar el cine nacional?",
    options: ["Pilar Miró.", "Sara Baras.", "Penélope Cruz."],
    correctAnswer: 0,
    comment:
      "Pilar Miró fue una influyente directora y guionista de cine, así como directora general de RTVE, cuyo trabajo contribuyó a modernizar el cine español tras la Transición.",
  },
  {
    id: 4013,
    section: "Cultura y sociedad",
    question: "¿Qué novela de éxito ha escrito Irene Vallejo?",
    options: [
      "El infinito en un junco.",
      "El tiempo entre costuras.",
      "El camino.",
    ],
    correctAnswer: 0,
    comment:
      "Irene Vallejo escribió el ensayo El infinito en un junco, un recorrido por la historia del libro que se convirtió en un fenómeno editorial y ha sido traducido a numerosos idiomas.",
  },
  {
    id: 4014,
    section: "Cultura y sociedad",
    question:
      "¿Cómo se llama la mayor institución pública dedicada a la investigación en España?",
    options: [
      "Real Academia Española (RAE).",
      "Consejo Superior de Investigaciones Científicas (CSIC).",
      "La Sociedad General de Autores (SGAE).",
    ],
    correctAnswer: 1,
    comment:
      "El CSIC (Consejo Superior de Investigaciones Científicas) es la mayor institución pública dedicada a la investigación en España, con centros repartidos por todo el país en múltiples áreas del conocimiento.",
  },
  {
    id: 4015,
    section: "Cultura y sociedad",
    question: "Paco de Lucía fue un famoso….",
    options: ["científico.", "guitarrista.", "pintor."],
    correctAnswer: 1,
    comment:
      "Paco de Lucía fue uno de los guitarristas de flamenco más influyentes de la historia, reconocido por su innovación técnica y por acercar el flamenco a públicos de todo el mundo.",
  },
  {
    id: 4016,
    section: "Cultura y sociedad",
    question: "¿Qué celebramos el 24 de diciembre?",
    options: ["Carnaval.", "Nochebuena.", "San Juan."],
    correctAnswer: 1,
    comment:
      "El 24 de diciembre se celebra la Nochebuena, la cena familiar previa a la Navidad, una de las fiestas más señaladas del calendario español.",
  },
  {
    id: 4017,
    section: "Cultura y sociedad",
    question: "Juan Mari Arzak es un famoso....",
    options: ["escritor.", "músico.", "cocinero."],
    correctAnswer: 2,
    comment:
      "Juan Mari Arzak es un reconocido cocinero vasco, pionero de la nueva cocina española y uno de los primeros chefs europeos en obtener tres estrellas Michelin.",
  },
  {
    id: 4018,
    section: "Cultura y sociedad",
    question: "¿Quién fue Clara Campoamor?",
    options: [
      "Una defensora de los derechos de la mujer.",
      "Una cantante lírica.",
      "Una directora de cine.",
    ],
    correctAnswer: 0,
    comment:
      "Clara Campoamor fue una abogada y política española que defendió con firmeza el sufragio femenino durante la Segunda República, logrando que las mujeres pudieran votar en España a partir de 1933.",
  },
  {
    id: 4019,
    section: "Cultura y sociedad",
    question: "¿Qué canciones típicas se cantan en Navidad?",
    options: ["Flamenco.", "Villancicos.", "Jotas."],
    correctAnswer: 1,
    comment:
      "Los villancicos son las canciones tradicionales de temática navideña que se cantan en España durante las fiestas de diciembre, muchas de ellas de origen popular y siglos de antigüedad.",
  },
  {
    id: 4020,
    section: "Cultura y sociedad",
    question: "La Liga y la Copa del Rey son competiciones de…",
    options: ["natación.", "atletismo.", "fútbol."],
    correctAnswer: 2,
    comment:
      "La Liga (competición de clubes por puntos a lo largo de la temporada) y la Copa del Rey (torneo de eliminación directa) son las dos principales competiciones de fútbol en España.",
  },
  {
    id: 4021,
    section: "Cultura y sociedad",
    question: "¿Quién ha recibido el premio Nobel de Literatura?",
    options: ["María Zambrano.", "Pablo Picasso.", "Vicente Aleixandre."],
    correctAnswer: 2,
    comment:
      "Vicente Aleixandre, poeta de la Generación del 27, recibió el Premio Nobel de Literatura en 1977; España cuenta también con otros premios Nobel de literatura como Cela o Juan Ramón Jiménez.",
  },
  {
    id: 4022,
    section: "Cultura y sociedad",
    question: "¿Qué fiesta se celebra en Pamplona el 7 de julio?",
    options: ["Los sanfermines.", "Las Fallas.", "La Feria de Abril."],
    correctAnswer: 0,
    comment:
      "Los sanfermines, con su famoso encierro de toros por las calles de Pamplona, comienzan el 6 de julio con el chupinazo y son una de las fiestas más internacionales de España.",
  },
  {
    id: 4023,
    section: "Cultura y sociedad",
    question: "Teresa Perales y Daniel Molina son...",
    options: [
      "campeones paraolímpicos.",
      "músicos famosos.",
      "artistas de cine.",
    ],
    correctAnswer: 0,
    comment:
      "Teresa Perales, nadadora, y Daniel Molina son destacados deportistas paralímpicos españoles, referentes del deporte adaptado con numerosas medallas en Juegos Paralímpicos.",
  },
  {
    id: 4024,
    section: "Cultura y sociedad",
    question:
      "¿Qué toman los españoles la noche del 31 de diciembre para celebrar el cambio de año?",
    options: ["Lentejas.", "Uvas.", "Aceitunas."],
    correctAnswer: 1,
    comment:
      "En Nochevieja los españoles comen doce uvas, una por cada campanada de medianoche, como tradición de buena suerte para el año que empieza.",
  },
  {
    id: 4025,
    section: "Cultura y sociedad",
    question: "¿Qué mujer es autora del cuadro La verbena?",
    options: ["Maruja Mallo.", "Carmen Maura.", "Clara Lago."],
    correctAnswer: 0,
    comment:
      "Maruja Mallo fue una pintora vinculada a la Generación del 27, autora del cuadro La verbena, y una de las pocas mujeres reconocidas en las vanguardias artísticas españolas de esa época.",
  },
  {
    id: 4026,
    section: "Cultura y sociedad",
    question: "¿En qué museo español puedes ver el cuadro Guernica de Picasso?",
    options: [
      "Museo del Prado.",
      "Museo Reina Sofía.",
      "Museo Thyssen-Bornemisza.",
    ],
    correctAnswer: 1,
    comment:
      "El Guernica, obra maestra de Pablo Picasso sobre el bombardeo de la localidad vasca en 1937, se expone en el Museo Reina Sofía de Madrid desde 1992.",
  },
  {
    id: 4027,
    section: "Cultura y sociedad",
    question:
      "¿Qué escritora española escribe en otra lengua oficial de España?",
    options: ["Mercè Rodoreda.", "Almudena Grandes.", "Ana María Matute."],
    correctAnswer: 0,
    comment:
      "Mercè Rodoreda es una destacada escritora en lengua catalana, autora de La plaça del Diamant, una de las novelas más traducidas de la literatura catalana del siglo XX.",
  },
  {
    id: 4028,
    section: "Cultura y sociedad",
    question: "¿Qué tres culturas convivieron en la España medieval?",
    options: [
      "La cristiana, la judía y la musulmana.",
      "La fenicia, la judía y la musulmana.",
      "La griega, la cristiana y la judía.",
    ],
    correctAnswer: 0,
    comment:
      "Durante buena parte de la Edad Media convivieron en la Península las culturas cristiana, judía y musulmana, dando lugar a periodos de intercambio cultural, científico y artístico conocidos como convivencia.",
  },
  {
    id: 4029,
    section: "Cultura y sociedad",
    question: "El 6 de diciembre se celebra en España…",
    options: [
      "el Día de la Constitución.",
      "la llegada de Colón a América.",
      "el Día del Libro.",
    ],
    correctAnswer: 0,
    comment:
      "El 6 de diciembre se celebra el Día de la Constitución, en conmemoración del referéndum de 1978 en el que el pueblo español la ratificó.",
  },
  {
    id: 4030,
    section: "Cultura y sociedad",
    question:
      "¿Qué ciudad fue un centro científico en Al-Ándalus, donde se estudiaba medicina y astronomía?",
    options: ["Barcelona.", "Madrid.", "Córdoba."],
    correctAnswer: 2,
    comment:
      "Córdoba, capital del Califato omeya de Al-Ándalus, fue durante los siglos X y XI uno de los grandes centros científicos y culturales de Europa y del mundo islámico.",
  },
  {
    id: 4031,
    section: "Cultura y sociedad",
    question: "¿En qué ciudad española está el Museo Guggenheim?",
    options: ["Bilbao.", "Madrid.", "Valencia."],
    correctAnswer: 0,
    comment:
      "El Museo Guggenheim, diseñado por el arquitecto Frank Gehry e inaugurado en 1997, se encuentra en Bilbao y transformó la ciudad en un referente de arte contemporáneo y arquitectura.",
  },
  {
    id: 4032,
    section: "Cultura y sociedad",
    question: "El Premio Cervantes se da a…",
    options: ["actores.", "escritores.", "pintores."],
    correctAnswer: 1,
    comment:
      "El Premio Cervantes, considerado el máximo galardón de las letras en lengua española, reconoce cada año la trayectoria de un escritor o escritora hispanohablante.",
  },
  {
    id: 4033,
    section: "Cultura y sociedad",
    question: "¿Qué premio reconoce a los mejores actores y películas?",
    options: ["Premio Goya.", "Premio Nobel.", "Premio Cervantes."],
    correctAnswer: 0,
    comment:
      "Los Premios Goya, entregados anualmente por la Academia de Cine, reconocen lo mejor del cine español del año, desde interpretación hasta dirección o guion.",
  },
  {
    id: 4034,
    section: "Cultura y sociedad",
    question:
      "¿Qué premios promueven en España valores científicos, culturales y humanísticos?",
    options: [
      "Los Premios Cervantes.",
      "Los Premios Princesa de Asturias.",
      "Los Premios Goya.",
    ],
    correctAnswer: 1,
    comment:
      "Los Premios Princesa de Asturias, entregados en Oviedo, reconocen anualmente el mérito científico, técnico, cultural, social y humanístico a nivel internacional en varias categorías.",
  },
  {
    id: 4035,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos deportes es muy popular en España?",
    options: ["El fútbol.", "El esquí.", "El golf."],
    correctAnswer: 0,
    comment:
      "El fútbol es, con diferencia, el deporte más seguido y practicado en España, con la Liga como una de las competiciones de clubes más importantes del mundo.",
  },
  {
    id: 4036,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos deportistas juega al tenis?",
    options: ["Pau Gasol.", "Carlos Sainz.", "Carlos Alcaraz."],
    correctAnswer: 2,
    comment:
      "Carlos Alcaraz es un tenista español que ha llegado al número uno del mundo y ha ganado varios títulos de Grand Slam, continuando la gran tradición española en este deporte.",
  },

  // =============================================
  // Preguntas 5001-5084 (Cultura y sociedad / Vida cotidiana)
  // =============================================
  {
    id: 5001,
    section: "Cultura y sociedad",
    question:
      "¿Qué documento deben solicitar los extranjeros para residir legalmente en España?",
    options: [
      "El Documento Nacional de Identidad (DNI).",
      "La Tarjeta de Identidad de Extranjero (TIE).",
      "El certificado de empadronamiento.",
    ],
    correctAnswer: 1,
    comment:
      "La TIE (Tarjeta de Identidad de Extranjero) acredita la situación de residencia legal en España de las personas extranjeras, a diferencia del DNI, que solo pueden obtener los ciudadanos españoles.",
  },
  {
    id: 5002,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el documento que certifica el lugar de residencia del titular?",
    options: [
      "El certificado de empadronamiento.",
      "La partida de nacimiento.",
      "El carné de conducir.",
    ],
    correctAnswer: 0,
    comment:
      "El certificado de empadronamiento, expedido por el Ayuntamiento, acredita el domicilio habitual de una persona en un municipio y es necesario para muchos trámites, como el acceso a la sanidad o la escolarización.",
  },
  {
    id: 5003,
    section: "Cultura y sociedad",
    question: "¿A qué sustituye el registro electrónico individual?",
    options: ["Al DNI.", "Al permiso de conducir.", "Al libro de familia."],
    correctAnswer: 2,
    comment:
      "El registro electrónico individual del Registro Civil sustituye progresivamente al tradicional libro de familia en papel, recogiendo digitalmente los datos de nacimiento, matrimonio y filiación.",
  },
  {
    id: 5004,
    section: "Cultura y sociedad",
    question: "¿Cuál es la edad mínima para conducir un coche en España?",
    options: ["16 años.", "18 años.", "20 años."],
    correctAnswer: 1,
    comment:
      "La edad mínima para obtener el permiso de conducir de turismos (clase B) en España es 18 años, aunque para motocicletas pequeñas o ciclomotores se permite conducir desde edades inferiores.",
  },
  {
    id: 5005,
    section: "Cultura y sociedad",
    question: "El carné de conducir se hace en…",
    options: [
      "la Dirección General de Tráfico (DGT).",
      "la Policía Nacional.",
      "el Registro Civil.",
    ],
    correctAnswer: 0,
    comment:
      "La Dirección General de Tráfico (DGT) es el organismo del Ministerio del Interior responsable de expedir el carné de conducir y de gestionar los exámenes teóricos y prácticos.",
  },
  {
    id: 5006,
    section: "Cultura y sociedad",
    question: "Para sacar el carné de conducir hay que aprobar…",
    options: [
      "un examen teórico.",
      "un examen práctico.",
      "un examen teórico y otro práctico.",
    ],
    correctAnswer: 2,
    comment:
      "Para obtener el carné de conducir es necesario superar tanto el examen teórico, sobre normas y señales de tráfico, como el examen práctico de conducción en circulación real.",
  },
  {
    id: 5007,
    section: "Cultura y sociedad",
    question: "¿Dónde se tramita el libro de familia?",
    options: [
      "En el Registro Civil.",
      "En la Seguridad Social.",
      "En las comisarías de policía.",
    ],
    correctAnswer: 0,
    comment:
      "El libro de familia, o su equivalente en el registro electrónico individual, se tramita en el Registro Civil, que también gestiona nacimientos, matrimonios y defunciones.",
  },
  {
    id: 5008,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos canales de televisión es autonómico?",
    options: ["Telecinco.", "Nova.", "Canal Sur."],
    correctAnswer: 2,
    comment:
      "Canal Sur es la televisión pública autonómica de Andalucía, gestionada por la Radio y Televisión de Andalucía (RTVA), a diferencia de Telecinco o Nova, que son cadenas privadas de ámbito nacional.",
  },
  {
    id: 5009,
    section: "Cultura y sociedad",
    question: "¿Cuánto dura el permiso de maternidad o paternidad?",
    options: ["12 semanas.", "19 semanas.", "22 semanas."],
    correctAnswer: 1,
    comment:
      "El permiso por nacimiento y cuidado de menor tiene actualmente una duración de 19 semanas para cada progenitor, tras la igualación progresiva entre madre y padre llevada a cabo en los últimos años.",
  },
  {
    id: 5010,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es la tasa máxima de alcohol en sangre permitida a los conductores, en gramos por litro (g/l)?",
    options: ["0,5.", "0,7.", "0,9."],
    correctAnswer: 0,
    comment:
      "La tasa máxima de alcohol en sangre permitida a los conductores en general es de 0,5 g/l (0,3 g/l para conductores noveles o profesionales); superarla supone una infracción administrativa o incluso penal.",
  },
  {
    id: 5011,
    section: "Cultura y sociedad",
    question: "¿Cuál es el tipo de residencia más habitual en España?",
    options: [
      "Casa rural.",
      "Piso en un edificio de viviendas.",
      "Chalé independiente.",
    ],
    correctAnswer: 1,
    comment:
      "El piso en un edificio de viviendas colectivas es el tipo de residencia más común en España, especialmente en las grandes ciudades, frente a las viviendas unifamiliares.",
  },
  {
    id: 5012,
    section: "Cultura y sociedad",
    question:
      "¿Qué comunidad autónoma es conocida por la calidad de su aceite de oliva?",
    options: ["Cantabria.", "Andalucía.", "La Rioja."],
    correctAnswer: 1,
    comment:
      "Andalucía es la principal región productora de aceite de oliva de España y del mundo, con provincias como Jaén concentrando una parte muy relevante de la producción nacional.",
  },
  {
    id: 5013,
    section: "Cultura y sociedad",
    question:
      "¿Cómo se llama la revisión que deben pasar obligatoriamente los coches?",
    options: [
      "IBI (Impuesto sobre Bienes Inmuebles).",
      "ITV (Inspección Técnica de Vehículos).",
      "ITE (Inspección Técnica de Edificios).",
    ],
    correctAnswer: 1,
    comment:
      "La ITV (Inspección Técnica de Vehículos) es la revisión periódica y obligatoria que comprueba el correcto estado mecánico y de seguridad de los vehículos; el IBI, en cambio, es un impuesto municipal sobre inmuebles.",
  },
  {
    id: 5014,
    section: "Cultura y sociedad",
    question:
      "El aperitivo que acompaña a la bebida en bares y restaurantes se llama...",
    options: ["bocadillo.", "tapa.", "primer plato."],
    correctAnswer: 1,
    comment:
      "La tapa es el pequeño aperitivo, típicamente español, que suele servirse junto a la bebida en bares y restaurantes, y que da nombre a toda una cultura social de «ir de tapas».",
  },
  {
    id: 5015,
    section: "Cultura y sociedad",
    question: "¿Dónde se tramita la tarjeta sanitaria?",
    options: [
      "En la comisaría de policía.",
      "En el centro de salud.",
      "En el Ministerio de Sanidad.",
    ],
    correctAnswer: 1,
    comment:
      "La tarjeta sanitaria individual se solicita y tramita en el centro de salud correspondiente al domicilio, y da acceso a la atención médica dentro del Sistema Nacional de Salud.",
  },
  {
    id: 5016,
    section: "Cultura y sociedad",
    question: "¿Con cuántos hijos una familia es numerosa?",
    options: ["Con 1 hijo.", "Con 2 hijos.", "Con 3 hijos."],
    correctAnswer: 2,
    comment:
      "En España se reconoce oficialmente como familia numerosa a la que tiene tres o más hijos (o dos en determinados supuestos especiales, como discapacidad o familia monoparental), con derecho a ciertas ayudas y beneficios.",
  },
  {
    id: 5017,
    section: "Cultura y sociedad",
    question: "En España está permitido el matrimonio…",
    options: [
      "solo entre personas del mismo sexo.",
      "entre personas del mismo y diferente sexo.",
      "solo entre personas de diferente sexo.",
    ],
    correctAnswer: 1,
    comment:
      "Desde julio de 2005, España fue uno de los primeros países del mundo en reconocer legalmente el matrimonio entre personas del mismo sexo, con los mismos derechos y deberes que el matrimonio heterosexual.",
  },
  {
    id: 5018,
    section: "Cultura y sociedad",
    question: "Los propietarios de perros deben registrarlos en…",
    options: [
      "el Ministerio de Justicia.",
      "la comisaría de policía.",
      "el Ayuntamiento.",
    ],
    correctAnswer: 2,
    comment:
      "Los perros deben inscribirse en el registro municipal de animales de compañía, gestionado por el Ayuntamiento, además de contar con microchip identificativo y cartilla sanitaria al día.",
  },
  {
    id: 5019,
    section: "Cultura y sociedad",
    question:
      "Los principales ingredientes de la tortilla española son huevos y…",
    options: ["pimientos.", "patatas.", "tomates."],
    correctAnswer: 1,
    comment:
      "La tortilla española, o tortilla de patatas, se elabora principalmente con huevos y patatas, con la eterna discusión popular sobre si debe llevar cebolla o no.",
  },
  {
    id: 5020,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es uno de los platos más conocidos internacionalmente de la gastronomía española?",
    options: ["Gazpacho.", "Pizza.", "Pasta."],
    correctAnswer: 0,
    comment:
      "El gazpacho, sopa fría a base de tomate, pepino, pimiento y aceite de oliva, típica de Andalucía, es uno de los platos españoles más conocidos y consumidos internacionalmente, sobre todo en verano.",
  },
  {
    id: 5021,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos canales de televisión es público?",
    options: ["Tele 5.", "La 1.", "Antena 3."],
    correctAnswer: 1,
    comment:
      "La 1 es el canal insignia de RTVE (Radiotelevisión Española), la corporación pública de titularidad estatal, mientras que Tele 5 y Antena 3 son cadenas privadas.",
  },
  {
    id: 5022,
    section: "Cultura y sociedad",
    question: "En una comunidad de vecinos, una de las normas es…",
    options: [
      "abrir la puerta al cartero.",
      "no molestar con ruido.",
      "limpiar los espacios comunes.",
    ],
    correctAnswer: 1,
    comment:
      "Respetar el descanso de los vecinos evitando ruidos molestos, especialmente durante la noche, es una norma habitual recogida en los estatutos de las comunidades de propietarios.",
  },
  {
    id: 5023,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos es el principal ingrediente de la paella valenciana?",
    options: ["Arroz.", "Chorizo.", "Garbanzos."],
    correctAnswer: 0,
    comment:
      "El arroz es el ingrediente principal de la paella valenciana, plato originario de la huerta de Valencia que, en su versión tradicional, se cocina con pollo, conejo y verduras de temporada.",
  },
  {
    id: 5024,
    section: "Cultura y sociedad",
    question: "La sidra es una bebida típica de...",
    options: ["Asturias.", "Valencia.", "Canarias."],
    correctAnswer: 0,
    comment:
      "La sidra, elaborada a partir de manzana fermentada, es la bebida más característica de Asturias, donde tradicionalmente se sirve «escanciada» para airearla antes de beberla.",
  },
  {
    id: 5025,
    section: "Cultura y sociedad",
    question: "Los españoles tienen dos apellidos, el primero es...",
    options: [
      "obligatoriamente el de la madre.",
      "obligatoriamente el del padre.",
      "puede ser el de la madre o el del padre.",
    ],
    correctAnswer: 2,
    comment:
      "Desde una reforma legal de 2017, los progenitores pueden acordar libremente el orden de los dos apellidos de sus hijos, sin que exista ya la obligación tradicional de anteponer el apellido paterno.",
  },
  {
    id: 5026,
    section: "Cultura y sociedad",
    question: "La Fiesta Nacional de España es el...",
    options: ["6 de diciembre.", "15 de agosto.", "12 de octubre."],
    correctAnswer: 2,
    comment:
      "La Fiesta Nacional de España se celebra el 12 de octubre, coincidiendo con la festividad de la Virgen del Pilar y con la llegada de Colón a América en 1492, y suele incluir un desfile militar en Madrid.",
  },
  {
    id: 5027,
    section: "Cultura y sociedad",
    question:
      "¿Qué días suelen cerrar la mayoría de las tiendas o el pequeño comercio?",
    options: ["Los lunes.", "Los domingos.", "Los sábados por la tarde."],
    correctAnswer: 1,
    comment:
      "El pequeño comercio suele permanecer cerrado los domingos y festivos en la mayor parte de España, aunque cada comunidad autónoma regula excepciones y zonas de gran afluencia turística.",
  },
  {
    id: 5028,
    section: "Cultura y sociedad",
    question: "¿Dónde se hace el pasaporte?",
    options: [
      "En el registro civil.",
      "En una comisaría de policía.",
      "En el Ayuntamiento.",
    ],
    correctAnswer: 1,
    comment:
      "El pasaporte español se tramita en las comisarías de la Policía Nacional, previa cita, presentando el DNI en vigor y abonando la tasa correspondiente.",
  },
  {
    id: 5029,
    section: "Cultura y sociedad",
    question:
      "El Ministerio de Igualdad es el encargado de luchar contra la violencia de género y la...",
    options: ["separación.", "discriminación.", "solidaridad."],
    correctAnswer: 1,
    comment:
      "El Ministerio de Igualdad desarrolla políticas contra la violencia de género y contra la discriminación por razón de sexo, orientación sexual o identidad de género, entre otras.",
  },
  {
    id: 5030,
    section: "Cultura y sociedad",
    question:
      "¿Qué comunidad autónoma es conocida por la calidad de sus cavas?",
    options: ["Galicia.", "Cataluña.", "Castilla-La Mancha."],
    correctAnswer: 1,
    comment:
      "Cataluña, y en concreto la comarca del Penedès, es la principal región productora de cava, el vino espumoso español elaborado con el método tradicional.",
  },
  {
    id: 5031,
    section: "Cultura y sociedad",
    question:
      "¿Qué documento se necesita para recibir atención médica en la sanidad pública?",
    options: [
      "El pasaporte.",
      "La tarjeta sanitaria.",
      "El certificado de nacimiento.",
    ],
    correctAnswer: 1,
    comment:
      "La tarjeta sanitaria individual es el documento que identifica al usuario dentro del Sistema Nacional de Salud y permite acceder a consultas, pruebas y tratamientos en centros públicos.",
  },
  {
    id: 5032,
    section: "Cultura y sociedad",
    question: "El horario de Canarias, con respecto a la Península, es de...",
    options: ["dos horas menos.", "una hora menos.", "una hora más."],
    correctAnswer: 1,
    comment:
      "Canarias tiene una hora menos que la España peninsular y Baleares durante todo el año, al pertenecer a un huso horario distinto (GMT/UTC frente a GMT+1/UTC+1).",
  },
  {
    id: 5033,
    section: "Cultura y sociedad",
    question:
      "Para acceder a la Universidad se debe superar una prueba de evaluación llamada...",
    options: [
      "Selectividad.",
      "Examen preuniversitario.",
      "Prueba de Acceso a la Universidad.",
    ],
    correctAnswer: 0,
    comment:
      "La Selectividad, actualmente denominada EvAU o EBAU según la comunidad autónoma, es la prueba que deben superar los estudiantes de Bachillerato para acceder a la universidad pública.",
  },
  {
    id: 5034,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos productos necesita importar España de otros países?",
    options: ["Petróleo.", "Aceite de oliva.", "Medicamentos."],
    correctAnswer: 0,
    comment:
      "España carece de reservas significativas de petróleo propias, por lo que depende en gran medida de las importaciones energéticas, a diferencia del aceite de oliva, del que es gran productora y exportadora.",
  },
  {
    id: 5035,
    section: "Cultura y sociedad",
    question:
      "¿Qué tipo de impuestos tienen que pagar los ciudadanos en España?",
    options: [
      "Impuestos directos como el IRPF.",
      "Impuestos indirectos como el IVA.",
      "Impuestos directos e indirectos.",
    ],
    correctAnswer: 2,
    comment:
      "El sistema tributario español combina impuestos directos, que gravan la renta o el patrimonio (como el IRPF), con impuestos indirectos, que gravan el consumo (como el IVA).",
  },
  {
    id: 5036,
    section: "Cultura y sociedad",
    question:
      "Los adultos sin Bachillerato pueden estudiar en la Universidad haciendo una prueba especial a partir de los...",
    options: ["18 años.", "23 años.", "25 años."],
    correctAnswer: 2,
    comment:
      "Los mayores de 25 años que no tienen el título de Bachillerato pueden acceder a la universidad superando una prueba de acceso específica, pensada para quienes retoman los estudios en la edad adulta.",
  },
  {
    id: 5037,
    section: "Cultura y sociedad",
    question:
      "¿Dónde puede encontrarse la siguiente norma «No pisar el césped, ni arrancar flores»?",
    options: [
      "En zonas de recreo.",
      "En los teatros.",
      "En los estadios de fútbol.",
    ],
    correctAnswer: 0,
    comment:
      "Ese tipo de aviso es habitual en parques y zonas ajardinadas de uso público, como medida de cuidado y conservación de los espacios verdes municipales.",
  },
  {
    id: 5038,
    section: "Cultura y sociedad",
    question: "El Bachillerato en España…",
    options: [
      "es obligatorio.",
      "se compone de dos cursos académicos.",
      "es la enseñanza a alumnos de 14 a 16 años.",
    ],
    correctAnswer: 1,
    comment:
      "El Bachillerato, que no es obligatorio pero sí necesario para acceder a la universidad, se compone de dos cursos académicos, generalmente entre los 16 y los 18 años.",
  },
  {
    id: 5039,
    section: "Cultura y sociedad",
    question: "El Impuesto sobre el Valor Añadido (IVA) forma parte de los…",
    options: [
      "Impuestos indirectos.",
      "Impuestos sobre la renta.",
      "Impuestos sobre sociedades.",
    ],
    correctAnswer: 0,
    comment:
      "El IVA es un impuesto indirecto que grava el consumo de bienes y servicios, y se aplica de forma general a la mayoría de las transacciones comerciales en España.",
  },
  {
    id: 5040,
    section: "Cultura y sociedad",
    question:
      "¿Qué número reciben los trabajadores al comenzar su primer empleo?",
    options: [
      "El de la Seguridad Social.",
      "El del pasaporte.",
      "El número de servicio.",
    ],
    correctAnswer: 0,
    comment:
      "Al iniciar la vida laboral se asigna un número de afiliación a la Seguridad Social, que identifica al trabajador durante toda su vida laboral a efectos de cotización y prestaciones.",
  },
  {
    id: 5041,
    section: "Cultura y sociedad",
    question: "Los colegios públicos…",
    options: [
      "pueden decidir su número de plazas.",
      "pueden contratar a los profesores que quieran.",
      "son gratuitos.",
    ],
    correctAnswer: 2,
    comment:
      "Los colegios públicos son gratuitos para las familias, ya que están financiados íntegramente con fondos públicos, a diferencia de los colegios privados o concertados.",
  },
  {
    id: 5042,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos puertos es uno de los principales de España?",
    options: ["Tenerife.", "Alicante.", "Algeciras."],
    correctAnswer: 2,
    comment:
      "El puerto de Algeciras es uno de los principales de España y de Europa por volumen de tráfico de mercancías, gracias a su posición estratégica junto al estrecho de Gibraltar.",
  },
  {
    id: 5043,
    section: "Cultura y sociedad",
    question: "Un colegio concertado es un colegio privado que…",
    options: [
      "recibe dinero de la Administración.",
      "financian los padres de los alumnos.",
      "recibe dinero de los bancos.",
    ],
    correctAnswer: 0,
    comment:
      "Los colegios concertados son centros de titularidad privada que reciben financiación pública a cambio de cumplir determinados requisitos, entre ellos ofrecer plazas gratuitas o a bajo coste.",
  },
  {
    id: 5044,
    section: "Cultura y sociedad",
    question: "España exporta productos principalmente a países…",
    options: [
      "de Hispanoamérica.",
      "de la Unión Europea.",
      "del norte de África.",
    ],
    correctAnswer: 1,
    comment:
      "La Unión Europea, y en particular países como Francia y Alemania, son el principal destino de las exportaciones españolas, dada la fuerte integración comercial dentro del mercado único europeo.",
  },
  {
    id: 5045,
    section: "Cultura y sociedad",
    question: "Las bibliotecas públicas son gratuitas para…",
    options: ["todos.", "los parados.", "los niños."],
    correctAnswer: 0,
    comment:
      "Las bibliotecas públicas en España son de acceso y uso gratuito para toda la ciudadanía, sin distinción de edad, nacionalidad o situación laboral.",
  },
  {
    id: 5046,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos productos exporta España más que importa?",
    options: ["Gas.", "Ropa.", "Calzado."],
    correctAnswer: 2,
    comment:
      "España es un importante exportador neto de calzado, sector con fuerte tradición industrial en zonas como Elda o Elche (Alicante), a diferencia del gas, que el país importa mayoritariamente.",
  },
  {
    id: 5047,
    section: "Cultura y sociedad",
    question:
      "Una persona mayor de 18 años puede obtener el título de Graduado en Educación Secundaria Obligatoria en...",
    options: [
      "un Centro de Educación de Personas Adultas.",
      "un centro de enseñanza primaria.",
      "una universidad.",
    ],
    correctAnswer: 0,
    comment:
      "Los Centros de Educación de Personas Adultas (CEPA) ofrecen programas flexibles para que quienes ya son mayores de edad puedan obtener el título de Graduado en ESO que no completaron en su momento.",
  },
  {
    id: 5048,
    section: "Cultura y sociedad",
    question: "La formación profesional...",
    options: [
      "es para mayores de 25 años.",
      "puede ser de grado medio o superior.",
      "es obligatoria.",
    ],
    correctAnswer: 1,
    comment:
      "La Formación Profesional se organiza en dos niveles, grado medio y grado superior, orientados a preparar a los estudiantes para el ejercicio directo de una profesión.",
  },
  {
    id: 5049,
    section: "Cultura y sociedad",
    question: "¿Adónde vamos para ver al médico de familia o al pediatra?",
    options: ["Al hospital.", "Al centro de salud.", "A la farmacia."],
    correctAnswer: 1,
    comment:
      "El médico de familia y el pediatra atienden en el centro de salud (atención primaria), primer nivel de contacto con el sistema sanitario antes de derivar, si es necesario, a un hospital.",
  },
  {
    id: 5050,
    section: "Cultura y sociedad",
    question: "¿Para cuántos años vale la tarjeta sanitaria europea?",
    options: ["Para un año.", "Para dos años.", "Para 10 años."],
    correctAnswer: 1,
    comment:
      "La Tarjeta Sanitaria Europea tiene una validez de dos años y permite recibir asistencia sanitaria pública en cualquier país de la Unión Europea, el Espacio Económico Europeo o Suiza durante una estancia temporal.",
  },
  {
    id: 5051,
    section: "Cultura y sociedad",
    question: "¿A qué hora se cena normalmente en España?",
    options: ["A las 18 h.", "A las 23 h.", "A las 21 o 22 h."],
    correctAnswer: 2,
    comment:
      "En España se suele cenar bastante más tarde que en la mayoría de países europeos, generalmente entre las 21 y las 22 horas, una costumbre relacionada con los horarios laborales y el clima.",
  },
  {
    id: 5052,
    section: "Cultura y sociedad",
    question: "¿Cuál es el número de teléfono único para cualquier emergencia?",
    options: ["060.", "112.", "911."],
    correctAnswer: 1,
    comment:
      "El 112 es el número único europeo de emergencias, válido en toda España y en el resto de la Unión Europea, que da acceso a los servicios de policía, bomberos y sanitarios.",
  },
  {
    id: 5053,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos periódicos se publica a nivel nacional?",
    options: ["El Diario Vasco.", "El País.", "La Voz de Galicia."],
    correctAnswer: 1,
    comment:
      "El País es uno de los periódicos generalistas de mayor difusión a nivel nacional, mientras que El Diario Vasco y La Voz de Galicia son cabeceras de referencia en sus respectivas comunidades autónomas.",
  },
  {
    id: 5054,
    section: "Cultura y sociedad",
    question: "¿Dónde se venden sellos y tabaco?",
    options: ["En el quiosco.", "En la farmacia.", "En el estanco."],
    correctAnswer: 2,
    comment:
      "El estanco es el establecimiento autorizado para la venta de tabaco, sellos de correos y otros efectos timbrados, bajo un sistema de licencia administrativa regulado por el Estado.",
  },
  {
    id: 5055,
    section: "Cultura y sociedad",
    question:
      "¿Cuándo se puede llamar al número de teléfono para atención a víctimas de violencia de género?",
    options: [
      "Las 24 horas del día.",
      "En horario de mañana.",
      "De lunes a viernes.",
    ],
    correctAnswer: 0,
    comment:
      "El teléfono de atención a víctimas de violencia de género funciona ininterrumpidamente las 24 horas del día, los 365 días del año, con atención gratuita y confidencial.",
  },
  {
    id: 5056,
    section: "Cultura y sociedad",
    question:
      "La organización que trabaja para conseguir la integración de las personas con discapacidad visual es…",
    options: ["la ONCE.", "Unicef.", "Cáritas."],
    correctAnswer: 0,
    comment:
      "La ONCE (Organización Nacional de Ciegos Españoles), conocida también por su famoso sorteo del «cupón», trabaja por la integración social y laboral de las personas con discapacidad visual.",
  },
  {
    id: 5057,
    section: "Cultura y sociedad",
    question: "El Camino de Santiago es…",
    options: [
      "Patrimonio de la Humanidad.",
      "una vía de ferrocarril.",
      "una ruta para excursionistas.",
    ],
    correctAnswer: 0,
    comment:
      "El Camino de Santiago, red de rutas de peregrinación que confluyen en Santiago de Compostela, está declarado Patrimonio de la Humanidad por la Unesco y recibe cada año a cientos de miles de peregrinos.",
  },
  {
    id: 5058,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el canal de televisión estatal que transmite noticias de actualidad nacional e internacional continuamente?",
    options: ["Teledeporte.", "La 1.", "Canal 24 horas."],
    correctAnswer: 2,
    comment:
      "El Canal 24 Horas de RTVE es un canal público especializado en información continua, dedicado a la actualidad nacional e internacional durante todo el día.",
  },
  {
    id: 5059,
    section: "Cultura y sociedad",
    question:
      "El teléfono gratuito para las víctimas de violencia de género es el…",
    options: ["091.", "112.", "016."],
    correctAnswer: 2,
    comment:
      "El 016 es el teléfono gratuito y confidencial de información y asesoramiento jurídico para las víctimas de violencia de género; la llamada no queda registrada en la factura del teléfono.",
  },
  {
    id: 5060,
    section: "Cultura y sociedad",
    question:
      "En España, la red de trenes puede ser de larga distancia, de media distancia y…",
    options: ["de cercanías.", "rural.", "transnacional."],
    correctAnswer: 0,
    comment:
      "La red ferroviaria española se organiza en servicios de larga distancia (AVE y trenes de alta velocidad), media distancia y cercanías, estos últimos pensados para el trayecto diario dentro de las grandes áreas metropolitanas.",
  },
  {
    id: 5061,
    section: "Cultura y sociedad",
    question: "¿Qué está prohibido en la puerta de un colegio?",
    options: [
      "Fumar un cigarrillo.",
      "Conducir un coche.",
      "Vender refrescos.",
    ],
    correctAnswer: 0,
    comment:
      "Fumar está prohibido en el entorno inmediato de los centros escolares, dentro de las medidas de protección de la salud de los menores establecidas por la normativa antitabaco.",
  },
  {
    id: 5062,
    section: "Cultura y sociedad",
    question:
      "¿Qué título se obtiene al finalizar un ciclo de grado medio de Formación Profesional?",
    options: ["Bachiller.", "Técnico.", "Graduado en ESO."],
    correctAnswer: 1,
    comment:
      "Al finalizar un ciclo formativo de grado medio de Formación Profesional se obtiene el título de Técnico en la especialidad correspondiente, que habilita para el ejercicio profesional directo.",
  },
  {
    id: 5063,
    section: "Cultura y sociedad",
    question:
      "¿Qué título se obtiene tras realizar una tesis doctoral en España?",
    options: ["Máster.", "Graduado.", "Doctor."],
    correctAnswer: 2,
    comment:
      "Tras defender públicamente una tesis doctoral ante un tribunal universitario se obtiene el título de Doctor, el grado académico más alto dentro del sistema universitario español.",
  },
  {
    id: 5064,
    section: "Cultura y sociedad",
    question: "¿Dónde se compran las medicinas con receta?",
    options: ["En el hospital.", "En el centro de salud.", "En la farmacia."],
    correctAnswer: 2,
    comment:
      "Los medicamentos con receta se dispensan exclusivamente en las farmacias, establecimientos regulados que garantizan el correcto suministro y control de fármacos.",
  },
  {
    id: 5065,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estas tres recomendaciones podemos encontrar en un parque?",
    options: [
      "No pisar el césped.",
      "Se recomienda pagar el billete con el dinero justo.",
      "Respetar las normas sobre equipaje.",
    ],
    correctAnswer: 0,
    comment:
      "«No pisar el césped» es una indicación habitual en parques y jardines públicos, orientada a conservar las zonas verdes; las otras dos opciones corresponden más bien a transporte público.",
  },
  {
    id: 5066,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de las siguientes cosas es obligatoria para el propietario de un coche en España?",
    options: ["El garaje.", "El seguro.", "La alarma."],
    correctAnswer: 1,
    comment:
      "El seguro de responsabilidad civil del vehículo es obligatorio por ley para todos los propietarios de coches en España, con el fin de cubrir los daños que puedan causarse a terceros.",
  },
  {
    id: 5067,
    section: "Cultura y sociedad",
    question: "El aeropuerto Adolfo Suárez está en…",
    options: ["Barcelona.", "Madrid.", "Bilbao."],
    correctAnswer: 1,
    comment:
      "El aeropuerto Adolfo Suárez Madrid-Barajas, el más grande y con mayor tráfico de pasajeros de España, debe su nombre al primer presidente del Gobierno de la democracia.",
  },
  {
    id: 5068,
    section: "Cultura y sociedad",
    question: "En un coche es obligatorio el uso del cinturón de seguridad...",
    options: [
      "solo en el asiento del conductor.",
      "en los asientos delanteros.",
      "en todos los asientos.",
    ],
    correctAnswer: 2,
    comment:
      "El uso del cinturón de seguridad es obligatorio para todos los ocupantes del vehículo, tanto en los asientos delanteros como en los traseros, siempre que el vehículo disponga de ellos.",
  },
  {
    id: 5069,
    section: "Cultura y sociedad",
    question: "¿Cuál es el límite de velocidad en autopista?",
    options: ["90 km/h.", "120 km/h.", "150 km/h."],
    correctAnswer: 1,
    comment:
      "El límite general de velocidad en autopistas y autovías españolas es de 120 km/h, salvo señalización específica que indique otro límite en un tramo concreto.",
  },
  {
    id: 5070,
    section: "Cultura y sociedad",
    question:
      "Ceder el asiento a las personas con movilidad reducida es una norma que encontramos indicada en...",
    options: ["el transporte público.", "las bibliotecas.", "los museos."],
    correctAnswer: 0,
    comment:
      "Ceder el asiento a personas mayores, embarazadas o con movilidad reducida es una norma de cortesía y, en muchos casos, de obligado cumplimiento en autobuses, metro y otros medios de transporte público.",
  },
  {
    id: 5071,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el medio de transporte público que tiene una luz verde encendida si está libre?",
    options: ["El autobús.", "El taxi.", "El tranvía."],
    correctAnswer: 1,
    comment:
      "El taxi lleva encendida una luz verde en el techo cuando está libre y disponible para recoger pasajeros; cuando está ocupado, esa luz se apaga.",
  },
  {
    id: 5072,
    section: "Cultura y sociedad",
    question: "¿Qué debes hacer si tienes un perro?",
    options: [
      "Pasearlo sin correa.",
      "Ponerle un microchip y vacunarlo.",
      "No recoger sus excrementos.",
    ],
    correctAnswer: 1,
    comment:
      "Es obligatorio identificar a los perros mediante microchip, mantener al día su cartilla de vacunación e inscribirlos en el registro municipal correspondiente, además de recoger sus excrementos en la vía pública.",
  },
  {
    id: 5073,
    section: "Cultura y sociedad",
    question: "Los españoles necesitan el pasaporte para viajar a…",
    options: ["Italia.", "China.", "Alemania."],
    correctAnswer: 1,
    comment:
      "Al no formar parte de la Unión Europea ni del espacio Schengen, China exige pasaporte (y en muchos casos visado) a los ciudadanos españoles para entrar en su territorio, a diferencia de Italia o Alemania.",
  },
  {
    id: 5074,
    section: "Cultura y sociedad",
    question: "¿Cuál es la edad mínima para trabajar en España?",
    options: ["16 años.", "18 años.", "21 años."],
    correctAnswer: 0,
    comment:
      "La edad mínima general para trabajar en España es 16 años, siempre que se haya completado la enseñanza obligatoria; para determinados trabajos nocturnos o peligrosos se exige, además, ser mayor de 18.",
  },
  {
    id: 5075,
    section: "Cultura y sociedad",
    question: "¿Cuál es el sector de mayor peso en la economía española?",
    options: ["Agricultura.", "Servicios.", "Construcción."],
    correctAnswer: 1,
    comment:
      "El sector servicios, que incluye el turismo, el comercio y las finanzas entre otros, es con diferencia el que más aporta al PIB y al empleo en la economía española.",
  },
  {
    id: 5076,
    section: "Cultura y sociedad",
    question: "España es innovadora en el sector de…",
    options: [
      "la ingeniería aeroespacial.",
      "las energías renovables.",
      "la energía nuclear.",
    ],
    correctAnswer: 1,
    comment:
      "España es uno de los países líderes en energías renovables, especialmente en energía eólica y solar, gracias a sus recursos naturales y a la inversión en tecnología limpia de las últimas décadas.",
  },
  {
    id: 5077,
    section: "Cultura y sociedad",
    question: "¿Cómo se llama la ley laboral más importante de España?",
    options: [
      "La Constitución.",
      "El Estatuto de los Trabajadores.",
      "El Servicio Público de Empleo Estatal.",
    ],
    correctAnswer: 1,
    comment:
      "El Estatuto de los Trabajadores es la norma básica que regula las relaciones laborales en España: derechos y deberes de trabajadores y empresas, contratos, jornada, salario y despido, entre otros aspectos.",
  },
  {
    id: 5078,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos establecimientos está abierto 24 horas si es necesario?",
    options: ["Farmacia.", "Pescadería.", "Librería."],
    correctAnswer: 0,
    comment:
      "Las farmacias organizan un sistema de guardias rotatorio que garantiza que siempre haya al menos una abierta las 24 horas en cada zona, para atender urgencias sanitarias fuera del horario habitual.",
  },
  {
    id: 5079,
    section: "Cultura y sociedad",
    question: "La educación infantil en España…",
    options: ["es obligatoria.", "tiene dos ciclos.", "empieza a los 4 años."],
    correctAnswer: 1,
    comment:
      "La educación infantil, aunque no es obligatoria, se organiza en dos ciclos (de 0 a 3 años y de 3 a 6 años) y es una etapa clave en el desarrollo temprano de los menores.",
  },
  {
    id: 5080,
    section: "Cultura y sociedad",
    question: "¿Cuándo empieza el calendario escolar?",
    options: ["En agosto.", "En septiembre.", "En octubre."],
    correctAnswer: 1,
    comment:
      "El curso escolar en España comienza habitualmente en septiembre y finaliza en junio, aunque las fechas exactas varían ligeramente según la comunidad autónoma.",
  },
  {
    id: 5081,
    section: "Cultura y sociedad",
    question: "Las Escuelas Oficiales de Idiomas…",
    options: [
      "son centros de enseñanza privada.",
      "son para mayores de 16 años.",
      "dependen del Instituto Cervantes.",
    ],
    correctAnswer: 1,
    comment:
      "Las Escuelas Oficiales de Idiomas (EOI) son centros públicos de enseñanza de idiomas a los que pueden acceder los mayores de 16 años, ofreciendo formación y titulación oficial en numerosas lenguas.",
  },
  {
    id: 5082,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el documento que recoge los años de cotización a la Seguridad Social?",
    options: [
      "Informe de vida laboral.",
      "Recibo de finiquito.",
      "Certificado de profesionalidad.",
    ],
    correctAnswer: 0,
    comment:
      "El informe de vida laboral recoge de forma detallada los periodos y las empresas en las que una persona ha cotizado a la Seguridad Social a lo largo de su trayectoria profesional; puede solicitarse online de forma gratuita.",
  },
  {
    id: 5083,
    section: "Cultura y sociedad",
    question:
      "Los convenios colectivos de una empresa son los que se firman con los representantes de los trabajadores sobre…",
    options: [
      "las condiciones laborales.",
      "el futuro de la empresa.",
      "la relación con los clientes.",
    ],
    correctAnswer: 0,
    comment:
      "Los convenios colectivos son acuerdos negociados entre empresarios (o sus asociaciones) y los representantes de los trabajadores que regulan las condiciones laborales, como salarios, jornada o vacaciones, aplicables a un sector o empresa.",
  },
  {
    id: 5084,
    section: "Cultura y sociedad",
    question: "¿En cuál de estos sectores destaca España?",
    options: [
      "En el turismo.",
      "En la industria automovilística.",
      "En tecnología digital.",
    ],
    correctAnswer: 0,
    comment:
      "España es una de las principales potencias turísticas del mundo, situándose habitualmente entre los países que más visitantes internacionales reciben cada año.",
  },
];
