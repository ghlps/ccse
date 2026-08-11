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
      "España es un Estado definido en la Constitución como monarquía parlamentaria (art. 1.3).",
  },
  {
    id: 1002,
    section: "Gobierno y legislación",
    question: "La ley fundamental de España se llama...",
    options: ["Constitución.", "Ley básica.", "Ordenamiento esencial."],
    correctAnswer: 0,
    comment:
      "La Constitución de 1978 es la norma suprema del ordenamiento jurídico español.",
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
      "El artículo 1.2 de la Constitución establece que la soberanía nacional reside en el pueblo español.",
  },
  {
    id: 1004,
    section: "Gobierno y legislación",
    question: "El Instituto de las Mujeres es...",
    options: ["una institución europea.", "un organismo español.", "una ONG."],
    correctAnswer: 1,
    comment:
      "El Instituto de las Mujeres es un organismo público español adscrito al Ministerio de Igualdad.",
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
      "La sede electrónica permite realizar trámites administrativos las 24 horas del día, todos los días.",
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
      "El artículo 3 de la Constitución establece el castellano como lengua oficial del Estado en todo el territorio.",
  },
  {
    id: 1007,
    section: "Gobierno y legislación",
    question: "¿Cuál de estas fuerzas de seguridad es de ámbito autonómico?",
    options: ["Policía local.", "Guardia Civil.", "Policía Foral de Navarra."],
    correctAnswer: 2,
    comment:
      "La Policía Foral de Navarra es un cuerpo policial de ámbito autonómico.",
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
      "El Cuerpo Nacional de Policía tiene competencia en todo el territorio nacional.",
  },
  {
    id: 1009,
    section: "Gobierno y legislación",
    question:
      "En la Constitución se establece la separación de poderes: el poder ejecutivo, el legislativo y el...",
    options: ["judicial.", "informativo.", "político."],
    correctAnswer: 0,
    comment:
      "La Constitución separa los poderes del Estado en ejecutivo, legislativo y judicial.",
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
      "La bandera de España debe ondear en todos los edificios públicos.",
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
    comment: "El rey es el jefe del Estado según la Constitución (Título II).",
  },
  {
    id: 1012,
    section: "Gobierno y legislación",
    question: "La gestión de la sanidad es competencia de...",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 1,
    comment:
      "La sanidad es una competencia transferida a las comunidades autónomas.",
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
      "Adolfo Suárez fue el primer presidente del Gobierno tras la Constitución de 1978.",
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
      "El Tribunal Constitucional es el máximo intérprete de la Constitución.",
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
      "El rey modera el funcionamiento regular de las instituciones (art. 56 CE).",
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
    comment: "El Senado es la cámara de representación territorial en España.",
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
      "Para hacer trámites por internet con la Administración se necesita una firma o certificado electrónico.",
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
      "La Constitución de 1978 fue aprobada mediante referéndum popular el 6 de diciembre de 1978.",
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
      "El Estatuto de Autonomía es la norma institucional básica de cada comunidad autónoma.",
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
      "Las instalaciones culturales y deportivas locales son competencia municipal (Ayuntamiento).",
  },
  {
    id: 1021,
    section: "Gobierno y legislación",
    question: "¿Quién dirige la administración militar de España?",
    options: ["Los ayuntamientos.", "El Gobierno.", "Las Cortes Generales."],
    correctAnswer: 1,
    comment:
      "El Gobierno dirige la administración militar y la defensa del Estado.",
  },
  {
    id: 1022,
    section: "Gobierno y legislación",
    question: "¿Qué hay en las Islas Baleares, en vez de diputaciones?",
    options: ["Cabildos.", "Consejos insulares.", "Centros de diputados."],
    correctAnswer: 1,
    comment:
      "En las Islas Baleares existen los consejos insulares en lugar de diputaciones.",
  },
  {
    id: 1023,
    section: "Gobierno y legislación",
    question: "¿Qué ciudad tiene más habitantes?",
    options: ["Sevilla.", "Barcelona.", "Zaragoza."],
    correctAnswer: 1,
    comment:
      "Barcelona es la segunda ciudad más poblada de España, por delante de Sevilla y Zaragoza.",
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
    comment: "Las Cortes Generales representan al pueblo español (art. 66 CE).",
  },
  {
    id: 1025,
    section: "Gobierno y legislación",
    question: "El Congreso de los Diputados y el Senado constituyen el poder…",
    options: ["ejecutivo.", "legislativo.", "judicial."],
    correctAnswer: 1,
    comment:
      "Congreso y Senado forman las Cortes Generales, que ejercen el poder legislativo.",
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
      "La iniciativa legislativa popular exige reunir un mínimo de 500.000 firmas.",
  },
  {
    id: 1027,
    section: "Gobierno y legislación",
    question: "¿Cuántas comunidades autónomas hay en España?",
    options: ["8.", "17.", "25."],
    correctAnswer: 1,
    comment: "España está organizada en 17 comunidades autónomas.",
  },
  {
    id: 1028,
    section: "Gobierno y legislación",
    question: "Los colores de la bandera española son…",
    options: ["blanco y rojo.", "rojo y amarillo.", "amarillo y blanco."],
    correctAnswer: 1,
    comment: "La bandera española es roja y amarilla (gualda).",
  },
  {
    id: 1029,
    section: "Gobierno y legislación",
    question: "¿Dónde está la sede del Gobierno de España?",
    options: ["En Madrid.", "En Barcelona.", "En Sevilla."],
    correctAnswer: 0,
    comment: "Madrid es la sede del Gobierno y capital del Estado.",
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
      "La bandera azul con 12 estrellas amarillas en círculo representa a la Unión Europea.",
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
    comment: "En las elecciones municipales se eligen alcaldes y concejales.",
  },
  {
    id: 1032,
    section: "Gobierno y legislación",
    question: "¿Qué lengua es oficial en el País Vasco?",
    options: ["El bable.", "El aragonés.", "El euskera."],
    correctAnswer: 2,
    comment: "El euskera es lengua cooficial en el País Vasco.",
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
      "Todos los españoles tienen el deber de conocer el castellano, lengua oficial del Estado.",
  },
  {
    id: 1034,
    section: "Gobierno y legislación",
    question:
      "El aranés es una lengua cooficial que se habla en un pequeño territorio de…",
    options: ["Cataluña.", "La Rioja.", "Aragón."],
    correctAnswer: 0,
    comment: "El aranés es cooficial en el Valle de Arán, situado en Cataluña.",
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
      "Cada comunidad autónoma cuenta con una asamblea legislativa, un presidente y un consejo de gobierno.",
  },
  {
    id: 1036,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?",
    options: ["El gallego.", "El aragonés.", "El murciano."],
    correctAnswer: 0,
    comment: "El gallego es lengua cooficial en Galicia.",
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
      "El Instituto Cervantes promueve la enseñanza del español y difunde la cultura en español.",
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
      "La Real Academia Española trabaja por la normalización lingüística del español.",
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
    comment: "El presidente del Gobierno reside en el Palacio de la Moncloa.",
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
      "El Ejército del Aire (y del Espacio) forma parte de las Fuerzas Armadas españolas.",
  },
  {
    id: 1041,
    section: "Gobierno y legislación",
    question: "¿Quiénes forman parte del Gobierno?",
    options: ["Los ministros.", "Los concejales.", "Los alcaldes."],
    correctAnswer: 0,
    comment: "Los ministros, junto al presidente, integran el Gobierno.",
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
      "El artículo 1.1 de la Constitución define a España como Estado social y democrático de Derecho.",
  },
  {
    id: 1043,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de las siguientes siglas corresponde a un partido político?",
    options: ["PP.", "PIB.", "UE."],
    correctAnswer: 0,
    comment: "PP (Partido Popular) es la sigla de un partido político español.",
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
      "La heredera de la Corona ostenta el título de Princesa de Asturias.",
  },
  {
    id: 1045,
    section: "Gobierno y legislación",
    question:
      "¿Con qué rey se restaura la democracia en España después del régimen de Franco?",
    options: ["Con Carlos III.", "Con Alfonso XIII.", "Con Juan Carlos I."],
    correctAnswer: 2,
    comment:
      "Juan Carlos I encabezó la Transición y la restauración de la democracia tras el franquismo.",
  },
  {
    id: 1046,
    section: "Gobierno y legislación",
    question: "¿En qué año se aprobó la Constitución española?",
    options: ["En 1957.", "En 1978.", "En 2001."],
    correctAnswer: 1,
    comment: "La Constitución española fue aprobada en 1978.",
  },
  {
    id: 1047,
    section: "Gobierno y legislación",
    question: "¿Cuántas comunidades autónomas tienen su propia bandera?",
    options: ["Ninguna.", "Todas.", "Las que tienen una lengua cooficial."],
    correctAnswer: 1,
    comment: "Todas las comunidades autónomas tienen su propia bandera.",
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
      "El Defensor del Pueblo supervisa la actuación de las administraciones y atiende las quejas ciudadanas.",
  },
  {
    id: 1049,
    section: "Gobierno y legislación",
    question:
      "¿Cuántas firmas, como mínimo, deben recoger los ciudadanos para poder presentar una proposición de ley?",
    options: ["250 000.", "100 000.", "500 000."],
    correctAnswer: 2,
    comment:
      "Se necesitan al menos 500.000 firmas para presentar una iniciativa legislativa popular.",
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
    comment: "España es miembro del Fondo Monetario Internacional (FMI).",
  },
  {
    id: 1051,
    section: "Gobierno y legislación",
    question:
      "En la organización de la Administración se distinguen tres niveles: central, autonómica y…",
    options: ["estatal.", "regional.", "local."],
    correctAnswer: 2,
    comment:
      "La Administración se organiza en niveles central, autonómico y local.",
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
      "Diputados y senadores, integrantes de las Cortes Generales, ejercen el poder legislativo.",
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
    comment: "El rey reside en el Palacio de la Zarzuela.",
  },
  {
    id: 1054,
    section: "Gobierno y legislación",
    question: "El nombre oficial del parlamento español es…",
    options: ["Cortes Generales.", "Congreso de los Diputados.", "Senado."],
    correctAnswer: 0,
    comment: "Cortes Generales es el nombre oficial del parlamento español.",
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
      "Esos organismos dependen orgánicamente de distintos ministerios del Gobierno.",
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
    comment: "La Corona no distingue por sexo para poder reinar en España.",
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
      "El Tribunal de Cuentas depende directamente de las Cortes Generales.",
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
      "El presidente del Congreso es la tercera autoridad del Estado, tras el rey y el presidente del Gobierno.",
  },
  {
    id: 1059,
    section: "Gobierno y legislación",
    question: "¿Qué lengua cooficial se habla en las Islas Baleares?",
    options: ["Gallego.", "Catalán.", "Euskera."],
    correctAnswer: 1,
    comment: "El catalán es lengua cooficial en las Islas Baleares.",
  },
  {
    id: 1060,
    section: "Gobierno y legislación",
    question:
      "La Constitución defiende valores tales como la libertad, la igualdad, el pluralismo político y…",
    options: ["la justicia.", "la solidaridad.", "la fraternidad."],
    correctAnswer: 0,
    comment:
      "La justicia es también un valor superior recogido en el artículo 1.1 de la Constitución.",
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
      "Muchas leyes requieren un desarrollo reglamentario posterior para poder aplicarse.",
  },
  {
    id: 1062,
    section: "Gobierno y legislación",
    question: "¿Cuántos habitantes hay en España?",
    options: ["95 millones.", "49 millones.", "67 millones."],
    correctAnswer: 1,
    comment: "España tiene aproximadamente 49 millones de habitantes.",
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
      "El Consejo de Estado es el órgano consultivo supremo del Gobierno.",
  },
  {
    id: 1064,
    section: "Gobierno y legislación",
    question: "¿Quién dirige la política interior y exterior de España?",
    options: ["El rey.", "El Gobierno.", "El Congreso de los Diputados."],
    correctAnswer: 1,
    comment: "El Gobierno dirige la política interior y exterior del país.",
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
    comment: "El Defensor del Pueblo depende de las Cortes Generales.",
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
      "El Instituto Etxepare promueve el euskera y la cultura vasca en el exterior.",
  },
  {
    id: 1067,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de estas ciudades se encuentra entre las 10 más pobladas de España?",
    options: ["Cádiz.", "Málaga.", "Albacete."],
    correctAnswer: 1,
    comment:
      "Málaga se encuentra entre las diez ciudades más pobladas de España.",
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
      "Cualquier ciudadano puede realizar trámites en línea con la Administración Pública.",
  },
  {
    id: 1069,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama el rey de España?",
    options: ["Juan Carlos I.", "Felipe VI.", "Alfonso XIII."],
    correctAnswer: 1,
    comment: "Felipe VI es el actual rey de España.",
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
      "El Consejo General del Poder Judicial es el órgano de gobierno de jueces y magistrados.",
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
      "Las Cortes Generales aprueban los Presupuestos Generales del Estado.",
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
      "La Constitución es la ley fundamental y suprema del ordenamiento español.",
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
      "Las Cortes Generales están formadas por el Congreso de los Diputados y el Senado.",
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
    comment: "El poder legislativo (Cortes Generales) elabora las leyes.",
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
      "Las Fuerzas Armadas garantizan la soberanía e integridad territorial de España.",
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
    comment: "España participa en misiones de paz de la ONU desde 1989.",
  },
  {
    id: 1077,
    section: "Gobierno y legislación",
    question: "¿Quién vigila puertos y aeropuertos, fronteras y costas?",
    options: ["La Guardia Civil.", "La Policía local.", "La Policía Nacional."],
    correctAnswer: 0,
    comment:
      "La Guardia Civil vigila puertos, aeropuertos, fronteras y costas.",
  },
  {
    id: 1078,
    section: "Gobierno y legislación",
    question:
      "¿Quién hace el control de pasaportes en las fronteras de España?",
    options: ["La Guardia Civil.", "La Policía local.", "La Policía Nacional."],
    correctAnswer: 0,
    comment:
      "La Guardia Civil controla los pasaportes en los pasos fronterizos.",
  },
  {
    id: 1079,
    section: "Gobierno y legislación",
    question:
      "¿Cuál de los siguientes políticos ha sido presidente del Gobierno en España?",
    options: ["Manuel Fraga.", "José María Aznar.", "Yolanda Díaz."],
    correctAnswer: 1,
    comment:
      "José María Aznar fue presidente del Gobierno de España entre 1996 y 2004.",
  },
  {
    id: 1080,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama la policía autonómica de Cataluña?",
    options: ["Guardia Civil.", "Ertzaintza.", "Mossos d'Esquadra."],
    correctAnswer: 2,
    comment: "Los Mossos d'Esquadra son la policía autonómica de Cataluña.",
  },
  {
    id: 1081,
    section: "Gobierno y legislación",
    question: "¿Cómo se llama la policía autonómica del País Vasco?",
    options: ["Ertzaintza.", "Guardia Civil.", "Mossos d'Esquadra."],
    correctAnswer: 0,
    comment: "La Ertzaintza es la policía autonómica del País Vasco.",
  },
  {
    id: 1082,
    section: "Gobierno y legislación",
    question: "¿Desde qué año es rey Felipe VI?",
    options: ["Desde 1975.", "Desde 2014.", "Desde 2020."],
    correctAnswer: 1,
    comment: "Felipe VI es rey desde junio de 2014.",
  },
  {
    id: 1083,
    section: "Gobierno y legislación",
    question: "¿Quién regula el tráfico en los pueblos y ciudades?",
    options: ["La Guardia Civil.", "Protección Civil.", "La Policía Local."],
    correctAnswer: 2,
    comment: "La Policía Local regula el tráfico dentro de los municipios.",
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
      "Cualquier persona, española o extranjera, puede presentar una queja ante el Defensor del Pueblo.",
  },
  {
    id: 1085,
    section: "Gobierno y legislación",
    question: "En España el voto en las elecciones es…",
    options: ["un derecho.", "un deber.", "una obligación."],
    correctAnswer: 0,
    comment:
      "El voto es un derecho, no una obligación, en las elecciones españolas.",
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
    comment: "La Guardia Civil vigila el tráfico en las carreteras.",
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
    comment: "La Agencia Tributaria recauda los impuestos estatales.",
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
    comment: "Las leyes se publican en el Boletín Oficial del Estado (BOE).",
  },
  {
    id: 1089,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llaman los órganos de gobierno que solo existen en Canarias?",
    options: ["Cabildos.", "Consejos insulares.", "Diputaciones."],
    correctAnswer: 0,
    comment: "En Canarias los órganos de gobierno insular se llaman cabildos.",
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
      "El pago de impuestos puede realizarse a través de la sede electrónica.",
  },
  {
    id: 1091,
    section: "Gobierno y legislación",
    question:
      "¿Cuál es el número de teléfono de información de la Administración General del Estado?",
    options: ["010.", "060.", "091."],
    correctAnswer: 1,
    comment:
      "El 060 es el teléfono de información de la Administración General del Estado.",
  },
  {
    id: 1092,
    section: "Gobierno y legislación",
    question: "España está organizada en…",
    options: ["cantones.", "comunidades autónomas.", "estados federales."],
    correctAnswer: 1,
    comment: "España se organiza territorialmente en comunidades autónomas.",
  },
  {
    id: 1093,
    section: "Gobierno y legislación",
    question: "¿Cuántos partidos políticos hay en España?",
    options: ["Ninguno.", "Uno.", "Muchos."],
    correctAnswer: 2,
    comment:
      "España cuenta con un sistema multipartidista, con numerosos partidos políticos.",
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
      "La investidura del presidente del Gobierno tiene lugar en el Congreso de los Diputados.",
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
    comment: "El rey ostenta el mando supremo de las Fuerzas Armadas.",
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
      "El delegado del Gobierno representa al Estado en cada comunidad autónoma.",
  },
  {
    id: 1097,
    section: "Gobierno y legislación",
    question: "¿Cuántas provincias hay en España?",
    options: ["45.", "50.", "55."],
    correctAnswer: 1,
    comment: "España está dividida en 50 provincias.",
  },
  {
    id: 1098,
    section: "Gobierno y legislación",
    question: "La enseñanza de las lenguas cooficiales es competencia…",
    options: ["del Estado.", "de la comunidad autónoma.", "de la provincia."],
    correctAnswer: 1,
    comment:
      "La enseñanza de las lenguas cooficiales corresponde a las comunidades autónomas.",
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
    comment: "El Gobierno del Estado ejerce el poder ejecutivo.",
  },
  {
    id: 1100,
    section: "Gobierno y legislación",
    question: "¿Cuántas cámaras hay en el Parlamento español?",
    options: ["Una.", "Dos.", "Tres."],
    correctAnswer: 1,
    comment: "El Parlamento español es bicameral: Congreso y Senado.",
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
      "Servicios como el agua y el alumbrado urbano son competencia municipal.",
  },
  {
    id: 1102,
    section: "Gobierno y legislación",
    question:
      "En materias como nacionalidad, inmigración, emigración o extranjería solo tiene competencia…",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 0,
    comment:
      "Nacionalidad, inmigración y extranjería son competencia exclusiva del Estado.",
  },
  {
    id: 1103,
    section: "Gobierno y legislación",
    question: "¿Cuántas mujeres han sido presidentas de Gobierno en España?",
    options: ["Ninguna.", "Una.", "Dos."],
    correctAnswer: 0,
    comment:
      "Ninguna mujer ha sido presidenta del Gobierno en España hasta la fecha.",
  },
  {
    id: 1104,
    section: "Gobierno y legislación",
    question: "Las relaciones internacionales son competencia de…",
    options: ["el Estado.", "las comunidades autónomas.", "los ayuntamientos."],
    correctAnswer: 0,
    comment:
      "Las relaciones internacionales son competencia exclusiva del Estado.",
  },
  {
    id: 1105,
    section: "Gobierno y legislación",
    question: "El Ayuntamiento está formado por el alcalde y…",
    options: ["los concejales.", "los diputados.", "los senadores."],
    correctAnswer: 0,
    comment: "El Ayuntamiento lo forman el alcalde y los concejales.",
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
      "El presidente y los consejeros forman el gobierno de una comunidad autónoma.",
  },
  {
    id: 1107,
    section: "Gobierno y legislación",
    question: "¿Cuál es el órgano de gobierno en los municipios?",
    options: ["El ayuntamiento.", "La diputación.", "El cabildo."],
    correctAnswer: 0,
    comment: "El ayuntamiento es el órgano de gobierno de los municipios.",
  },
  {
    id: 1108,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llaman los órganos de gobierno de las provincias españolas?",
    options: ["Cabildos.", "Consejos insulares.", "Diputaciones."],
    correctAnswer: 2,
    comment: "Las diputaciones son los órganos de gobierno de las provincias.",
  },
  {
    id: 1109,
    section: "Gobierno y legislación",
    question: "¿Cuál es el órgano superior del poder ejecutivo?",
    options: ["El Gobierno.", "Las Fuerzas Armadas.", "Las Cortes Generales."],
    correctAnswer: 0,
    comment: "El Gobierno es el órgano superior del poder ejecutivo.",
  },
  {
    id: 1110,
    section: "Gobierno y legislación",
    question: "El idioma español también se llama…",
    options: ["aragonés.", "castellano.", "leonés."],
    correctAnswer: 1,
    comment: "Castellano es otro nombre del idioma español.",
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
    comment: "En las elecciones al Parlamento Europeo se eligen eurodiputados.",
  },
  {
    id: 1112,
    section: "Gobierno y legislación",
    question: "Los españoles pueden votar a partir de los…",
    options: ["16 años.", "18 años.", "21 años."],
    correctAnswer: 1,
    comment: "El derecho al voto se adquiere a los 18 años en España.",
  },
  {
    id: 1113,
    section: "Gobierno y legislación",
    question: "Algunos ciudadanos extranjeros pueden votar en las elecciones…",
    options: ["municipales.", "autonómicas.", "generales."],
    correctAnswer: 0,
    comment:
      "Ciertos extranjeros pueden votar en elecciones municipales, según acuerdos de reciprocidad.",
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
      "El Tribunal de Cuentas fiscaliza las cuentas y la gestión económica del Estado.",
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
    comment: "En las elecciones generales se eligen diputados y senadores.",
  },
  {
    id: 1116,
    section: "Gobierno y legislación",
    question: "¿Cuántos miembros tiene el Congreso de los Diputados?",
    options: ["300.", "350.", "400."],
    correctAnswer: 1,
    comment: "El Congreso de los Diputados tiene 350 escaños.",
  },
  {
    id: 1117,
    section: "Gobierno y legislación",
    question: "Los municipios y provincias forman parte de la Administración…",
    options: ["autonómica.", "local.", "central."],
    correctAnswer: 1,
    comment: "Municipios y provincias forman parte de la Administración local.",
  },
  {
    id: 1118,
    section: "Gobierno y legislación",
    question: "La comunidad autónoma más poblada de España es…",
    options: ["Andalucía.", "Cataluña.", "Castilla y León."],
    correctAnswer: 0,
    comment: "Andalucía es la comunidad autónoma más poblada de España.",
  },
  {
    id: 1119,
    section: "Gobierno y legislación",
    question:
      "¿Cómo se llama la organización que defiende los intereses de los trabajadores?",
    options: ["Asociación.", "Partido.", "Sindicato."],
    correctAnswer: 2,
    comment:
      "El sindicato defiende los intereses laborales de los trabajadores.",
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
      "El Congreso de los Diputados elige (inviste) al presidente del Gobierno.",
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
      "Falso: la Constitución garantiza la libertad religiosa; no obliga a practicar ninguna religión.",
  },
  {
    id: 2002,
    section: "Derechos y deberes",
    question:
      "Los españoles que obtienen la nacionalidad por residencia deben esperar tres años para poder votar en las elecciones.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: no existe ese plazo de espera de tres años para votar tras obtener la nacionalidad por residencia.",
  },
  {
    id: 2003,
    section: "Derechos y deberes",
    question:
      "En España, la Constitución prohíbe la tortura y la pena de muerte.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 15 de la Constitución prohíbe la tortura y la pena de muerte.",
  },
  {
    id: 2004,
    section: "Derechos y deberes",
    question:
      "El funcionamiento de los partidos políticos tiene que ser democrático.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 6 exige que la estructura y el funcionamiento de los partidos sean democráticos.",
  },
  {
    id: 2005,
    section: "Derechos y deberes",
    question:
      "Se puede obligar a alguien a decir cuáles son sus ideas políticas o religiosas.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: nadie puede ser obligado a declarar sus ideas religiosas, políticas o de otro tipo (art. 16.2).",
  },
  {
    id: 2006,
    section: "Derechos y deberes",
    question:
      "Se puede limitar a una persona el derecho a entrar y salir libremente de España por motivos ideológicos.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la libertad de entrada y salida de España no puede limitarse por motivos ideológicos.",
  },
  {
    id: 2007,
    section: "Derechos y deberes",
    question:
      "La Educación Primaria (de 6 a 12 años) es gratuita y obligatoria.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la Educación Primaria es obligatoria y gratuita en España.",
  },
  {
    id: 2008,
    section: "Derechos y deberes",
    question:
      "La Constitución garantiza el derecho de los españoles a una vivienda digna.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 47 de la Constitución reconoce el derecho a una vivienda digna.",
  },
  {
    id: 2009,
    section: "Derechos y deberes",
    question:
      "En España la policía puede entrar en cualquier casa sin resolución judicial en cualquier momento.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: para entrar en un domicilio se necesita, en general, resolución judicial o consentimiento.",
  },
  {
    id: 2010,
    section: "Derechos y deberes",
    question:
      "Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicial.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el secreto de las comunicaciones solo puede romperse con resolución judicial.",
  },
  {
    id: 2011,
    section: "Derechos y deberes",
    question:
      "La Constitución reconoce el derecho de los ciudadanos a asociarse libremente.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 22 de la Constitución reconoce el derecho de asociación.",
  },
  {
    id: 2012,
    section: "Derechos y deberes",
    question:
      "Los profesores pueden enseñar con libertad, dentro de los límites de la Constitución.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la libertad de cátedra está reconocida dentro de los límites constitucionales.",
  },
  {
    id: 2013,
    section: "Derechos y deberes",
    question:
      "La Constitución reconoce únicamente los derechos fundamentales de los españoles.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: muchos derechos fundamentales se reconocen a toda persona, no solo a los españoles.",
  },
  {
    id: 2014,
    section: "Derechos y deberes",
    question: "Los ciudadanos deben colaborar con los jueces si se lo piden.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: colaborar con la Administración de Justicia es un deber ciudadano.",
  },
  {
    id: 2015,
    section: "Derechos y deberes",
    question:
      "La ley limita el acceso de terceras personas a datos de carácter personal.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la protección de datos personales limita el acceso de terceros a esa información.",
  },
  {
    id: 2016,
    section: "Derechos y deberes",
    question:
      "La libertad de prensa está limitada por el respeto al honor de las personas.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la libertad de expresión y de prensa tiene como límite el derecho al honor.",
  },
  {
    id: 2017,
    section: "Derechos y deberes",
    question:
      "En España las causas de separación y divorcio están reguladas por la ley.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: las causas de separación y divorcio están reguladas por ley.",
  },
  {
    id: 2018,
    section: "Derechos y deberes",
    question:
      "La atención sanitaria gratuita es solo para personas mayores de 65 años.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la sanidad pública en España es universal, no solo para mayores de 65 años.",
  },
  {
    id: 2019,
    section: "Derechos y deberes",
    question: "En España los hombres y las mujeres tienen los mismos derechos.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 14 consagra la igualdad ante la ley entre hombres y mujeres.",
  },
  {
    id: 2020,
    section: "Derechos y deberes",
    question:
      "La enseñanza obligatoria consta de dos etapas: Educación Primaria y Educación Secundaria Obligatoria.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la enseñanza obligatoria comprende Educación Primaria y ESO.",
  },
  {
    id: 2021,
    section: "Derechos y deberes",
    question: "En España hay una religión oficial.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment: "Falso: España es un Estado aconfesional, sin religión oficial.",
  },
  {
    id: 2022,
    section: "Derechos y deberes",
    question: "La atención sanitaria pública es gratuita.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la atención sanitaria pública es gratuita en el punto de uso.",
  },
  {
    id: 2023,
    section: "Derechos y deberes",
    question: "La enseñanza básica en España es solo para los extranjeros.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la enseñanza básica es obligatoria para todos los residentes, no solo para extranjeros.",
  },
  {
    id: 2024,
    section: "Derechos y deberes",
    question: "En España está reconocido el derecho de asociación.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el derecho de asociación está reconocido en el artículo 22 de la Constitución.",
  },
  {
    id: 2025,
    section: "Derechos y deberes",
    question:
      "Los sindicatos pueden participar en negociaciones con empresarios y con el Gobierno.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: los sindicatos participan en la negociación colectiva con empresarios y Gobierno.",
  },
  {
    id: 2026,
    section: "Derechos y deberes",
    question: "Los trabajadores tienen derecho a hacer huelga.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el derecho de huelga está reconocido en el artículo 28.2 de la Constitución.",
  },
  {
    id: 2027,
    section: "Derechos y deberes",
    question:
      "La libertad ideológica está garantizada solo en parte del territorio nacional.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: la libertad ideológica está garantizada en todo el territorio nacional.",
  },
  {
    id: 2028,
    section: "Derechos y deberes",
    question:
      "Todos los ciudadanos tienen acceso al sistema de Seguridad Social público, excepto si están desempleados.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: el acceso a la Seguridad Social pública no se pierde por estar desempleado.",
  },
  {
    id: 2029,
    section: "Derechos y deberes",
    question:
      "Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 45 reconoce el derecho a un medio ambiente adecuado y el deber de conservarlo.",
  },
  {
    id: 2030,
    section: "Derechos y deberes",
    question:
      "En España, los poderes públicos deben proteger la salud y promover el deporte.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: los poderes públicos deben fomentar la salud y el deporte (art. 43 CE).",
  },
  {
    id: 2031,
    section: "Derechos y deberes",
    question: "La enseñanza básica en España es obligatoria y gratuita.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment: "Verdadero: la enseñanza básica es obligatoria y gratuita.",
  },
  {
    id: 2032,
    section: "Derechos y deberes",
    question:
      "La ley prohíbe la discriminación por cualquier circunstancia personal o social.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: el artículo 14 prohíbe la discriminación por cualquier condición personal o social.",
  },
  {
    id: 2033,
    section: "Derechos y deberes",
    question:
      "En España, los ciudadanos pueden desplazarse libremente por todo el territorio nacional.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la libertad de circulación y residencia está garantizada en todo el territorio (art. 19 CE).",
  },
  {
    id: 2034,
    section: "Derechos y deberes",
    question:
      "Los jueces administran la justicia en España según las indicaciones del Gobierno.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 1,
    comment:
      "Falso: los jueces son independientes y no actúan según instrucciones del Gobierno.",
  },
  {
    id: 2035,
    section: "Derechos y deberes",
    question:
      "Los españoles deben ayudar en los casos de catástrofe o calamidad pública.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: colaborar en casos de catástrofe pública es un deber ciudadano (art. 30.4 CE).",
  },
  {
    id: 2036,
    section: "Derechos y deberes",
    question:
      "En España los ciudadanos pueden elegir en qué ciudad quieren vivir.",
    options: ["Verdadero.", "Falso."],
    correctAnswer: 0,
    comment:
      "Verdadero: la libertad de residencia permite elegir dónde vivir dentro de España.",
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
      "Cáceres y Badajoz son las dos provincias que forman la comunidad de Extremadura.",
  },
  {
    id: 3002,
    section: "Organización territorial",
    question: "¿Cuál es la capital de la Comunidad Valenciana?",
    options: ["Alicante.", "Castellón.", "Valencia."],
    correctAnswer: 2,
    comment: "Valencia es la capital de la Comunidad Valenciana.",
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
    comment: "Las Islas Baleares se sitúan en el mar Mediterráneo.",
  },
  {
    id: 3004,
    section: "Organización territorial",
    question:
      "¿Cómo se llama la extensa llanura situada en el centro de la península ibérica?",
    options: ["Marisma.", "Cordillera.", "Meseta."],
    correctAnswer: 2,
    comment:
      "La Meseta central es la gran llanura interior de la península ibérica.",
  },
  {
    id: 3005,
    section: "Organización territorial",
    question: "El parque nacional de Ordesa está en...",
    options: ["Aragón.", "Navarra.", "Castilla-La Mancha."],
    correctAnswer: 0,
    comment:
      "El Parque Nacional de Ordesa y Monte Perdido se encuentra en Aragón, en el Pirineo aragonés.",
  },
  {
    id: 3006,
    section: "Organización territorial",
    question: "¿En qué comunidad autónoma están Guadalajara y Cuenca?",
    options: ["En Castilla y León.", "En Castilla-La Mancha.", "En Cantabria."],
    correctAnswer: 1,
    comment: "Guadalajara y Cuenca son provincias de Castilla-La Mancha.",
  },
  {
    id: 3007,
    section: "Organización territorial",
    question:
      "¿Qué comunidad autónoma tiene como capital Santiago de Compostela?",
    options: ["Galicia.", "Asturias.", "Cantabria."],
    correctAnswer: 0,
    comment:
      "Santiago de Compostela es la capital de la comunidad autónoma de Galicia.",
  },
  {
    id: 3008,
    section: "Organización territorial",
    question: "¿Dónde está Almería?",
    options: ["En Andalucía.", "En Canarias.", "En Aragón."],
    correctAnswer: 0,
    comment: "Almería es una provincia de la comunidad autónoma de Andalucía.",
  },
  {
    id: 3009,
    section: "Organización territorial",
    question: "La capital de la comunidad autónoma de Galicia es...",
    options: ["A Coruña.", "Vigo.", "Santiago de Compostela."],
    correctAnswer: 2,
    comment: "Santiago de Compostela es la capital de Galicia.",
  },
  {
    id: 3010,
    section: "Organización territorial",
    question: "¿Cuál de estos ríos desemboca en el mar Mediterráneo?",
    options: ["El Tajo.", "El Júcar.", "El Duero."],
    correctAnswer: 1,
    comment: "El río Júcar desemboca en el mar Mediterráneo.",
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
      "El Aneto, el pico más alto de los Pirineos, se encuentra en esa cordillera.",
  },
  {
    id: 3012,
    section: "Organización territorial",
    question: "La ciudad de Vitoria es la sede administrativa de...",
    options: ["Navarra.", "País Vasco.", "La Rioja."],
    correctAnswer: 1,
    comment:
      "Vitoria-Gasteiz es la sede administrativa (capital) del País Vasco.",
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
      "España se organiza en comunidades autónomas y dos ciudades autónomas (Ceuta y Melilla).",
  },
  {
    id: 3014,
    section: "Organización territorial",
    question: "El parque nacional de Aigüestortes está en...",
    options: ["Cataluña.", "Aragón.", "Castilla y León."],
    correctAnswer: 0,
    comment:
      "El Parque Nacional de Aigüestortes se encuentra en Cataluña, en el Pirineo catalán.",
  },
  {
    id: 3015,
    section: "Organización territorial",
    question: "En el norte de África están Ceuta y...",
    options: ["Almería.", "Melilla.", "Cádiz."],
    correctAnswer: 1,
    comment:
      "Ceuta y Melilla son las ciudades autónomas españolas situadas en el norte de África.",
  },
  {
    id: 3016,
    section: "Organización territorial",
    question:
      "¿En qué lugar de España hay un clima que se caracteriza por inviernos fríos y veranos muy calurosos?",
    options: ["Canarias.", "Comunidad Valenciana."],
    correctAnswer: 1,
    comment:
      "La Comunidad Valenciana presenta un clima mediterráneo con veranos muy calurosos e inviernos frescos.",
  },
  {
    id: 3017,
    section: "Organización territorial",
    question: "¿Cuál de estos ríos desemboca en el océano Atlántico?",
    options: ["El Guadalquivir.", "El Manzanares.", "El Júcar."],
    correctAnswer: 0,
    comment: "El río Guadalquivir desemboca en el océano Atlántico.",
  },
  {
    id: 3018,
    section: "Organización territorial",
    question:
      "¿Cuál de estas provincias forma parte de la Comunidad de Castilla y León?",
    options: ["Burgos.", "Huesca.", "Guadalajara."],
    correctAnswer: 0,
    comment:
      "Burgos es una de las provincias de la comunidad de Castilla y León.",
  },
  {
    id: 3019,
    section: "Organización territorial",
    question: "¿En qué comunidad autónoma está la ciudad de Huesca?",
    options: ["Castilla-La Mancha.", "Aragón.", "Extremadura."],
    correctAnswer: 1,
    comment: "Huesca pertenece a la comunidad autónoma de Aragón.",
  },
  {
    id: 3020,
    section: "Organización territorial",
    question: "Canarias tiene un clima...",
    options: ["mediterráneo.", "oceánico.", "subtropical."],
    correctAnswer: 2,
    comment: "Canarias tiene un clima subtropical, cálido durante todo el año.",
  },
  {
    id: 3021,
    section: "Organización territorial",
    question: "El principal río que desemboca en el mar Mediterráneo es el...",
    options: ["Ebro.", "Duero.", "Tajo."],
    correctAnswer: 0,
    comment:
      "El río Ebro es el principal que desemboca en el mar Mediterráneo.",
  },
  {
    id: 3022,
    section: "Organización territorial",
    question: "España está entre los países de Europa más...",
    options: ["lluviosos.", "montañosos.", "fríos."],
    correctAnswer: 1,
    comment: "España es uno de los países más montañosos de Europa.",
  },
  {
    id: 3023,
    section: "Organización territorial",
    question: "¿En qué provincia está el parque nacional de Monfragüe?",
    options: ["En Cáceres.", "En Murcia.", "En Ciudad Real."],
    correctAnswer: 0,
    comment: "El Parque Nacional de Monfragüe está en la provincia de Cáceres.",
  },
  {
    id: 3024,
    section: "Organización territorial",
    question: "¿Cuál es la capital de la comunidad autónoma de Extremadura?",
    options: ["Cáceres.", "Badajoz.", "Mérida."],
    correctAnswer: 2,
    comment: "Mérida es la capital de la comunidad autónoma de Extremadura.",
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
      "Sancho Panza es el fiel escudero de don Quijote en la novela de Cervantes.",
  },
  {
    id: 4002,
    section: "Cultura y sociedad",
    question: "¿Qué científica española es reconocida por sus investigaciones?",
    options: ["Almudena Grandes.", "Montserrat Caballé.", "Margarita Salas."],
    correctAnswer: 2,
    comment:
      "Margarita Salas fue una destacada científica española, pionera en bioquímica y biología molecular.",
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
      "Federico García Lorca escribió el drama La casa de Bernarda Alba.",
  },
  {
    id: 4004,
    section: "Cultura y sociedad",
    question: "¿Quién escribió Nada, una novela sobre la posguerra española?",
    options: ["Carmen Laforet.", "Ana María Matute.", "María Dueñas."],
    correctAnswer: 0,
    comment:
      "Carmen Laforet escribió Nada, novela ambientada en la posguerra española.",
  },
  {
    id: 4005,
    section: "Cultura y sociedad",
    question: "¿Qué músico compuso El amor brujo?",
    options: ["Manuel de Falla.", "Isaac Albéniz.", "Joaquín Rodrigo."],
    correctAnswer: 0,
    comment: "Manuel de Falla compuso la obra El amor brujo.",
  },
  {
    id: 4006,
    section: "Cultura y sociedad",
    question: "¿Qué es típico en la Noche de San Juan?",
    options: ["Comer uvas.", "Encender hogueras.", "Regalar libros."],
    correctAnswer: 1,
    comment: "En la Noche de San Juan es tradicional encender hogueras.",
  },
  {
    id: 4007,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el instrumento más característico de la música flamenca?",
    options: ["La gaita.", "La guitarra.", "El piano."],
    correctAnswer: 1,
    comment:
      "La guitarra es el instrumento más característico de la música flamenca.",
  },
  {
    id: 4008,
    section: "Cultura y sociedad",
    question: "Isabel Coixet es una…",
    options: ["cantante pop.", "bailarina clásica.", "directora de cine."],
    correctAnswer: 2,
    comment: "Isabel Coixet es una reconocida directora de cine española.",
  },
  {
    id: 4009,
    section: "Cultura y sociedad",
    question: "Una de las cantantes españolas más famosas actualmente es…",
    options: ["Rosalía.", "Marisol.", "Lola Flores."],
    correctAnswer: 0,
    comment:
      "Rosalía es una de las cantantes españolas más populares en la actualidad.",
  },
  {
    id: 4010,
    section: "Cultura y sociedad",
    question:
      "¿En qué ciudad de España hay una mezquita que es Patrimonio de la Humanidad?",
    options: ["Santiago de Compostela.", "Madrid.", "Córdoba."],
    correctAnswer: 2,
    comment: "La Mezquita-Catedral de Córdoba es Patrimonio de la Humanidad.",
  },
  {
    id: 4011,
    section: "Cultura y sociedad",
    question:
      "¿En qué ciudad de España se encuentra La Alhambra, que es Patrimonio de la Humanidad?",
    options: ["En Sevilla.", "En Córdoba.", "En Granada."],
    correctAnswer: 2,
    comment:
      "La Alhambra, Patrimonio de la Humanidad, se encuentra en Granada.",
  },
  {
    id: 4012,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el nombre de la directora española que ha destacado por su mirada crítica y por modernizar el cine nacional?",
    options: ["Pilar Miró.", "Sara Baras.", "Penélope Cruz."],
    correctAnswer: 0,
    comment:
      "Pilar Miró fue una influyente directora y guionista del cine español.",
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
      "Irene Vallejo escribió el ensayo de éxito El infinito en un junco.",
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
      "El CSIC es la principal institución pública de investigación científica en España.",
  },
  {
    id: 4015,
    section: "Cultura y sociedad",
    question: "Paco de Lucía fue un famoso….",
    options: ["científico.", "guitarrista.", "pintor."],
    correctAnswer: 1,
    comment: "Paco de Lucía fue un célebre guitarrista de flamenco.",
  },
  {
    id: 4016,
    section: "Cultura y sociedad",
    question: "¿Qué celebramos el 24 de diciembre?",
    options: ["Carnaval.", "Nochebuena.", "San Juan."],
    correctAnswer: 1,
    comment: "El 24 de diciembre se celebra la Nochebuena.",
  },
  {
    id: 4017,
    section: "Cultura y sociedad",
    question: "Juan Mari Arzak es un famoso....",
    options: ["escritor.", "músico.", "cocinero."],
    correctAnswer: 2,
    comment: "Juan Mari Arzak es un reconocido cocinero español.",
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
      "Clara Campoamor fue una destacada defensora del sufragio femenino en España.",
  },
  {
    id: 4019,
    section: "Cultura y sociedad",
    question: "¿Qué canciones típicas se cantan en Navidad?",
    options: ["Flamenco.", "Villancicos.", "Jotas."],
    correctAnswer: 1,
    comment:
      "Los villancicos son las canciones tradicionales que se cantan en Navidad.",
  },
  {
    id: 4020,
    section: "Cultura y sociedad",
    question: "La Liga y la Copa del Rey son competiciones de…",
    options: ["natación.", "atletismo.", "fútbol."],
    correctAnswer: 2,
    comment: "La Liga y la Copa del Rey son competiciones de fútbol.",
  },
  {
    id: 4021,
    section: "Cultura y sociedad",
    question: "¿Quién ha recibido el premio Nobel de Literatura?",
    options: ["María Zambrano.", "Pablo Picasso.", "Vicente Aleixandre."],
    correctAnswer: 2,
    comment:
      "Vicente Aleixandre recibió el Premio Nobel de Literatura en 1977.",
  },
  {
    id: 4022,
    section: "Cultura y sociedad",
    question: "¿Qué fiesta se celebra en Pamplona el 7 de julio?",
    options: ["Los sanfermines.", "Las Fallas.", "La Feria de Abril."],
    correctAnswer: 0,
    comment: "Los sanfermines se celebran en Pamplona a partir del 7 de julio.",
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
      "Teresa Perales y Daniel Molina son destacados deportistas paralímpicos españoles.",
  },
  {
    id: 4024,
    section: "Cultura y sociedad",
    question:
      "¿Qué toman los españoles la noche del 31 de diciembre para celebrar el cambio de año?",
    options: ["Lentejas.", "Uvas.", "Aceitunas."],
    correctAnswer: 1,
    comment:
      "En Nochevieja los españoles comen doce uvas al son de las campanadas.",
  },
  {
    id: 4025,
    section: "Cultura y sociedad",
    question: "¿Qué mujer es autora del cuadro La verbena?",
    options: ["Maruja Mallo.", "Carmen Maura.", "Clara Lago."],
    correctAnswer: 0,
    comment:
      "Maruja Mallo fue una pintora española, autora del cuadro La verbena.",
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
    comment: "El Guernica de Picasso se expone en el Museo Reina Sofía.",
  },
  {
    id: 4027,
    section: "Cultura y sociedad",
    question:
      "¿Qué escritora española escribe en otra lengua oficial de España?",
    options: ["Mercè Rodoreda.", "Almudena Grandes.", "Ana María Matute."],
    correctAnswer: 0,
    comment: "Mercè Rodoreda es una destacada escritora en lengua catalana.",
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
      "En la España medieval convivieron las culturas cristiana, judía y musulmana.",
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
    comment: "El 6 de diciembre se celebra el Día de la Constitución.",
  },
  {
    id: 4030,
    section: "Cultura y sociedad",
    question:
      "¿Qué ciudad fue un centro científico en Al-Ándalus, donde se estudiaba medicina y astronomía?",
    options: ["Barcelona.", "Madrid.", "Córdoba."],
    correctAnswer: 2,
    comment:
      "Córdoba fue un importante centro científico durante la época de Al-Ándalus.",
  },
  {
    id: 4031,
    section: "Cultura y sociedad",
    question: "¿En qué ciudad española está el Museo Guggenheim?",
    options: ["Bilbao.", "Madrid.", "Valencia."],
    correctAnswer: 0,
    comment: "El Museo Guggenheim se encuentra en Bilbao.",
  },
  {
    id: 4032,
    section: "Cultura y sociedad",
    question: "El Premio Cervantes se da a…",
    options: ["actores.", "escritores.", "pintores."],
    correctAnswer: 1,
    comment:
      "El Premio Cervantes reconoce la trayectoria de escritores en lengua española.",
  },
  {
    id: 4033,
    section: "Cultura y sociedad",
    question: "¿Qué premio reconoce a los mejores actores y películas?",
    options: ["Premio Goya.", "Premio Nobel.", "Premio Cervantes."],
    correctAnswer: 0,
    comment: "Los Premios Goya reconocen lo mejor del cine español.",
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
      "Los Premios Princesa de Asturias reconocen el mérito científico, cultural y humanístico.",
  },
  {
    id: 4035,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos deportes es muy popular en España?",
    options: ["El fútbol.", "El esquí.", "El golf."],
    correctAnswer: 0,
    comment: "El fútbol es, con diferencia, el deporte más popular en España.",
  },
  {
    id: 4036,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos deportistas juega al tenis?",
    options: ["Pau Gasol.", "Carlos Sainz.", "Carlos Alcaraz."],
    correctAnswer: 2,
    comment: "Carlos Alcaraz es un tenista español de éxito internacional.",
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
      "La TIE es el documento que acredita la residencia legal de los extranjeros en España.",
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
      "El certificado de empadronamiento acredita el domicilio de una persona en un municipio.",
  },
  {
    id: 5003,
    section: "Cultura y sociedad",
    question: "¿A qué sustituye el registro electrónico individual?",
    options: ["Al DNI.", "Al permiso de conducir.", "Al libro de familia."],
    correctAnswer: 2,
    comment:
      "El registro electrónico individual sustituye al tradicional libro de familia en formato papel.",
  },
  {
    id: 5004,
    section: "Cultura y sociedad",
    question: "¿Cuál es la edad mínima para conducir un coche en España?",
    options: ["16 años.", "18 años.", "20 años."],
    correctAnswer: 1,
    comment:
      "La edad mínima para obtener el carné de conducir de turismos (clase B) es 18 años.",
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
      "La DGT es el organismo responsable de la expedición del carné de conducir.",
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
      "Para obtener el carné de conducir hay que superar un examen teórico y otro práctico.",
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
      "El libro de familia (o su equivalente electrónico) se tramita en el Registro Civil.",
  },
  {
    id: 5008,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos canales de televisión es autonómico?",
    options: ["Telecinco.", "Nova.", "Canal Sur."],
    correctAnswer: 2,
    comment: "Canal Sur es una televisión autonómica, propia de Andalucía.",
  },
  {
    id: 5009,
    section: "Cultura y sociedad",
    question: "¿Cuánto dura el permiso de maternidad o paternidad?",
    options: ["12 semanas.", "19 semanas.", "22 semanas."],
    correctAnswer: 1,
    comment:
      "El permiso por nacimiento y cuidado de menor dura 19 semanas para cada progenitor.",
  },
  {
    id: 5010,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es la tasa máxima de alcohol en sangre permitida a los conductores, en gramos por litro (g/l)?",
    options: ["0,5.", "0,7.", "0,9."],
    correctAnswer: 0,
    comment:
      "La tasa máxima de alcohol permitida a los conductores en general es de 0,5 g/l.",
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
      "El piso en un edificio de viviendas es el tipo de residencia más habitual en España.",
  },
  {
    id: 5012,
    section: "Cultura y sociedad",
    question:
      "¿Qué comunidad autónoma es conocida por la calidad de su aceite de oliva?",
    options: ["Cantabria.", "Andalucía.", "La Rioja."],
    correctAnswer: 1,
    comment:
      "Andalucía es la principal región productora de aceite de oliva de España.",
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
    comment: "La ITV es la revisión técnica obligatoria de los vehículos.",
  },
  {
    id: 5014,
    section: "Cultura y sociedad",
    question:
      "El aperitivo que acompaña a la bebida en bares y restaurantes se llama...",
    options: ["bocadillo.", "tapa.", "primer plato."],
    correctAnswer: 1,
    comment:
      "La tapa es el pequeño aperitivo típico que acompaña a la bebida en bares y restaurantes.",
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
    comment: "La tarjeta sanitaria se tramita en el centro de salud.",
  },
  {
    id: 5016,
    section: "Cultura y sociedad",
    question: "¿Con cuántos hijos una familia es numerosa?",
    options: ["Con 1 hijo.", "Con 2 hijos.", "Con 3 hijos."],
    correctAnswer: 2,
    comment: "En España se considera familia numerosa a partir de tres hijos.",
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
      "En España el matrimonio es legal tanto entre personas del mismo como de distinto sexo desde 2005.",
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
      "Los perros deben inscribirse en el registro municipal correspondiente (Ayuntamiento).",
  },
  {
    id: 5019,
    section: "Cultura y sociedad",
    question:
      "Los principales ingredientes de la tortilla española son huevos y…",
    options: ["pimientos.", "patatas.", "tomates."],
    correctAnswer: 1,
    comment:
      "La tortilla española se elabora principalmente con huevos y patatas.",
  },
  {
    id: 5020,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es uno de los platos más conocidos internacionalmente de la gastronomía española?",
    options: ["Gazpacho.", "Pizza.", "Pasta."],
    correctAnswer: 0,
    comment:
      "El gazpacho es uno de los platos españoles más conocidos internacionalmente.",
  },
  {
    id: 5021,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos canales de televisión es público?",
    options: ["Tele 5.", "La 1.", "Antena 3."],
    correctAnswer: 1,
    comment:
      "La 1 (TVE) es un canal de televisión público de titularidad estatal.",
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
      "Respetar el descanso vecinal evitando ruidos molestos es una norma habitual en comunidades de vecinos.",
  },
  {
    id: 5023,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos es el principal ingrediente de la paella valenciana?",
    options: ["Arroz.", "Chorizo.", "Garbanzos."],
    correctAnswer: 0,
    comment: "El arroz es el ingrediente principal de la paella valenciana.",
  },
  {
    id: 5024,
    section: "Cultura y sociedad",
    question: "La sidra es una bebida típica de...",
    options: ["Asturias.", "Valencia.", "Canarias."],
    correctAnswer: 0,
    comment: "La sidra es una bebida típica de Asturias.",
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
      "Desde 2017 los padres pueden acordar libremente el orden de los apellidos de sus hijos.",
  },
  {
    id: 5026,
    section: "Cultura y sociedad",
    question: "La Fiesta Nacional de España es el...",
    options: ["6 de diciembre.", "15 de agosto.", "12 de octubre."],
    correctAnswer: 2,
    comment: "La Fiesta Nacional de España se celebra el 12 de octubre.",
  },
  {
    id: 5027,
    section: "Cultura y sociedad",
    question:
      "¿Qué días suelen cerrar la mayoría de las tiendas o el pequeño comercio?",
    options: ["Los lunes.", "Los domingos.", "Los sábados por la tarde."],
    correctAnswer: 1,
    comment:
      "El pequeño comercio suele permanecer cerrado los domingos en la mayor parte de España.",
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
    comment: "El pasaporte se tramita en las comisarías de policía.",
  },
  {
    id: 5029,
    section: "Cultura y sociedad",
    question:
      "El Ministerio de Igualdad es el encargado de luchar contra la violencia de género y la...",
    options: ["separación.", "discriminación.", "solidaridad."],
    correctAnswer: 1,
    comment:
      "El Ministerio de Igualdad combate la violencia de género y la discriminación.",
  },
  {
    id: 5030,
    section: "Cultura y sociedad",
    question:
      "¿Qué comunidad autónoma es conocida por la calidad de sus cavas?",
    options: ["Galicia.", "Cataluña.", "Castilla-La Mancha."],
    correctAnswer: 1,
    comment:
      "Cataluña, especialmente la región del Penedès, es conocida por la producción de cava.",
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
      "La tarjeta sanitaria es el documento necesario para acceder a la atención médica pública.",
  },
  {
    id: 5032,
    section: "Cultura y sociedad",
    question: "El horario de Canarias, con respecto a la Península, es de...",
    options: ["dos horas menos.", "una hora menos.", "una hora más."],
    correctAnswer: 1,
    comment: "Canarias tiene una hora menos que la España peninsular.",
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
      "La Selectividad (actualmente EvAU) es la prueba de acceso a la Universidad.",
  },
  {
    id: 5034,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos productos necesita importar España de otros países?",
    options: ["Petróleo.", "Aceite de oliva.", "Medicamentos."],
    correctAnswer: 0,
    comment:
      "España importa petróleo, ya que no cuenta con reservas significativas propias.",
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
      "En España se pagan impuestos directos (como el IRPF) e indirectos (como el IVA).",
  },
  {
    id: 5036,
    section: "Cultura y sociedad",
    question:
      "Los adultos sin Bachillerato pueden estudiar en la Universidad haciendo una prueba especial a partir de los...",
    options: ["18 años.", "23 años.", "25 años."],
    correctAnswer: 2,
    comment:
      "Los mayores de 25 años sin Bachillerato pueden acceder a la Universidad mediante una prueba específica.",
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
      "Ese tipo de aviso suele encontrarse en parques y otras zonas de recreo ajardinadas.",
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
    comment: "El Bachillerato se compone de dos cursos académicos.",
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
    comment: "El IVA es un impuesto indirecto que grava el consumo.",
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
      "Al iniciar la vida laboral se asigna un número de afiliación a la Seguridad Social.",
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
    comment: "Los colegios públicos son gratuitos para las familias.",
  },
  {
    id: 5042,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos puertos es uno de los principales de España?",
    options: ["Tenerife.", "Alicante.", "Algeciras."],
    correctAnswer: 2,
    comment:
      "El puerto de Algeciras es uno de los principales puertos de España.",
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
      "Los colegios concertados son centros privados que reciben financiación pública.",
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
      "La Unión Europea es el principal destino de las exportaciones españolas.",
  },
  {
    id: 5045,
    section: "Cultura y sociedad",
    question: "Las bibliotecas públicas son gratuitas para…",
    options: ["todos.", "los parados.", "los niños."],
    correctAnswer: 0,
    comment:
      "Las bibliotecas públicas son de acceso gratuito para toda la ciudadanía.",
  },
  {
    id: 5046,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos productos exporta España más que importa?",
    options: ["Gas.", "Ropa.", "Calzado."],
    correctAnswer: 2,
    comment: "España es un importante exportador de calzado.",
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
      "Los Centros de Educación de Personas Adultas permiten obtener el graduado en ESO siendo mayor de edad.",
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
      "La Formación Profesional se divide en grado medio y grado superior.",
  },
  {
    id: 5049,
    section: "Cultura y sociedad",
    question: "¿Adónde vamos para ver al médico de familia o al pediatra?",
    options: ["Al hospital.", "Al centro de salud.", "A la farmacia."],
    correctAnswer: 1,
    comment:
      "El médico de familia y el pediatra atienden en el centro de salud.",
  },
  {
    id: 5050,
    section: "Cultura y sociedad",
    question: "¿Para cuántos años vale la tarjeta sanitaria europea?",
    options: ["Para un año.", "Para dos años.", "Para 10 años."],
    correctAnswer: 1,
    comment: "La tarjeta sanitaria europea tiene una validez de dos años.",
  },
  {
    id: 5051,
    section: "Cultura y sociedad",
    question: "¿A qué hora se cena normalmente en España?",
    options: ["A las 18 h.", "A las 23 h.", "A las 21 o 22 h."],
    correctAnswer: 2,
    comment:
      "En España se suele cenar bastante tarde, entre las 21 y las 22 horas.",
  },
  {
    id: 5052,
    section: "Cultura y sociedad",
    question: "¿Cuál es el número de teléfono único para cualquier emergencia?",
    options: ["060.", "112.", "911."],
    correctAnswer: 1,
    comment: "El 112 es el número único de emergencias en España.",
  },
  {
    id: 5053,
    section: "Cultura y sociedad",
    question: "¿Cuál de estos periódicos se publica a nivel nacional?",
    options: ["El Diario Vasco.", "El País.", "La Voz de Galicia."],
    correctAnswer: 1,
    comment: "El País es un periódico de difusión nacional.",
  },
  {
    id: 5054,
    section: "Cultura y sociedad",
    question: "¿Dónde se venden sellos y tabaco?",
    options: ["En el quiosco.", "En la farmacia.", "En el estanco."],
    correctAnswer: 2,
    comment:
      "El estanco es el establecimiento donde se venden sellos y tabaco.",
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
      "El teléfono de atención a víctimas de violencia de género funciona las 24 horas del día.",
  },
  {
    id: 5056,
    section: "Cultura y sociedad",
    question:
      "La organización que trabaja para conseguir la integración de las personas con discapacidad visual es…",
    options: ["la ONCE.", "Unicef.", "Cáritas."],
    correctAnswer: 0,
    comment:
      "La ONCE trabaja por la integración de las personas con discapacidad visual.",
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
    comment: "El Camino de Santiago está declarado Patrimonio de la Humanidad.",
  },
  {
    id: 5058,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el canal de televisión estatal que transmite noticias de actualidad nacional e internacional continuamente?",
    options: ["Teledeporte.", "La 1.", "Canal 24 horas."],
    correctAnswer: 2,
    comment:
      "El Canal 24 Horas de RTVE emite noticias de actualidad de forma continua.",
  },
  {
    id: 5059,
    section: "Cultura y sociedad",
    question:
      "El teléfono gratuito para las víctimas de violencia de género es el…",
    options: ["091.", "112.", "016."],
    correctAnswer: 2,
    comment:
      "El 016 es el teléfono gratuito de atención a víctimas de violencia de género.",
  },
  {
    id: 5060,
    section: "Cultura y sociedad",
    question:
      "En España, la red de trenes puede ser de larga distancia, de media distancia y…",
    options: ["de cercanías.", "rural.", "transnacional."],
    correctAnswer: 0,
    comment:
      "La red ferroviaria española incluye trenes de larga distancia, media distancia y cercanías.",
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
      "Fumar está prohibido en las inmediaciones de los centros escolares.",
  },
  {
    id: 5062,
    section: "Cultura y sociedad",
    question:
      "¿Qué título se obtiene al finalizar un ciclo de grado medio de Formación Profesional?",
    options: ["Bachiller.", "Técnico.", "Graduado en ESO."],
    correctAnswer: 1,
    comment:
      "Al finalizar un ciclo formativo de grado medio se obtiene el título de Técnico.",
  },
  {
    id: 5063,
    section: "Cultura y sociedad",
    question:
      "¿Qué título se obtiene tras realizar una tesis doctoral en España?",
    options: ["Máster.", "Graduado.", "Doctor."],
    correctAnswer: 2,
    comment: "Tras defender una tesis doctoral se obtiene el título de Doctor.",
  },
  {
    id: 5064,
    section: "Cultura y sociedad",
    question: "¿Dónde se compran las medicinas con receta?",
    options: ["En el hospital.", "En el centro de salud.", "En la farmacia."],
    correctAnswer: 2,
    comment: "Los medicamentos con receta se dispensan en las farmacias.",
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
      "No pisar el césped es una indicación habitual en parques públicos.",
  },
  {
    id: 5066,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de las siguientes cosas es obligatoria para el propietario de un coche en España?",
    options: ["El garaje.", "El seguro.", "La alarma."],
    correctAnswer: 1,
    comment:
      "El seguro del vehículo es obligatorio para todos los propietarios de coches en España.",
  },
  {
    id: 5067,
    section: "Cultura y sociedad",
    question: "El aeropuerto Adolfo Suárez está en…",
    options: ["Barcelona.", "Madrid.", "Bilbao."],
    correctAnswer: 1,
    comment: "El aeropuerto Adolfo Suárez Madrid-Barajas está en Madrid.",
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
      "El cinturón de seguridad es obligatorio en todos los asientos del vehículo.",
  },
  {
    id: 5069,
    section: "Cultura y sociedad",
    question: "¿Cuál es el límite de velocidad en autopista?",
    options: ["90 km/h.", "120 km/h.", "150 km/h."],
    correctAnswer: 1,
    comment: "El límite general de velocidad en autopista es de 120 km/h.",
  },
  {
    id: 5070,
    section: "Cultura y sociedad",
    question:
      "Ceder el asiento a las personas con movilidad reducida es una norma que encontramos indicada en...",
    options: ["el transporte público.", "las bibliotecas.", "los museos."],
    correctAnswer: 0,
    comment:
      "Ceder el asiento a personas con movilidad reducida es una norma habitual del transporte público.",
  },
  {
    id: 5071,
    section: "Cultura y sociedad",
    question:
      "¿Cuál es el medio de transporte público que tiene una luz verde encendida si está libre?",
    options: ["El autobús.", "El taxi.", "El tranvía."],
    correctAnswer: 1,
    comment: "El taxi lleva encendida una luz verde cuando está libre.",
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
      "Los perros deben llevar microchip identificativo y estar vacunados.",
  },
  {
    id: 5073,
    section: "Cultura y sociedad",
    question: "Los españoles necesitan el pasaporte para viajar a…",
    options: ["Italia.", "China.", "Alemania."],
    correctAnswer: 1,
    comment:
      "China exige pasaporte a los ciudadanos españoles para entrar en su territorio.",
  },
  {
    id: 5074,
    section: "Cultura y sociedad",
    question: "¿Cuál es la edad mínima para trabajar en España?",
    options: ["16 años.", "18 años.", "21 años."],
    correctAnswer: 0,
    comment: "La edad mínima general para trabajar en España es 16 años.",
  },
  {
    id: 5075,
    section: "Cultura y sociedad",
    question: "¿Cuál es el sector de mayor peso en la economía española?",
    options: ["Agricultura.", "Servicios.", "Construcción."],
    correctAnswer: 1,
    comment:
      "El sector servicios es el que más peso tiene en la economía española.",
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
      "España es un país puntero en energías renovables, como la eólica y la solar.",
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
      "El Estatuto de los Trabajadores es la principal norma laboral española.",
  },
  {
    id: 5078,
    section: "Cultura y sociedad",
    question:
      "¿Cuál de estos establecimientos está abierto 24 horas si es necesario?",
    options: ["Farmacia.", "Pescadería.", "Librería."],
    correctAnswer: 0,
    comment:
      "Las farmacias de guardia pueden permanecer abiertas las 24 horas cuando es necesario.",
  },
  {
    id: 5079,
    section: "Cultura y sociedad",
    question: "La educación infantil en España…",
    options: ["es obligatoria.", "tiene dos ciclos.", "empieza a los 4 años."],
    correctAnswer: 1,
    comment:
      "La educación infantil en España se organiza en dos ciclos (0-3 y 3-6 años).",
  },
  {
    id: 5080,
    section: "Cultura y sociedad",
    question: "¿Cuándo empieza el calendario escolar?",
    options: ["En agosto.", "En septiembre.", "En octubre."],
    correctAnswer: 1,
    comment: "El curso escolar comienza habitualmente en septiembre.",
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
      "Las Escuelas Oficiales de Idiomas admiten alumnos a partir de los 16 años.",
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
      "El informe de vida laboral recoge los periodos cotizados a la Seguridad Social.",
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
      "Los convenios colectivos regulan las condiciones laborales pactadas con los representantes de los trabajadores.",
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
    comment: "España destaca internacionalmente en el sector del turismo.",
  },
];
