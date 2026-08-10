export interface Question {
  id: number;
  section: string;
  question: string;
  options: string[];
  correctAnswer: number;
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
  },
  {
    id: 1002,
    section: "Gobierno y legislación",
    question: "La ley fundamental de España se llama...",
    options: ["Constitución.", "Ley básica.", "Ordenamiento esencial."],
    correctAnswer: 0,
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
  },
  {
    id: 1004,
    section: "Gobierno y legislación",
    question: "El Instituto de las Mujeres es...",
    options: ["una institución europea.", "un organismo español.", "una ONG."],
    correctAnswer: 1,
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
  },
  {
    id: 1007,
    section: "Gobierno y legislación",
    question: "¿Cuál de estas fuerzas de seguridad es de ámbito autonómico?",
    options: ["Policía local.", "Guardia Civil.", "Policía Foral de Navarra."],
    correctAnswer: 2,
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
  },
  {
    id: 1009,
    section: "Gobierno y legislación",
    question:
      "En la Constitución se establece la separación de poderes: el poder ejecutivo, el legislativo y el...",
    options: ["judicial.", "informativo.", "político."],
    correctAnswer: 0,
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
  },
  {
    id: 1012,
    section: "Gobierno y legislación",
    question: "La gestión de la sanidad es competencia de...",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 1,
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
  },
  {
    id: 1021,
    section: "Gobierno y legislación",
    question: "¿Quién dirige la administración militar de España?",
    options: ["Los ayuntamientos.", "El Gobierno.", "Las Cortes Generales."],
    correctAnswer: 1,
  },
  {
    id: 1022,
    section: "Gobierno y legislación",
    question: "¿Qué hay en las Islas Baleares, en vez de diputaciones?",
    options: ["Cabildos.", "Consejos insulares.", "Centros de diputados."],
    correctAnswer: 1,
  },
  {
    id: 1023,
    section: "Gobierno y legislación",
    question: "¿Qué ciudad tiene más habitantes?",
    options: ["Sevilla.", "Barcelona.", "Zaragoza."],
    correctAnswer: 1,
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
  },
  {
    id: 1025,
    section: "Gobierno y legislación",
    question: "El Congreso de los Diputados y el Senado constituyen el poder…",
    options: ["ejecutivo.", "legislativo.", "judicial."],
    correctAnswer: 1,
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
  },
  {
    id: 1027,
    section: "Gobierno y legislación",
    question: "¿Cuántas comunidades autónomas hay en España?",
    options: ["8.", "17.", "25."],
    correctAnswer: 1,
  },
  {
    id: 1028,
    section: "Gobierno y legislación",
    question: "Los colores de la bandera española son…",
    options: ["blanco y rojo.", "rojo y amarillo.", "amarillo y blanco."],
    correctAnswer: 1,
  },
  {
    id: 1029,
    section: "Gobierno y legislación",
    question: "¿Dónde está la sede del Gobierno de España?",
    options: ["En Madrid.", "En Barcelona.", "En Sevilla."],
    correctAnswer: 0,
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
  },
  {
    id: 1032,
    section: "Gobierno y legislación",
    question: "¿Qué lengua es oficial en el País Vasco?",
    options: ["El bable.", "El aragonés.", "El euskera."],
    correctAnswer: 2,
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
  },
  {
    id: 1034,
    section: "Gobierno y legislación",
    question:
      "El aranés es una lengua cooficial que se habla en un pequeño territorio de…",
    options: ["Cataluña.", "La Rioja.", "Aragón."],
    correctAnswer: 0,
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
  },
  {
    id: 1036,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?",
    options: ["El gallego.", "El aragonés.", "El murciano."],
    correctAnswer: 0,
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
  },
  {
    id: 1041,
    section: "Gobierno y legislación",
    question: "¿Quiénes forman parte del Gobierno?",
    options: ["Los ministros.", "Los concejales.", "Los alcaldes."],
    correctAnswer: 0,
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
  },
  {
    id: 1043,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de las siguientes siglas corresponde a un partido político?",
    options: ["PP.", "PIB.", "UE."],
    correctAnswer: 0,
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
  },
  {
    id: 1045,
    section: "Gobierno y legislación",
    question:
      "¿Con qué rey se restaura la democracia en España después del régimen de Franco?",
    options: ["Con Carlos III.", "Con Alfonso XIII.", "Con Juan Carlos I."],
    correctAnswer: 2,
  },
  {
    id: 1046,
    section: "Gobierno y legislación",
    question: "¿En qué año se aprobó la Constitución española?",
    options: ["En 1957.", "En 1978.", "En 2001."],
    correctAnswer: 1,
  },
  {
    id: 1047,
    section: "Gobierno y legislación",
    question: "¿Cuántas comunidades autónomas tienen su propia bandera?",
    options: ["Ninguna.", "Todas.", "Las que tienen una lengua cooficial."],
    correctAnswer: 1,
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
  },
  {
    id: 1049,
    section: "Gobierno y legislación",
    question:
      "¿Cuántas firmas, como mínimo, deben recoger los ciudadanos para poder presentar una proposición de ley?",
    options: ["250 000.", "100 000.", "500 000."],
    correctAnswer: 2,
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
  },
  {
    id: 1051,
    section: "Gobierno y legislación",
    question:
      "En la organización de la Administración se distinguen tres niveles: central, autonómica y…",
    options: ["estatal.", "regional.", "local."],
    correctAnswer: 2,
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
  },
  {
    id: 1054,
    section: "Gobierno y legislación",
    question: "El nombre oficial del parlamento español es…",
    options: ["Cortes Generales.", "Congreso de los Diputados.", "Senado."],
    correctAnswer: 0,
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
  },
  {
    id: 1059,
    section: "Gobierno y legislación",
    question: "¿Qué lengua cooficial se habla en las Islas Baleares?",
    options: ["Gallego.", "Catalán.", "Euskera."],
    correctAnswer: 1,
  },
  {
    id: 1060,
    section: "Gobierno y legislación",
    question:
      "La Constitución defiende valores tales como la libertad, la igualdad, el pluralismo político y…",
    options: ["la justicia.", "la solidaridad.", "la fraternidad."],
    correctAnswer: 0,
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
  },
  {
    id: 1062,
    section: "Gobierno y legislación",
    question: "¿Cuántos habitantes hay en España?",
    options: ["95 millones.", "49 millones.", "67 millones."],
    correctAnswer: 1,
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
  },
  {
    id: 1064,
    section: "Gobierno y legislación",
    question: "¿Quién dirige la política interior y exterior de España?",
    options: ["El rey.", "El Gobierno.", "El Congreso de los Diputados."],
    correctAnswer: 1,
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
  },
  {
    id: 1067,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estas ciudades se encuentra entre las 10 más pobladas de España?",
    options: ["Cádiz.", "Málaga.", "Albacete."],
    correctAnswer: 1,
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
  },
  {
    id: 1069,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama el rey de España?",
    options: ["Juan Carlos I.", "Felipe VI.", "Alfonso XIII."],
    correctAnswer: 1,
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
  },
  {
    id: 1077,
    section: "Gobierno y legislación",
    question: "¿Quién vigila puertos y aeropuertos, fronteras y costas?",
    options: ["La Guardia Civil.", "La Policía local.", "La Policía Nacional."],
    correctAnswer: 0,
  },
  {
    id: 1078,
    section: "Gobierno y legislación",
    question:
      "¿Quién hace el control de pasaportes en las fronteras de España?",
    options: ["La Guardia Civil.", "La Policía local.", "La Policía Nacional."],
    correctAnswer: 0,
  },
  {
    id: 1079,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de los siguientes políticos ha sido presidente del Gobierno en España?",
    options: ["Manuel Fraga.", "José María Aznar.", "Yolanda Díaz."],
    correctAnswer: 1,
  },
  {
    id: 1080,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama la policía autonómica de Cataluña?",
    options: ["Guardia Civil.", "Ertzaintza.", "Mossos d'Esquadra."],
    correctAnswer: 2,
  },
  {
    id: 1081,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama la policía autonómica del País Vasco?",
    options: ["Ertzaintza.", "Guardia Civil.", "Mossos d'Esquadra."],
    correctAnswer: 0,
  },
  {
    id: 1082,
    section: "Gobierno y legislación",
    question: "¿Desde qué año es rey Felipe VI?",
    options: ["Desde 1975.", "Desde 2014.", "Desde 2020."],
    correctAnswer: 1,
  },
  {
    id: 1083,
    section: "Gobierno y legislación",
    question: "¿Quién regula el tráfico en los pueblos y ciudades?",
    options: ["La Guardia Civil.", "Protección Civil.", "La Policía Local."],
    correctAnswer: 2,
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
  },
  {
    id: 1085,
    section: "Gobierno y legislación",
    question: "En España el voto en las elecciones es…",
    options: ["un derecho.", "un deber.", "una obligación."],
    correctAnswer: 0,
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
  },
  {
    id: 1089,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llaman los órganos de gobierno que solo existen en Canarias?",
    options: ["Cabildos.", "Consejos insulares.", "Diputaciones."],
    correctAnswer: 0,
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
  },
  {
    id: 1091,
    section: "Gobierno y legislación",
    question:
      "¿Cuál es el número de teléfono de información de la Administración General del Estado?",
    options: ["010.", "060.", "091."],
    correctAnswer: 1,
  },
  {
    id: 1092,
    section: "Gobierno y legislación",
    question: "España está organizada en…",
    options: ["cantones.", "comunidades autónomas.", "estados federales."],
    correctAnswer: 1,
  },
  {
    id: 1093,
    section: "Gobierno y legislación",
    question: "¿Cuántos partidos políticos hay en España?",
    options: ["Ninguno.", "Uno.", "Muchos."],
    correctAnswer: 2,
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
  },
  {
    id: 1097,
    section: "Gobierno y legislación",
    question: "¿Cuántas provincias hay en España?",
    options: ["45.", "50.", "55."],
    correctAnswer: 1,
  },
  {
    id: 1098,
    section: "Gobierno y legislación",
    question: "La enseñanza de las lenguas cooficiales es competencia…",
    options: ["del Estado.", "de la comunidad autónoma.", "de la provincia."],
    correctAnswer: 1,
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
  },
  {
    id: 1100,
    section: "Gobierno y legislación",
    question: "¿Cuántas cámaras hay en el Parlamento español?",
    options: ["Una.", "Dos.", "Tres."],
    correctAnswer: 1,
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
  },
  {
    id: 1102,
    section: "Gobierno y legislación",
    question:
      "En materias como nacionalidad, inmigración, emigración o extranjería solo tiene competencia…",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 0,
  },
  {
    id: 1103,
    section: "Gobierno y legislación",
    question: "¿Cuántas mujeres han sido presidentas de Gobierno en España?",
    options: ["Ninguna.", "Una.", "Dos."],
    correctAnswer: 0,
  },
  {
    id: 1104,
    section: "Gobierno y legislación",
    question: "Las relaciones internacionales son competencia de…",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 0,
  },
  {
    id: 1105,
    section: "Gobierno y legislación",
    question: "El Ayuntamiento está formado por el alcalde y…",
    options: ["los concejales.", "los diputados.", "los senadores."],
    correctAnswer: 0,
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
  },
  {
    id: 1107,
    section: "Gobierno y legislación",
    question: "¿Cuál es el órgano de gobierno en los municipios?",
    options: ["El ayuntamiento.", "La diputación.", "El cabildo."],
    correctAnswer: 0,
  },
  {
    id: 1108,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llaman los órganos de gobierno de las provincias españolas?",
    options: ["Cabildos.", "Consejos insulares.", "Diputaciones."],
    correctAnswer: 2,
  },
  {
    id: 1109,
    section: "Gobierno y legislación",
    question: "¿Cuál es el órgano superior del poder ejecutivo?",
    options: ["El Gobierno.", "Las Fuerzas Armadas.", "Las Cortes Generales."],
    correctAnswer: 0,
  },
  {
    id: 1110,
    section: "Gobierno y legislación",
    question: "El idioma español también se llama…",
    options: ["aragonés.", "castellano.", "leonés."],
    correctAnswer: 1,
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
  },
  {
    id: 1112,
    section: "Gobierno y legislación",
    question: "Los españoles pueden votar a partir de los…",
    options: ["16 años.", "18 años.", "21 años."],
    correctAnswer: 1,
  },
  {
    id: 1113,
    section: "Gobierno y legislación",
    question: "Algunos ciudadanos extranjeros pueden votar en las elecciones…",
    options: ["municipales.", "autonómicas.", "generales."],
    correctAnswer: 0,
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
  },
  {
    id: 1116,
    section: "Gobierno y legislación",
    question: "¿Cuántos miembros tiene el Congreso de los Diputados?",
    options: ["300.", "350.", "400."],
    correctAnswer: 1,
  },
  {
    id: 1117,
    section: "Gobierno y legislación",
    question: "Los municipios y provincias forman parte de la Administración…",
    options: ["autonómica.", "local.", "central."],
    correctAnswer: 1,
  },
  {
    id: 1118,
    section: "Gobierno y legislación",
    question: "La comunidad autónoma más poblada de España es…",
    options: ["Andalucía.", "Cataluña.", "Castilla y León."],
    correctAnswer: 0,
  },
  {
    id: 1119,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llama la organización que defiende los intereses de los trabajadores?",
    options: ["Asociación.", "Partido.", "Sindicato."],
    correctAnswer: 2,
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
  },
  {
    id: 2002,
    section: "Derechos y deberes",
    question:
      "Los españoles que obtienen la nacionalidad por residencia deben esperar tres años para poder votar en las elecciones.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2003,
    section: "Derechos y deberes",
    question:
      "En España, la Constitución prohíbe la tortura y la pena de muerte.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2004,
    section: "Derechos y deberes",
    question:
      "El funcionamiento de los partidos políticos tiene que ser democrático.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2005,
    section: "Derechos y deberes",
    question:
      "Se puede obligar a alguien a decir cuáles son sus ideas políticas o religiosas.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2006,
    section: "Derechos y deberes",
    question:
      "Se puede limitar a una persona el derecho a entrar y salir libremente de España por motivos ideológicos.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2007,
    section: "Derechos y deberes",
    question:
      "La Educación Primaria (de 6 a 12 años) es gratuita y obligatoria.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2008,
    section: "Derechos y deberes",
    question:
      "La Constitución garantiza el derecho de los españoles a una vivienda digna.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2009,
    section: "Derechos y deberes",
    question:
      "En España la policía puede entrar en cualquier casa sin resolución judicial en cualquier momento.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2010,
    section: "Derechos y deberes",
    question:
      "Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicial.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2011,
    section: "Derechos y deberes",
    question:
      "La Constitución reconoce el derecho de los ciudadanos a asociarse libremente.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2012,
    section: "Derechos y deberes",
    question:
      "Los profesores pueden enseñar con libertad, dentro de los límites de la Constitución.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2013,
    section: "Derechos y deberes",
    question:
      "La Constitución reconoce únicamente los derechos fundamentales de los españoles.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2014,
    section: "Derechos y deberes",
    question: "Los ciudadanos deben colaborar con los jueces si se lo piden.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2015,
    section: "Derechos y deberes",
    question:
      "La ley limita el acceso de terceras personas a datos de carácter personal.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2016,
    section: "Derechos y deberes",
    question:
      "La libertad de prensa está limitada por el respeto al honor de las personas.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2017,
    section: "Derechos y deberes",
    question:
      "En España las causas de separación y divorcio están reguladas por la ley.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2018,
    section: "Derechos y deberes",
    question:
      "La atención sanitaria gratuita es solo para personas mayores de 65 años.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2019,
    section: "Derechos y deberes",
    question: "En España los hombres y las mujeres tienen los mismos derechos.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2020,
    section: "Derechos y deberes",
    question:
      "La enseñanza obligatoria consta de dos etapas: Educación Primaria y Educación Secundaria Obligatoria.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2021,
    section: "Derechos y deberes",
    question: "En España hay una religión oficial.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2022,
    section: "Derechos y deberes",
    question: "La atención sanitaria pública es gratuita.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2023,
    section: "Derechos y deberes",
    question: "La enseñanza básica en España es solo para los extranjeros.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2024,
    section: "Derechos y deberes",
    question: "En España está reconocido el derecho de asociación.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2025,
    section: "Derechos y deberes",
    question:
      "Los sindicatos pueden participar en negociaciones con empresarios y con el Gobierno.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2026,
    section: "Derechos y deberes",
    question: "Los trabajadores tienen derecho a hacer huelga.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2027,
    section: "Derechos y deberes",
    question:
      "La libertad ideológica está garantizada solo en parte del territorio nacional.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2028,
    section: "Derechos y deberes",
    question:
      "Todos los ciudadanos tienen acceso al sistema de Seguridad Social público, excepto si están desempleados.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2029,
    section: "Derechos y deberes",
    question:
      "Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2030,
    section: "Derechos y deberes",
    question:
      "En España, los poderes públicos deben proteger la salud y promover el deporte.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2031,
    section: "Derechos y deberes",
    question: "La enseñanza básica en España es obligatoria y gratuita.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2032,
    section: "Derechos y deberes",
    question:
      "La ley prohíbe la discriminación por cualquier circunstancia personal o social.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2033,
    section: "Derechos y deberes",
    question:
      "En España, los ciudadanos pueden desplazarse libremente por todo el territorio nacional.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2034,
    section: "Derechos y deberes",
    question:
      "Los jueces administran la justicia en España según las indicaciones del Gobierno.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
  },
  {
    id: 2035,
    section: "Derechos y deberes",
    question:
      "Los españoles deben ayudar en los casos de catástrofe o calamidad pública.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
  },
  {
    id: 2036,
    section: "Derechos y deberes",
    question:
      "En España los ciudadanos pueden elegir en qué ciudad quieren vivir.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
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
  },
  {
    id: 3002,
    section: "Organización territorial",
    question: "¿Cuál es la capital de la Comunidad Valenciana?",
    options: ["Alicante.", "Castellón.", "Valencia."],
    correctAnswer: 2,
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
  },
  {
    id: 3004,
    section: "Organización territorial",
    question:
      "¿Cómo se llama la extensa llanura situada en el centro de la península ibérica?",
    options: ["Marisma.", "Cordillera.", "Meseta."],
    correctAnswer: 2,
  },
  {
    id: 3005,
    section: "Organización territorial",
    question: "El parque nacional de Ordesa está en...",
    options: ["Aragón.", "Navarra.", "Castilla-La Mancha."],
    correctAnswer: 0,
  },
  {
    id: 3006,
    section: "Organización territorial",
    question: "¿En qué comunidad autónoma están Guadalajara y Cuenca?",
    options: ["En Castilla y León.", "En Castilla-La Mancha.", "En Cantabria."],
    correctAnswer: 1,
  },
  {
    id: 3007,
    section: "Organización territorial",
    question:
      "¿Qué comunidad autónoma tiene como capital Santiago de Compostela?",
    options: ["Galicia.", "Asturias.", "Cantabria."],
    correctAnswer: 0,
  },
  {
    id: 3008,
    section: "Organización territorial",
    question: "¿Dónde está Almería?",
    options: ["En Andalucía.", "En Canarias.", "En Aragón."],
    correctAnswer: 0,
  },
  {
    id: 3009,
    section: "Organización territorial",
    question: "La capital de la comunidad autónoma de Galicia es...",
    options: ["A Coruña.", "Vigo.", "Santiago de Compostela."],
    correctAnswer: 2,
  },
  {
    id: 3010,
    section: "Organización territorial",
    question: "¿Cuál de estos ríos desemboca en el mar Mediterráneo?",
    options: ["El Tajo.", "El Júcar.", "El Duero."],
    correctAnswer: 1,
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
  },
  {
    id: 3012,
    section: "Organización territorial",
    question: "La ciudad de Vitoria es la sede administrativa de...",
    options: ["Navarra.", "País Vasco.", "La Rioja."],
    correctAnswer: 1,
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
  },
  {
    id: 3014,
    section: "Organización territorial",
    question: "El parque nacional de Aigüestortes está en...",
    options: ["Cataluña.", "Aragón.", "Castilla y León."],
    correctAnswer: 0,
  },
  {
    id: 3015,
    section: "Organización territorial",
    question: "En el norte de África están Ceuta y...",
    options: ["Almería.", "Melilla.", "Cádiz."],
    correctAnswer: 1,
  },
  {
    id: 3016,
    section: "Organización territorial",
    question:
      "¿En qué lugar de España hay un clima que se caracteriza por inviernos fríos y veranos muy calurosos?",
    options: ["Canarias.", "Comunidad Valenciana."],
    correctAnswer: 1, // Nota: el PDF solo da dos opciones, la correcta es la segunda (Comunidad Valenciana)
  },
  {
    id: 3017,
    section: "Organización territorial",
    question: "¿Cuál de estos ríos desemboca en el océano Atlántico?",
    options: ["El Guadalquivir.", "El Manzanares.", "El Júcar."],
    correctAnswer: 0,
  },
  {
    id: 3018,
    section: "Organización territorial",
    question:
      "¿Cuál de estas provincias forma parte de la Comunidad de Castilla y León?",
    options: ["Burgos.", "Huesca.", "Guadalajara."],
    correctAnswer: 0,
  },
  {
    id: 3019,
    section: "Organización territorial",
    question: "¿En qué comunidad autónoma está la ciudad de Huesca?",
    options: ["Castilla-La Mancha.", "Aragón.", "Extremadura."],
    correctAnswer: 1,
  },
  {
    id: 3020,
    section: "Organización territorial",
    question: "Canarias tiene un clima...",
    options: ["mediterráneo.", "oceánico.", "subtropical."],
    correctAnswer: 2,
  },
  {
    id: 3021,
    section: "Organización territorial",
    question: "El principal río que desemboca en el mar Mediterráneo es el...",
    options: ["Ebro.", "Duero.", "Tajo."],
    correctAnswer: 0,
  },
  {
    id: 3022,
    section: "Organización territorial",
    question: "España está entre los países de Europa más...",
    options: ["lluviosos.", "montañosos.", "fríos."],
    correctAnswer: 1,
  },
  {
    id: 3023,
    section: "Organización territorial",
    question: "¿En qué provincia está el parque nacional de Monfragüe?",
    options: ["En Cáceres.", "En Murcia.", "En Ciudad Real."],
    correctAnswer: 0,
  },
  {
    id: 3024,
    section: "Organización territorial",
    question: "¿Cuál es la capital de la comunidad autónoma de Extremadura?",
    options: ["Cáceres.", "Badajoz.", "Mérida."],
    correctAnswer: 2,
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
  },
  {
    id: 4002,
    section: "Cultura y sociedad",
    question: "¿Qué científica española es reconocida por sus investigaciones?",
    options: ["Almudena Grandes.", "Montserrat Caballé.", "Margarita Salas."],
    correctAnswer: 2,
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
  },
  {
    id: 4004,
    section: "Cultura y sociedad",
    question: "¿Quién escribió Nada, una novela sobre la posguerra española?",
    options: ["Carmen Laforet.", "Ana María Matute.", "María Dueñas."],
    correctAnswer: 0,
  },
  {
    id: 4005,
    section: "Cultura y sociedad",
    question: "¿Qué músico compuso El amor brujo?",
    options: ["Manuel de Falla.", "Isaac Albéniz.", "Joaquín Rodrigo."],
    correctAnswer: 0,
  },
  {
    id: 4006,
    section: "Cultura y sociedad",
    question: "¿Qué es típico en la Noche de San Juan?",
    options: ["Comer uvas.", "Encender hogueras.", "Regalar libros."],
    correctAnswer: 1,
  },
  {
    id: 4007,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el instrumento más característico de la música flamenca?",
    options: ["La gaita.", "La guitarra.", "El piano."],
    correctAnswer: 1,
  },
  {
    id: 4008,
    section: "Cultura y sociedad",
    question: "Isabel Coixet es una…",
    options: ["cantante pop.", "bailarina clásica.", "directora de cine."],
    correctAnswer: 2,
  },
  {
    id: 4009,
    section: "Cultura y sociedad",
    question: "Una de las cantantes españolas más famosas actualmente es…",
    options: ["Rosalía.", "Marisol.", "Lola Flores."],
    correctAnswer: 0,
  },
  {
    id: 4010,
    section: "Cultura y sociedad",
    question:
      "¿En qué ciudad de España hay una mezquita que es Patrimonio de la Humanidad?",
    options: ["Santiago de Compostela.", "Madrid.", "Córdoba."],
    correctAnswer: 2,
  },
  {
    id: 4011,
    section: "Cultura y sociedad",
    question:
      "¿En qué ciudad de España se encuentra La Alhambra, que es Patrimonio de la Humanidad?",
    options: ["En Sevilla.", "En Córdoba.", "En Granada."],
    correctAnswer: 2,
  },
  {
    id: 4012,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el nombre de la directora española que ha destacado por su mirada crítica y por modernizar el cine nacional?",
    options: ["Pilar Miró.", "Sara Baras.", "Penélope Cruz."],
    correctAnswer: 0,
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
  },
  {
    id: 4015,
    section: "Cultura y sociedad",
    question: "Paco de Lucía fue un famoso….",
    options: ["científico.", "guitarrista.", "pintor."],
    correctAnswer: 1,
  },
  {
    id: 4016,
    section: "Cultura y sociedad",
    question: "¿Qué celebramos el 24 de diciembre?",
    options: ["Carnaval.", "Nochebuena.", "San Juan."],
    correctAnswer: 1,
  },
  {
    id: 4017,
    section: "Cultura y sociedad",
    question: "Juan Mari Arzak es un famoso....",
    options: ["escritor.", "músico.", "cocinero."],
    correctAnswer: 2,
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
  },
  {
    id: 4019,
    section: "Cultura y sociedad",
    question: "¿Qué canciones típicas se cantan en Navidad?",
    options: ["Flamenco.", "Villancicos.", "Jotas."],
    correctAnswer: 1,
  },
  {
    id: 4020,
    section: "Cultura y sociedad",
    question: "La Liga y la Copa del Rey son competiciones de…",
    options: ["natación.", "atletismo.", "fútbol."],
    correctAnswer: 2,
  },
  {
    id: 4021,
    section: "Cultura y sociedad",
    question: "¿Quién ha recibido el premio Nobel de Literatura?",
    options: ["María Zambrano.", "Pablo Picasso.", "Vicente Aleixandre."],
    correctAnswer: 2,
  },
  {
    id: 4022,
    section: "Cultura y sociedad",
    question: "¿Qué fiesta se celebra en Pamplona el 7 de julio?",
    options: ["Los sanfermines.", "Las Fallas.", "La Feria de Abril."],
    correctAnswer: 0,
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
  },
  {
    id: 4024,
    section: "Cultura y sociedad",
    question:
      "¿Qué toman los españoles la noche del 31 de diciembre para celebrar el cambio de año?",
    options: ["Lentejas.", "Uvas.", "Aceitunas."],
    correctAnswer: 1,
  },
  {
    id: 4025,
    section: "Cultura y sociedad",
    question: "¿Qué mujer es autora del cuadro La verbena?",
    options: ["Maruja Mallo.", "Carmen Maura.", "Clara Lago."],
    correctAnswer: 0,
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
  },
  {
    id: 4027,
    section: "Cultura y sociedad",
    question:
      "¿Qué escritora española escribe en otra lengua oficial de España?",
    options: ["Mercè Rodoreda.", "Almudena Grandes.", "Ana María Matute."],
    correctAnswer: 0,
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
  },
  {
    id: 4030,
    section: "Cultura y sociedad",
    question:
      "¿Qué ciudad fue un centro científico en Al-Ándalus, donde se estudiaba medicina y astronomía?",
    options: ["Barcelona.", "Madrid.", "Córdoba."],
    correctAnswer: 2,
  },
  {
    id: 4031,
    section: "Cultura y sociedad",
    question: "¿En qué ciudad española está el Museo Guggenheim?",
    options: ["Bilbao.", "Madrid.", "Valencia."],
    correctAnswer: 0,
  },
  {
    id: 4032,
    section: "Cultura y sociedad",
    question: "El Premio Cervantes se da a…",
    options: ["actores.", "escritores.", "pintores."],
    correctAnswer: 1,
  },
  {
    id: 4033,
    section: "Cultura y sociedad",
    question: "¿Qué premio reconoce a los mejores actores y películas?",
    options: ["Premio Goya.", "Premio Nobel.", "Premio Cervantes."],
    correctAnswer: 0,
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
  },
  {
    id: 4035,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos deportes es muy popular en España?",
    options: ["El fútbol.", "El esquí.", "El golf."],
    correctAnswer: 0,
  },
  {
    id: 4036,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos deportistas juega al tenis?",
    options: ["Pau Gasol.", "Carlos Sainz.", "Carlos Alcaraz."],
    correctAnswer: 2,
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
  },
  {
    id: 5003,
    section: "Cultura y sociedad",
    question: "¿A qué sustituye el registro electrónico individual?",
    options: ["Al DNI.", "Al permiso de conducir.", "Al libro de familia."],
    correctAnswer: 2,
  },
  {
    id: 5004,
    section: "Cultura y sociedad",
    question: "¿Cuál es la edad mínima para conducir un coche en España?",
    options: ["16 años.", "18 años.", "20 años."],
    correctAnswer: 1,
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
  },
  {
    id: 5008,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos canales de televisión es autonómico?",
    options: ["Telecinco.", "Nova.", "Canal Sur."],
    correctAnswer: 2,
  },
  {
    id: 5009,
    section: "Cultura y sociedad",
    question: "¿Cuánto dura el permiso de maternidad o paternidad?",
    options: ["12 semanas.", "19 semanas.", "22 semanas."],
    correctAnswer: 1,
  },
  {
    id: 5010,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es la tasa máxima de alcohol en sangre permitida a los conductores, en gramos por litro (g/l)?",
    options: ["0,5.", "0,7.", "0,9."],
    correctAnswer: 0,
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
  },
  {
    id: 5012,
    section: "Cultura y sociedad",
    question:
      "¿Qué comunidad autónoma es conocida por la calidad de su aceite de oliva?",
    options: ["Cantabria.", "Andalucía.", "La Rioja."],
    correctAnswer: 1,
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
  },
  {
    id: 5014,
    section: "Cultura y sociedad",
    question:
      "El aperitivo que acompaña a la bebida en bares y restaurantes se llama...",
    options: ["bocadillo.", "tapa.", "primer plato."],
    correctAnswer: 1,
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
  },
  {
    id: 5016,
    section: "Cultura y sociedad",
    question: "¿Con cuántos hijos una familia es numerosa?",
    options: ["Con 1 hijo.", "Con 2 hijos.", "Con 3 hijos."],
    correctAnswer: 2,
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
  },
  {
    id: 5019,
    section: "Cultura y sociedad",
    question:
      "Los principales ingredientes de la tortilla española son huevos y…",
    options: ["pimientos.", "patatas.", "tomates."],
    correctAnswer: 1,
  },
  {
    id: 5020,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es uno de los platos más conocidos internacionalmente de la gastronomía española?",
    options: ["Gazpacho.", "Pizza.", "Pasta."],
    correctAnswer: 0,
  },
  {
    id: 5021,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos canales de televisión es público?",
    options: ["Tele 5.", "La 1.", "Antena 3."],
    correctAnswer: 1,
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
  },
  {
    id: 5023,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos es el principal ingrediente de la paella valenciana?",
    options: ["Arroz.", "Chorizo.", "Garbanzos."],
    correctAnswer: 0,
  },
  {
    id: 5024,
    section: "Cultura y sociedad",
    question: "La sidra es una bebida típica de...",
    options: ["Asturias.", "Valencia.", "Canarias."],
    correctAnswer: 0,
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
  },
  {
    id: 5026,
    section: "Cultura y sociedad",
    question: "La Fiesta Nacional de España es el...",
    options: ["6 de diciembre.", "15 de agosto.", "12 de octubre."],
    correctAnswer: 2,
  },
  {
    id: 5027,
    section: "Cultura y sociedad",
    question:
      "¿Qué días suelen cerrar la mayoría de las tiendas o el pequeño comercio?",
    options: ["Los lunes.", "Los domingos.", "Los sábados por la tarde."],
    correctAnswer: 1,
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
  },
  {
    id: 5029,
    section: "Cultura y sociedad",
    question:
      "El Ministerio de Igualdad es el encargado de luchar contra la violencia de género y la...",
    options: ["separación.", "discriminación.", "solidaridad."],
    correctAnswer: 1,
  },
  {
    id: 5030,
    section: "Cultura y sociedad",
    question:
      "¿Qué comunidad autónoma es conocida por la calidad de sus cavas?",
    options: ["Galicia.", "Cataluña.", "Castilla-La Mancha."],
    correctAnswer: 1,
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
  },
  {
    id: 5032,
    section: "Cultura y sociedad",
    question: "El horario de Canarias, con respecto a la Península, es de...",
    options: ["dos horas menos.", "una hora menos.", "una hora más."],
    correctAnswer: 1,
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
  },
  {
    id: 5034,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos productos necesita importar España de otros países?",
    options: ["Petróleo.", "Aceite de oliva.", "Medicamentos."],
    correctAnswer: 0,
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
  },
  {
    id: 5036,
    section: "Cultura y sociedad",
    question:
      "Los adultos sin Bachillerato pueden estudiar en la Universidad haciendo una prueba especial a partir de los...",
    options: ["18 años.", "23 años.", "25 años."],
    correctAnswer: 2,
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
  },
  {
    id: 5042,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos puertos es uno de los principales de España?",
    options: ["Tenerife.", "Alicante.", "Algeciras."],
    correctAnswer: 2,
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
  },
  {
    id: 5045,
    section: "Cultura y sociedad",
    question: "Las bibliotecas públicas son gratuitas para…",
    options: ["todos.", "los parados.", "los niños."],
    correctAnswer: 0,
  },
  {
    id: 5046,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos productos exporta España más que importa?",
    options: ["Gas.", "Ropa.", "Calzado."],
    correctAnswer: 2,
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
  },
  {
    id: 5049,
    section: "Cultura y sociedad",
    question: "¿Adónde vamos para ver al médico de familia o al pediatra?",
    options: ["Al hospital.", "Al centro de salud.", "A la farmacia."],
    correctAnswer: 1,
  },
  {
    id: 5050,
    section: "Cultura y sociedad",
    question: "¿Para cuántos años vale la tarjeta sanitaria europea?",
    options: ["Para un año.", "Para dos años.", "Para 10 años."],
    correctAnswer: 1,
  },
  {
    id: 5051,
    section: "Cultura y sociedad",
    question: "¿A qué hora se cena normalmente en España?",
    options: ["A las 18 h.", "A las 23 h.", "A las 21 o 22 h."],
    correctAnswer: 2,
  },
  {
    id: 5052,
    section: "Cultura y sociedad",
    question: "¿Cuál es el número de teléfono único para cualquier emergencia?",
    options: ["060.", "112.", "911."],
    correctAnswer: 1,
  },
  {
    id: 5053,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos periódicos se publica a nivel nacional?",
    options: ["El Diario Vasco.", "El País.", "La Voz de Galicia."],
    correctAnswer: 1,
  },
  {
    id: 5054,
    section: "Cultura y sociedad",
    question: "¿Dónde se venden sellos y tabaco?",
    options: ["En el quiosco.", "En la farmacia.", "En el estanco."],
    correctAnswer: 2,
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
  },
  {
    id: 5056,
    section: "Cultura y sociedad",
    question:
      "La organización que trabaja para conseguir la integración de las personas con discapacidad visual es…",
    options: ["la ONCE.", "Unicef.", "Cáritas."],
    correctAnswer: 0,
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
  },
  {
    id: 5058,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el canal de televisión estatal que transmite noticias de actualidad nacional e internacional continuamente?",
    options: ["Teledeporte.", "La 1.", "Canal 24 horas."],
    correctAnswer: 2,
  },
  {
    id: 5059,
    section: "Cultura y sociedad",
    question:
      "El teléfono gratuito para las víctimas de violencia de género es el…",
    options: ["091.", "112.", "016."],
    correctAnswer: 2,
  },
  {
    id: 5060,
    section: "Cultura y sociedad",
    question:
      "En España, la red de trenes puede ser de larga distancia, de media distancia y…",
    options: ["de cercanías.", "rural.", "transnacional."],
    correctAnswer: 0,
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
  },
  {
    id: 5062,
    section: "Cultura y sociedad",
    question:
      "¿Qué título se obtiene al finalizar un ciclo de grado medio de Formación Profesional?",
    options: ["Bachiller.", "Técnico.", "Graduado en ESO."],
    correctAnswer: 1,
  },
  {
    id: 5063,
    section: "Cultura y sociedad",
    question:
      "¿Qué título se obtiene tras realizar una tesis doctoral en España?",
    options: ["Máster.", "Graduado.", "Doctor."],
    correctAnswer: 2,
  },
  {
    id: 5064,
    section: "Cultura y sociedad",
    question: "¿Dónde se compran las medicinas con receta?",
    options: ["En el hospital.", "En el centro de salud.", "En la farmacia."],
    correctAnswer: 2,
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
  },
  {
    id: 5066,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de las siguientes cosas es obligatoria para el propietario de un coche en España?",
    options: ["El garaje.", "El seguro.", "La alarma."],
    correctAnswer: 1,
  },
  {
    id: 5067,
    section: "Cultura y sociedad",
    question: "El aeropuerto Adolfo Suárez está en…",
    options: ["Barcelona.", "Madrid.", "Bilbao."],
    correctAnswer: 1,
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
  },
  {
    id: 5069,
    section: "Cultura y sociedad",
    question: "¿Cuál es el límite de velocidad en autopista?",
    options: ["90 km/h.", "120 km/h.", "150 km/h."],
    correctAnswer: 1,
  },
  {
    id: 5070,
    section: "Cultura y sociedad",
    question:
      "Ceder el asiento a las personas con movilidad reducida es una norma que encontramos indicada en...",
    options: ["el transporte público.", "las bibliotecas.", "los museos."],
    correctAnswer: 0,
  },
  {
    id: 5071,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el medio de transporte público que tiene una luz verde encendida si está libre?",
    options: ["El autobús.", "El taxi.", "El tranvía."],
    correctAnswer: 1,
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
  },
  {
    id: 5073,
    section: "Cultura y sociedad",
    question: "Los españoles necesitan el pasaporte para viajar a…",
    options: ["Italia.", "China.", "Alemania."],
    correctAnswer: 1,
  },
  {
    id: 5074,
    section: "Cultura y sociedad",
    question: "¿Cuál es la edad mínima para trabajar en España?",
    options: ["16 años.", "18 años.", "21 años."],
    correctAnswer: 0,
  },
  {
    id: 5075,
    section: "Cultura y sociedad",
    question: "¿Cuál es el sector de mayor peso en la economía española?",
    options: ["Agricultura.", "Servicios.", "Construcción."],
    correctAnswer: 1,
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
  },
  {
    id: 5078,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos establecimientos está abierto 24 horas si es necesario?",
    options: ["Farmacia.", "Pescadería.", "Librería."],
    correctAnswer: 0,
  },
  {
    id: 5079,
    section: "Cultura y sociedad",
    question: "La educación infantil en España…",
    options: ["es obligatoria.", "tiene dos ciclos.", "empieza a los 4 años."],
    correctAnswer: 1,
  },
  {
    id: 5080,
    section: "Cultura y sociedad",
    question: "¿Cuándo empieza el calendario escolar?",
    options: ["En agosto.", "En septiembre.", "En octubre."],
    correctAnswer: 1,
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
  },
];
