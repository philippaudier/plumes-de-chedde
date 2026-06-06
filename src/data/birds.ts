import { Bird, BirdHabitat } from "@/types/bird";

export const birds: Bird[] = [
  // ═══════════════════════════════════════════════════════════════════
  // VILLAGE & JARDINS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "moineau-domestique",
    slug: "moineau-domestique",
    nameFr: "Moineau domestique",
    nameLatin: "Passer domesticus",
    family: "Passereaux",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/moineau-domestique.png",
    rarityLocal: "commun",
    habitats: ["village", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée, surtout le matin près des maisons",
    emotionalTag: "Le compagnon de toujours",
    shortDescription:
      "Petit, rond, brun et familier. Il habite nos villages depuis si longtemps qu'on oublie parfois de le regarder.",
    longDescription:
      "Le moineau domestique fait partie du paysage comme les toits et les balcons. Il vit en bande, bavard et agité, toujours à chercher des miettes ou à se chamailler dans les haies. Son plumage brun rayé de noir chez le mâle, plus discret chez la femelle, se fond dans les pierres et le bois. L'observer, c'est retrouver une présence ordinaire et rassurante, celle des matins où l'on ouvre les volets.",
    identificationTips: [
      "Petit passereau trapu",
      "Mâle avec calotte grise et bavette noire",
      "Femelle beige-brun uniforme",
      "Cris courts et répétitifs : « tchip tchip »",
    ],
    whereToLook:
      "Autour des maisons, près des mangeoires en hiver, dans les haies des jardins.",
    localNote:
      "On les voit souvent près des commerces et sur les fils électriques du village. Ils font partie du décor.",
    responsibleNote:
      "Le moineau est familier mais discret. En hiver, quelques graines sur un rebord de fenêtre peuvent l'aider.",
  },
  {
    id: "rougequeue-noir",
    slug: "rougequeue-noir",
    nameFr: "Rougequeue noir",
    nameLatin: "Phoenicurus ochruros",
    family: "Passereaux",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/rougequeue-noir.png",
    rarityLocal: "commun",
    habitats: ["village", "jardin", "falaise"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Tôt le matin, sur les toits et les murets",
    emotionalTag: "Le chanteur des toits",
    shortDescription:
      "Gris sombre avec une queue orange vif qui frémit sans cesse. Son chant grinçant ouvre les matins d'été.",
    longDescription:
      "Le rougequeue noir est l'oiseau des toits, des vieux murs et des rochers. Il aime les hauteurs modestes : le faîte d'une grange, un piquet de clôture, le rebord d'une fenêtre. Là, il tremble de la queue, surveille son territoire, puis lance son chant étrange — un grésillement mécanique mêlé de notes claires. Il est l'un des premiers à chanter le matin, bien avant le lever du soleil, comme s'il avait hâte de réveiller la vallée.",
    identificationTips: [
      "Queue orange constamment agitée",
      "Mâle gris-noir avec front blanc",
      "Femelle gris-brun plus terne",
      "Chant grinçant caractéristique",
    ],
    whereToLook:
      "Sur les toits du village, les murets de pierre, près des chalets et des granges.",
    localNote:
      "Il niche dans les interstices des vieilles bâtisses. Un couple revient chaque année au même endroit.",
    responsibleNote:
      "Laissez les vieux murs tranquilles au printemps : ils abritent souvent des nids.",
  },
  {
    id: "merle-noir",
    slug: "merle-noir",
    nameFr: "Merle noir",
    nameLatin: "Turdus merula",
    family: "Turdidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/merle-noir.png",
    rarityLocal: "commun",
    habitats: ["village", "jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Aube et crépuscule, surtout au printemps",
    emotionalTag: "Le flûtiste du soir",
    shortDescription:
      "Tout noir avec un bec orange vif. Son chant flûté accompagne les fins de journée.",
    longDescription:
      "Le merle noir est peut-être l'oiseau le plus mélodieux de nos jardins. Le mâle, d'un noir profond rehaussé d'un bec orange éclatant, chante perché bien en vue — sur un toit, une antenne, la cime d'un arbre. Son chant est une improvisation fluide, jamais tout à fait la même, qui s'élève dans la lumière dorée du soir. La femelle, brune et discrète, fouille les feuilles mortes à la recherche de vers. Observer un merle, c'est se reconnecter aux rythmes simples du jardin.",
    identificationTips: [
      "Mâle entièrement noir, bec et cercle oculaire orange",
      "Femelle brun sombre, gorge tachetée",
      "Sautille au sol, relève souvent la queue",
      "Chant flûté et varié",
    ],
    whereToLook:
      "Jardins, pelouses, haies. Chante souvent depuis les toits ou les arbres élevés.",
    localNote:
      "Au printemps, leur chant prend toute sa profondeur. Écoute-les vers 19h depuis les jardins.",
    responsibleNote:
      "Les merles apprécient les coins de jardin laissés un peu sauvages, avec des feuilles mortes à retourner.",
  },
  {
    id: "rougegorge-familier",
    slug: "rougegorge-familier",
    nameFr: "Rougegorge familier",
    nameLatin: "Erithacus rubecula",
    family: "Muscicapidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/rougegorge-familier.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Tôt le matin et en fin d'après-midi",
    emotionalTag: "La petite présence du matin",
    shortDescription:
      "Il apparaît souvent comme s'il avait toujours été là. Une petite présence ronde, orange et attentive, posée au bord du matin.",
    longDescription:
      "Le rougegorge a ce don de surgir au bon moment — quand vous retournez la terre au jardin, quand vous vous asseyez sur un banc, quand le silence s'installe. Rond, vif, curieux, il s'approche sans peur, penche la tête, vous observe. Sa poitrine orangée tranche sur le sous-bois sombre. Son chant, cristallin et mélancolique, accompagne les matins froids. C'est un oiseau solitaire, territorial, mais qui semble toujours chercher votre compagnie.",
    identificationTips: [
      "Petite taille, silhouette ronde",
      "Poitrine orange vif",
      "Grands yeux noirs expressifs",
      "Chant mélodieux, un peu triste",
    ],
    whereToLook:
      "Partout où il y a un peu d'ombre et de tranquillité : jardins, lisières, sous-bois.",
    localNote:
      "Ils fréquentent volontiers les jardins et les haies le long des chemins. L'hiver, ils s'approchent des maisons.",
    responsibleNote:
      "Le rougegorge est curieux et confiant. Restez immobile, il viendra peut-être vous observer de près.",
  },
  {
    id: "pinson-des-arbres",
    slug: "pinson-des-arbres",
    nameFr: "Pinson des arbres",
    nameLatin: "Fringilla coelebs",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/pinson-des-arbres.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Printemps, dès les premiers beaux jours",
    emotionalTag: "L'annonceur du printemps",
    shortDescription:
      "Un petit oiseau élégant aux couleurs douces : rose, gris, brun et blanc. Son chant cascadant annonce les beaux jours.",
    longDescription:
      "Le pinson des arbres est l'un des oiseaux les plus répandus de la vallée, mais son chant reste une joie à chaque printemps. Cette cascade de notes qui accélère et se termine par une petite fioriture — on l'entend partout dès que le soleil réchauffe l'air. Le mâle arbore des couleurs délicates : poitrine rosée, tête gris-bleu, dos brun, barres blanches sur les ailes. La femelle est plus discrète, dans les tons bruns et olive.",
    identificationTips: [
      "Deux barres blanches nettes sur les ailes",
      "Mâle : poitrine rose, tête gris-bleu",
      "Femelle : tons bruns plus uniformes",
      "Chant en cascade descendante caractéristique",
    ],
    whereToLook: "Jardins, parcs, lisières de forêts, vergers.",
    localNote:
      "Très présent dès mars. Son chant est l'un des premiers signes que le printemps s'installe.",
    responsibleNote:
      "Les pinsons apprécient les graines en hiver. Une mangeoire bien placée peut accueillir plusieurs individus.",
  },
  {
    id: "mesange-charbonniere",
    slug: "mesange-charbonniere",
    nameFr: "Mésange charbonnière",
    nameLatin: "Parus major",
    family: "Paridés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/mesange-charbonniere.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée, active et visible",
    emotionalTag: "L'acrobate familière",
    shortDescription:
      "Jaune vif, tête noire et joues blanches. Agile et curieuse, elle explore chaque recoin du jardin.",
    longDescription:
      "La mésange charbonnière est la plus grande et la plus commune de nos mésanges. Son plastron jaune traversé d'une cravate noire, ses joues blanches encadrées de noir, la rendent facile à reconnaître. Elle est partout : dans les arbres, sur les mangeoires, suspendue aux branches les plus fines. Son répertoire vocal est riche — elle chante, siffle, alarme, bavarde. C'est une présence joyeuse et constante dans les jardins de la vallée.",
    identificationTips: [
      "Tête noire avec joues blanches",
      "Ventre jaune avec bande noire centrale",
      "Plus grande que les autres mésanges",
      "Chant : « ti-tu, ti-tu » répété",
    ],
    whereToLook:
      "Partout où il y a des arbres : jardins, parcs, forêts. Fréquente assidûment les mangeoires.",
    localNote:
      "Elles visitent les mangeoires tout l'hiver et nichent volontiers dans les nichoirs. Les plus familières.",
    responsibleNote:
      "Installez un nichoir avec un trou de 28-32 mm de diamètre pour les accueillir au printemps.",
  },
  {
    id: "mesange-bleue",
    slug: "mesange-bleue",
    nameFr: "Mésange bleue",
    nameLatin: "Cyanistes caeruleus",
    family: "Paridés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/mesange-bleue.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée",
    emotionalTag: "La petite bleue",
    shortDescription:
      "Minuscule, vive, avec une calotte bleue et des joues blanches. Elle virevolte entre les branches comme une pensée joyeuse.",
    longDescription:
      "Plus petite que sa cousine charbonnière, la mésange bleue compense par son énergie et ses couleurs délicates. Sa calotte bleu vif, ses ailes bleutées, son ventre jaune pâle en font un petit bijou des jardins. Elle est acrobate, capable de se suspendre la tête en bas pour atteindre les graines ou les insectes cachés. Son chant est un trille aigu et léger, souvent confondu avec d'autres sons du jardin.",
    identificationTips: [
      "Calotte bleue vif",
      "Plus petite que la mésange charbonnière",
      "Pas de cravate noire sur le ventre",
      "Très agile, souvent suspendue",
    ],
    whereToLook:
      "Jardins, haies, forêts de feuillus. Adore les mangeoires de graines.",
    localNote:
      "Commune dans tous les jardins du coin. Elle niche dans de très petits trous, parfois surprenants.",
    responsibleNote:
      "Un nichoir avec un trou de 25-28 mm lui conviendra parfaitement.",
  },
  {
    id: "pie-bavarde",
    slug: "pie-bavarde",
    nameFr: "Pie bavarde",
    nameLatin: "Pica pica",
    family: "Corvidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/pie-bavarde.png",
    rarityLocal: "commun",
    habitats: ["village", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée",
    emotionalTag: "La commère du village",
    shortDescription:
      "Noire et blanche avec une longue queue irisée. Curieuse, bruyante, toujours là où il se passe quelque chose.",
    longDescription:
      "La pie bavarde est impossible à ignorer. Son plumage contrasté — noir profond aux reflets bleus et verts, blanc éclatant — et sa longue queue la rendent reconnaissable entre toutes. Elle marche d'un pas sautillant, fouille les pelouses, observe tout. Son cri rauque et répété accompagne la vie du village. Intelligente et opportuniste, elle a parfois mauvaise réputation, mais elle fait partie intégrante du paysage sonore local.",
    identificationTips: [
      "Noir et blanc très contrasté",
      "Longue queue aux reflets métalliques",
      "Vol saccadé, queue étalée",
      "Cri rauque et jacassant",
    ],
    whereToLook:
      "Pelouses, jardins, vergers, abords des villages. Construit de gros nids dans les arbres.",
    localNote:
      "Elles nichent dans les grands arbres près des maisons. Leur bavardage fait partie du quotidien.",
    responsibleNote:
      "La pie est souvent mal-aimée, mais elle joue un rôle dans l'écosystème. Observez son intelligence avec curiosité.",
  },
  {
    id: "corneille-noire",
    slug: "corneille-noire",
    nameFr: "Corneille noire",
    nameLatin: "Corvus corone",
    family: "Corvidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/corneille-noire.png",
    rarityLocal: "commun",
    habitats: ["village", "jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée",
    emotionalTag: "La sage en noir",
    shortDescription:
      "Entièrement noire, silhouette imposante. Elle survole la vallée avec une tranquille assurance.",
    longDescription:
      "La corneille noire est un oiseau d'une intelligence remarquable. Entièrement noire, du bec aux pattes, elle possède une prestance que les autres oiseaux n'ont pas. Elle vit souvent en couple ou en petit groupe, marchant au sol d'un pas mesuré ou perchée sur un arbre mort. Son croassement grave ponctue les journées. Elle observe, elle apprend, elle s'adapte. La regarder, c'est croiser le regard d'une créature qui vous évalue.",
    identificationTips: [
      "Entièrement noire, plumage brillant",
      "Bec robuste et noir",
      "Plus petite qu'un corbeau",
      "Croassement grave « croa croa »",
    ],
    whereToLook: "Champs, prairies, abords des villages, forêts.",
    localNote:
      "Elles se rassemblent parfois en grands groupes le soir, traçant des lignes noires vers leurs dortoirs.",
    responsibleNote:
      "Les corneilles sont protégées et jouent un rôle de nettoyeurs. Ne les chassez pas.",
  },
  {
    id: "bergeronnette-grise",
    slug: "bergeronnette-grise",
    nameFr: "Bergeronnette grise",
    nameLatin: "Motacilla alba",
    family: "Motacillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/bergeronnette-grise.png",
    rarityLocal: "commun",
    habitats: ["village", "riviere"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Journée, près des zones ouvertes et de l'eau",
    emotionalTag: "La danseuse des parkings",
    shortDescription:
      "Fine et élégante, grise, noire et blanche. Elle trottine au sol en hochant sans cesse la queue.",
    longDescription:
      "La bergeronnette grise a une grâce particulière. Elle court sur les toits, les parkings, les chemins, sa longue queue battant de haut en bas comme un métronome. Son plumage sobre — gris, noir et blanc — lui donne une élégance discrète. Elle chasse les insectes au sol, toujours en mouvement, toujours occupée. C'est un oiseau des espaces ouverts qui s'est adapté à notre monde minéral.",
    identificationTips: [
      "Longue queue constamment agitée de haut en bas",
      "Plumage gris, noir et blanc",
      "Fine et élancée",
      "Petit cri « tsi-tsi » en vol",
    ],
    whereToLook: "Parkings, places, toits, bords de routes, berges de rivière.",
    localNote:
      "On la voit souvent sur les parkings, trottinant entre les voitures avec assurance.",
    responsibleNote:
      "Elle niche parfois dans des recoins de bâtiments. Évitez de déranger pendant la nidification.",
  },
  {
    id: "chardonneret-elegant",
    slug: "chardonneret-elegant",
    nameFr: "Chardonneret élégant",
    nameLatin: "Carduelis carduelis",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/chardonneret-elegant.png",
    rarityLocal: "commun",
    habitats: ["jardin", "village"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée, souvent en petits groupes",
    emotionalTag: "Le bijou des friches",
    shortDescription:
      "Un masque rouge vif, des ailes barrées d'or : le chardonneret est un petit éclat de couleur dans le jardin.",
    longDescription:
      "Le chardonneret élégant porte bien son nom. Son visage rouge encadré de blanc et de noir, ses ailes ornées d'une bande jaune d'or, en font l'un des plus beaux oiseaux de nos jardins. Il adore les graines de chardons, de tournesols, de cosmos — toutes ces plantes un peu sauvages qu'on laisse monter en graines. Son chant est un gazouillis liquide et joyeux. L'observer, c'est découvrir que la beauté se cache dans les coins délaissés.",
    identificationTips: [
      "Face rouge, blanc et noir",
      "Bande jaune vif sur les ailes (visible en vol)",
      "Bec conique rose pâle",
      "Vol onduleux, chant gazouillant",
    ],
    whereToLook:
      "Friches, jardins avec des plantes à graines, vergers, bordures de champs.",
    localNote:
      "Ils apprécient les tournesols et les cardères laissés au jardin. Un régal de couleurs quand ils arrivent.",
    responsibleNote:
      "Laissez quelques plantes monter en graines à l'automne : c'est un festin pour eux.",
  },
  {
    id: "verdier-europe",
    slug: "verdier-europe",
    nameFr: "Verdier d'Europe",
    nameLatin: "Chloris chloris",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/verdier-europe.png",
    rarityLocal: "commun",
    habitats: ["jardin", "village"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, aux mangeoires et dans les haies",
    emotionalTag: "Le costaud vert olive",
    shortDescription:
      "Trapu et verdâtre, avec des taches jaunes sur les ailes. Il domine souvent les mangeoires de sa présence paisible.",
    longDescription:
      "Le verdier est un oiseau robuste, aux couleurs de feuillage — vert olive, jaune et gris. Il a une présence tranquille et assurée, souvent perché bien en vue ou installé sur une mangeoire dont il ne bouge pas facilement. Son chant est un trille roulé, parfois entrecoupé d'un sifflement nasal. C'est un habitant fidèle des jardins, présent toute l'année.",
    identificationTips: [
      "Plumage vert olive avec des tons jaunes",
      "Bec conique puissant",
      "Taches jaunes sur les ailes et la queue",
      "Chant trillé avec notes nasales",
    ],
    whereToLook: "Jardins, haies, vergers. Assidu aux mangeoires en hiver.",
    localNote:
      "Ils forment parfois de petites bandes aux mangeoires en hiver. Leur jaune vif égaye les jours gris.",
    responsibleNote:
      "Les verdiers peuvent être touchés par des maladies aux mangeoires. Nettoyez-les régulièrement.",
  },
  {
    id: "martinet-noir",
    slug: "martinet-noir",
    nameFr: "Martinet noir",
    nameLatin: "Apus apus",
    family: "Apodidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/martinet-noir.png",
    rarityLocal: "commun",
    habitats: ["village"],
    seasons: ["printemps", "ete"],
    bestMoment: "Soirs d'été, en bandes criantes au-dessus des toits",
    emotionalTag: "Le crieur du ciel d'été",
    shortDescription:
      "Ailes en faucille, cris stridents, il ne se pose jamais ou presque. Le martinet, c'est l'été qui passe au-dessus des toits.",
    longDescription:
      "Le martinet noir est l'oiseau de l'été par excellence. Ses longues ailes en forme de faucille fendent l'air à toute vitesse, et ses cris stridents accompagnent les soirées chaudes. Il vit presque entièrement en vol — dormant, mangeant, s'accouplant dans les airs. Il ne se pose que pour nicher, dans les anfractuosités des vieux bâtiments. Quand il repart fin juillet, c'est un peu l'été qui s'en va avec lui.",
    identificationTips: [
      "Silhouette en forme d'ancre ou de faucille",
      "Vol rapide et direct, entrecoupé de glissades",
      "Entièrement brun-noir",
      "Cris stridents « srii srii » en bandes",
    ],
    whereToLook:
      "Au-dessus des villages et des villes, surtout le soir. Niche sous les toits.",
    localNote:
      "Ils arrivent début mai et repartent fin juillet. Leur retour marque le vrai début de l'été.",
    responsibleNote:
      "Les martinets ont besoin d'accès aux vieux bâtiments pour nicher. Évitez de boucher les entrées sous les toits.",
  },
  {
    id: "hirondelle-rustique",
    slug: "hirondelle-rustique",
    nameFr: "Hirondelle rustique",
    nameLatin: "Hirundo rustica",
    family: "Hirundinidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/hirondelle-rustique.png",
    rarityLocal: "occasionnel",
    habitats: ["village", "jardin"],
    seasons: ["printemps", "ete"],
    bestMoment: "Journée, chassant au-dessus des prés et près des granges",
    emotionalTag: "La messagère du printemps",
    shortDescription:
      "Queue fourchue, gorge rouge, vol gracieux au ras du sol. L'hirondelle annonce les beaux jours.",
    longDescription:
      "L'hirondelle rustique est liée à nos campagnes depuis toujours. Elle niche dans les granges et les étables, construisant son nid de boue contre les poutres. Son vol est un ballet incessant, rasant les prés pour capturer des insectes. Sa queue profondément fourchue, sa gorge rouge brique, son dos bleu-noir brillant la rendent reconnaissable. Son gazouillis accompagne les journées de printemps et d'été.",
    identificationTips: [
      "Queue très fourchue avec longs filets",
      "Gorge et front rouge brique",
      "Dos bleu-noir brillant",
      "Vol bas et acrobatique",
    ],
    whereToLook:
      "Près des fermes, des granges, au-dessus des prés et des plans d'eau.",
    localNote:
      "Quelques couples nichent encore dans les vieilles granges. Leur présence devient plus rare, plus précieuse.",
    responsibleNote:
      "Ne détruisez jamais un nid d'hirondelle, même en dehors de la saison de nidification. Elles reviennent au même endroit.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // RIVIÈRE & TORRENTS
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "cincle-plongeur",
    slug: "cincle-plongeur",
    nameFr: "Cincle plongeur",
    nameLatin: "Cinclus cinclus",
    family: "Cinclidés",
    chapter: "au_fil_de_leau",
    imagePlaceholder: "/images/birds/cincle-plongeur.png",
    rarityLocal: "occasionnel",
    habitats: ["riviere"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée, au bord des torrents",
    emotionalTag: "Le marcheur des eaux vives",
    shortDescription:
      "Rond, brun avec un plastron blanc, il plonge dans les torrents glacés et marche au fond de l'eau.",
    longDescription:
      "Le cincle plongeur est un prodige de la nature. Ce petit oiseau trapu, brun chocolat avec une bavette blanche éclatante, fait ce qu'aucun autre passereau ne fait : il plonge dans l'eau courante et marche sur le fond des torrents à la recherche de larves. On le voit souvent sur un rocher au milieu du courant, faisant des révérences caractéristiques avant de plonger. Sa présence indique une eau pure et bien oxygénée.",
    identificationTips: [
      "Petit, trapu, brun avec plastron blanc",
      "Fait des révérences sur les rochers",
      "Plonge et nage sous l'eau",
      "Vol direct et rapide au-dessus de l'eau",
    ],
    whereToLook:
      "Le long de l'Arve et des torrents de montagne, près des rapides et des cascades.",
    localNote:
      "On l'observe le long de la rivière, surtout là où le courant est vif et l'eau claire. Un éclair roux sur les rochers.",
    responsibleNote:
      "Ne vous approchez pas trop du bord : vous pourriez le déranger pendant sa pêche sous-marine.",
  },
  {
    id: "bergeronnette-des-ruisseaux",
    slug: "bergeronnette-des-ruisseaux",
    nameFr: "Bergeronnette des ruisseaux",
    nameLatin: "Motacilla cinerea",
    family: "Motacillidés",
    chapter: "au_fil_de_leau",
    imagePlaceholder: "/images/birds/bergeronnette-des-ruisseaux.png",
    rarityLocal: "commun",
    habitats: ["riviere"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, le long des cours d'eau",
    emotionalTag: "La jaune des torrents",
    shortDescription:
      "Plus fine et plus jaune que sa cousine grise, elle danse sur les rochers au bord de l'eau.",
    longDescription:
      "La bergeronnette des ruisseaux est l'élégante des bords de torrent. Plus longue et plus fine que la bergeronnette grise, elle arbore un ventre jaune citron éclatant, surtout au printemps. Sa queue interminable bat sans cesse tandis qu'elle sautille de pierre en pierre, chassant les petits insectes au fil de l'eau. Elle est indissociable des cours d'eau vive et des ponts de pierre.",
    identificationTips: [
      "Ventre jaune vif (surtout au printemps)",
      "Queue très longue",
      "Dos gris, ailes sombres",
      "Toujours près de l'eau courante",
    ],
    whereToLook:
      "Bords de l'Arve, torrents de montagne, ponts, moulins, cascades.",
    localNote:
      "Présente toute l'année le long de l'eau. En hiver, on la voit parfois près des fontaines du village.",
    responsibleNote:
      "Elle niche parfois dans les anfractuosités des ponts. Évitez d'y grimper au printemps.",
  },
  {
    id: "canard-colvert",
    slug: "canard-colvert",
    nameFr: "Canard colvert",
    nameLatin: "Anas platyrhynchos",
    family: "Anatidés",
    chapter: "au_fil_de_leau",
    imagePlaceholder: "/images/birds/canard-colvert.png",
    rarityLocal: "commun",
    habitats: ["riviere"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée",
    emotionalTag: "Le familier des berges",
    shortDescription:
      "Le canard que tout le monde connaît : tête verte irisée pour le mâle, plumage brun discret pour la femelle.",
    longDescription:
      "Le colvert est le canard par excellence, celui qu'on reconnaît depuis l'enfance. Le mâle, avec sa tête vert bouteille brillant, son collier blanc et sa poitrine marron, est spectaculaire. La femelle, brune et tachetée, passe plus inaperçue mais assure l'essentiel : couver et élever les canetons. On les voit sur l'Arve, dans les plans d'eau, parfois dans des endroits inattendus. Leur « coin-coin » fait partie du paysage sonore de la vallée.",
    identificationTips: [
      "Mâle : tête vert irisé, collier blanc, poitrine brun-rouge",
      "Femelle : brune tachetée",
      "Miroir bleu-violet sur l'aile",
      "Cancane typique",
    ],
    whereToLook: "L'Arve, les étangs, les plans d'eau calme.",
    localNote:
      "On les observe le long de la rivière, surtout dans les zones où le courant est plus calme. Patients comme des statues.",
    responsibleNote:
      "Évitez de nourrir les canards avec du pain : c'est mauvais pour eux et pour l'eau.",
  },
  {
    id: "milan-noir",
    slug: "milan-noir",
    nameFr: "Milan noir",
    nameLatin: "Milvus migrans",
    family: "Accipitridés",
    chapter: "au_fil_de_leau",
    imagePlaceholder: "/images/birds/milan-noir.png",
    rarityLocal: "occasionnel",
    habitats: ["riviere", "village"],
    seasons: ["printemps", "ete"],
    bestMoment: "Journée, planant au-dessus de la vallée",
    emotionalTag: "Le planeur de la vallée",
    shortDescription:
      "Grand rapace brun sombre à queue échancrée, il plane longuement au-dessus des rivières et des villages.",
    longDescription:
      "Le milan noir est le grand planeur de nos vallées. Sa silhouette sombre, sa queue légèrement fourchue, ses ailes longues et arquées le rendent reconnaissable de loin. Il passe des heures à tournoyer sans effort, scrutant le sol à la recherche de proies ou de charognes. Opportuniste, il fréquente volontiers les abords des villages et des cours d'eau. Son sifflement plaintif accompagne les après-midi de printemps.",
    identificationTips: [
      "Grande taille, brun sombre",
      "Queue échancrée (pas très fourchue)",
      "Vol plané souple avec ailes arquées",
      "Sifflement tremblé caractéristique",
    ],
    whereToLook:
      "Au-dessus de la vallée, de l'Arve, des zones ouvertes. Niche dans les grands arbres.",
    localNote:
      "Il survole régulièrement la vallée au printemps et en été. Son cri plaintif annonce les beaux jours.",
    responsibleNote:
      "Le milan noir est un charognard utile. Ne le confondez pas avec un nuisible.",
  },
  {
    id: "buse-variable",
    slug: "buse-variable",
    nameFr: "Buse variable",
    nameLatin: "Buteo buteo",
    family: "Accipitridés",
    chapter: "au_fil_de_leau",
    imagePlaceholder: "/images/birds/buse-variable.png",
    rarityLocal: "commun",
    habitats: ["foret", "riviere", "village"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, perchée ou en vol",
    emotionalTag: "La sentinelle des prés",
    shortDescription:
      "Rapace trapu et variable en couleur, souvent posé sur un piquet ou un arbre mort, surveillant les champs.",
    longDescription:
      "La buse variable est le rapace le plus commun de nos campagnes. Son plumage varie énormément — du brun très sombre au presque blanc, en passant par toutes les nuances. Elle chasse les campagnols, souvent perchée sur un poteau ou planant en larges cercles. Son cri miaulant est un son familier des promenades en campagne. Elle fait partie du paysage, présente et patiente.",
    identificationTips: [
      "Silhouette trapue, ailes larges et arrondies",
      "Plumage très variable (brun, beige, panaché)",
      "Queue courte et arrondie",
      "Cri miaulant « piii-uu »",
    ],
    whereToLook: "Lisières de forêts, prairies, poteaux, arbres isolés.",
    localNote:
      "Très présente ici. On la voit souvent posée sur les piquets le long des routes, guettant le sol.",
    responsibleNote:
      "La buse est un allié des agriculteurs : elle consomme beaucoup de rongeurs.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // FORÊT
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "pic-epeiche",
    slug: "pic-epeiche",
    nameFr: "Pic épeiche",
    nameLatin: "Dendrocopos major",
    family: "Picidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/pic-epeiche.png",
    rarityLocal: "commun",
    habitats: ["foret", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée, surtout au printemps",
    emotionalTag: "Le tambourineur",
    shortDescription:
      "Noir, blanc et rouge, il grimpe aux troncs en spirale et tambourine sur le bois mort.",
    longDescription:
      "Le pic épeiche est le plus commun de nos pics. Son plumage contrasté — noir et blanc avec une tache rouge vif sous la queue et, chez le mâle, une nuque rouge — le rend facile à identifier. Il grimpe aux troncs par à-coups, s'aidant de sa queue rigide comme d'un appui. Au printemps, il tambourine sur les branches mortes pour marquer son territoire — un roulement sec et rapide qui résonne dans la forêt. C'est le batteur de la symphonie forestière.",
    identificationTips: [
      "Plumage noir et blanc très contrasté",
      "Tache rouge sous la queue",
      "Mâle : petite tache rouge sur la nuque",
      "Tambourinage rapide au printemps",
    ],
    whereToLook:
      "Forêts, bosquets, grands jardins avec de vieux arbres. Vient parfois aux mangeoires.",
    localNote:
      "Présent dans toutes les forêts alentour. Son tambourinage résonne dès février dans le silence de l'hiver.",
    responsibleNote:
      "Conservez les arbres morts ou à cavités : ce sont des garde-manger et des logements pour les pics.",
  },
  {
    id: "pic-noir",
    slug: "pic-noir",
    nameFr: "Pic noir",
    nameLatin: "Dryocopus martius",
    family: "Picidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/pic-noir.png",
    rarityLocal: "occasionnel",
    habitats: ["foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée en forêt",
    emotionalTag: "Le géant sombre des forêts",
    shortDescription:
      "Grand comme une corneille, entièrement noir avec une calotte rouge. Son cri puissant traverse la forêt.",
    longDescription:
      "Le pic noir est le plus grand de nos pics, une présence impressionnante dans les forêts de montagne. Entièrement noir de jais, il ne porte qu'une calotte rouge vif — complète chez le mâle, réduite à la nuque chez la femelle. Son vol onduleux entre les arbres, ses cris sonores et son tambourinage puissant sur les troncs font de lui une créature presque mythique. Il creuse de grandes loges ovales dans les hêtres et les sapins, qui serviront ensuite à d'autres espèces.",
    identificationTips: [
      "Très grand pic, taille de corneille",
      "Entièrement noir avec calotte rouge",
      "Vol onduleux caractéristique",
      "Cris puissants « kliiii-ah » et « krü-krü-krü »",
    ],
    whereToLook: "Forêts de montagne, hêtraies-sapinières, grands boisements.",
    localNote:
      "On peut l'entendre dans les forêts de montagne. Son rire saccadé, plus aigu que celui du Pic vert, le trahit.",
    responsibleNote:
      "Respectez le silence en forêt : un pic noir dérangé abandonne parfois son nid.",
  },
  {
    id: "geai-des-chenes",
    slug: "geai-des-chenes",
    nameFr: "Geai des chênes",
    nameLatin: "Garrulus glandarius",
    family: "Corvidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/geai-des-chenes.png",
    rarityLocal: "commun",
    habitats: ["foret", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée",
    emotionalTag: "Le gardien criard",
    shortDescription:
      "Rose, gris et bleu, avec une moustache noire. Son cri rauque alerte toute la forêt.",
    longDescription:
      "Le geai des chênes est l'un des plus beaux oiseaux de nos forêts, mais aussi l'un des plus bruyants. Son plumage mêle le rose-brun du corps, le bleu strié de noir sur les ailes, le blanc du croupion visible en vol. Son cri rauque et puissant sert de système d'alarme pour toute la forêt : rien n'échappe à sa vigilance. À l'automne, il enterre des glands par centaines, contribuant à la dispersion des chênes.",
    identificationTips: [
      "Corps rose-brun, ailes bleues striées de noir",
      "Moustache noire de chaque côté du bec",
      "Croupion blanc visible en vol",
      "Cri rauque « krââ » d'alarme",
    ],
    whereToLook:
      "Forêts de feuillus et mixtes, lisières, grands jardins boisés.",
    localNote:
      "Très présent dans les forêts du coin. En automne, on le voit voler avec des glands dans le bec.",
    responsibleNote:
      "Le geai est un planteur d'arbres naturel. Ses caches oubliées deviennent des chênes.",
  },
  {
    id: "sittelle-torchepot",
    slug: "sittelle-torchepot",
    nameFr: "Sittelle torchepot",
    nameLatin: "Sitta europaea",
    family: "Sittidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/sittelle-torchepot.png",
    rarityLocal: "commun",
    habitats: ["foret", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée",
    emotionalTag: "L'acrobate tête en bas",
    shortDescription:
      "Dos bleu-gris, ventre orangé, bandeau noir sur l'œil. Elle descend les troncs la tête la première.",
    longDescription:
      "La sittelle torchepot est un petit oiseau étonnant. Trapue, avec un dos bleu-gris ardoise, un ventre roux orangé et un bandeau noir traversant l'œil, elle a une silhouette unique. Mais c'est son comportement qui la distingue : elle est capable de descendre les troncs la tête en bas, ce qu'aucun pic ne peut faire. Elle se déplace avec agilité, martelant l'écorce de son bec puissant à la recherche d'insectes. Son sifflement puissant « tuit tuit tuit » résonne dans les bois.",
    identificationTips: [
      "Descend les troncs la tête en bas",
      "Dos bleu-gris, ventre orangé",
      "Bandeau noir sur l'œil",
      "Sifflement puissant et répété",
    ],
    whereToLook:
      "Forêts de feuillus, parcs, grands jardins avec de vieux arbres.",
    localNote:
      "Présente dans les bois alentour. Elle visite volontiers les mangeoires en hiver, descendant des hauteurs.",
    responsibleNote:
      "Elle niche dans les trous de pics, qu'elle rétrécit avec de la boue. Ne touchez pas ces entrées « maçonnées ».",
  },
  {
    id: "grive-musicienne",
    slug: "grive-musicienne",
    nameFr: "Grive musicienne",
    nameLatin: "Turdus philomelos",
    family: "Turdidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/grive-musicienne.png",
    rarityLocal: "commun",
    habitats: ["foret", "jardin"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Aube et crépuscule",
    emotionalTag: "La répétitrice du soir",
    shortDescription:
      "Brune tachetée, elle chante des phrases qu'elle répète trois fois. Sa voix porte loin dans le soir.",
    longDescription:
      "La grive musicienne est l'une des grandes chanteuses de nos campagnes. Son plumage brun-olive dessus, blanc crème tacheté de brun dessous, est discret. Mais son chant est mémorable : elle lance des phrases mélodieuses qu'elle répète deux ou trois fois avant de passer à une autre. « Ti-tu-tu, ti-tu-tu... di-di-di, di-di-di... » Ce chant s'élève des cimes dès février, et accompagne les soirs de printemps jusqu'à la nuit tombée.",
    identificationTips: [
      "Dessus brun-olive uniforme",
      "Dessous blanc crème avec taches brunes en forme de V",
      "Plus petite que le merle",
      "Chant : phrases répétées 2-3 fois",
    ],
    whereToLook: "Forêts, bosquets, haies, jardins. Chante souvent depuis un perchoir élevé.",
    localNote:
      "Son chant résonne dans les forêts et les jardins dès la fin de l'hiver. Une mélodie fluide et apaisante.",
    responsibleNote:
      "Elle se nourrit de baies et d'escargots. Laissez des coins de jardin un peu sauvages.",
  },
  {
    id: "roitelet-huppe",
    slug: "roitelet-huppe",
    nameFr: "Roitelet huppé",
    nameLatin: "Regulus regulus",
    family: "Regulidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/roitelet-huppe.png",
    rarityLocal: "commun",
    habitats: ["foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée en forêt de conifères",
    emotionalTag: "Le minuscule roi",
    shortDescription:
      "Le plus petit oiseau d'Europe, avec une huppe jaune ou orange bordée de noir. Il virevolte dans les sapins.",
    longDescription:
      "Le roitelet huppé pèse à peine 5 grammes — c'est le plus petit oiseau d'Europe. Son plumage olive, sa face rayée de noir et de blanc, et surtout sa huppe jaune (orange chez le mâle excité) le rendent charmant. Il vit dans les conifères, où il explore les branches avec une énergie inépuisable, cherchant de minuscules insectes et araignées. Son chant est un sifflement très aigu, à la limite de l'audible pour certaines oreilles.",
    identificationTips: [
      "Minuscule, le plus petit oiseau d'Europe",
      "Huppe jaune ou orange bordée de noir",
      "Plumage verdâtre, face rayée",
      "Chant très aigu « ssi-ssi-ssi »",
    ],
    whereToLook: "Forêts de conifères, sapinières, épicéas.",
    localNote:
      "Commun dans les forêts de sapins en altitude. Son chant est si aigu qu'on peut le manquer.",
    responsibleNote:
      "Très sensible au froid : les hivers rigoureux peuvent décimer les populations.",
  },
  {
    id: "mesange-noire",
    slug: "mesange-noire",
    nameFr: "Mésange noire",
    nameLatin: "Periparus ater",
    family: "Paridés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/mesange-noire.png",
    rarityLocal: "commun",
    habitats: ["foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée en forêt",
    emotionalTag: "La discrète des sapins",
    shortDescription:
      "Petite mésange grise et noire, avec une tache blanche sur la nuque. Elle habite les forêts de conifères.",
    longDescription:
      "La mésange noire est la mésange des forêts de montagne. Plus petite que la charbonnière, elle arbore un plumage sobre : dos gris-bleu, ventre beige, tête noire avec deux joues blanches et une tache blanche caractéristique sur la nuque. Elle est agile et vive, explorant les branches d'épicéas et de sapins à la recherche de petites graines et d'insectes. Son chant, un « situi situi » répété, est plus aigu que celui de la charbonnière.",
    identificationTips: [
      "Petite taille, plus petite que la charbonnière",
      "Tache blanche sur la nuque caractéristique",
      "Pas de jaune sur le ventre",
      "Fréquente surtout les conifères",
    ],
    whereToLook: "Forêts de conifères, sapinières, épicéas de montagne.",
    localNote:
      "Commune dans les forêts d'altitude. Rejoint parfois les rondes de mésanges en hiver.",
    responsibleNote:
      "Elle cache des graines pour l'hiver. Les forêts de conifères sont essentielles pour elle.",
  },
  {
    id: "mesange-huppee",
    slug: "mesange-huppee",
    nameFr: "Mésange huppée",
    nameLatin: "Lophophanes cristatus",
    family: "Paridés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/mesange-huppee.png",
    rarityLocal: "occasionnel",
    habitats: ["foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée en forêt de conifères",
    emotionalTag: "La punk des sapins",
    shortDescription:
      "Une huppe pointue noir et blanc la distingue aussitôt. Elle vit cachée dans les épicéas.",
    longDescription:
      "La mésange huppée est immédiatement reconnaissable à sa crête pointue, noir et blanc, dressée sur la tête comme un petit chapeau de lutin. Son plumage est sobre — brun-gris dessus, beige dessous, avec une face marquée de noir et de blanc. Elle vit presque exclusivement dans les forêts de conifères, où elle explore les branches avec la même agilité que ses cousines. Plus discrète que les autres mésanges, elle demande un peu de patience pour être observée.",
    identificationTips: [
      "Huppe pointue noir et blanc très distinctive",
      "Plumage brun-gris sobre",
      "Face marquée de noir",
      "Cri roulé « purrr »",
    ],
    whereToLook: "Forêts de conifères, sapinières.",
    localNote:
      "Présente dans les forêts de montagne, mais assez discrète. On la reconnaît à son dos gris cendré.",
    responsibleNote:
      "Elle niche dans des trous d'arbres. Les vieilles forêts sont importantes pour elle.",
  },
  {
    id: "cassenoix-mouchete",
    slug: "cassenoix-mouchete",
    nameFr: "Cassenoix moucheté",
    nameLatin: "Nucifraga caryocatactes",
    family: "Corvidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/cassenoix-mouchete.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "alpage"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Automne, quand il stocke des graines",
    emotionalTag: "Le jardinier des aroles",
    shortDescription:
      "Brun sombre moucheté de blanc, bec puissant. Il plante des pins cembro dans toute la montagne.",
    longDescription:
      "Le cassenoix moucheté est un corvidé de montagne au rôle écologique majeur. Son plumage chocolat parsemé de taches blanches, son bec robuste, sa silhouette trapue le rendent reconnaissable. À l'automne, il récolte des milliers de graines de pin cembro (arolle) et les cache dans le sol pour l'hiver. Mais il en oublie beaucoup — et ces graines germent. Il est ainsi responsable de la régénération des forêts d'aroles en altitude. Un vrai jardinier de la montagne.",
    identificationTips: [
      "Plumage brun chocolat moucheté de blanc",
      "Bec long et robuste",
      "Queue noire à bout blanc",
      "Cri rauque et nasillard",
    ],
    whereToLook:
      "Forêts de montagne, zone des pins cembro, lisières alpines.",
    localNote:
      "On peut l'observer dans les forêts d'altitude, surtout en automne quand il récolte des noisettes.",
    responsibleNote:
      "Chaque cassenoix plante des centaines d'arbres dans sa vie. Respectez les forêts d'aroles.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // FALAISES & MONTAGNE
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "gypaete-barbu",
    slug: "gypaete-barbu",
    nameFr: "Gypaète barbu",
    nameLatin: "Gypaetus barbatus",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/gypaete-barbu.png",
    rarityLocal: "rare",
    habitats: ["falaise", "haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, par beau temps au-dessus des crêtes",
    emotionalTag: "Le casseur d'os",
    shortDescription:
      "Il ne traverse pas seulement le ciel : il donne l'impression que la montagne se souvient d'un âge plus ancien.",
    longDescription:
      "Le gypaète barbu est le plus grand et le plus mythique des rapaces des Alpes. Avec près de trois mètres d'envergure, sa silhouette — ailes étroites, longue queue en losange — est unique. Son plumage adulte est spectaculaire : dessous orangé (dû aux bains de boue ferrugineuse), dessus gris-noir, face blanche avec une « barbe » de plumes noires. Il se nourrit presque exclusivement d'os, qu'il laisse tomber sur les rochers pour les briser. Réintroduit dans les Alpes depuis les années 1980, il est le symbole du retour de la vie sauvage.",
    identificationTips: [
      "Très grande envergure (2,7-2,9 m)",
      "Queue longue en forme de losange",
      "Adulte : dessous orange, tête claire avec barbe noire",
      "Jeune : entièrement brun sombre",
    ],
    whereToLook:
      "En vol au-dessus des crêtes et des falaises, dans les zones sauvages de haute montagne.",
    localNote:
      "Quelques gypaètes survolent parfois la région. Une apparition rare, presque mythique.",
    responsibleNote:
      "Le gypaète est très sensible au dérangement. Ne vous approchez jamais des aires de nidification.",
  },
  {
    id: "aigle-royal",
    slug: "aigle-royal",
    nameFr: "Aigle royal",
    nameLatin: "Aquila chrysaetos",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/aigle-royal.png",
    rarityLocal: "rare",
    habitats: ["falaise", "haute_montagne", "alpage"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Milieu de journée, quand les thermiques se forment",
    emotionalTag: "Le seigneur des cimes",
    shortDescription:
      "Immense, sombre, majestueux. Il règne sur les alpages et les crêtes avec une puissance tranquille.",
    longDescription:
      "L'aigle royal est le grand prédateur des montagnes. Avec plus de deux mètres d'envergure, son plumage brun sombre et sa nuque dorée, il incarne la puissance et la liberté. Il chasse les marmottes, les lièvres, parfois les jeunes chamois, planant pendant des heures au-dessus des alpages. Le voir, c'est assister à quelque chose d'ancien et de solennel. Il niche sur les falaises inaccessibles et défend un territoire immense.",
    identificationTips: [
      "Très grande taille, ailes longues et larges",
      "Plumage brun sombre, nuque dorée",
      "Jeune : taches blanches sous les ailes et à la base de la queue",
      "Vol plané majestueux, ailes relevées",
    ],
    whereToLook: "Au-dessus des alpages, des crêtes, des grandes parois rocheuses.",
    localNote:
      "Des couples nichent dans les massifs alentour. Avec de la patience, on peut les voir planer au-dessus des crêtes.",
    responsibleNote:
      "L'aigle est protégé et très sensible au dérangement, surtout en période de nidification (janvier-juillet).",
  },
  {
    id: "faucon-pelerin",
    slug: "faucon-pelerin",
    nameFr: "Faucon pèlerin",
    nameLatin: "Falco peregrinus",
    family: "Falconidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/faucon-pelerin.png",
    rarityLocal: "rare",
    habitats: ["falaise"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin et soir, quand il chasse",
    emotionalTag: "Le chasseur le plus rapide",
    shortDescription:
      "L'oiseau le plus rapide du monde. Quand il pique sur sa proie, il dépasse 300 km/h.",
    longDescription:
      "Le faucon pèlerin est un prodige de vitesse et de précision. De taille moyenne, avec un dos gris-bleu ardoise, un dessous clair barré de noir et un casque sombre sur la tête, il a une allure à la fois élégante et redoutable. Il chasse les oiseaux en vol, les frappant en piqué à des vitesses qui peuvent dépasser 300 km/h. Il niche sur les falaises, les corniches, parfois les grands bâtiments. L'observer en chasse est un spectacle fulgurant.",
    identificationTips: [
      "Silhouette compacte, ailes pointues",
      "Dos gris-bleu, dessous clair barré",
      "Casque sombre avec moustache noire",
      "Vol rapide, puissant, piqués vertigineux",
    ],
    whereToLook: "Falaises, gorges, parfois en vol au-dessus de la vallée.",
    localNote:
      "Des couples nichent sur certaines falaises du coin. Leur présence est un signe de bonne santé écologique.",
    responsibleNote:
      "Ne dérangez jamais un faucon pèlerin près de son nid. Les sites de nidification sont souvent protégés.",
  },
  {
    id: "tichodrome-echelette",
    slug: "tichodrome-echelette",
    nameFr: "Tichodrome échelette",
    nameLatin: "Tichodroma muraria",
    family: "Tichodromadidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/tichodrome-echelette.png",
    rarityLocal: "rare",
    habitats: ["falaise"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, sur les parois rocheuses",
    emotionalTag: "Le papillon des falaises",
    shortDescription:
      "Sur la pierre grise, il semble presque disparaître. Puis ses ailes s'ouvrent, rouges comme une braise cachée dans la montagne.",
    longDescription:
      "Le tichodrome échelette est l'un des oiseaux les plus extraordinaires des Alpes. Petit, gris comme la roche, il est presque invisible sur les parois. Mais quand il déploie ses ailes pour se déplacer, un éclat rouge carmin apparaît — comme une fleur qui s'ouvre brièvement sur la pierre nue. Il explore les falaises en sautillant, enfonçant son bec fin dans les fissures à la recherche d'araignées et d'insectes. L'observer demande patience et chance, mais la récompense est inoubliable.",
    identificationTips: [
      "Petit oiseau gris sur les parois rocheuses",
      "Ailes rouges vif visibles en vol ou ouvertes",
      "Bec fin et courbé",
      "Se déplace en sautillant sur la roche verticale",
    ],
    whereToLook: "Grandes falaises, gorges, parois rocheuses. Descend plus bas en hiver.",
    localNote:
      "Quelques-uns fréquentent les falaises du coin. En hiver, ils descendent parfois sur les murs des bâtiments.",
    responsibleNote:
      "Le tichodrome est discret et farouche. Observez-le de loin, avec des jumelles.",
  },
  {
    id: "chocard-bec-jaune",
    slug: "chocard-bec-jaune",
    nameFr: "Chocard à bec jaune",
    nameLatin: "Pyrrhocorax graculus",
    family: "Corvidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/chocard-a-bec-jaune.png",
    rarityLocal: "commun",
    habitats: ["falaise", "alpage", "haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute la journée en altitude",
    emotionalTag: "L'acrobate des sommets",
    shortDescription:
      "Tout noir avec un bec jaune vif et des pattes rouges. Il joue avec le vent au-dessus des crêtes.",
    longDescription:
      "Le chocard à bec jaune est l'oiseau des hauteurs. Entièrement noir de plumage, il se distingue par son bec jaune citron et ses pattes rouge corail. Il vit en bandes bruyantes sur les alpages et autour des refuges, où il a appris à quémander les restes des randonneurs. Mais c'est en vol qu'il est le plus impressionnant : il joue avec les courants, plonge, remonte, tournoie avec une aisance totale. Ses sifflements aigus font partie de l'ambiance des sommets.",
    identificationTips: [
      "Entièrement noir",
      "Bec jaune vif, pattes rouges",
      "Vol acrobatique, souvent en bandes",
      "Sifflements aigus « srriii »",
    ],
    whereToLook:
      "Alpages, refuges de montagne, sommets, crêtes. Descend en vallée l'hiver.",
    localNote:
      "Très présent en altitude. En hiver, on les voit parfois en bandes joueuses au-dessus du village.",
    responsibleNote:
      "Ne nourrissez pas les chocards aux refuges : ils deviennent dépendants et peuvent s'affaiblir.",
  },
  {
    id: "crave-bec-rouge",
    slug: "crave-bec-rouge",
    nameFr: "Crave à bec rouge",
    nameLatin: "Pyrrhocorax pyrrhocorax",
    family: "Corvidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/crave-a-bec-rouge.png",
    rarityLocal: "rare",
    habitats: ["falaise", "alpage"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée sur les alpages",
    emotionalTag: "Le cousin rare du chocard",
    shortDescription:
      "Semblable au chocard mais avec un bec rouge courbé. Plus rare, plus sauvage.",
    longDescription:
      "Le crave à bec rouge ressemble au chocard, mais s'en distingue par son bec rouge vif et légèrement courbé. Il est aussi plus rare et moins habitué à l'homme. Il fréquente les alpages, les falaises, les prairies d'altitude, où il sonde le sol à la recherche d'insectes. Son vol est tout aussi acrobatique que celui du chocard, et ses cris, plus métalliques, résonnent différemment dans l'air des hauteurs.",
    identificationTips: [
      "Entièrement noir",
      "Bec rouge courbé (pas jaune)",
      "Pattes rouges",
      "Moins grégaire que le chocard",
    ],
    whereToLook: "Alpages, falaises herbeuses, prairies d'altitude.",
    localNote:
      "Plus rare que le chocard. Cherchez-le sur les alpages éloignés, loin des refuges et des humains.",
    responsibleNote:
      "Le crave est moins habitué à l'homme que le chocard. Gardez vos distances.",
  },
  {
    id: "tetras-lyre",
    slug: "tetras-lyre",
    nameFr: "Tétras-lyre",
    nameLatin: "Lyrurus tetrix",
    family: "Phasianidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/tetras-lyre.png",
    rarityLocal: "rare",
    habitats: ["alpage", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Aube au printemps, pendant les parades",
    emotionalTag: "Le danseur de l'aube",
    shortDescription:
      "Le mâle noir aux reflets bleus, avec sa queue en lyre, parade à l'aube sur les alpages enneigés.",
    longDescription:
      "Le tétras-lyre est l'emblème des alpages. Le mâle, noir aux reflets bleutés, porte une queue caractéristique en forme de lyre et des sourcils rouges éclatants. Au printemps, les mâles se rassemblent à l'aube sur des arènes de parade, où ils roucoulent, se pavanent et s'affrontent pour séduire les femelles. Ces « leks » sont des spectacles rares et précieux. La femelle, brune tachetée, se fond dans la végétation. L'espèce est sensible au dérangement et en déclin.",
    identificationTips: [
      "Mâle : noir aux reflets bleus, queue en lyre, sourcils rouges",
      "Femelle : brune, tachetée, bien camouflée",
      "Roucoulements et chuintements à l'aube au printemps",
      "Vit dans les landes, rhododendrons, lisières forestières d'altitude",
    ],
    whereToLook:
      "Lisières des forêts de montagne, zones de rhododendrons, alpages.",
    localNote:
      "Présent dans les hauteurs, mais discret et menacé. Les zones de parade sont sensibles au dérangement.",
    responsibleNote:
      "Le tétras-lyre est très vulnérable au dérangement, surtout en hiver et pendant la reproduction. Restez sur les sentiers.",
  },
  {
    id: "lagopede-alpin",
    slug: "lagopede-alpin",
    nameFr: "Lagopède alpin",
    nameLatin: "Lagopus muta",
    family: "Phasianidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/lagopede-alpin.png",
    rarityLocal: "rare",
    habitats: ["haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Tôt le matin en altitude",
    emotionalTag: "Le fantôme des neiges",
    shortDescription:
      "Blanc en hiver, brun tacheté en été. Il se confond avec la montagne quelle que soit la saison.",
    longDescription:
      "Le lagopède alpin est le maître du camouflage. En hiver, il est entièrement blanc, invisible sur la neige. En été, son plumage se mue en brun-gris tacheté, le fondant dans les rochers et les lichens. Il vit au-dessus de la limite des arbres, dans les pierriers et les pelouses alpines, où il se nourrit de bourgeons et de pousses. Discret, immobile quand il se sent menacé, il ne s'envole qu'au dernier moment. C'est un survivant des glaciations, adapté au froid extrême.",
    identificationTips: [
      "Hiver : entièrement blanc sauf queue noire et trait oculaire",
      "Été : brun-gris tacheté, excellent camouflage",
      "Pattes emplumées jusqu'aux doigts",
      "Vol court et bruyant, avec caquètement rauque",
    ],
    whereToLook:
      "Haute montagne, au-dessus de 2000 m, pierriers, pelouses alpines.",
    localNote:
      "Présent sur les sommets les plus hauts. Très difficile à observer, mais sa présence est là.",
    responsibleNote:
      "Le lagopède est extrêmement sensible au dérangement. Évitez les zones de reproduction et d'hivernage.",
  },
  {
    id: "niverolle-alpine",
    slug: "niverolle-alpine",
    nameFr: "Niverolle alpine",
    nameLatin: "Montifringilla nivalis",
    family: "Passéridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/niverolle-alpine.png",
    rarityLocal: "occasionnel",
    habitats: ["haute_montagne", "falaise"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée en haute altitude",
    emotionalTag: "Le moineau des neiges",
    shortDescription:
      "Un moineau des sommets, gris et blanc, qui vit là où plus rien ne pousse.",
    longDescription:
      "La niverolle alpine est le moineau des hauteurs extrêmes. Elle vit toute l'année au-dessus de 2000 mètres, souvent près des névés et des glaciers. Son plumage gris-brun, relevé de blanc sur les ailes et la queue, la rend discrète parmi les rochers. Elle se nourrit de graines et d'insectes, fréquentant volontiers les refuges de montagne. Son gazouillis simple accompagne les randonneurs qui atteignent les sommets.",
    identificationTips: [
      "Ressemble à un gros moineau",
      "Plumage gris-brun avec beaucoup de blanc (ailes, queue)",
      "Tête gris cendré",
      "Vol onduleux avec blanc bien visible",
    ],
    whereToLook:
      "Haute montagne, refuges, zones rocheuses au-dessus de 2000 m.",
    localNote:
      "On la voit aux refuges et sur les sommets accessibles. Elle s'habitue aux randonneurs posés.",
    responsibleNote:
      "Ne jetez pas de nourriture aux niverolles. Elles doivent rester sauvages.",
  },
  {
    id: "accenteur-alpin",
    slug: "accenteur-alpin",
    nameFr: "Accenteur alpin",
    nameLatin: "Prunella collaris",
    family: "Prunellidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/accenteur-alpin.png",
    rarityLocal: "occasionnel",
    habitats: ["haute_montagne", "alpage"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée en haute altitude",
    emotionalTag: "Le discret des éboulis",
    shortDescription:
      "Brun rayé avec un menton tacheté de blanc. Il sautille entre les pierres des sommets.",
    longDescription:
      "L'accenteur alpin est un petit oiseau discret des hauteurs. Son plumage brun rayé, son menton moucheté de noir et de blanc, ses flancs roux le distinguent de son cousin l'accenteur mouchet des jardins. Il vit sur les pelouses alpines et les éboulis, sautillant au sol à la recherche d'insectes et de graines. Assez confiant près des refuges, il se laisse approcher si l'on reste calme.",
    identificationTips: [
      "Plumage brun rayé, flancs roux",
      "Menton blanc moucheté de noir",
      "Taille d'un moineau",
      "Sautille au sol dans les zones rocheuses",
    ],
    whereToLook: "Pelouses alpines, éboulis, abords des refuges.",
    localNote:
      "Assez commun en altitude. S'approche parfois des randonneurs posés, curieux et vif.",
    responsibleNote:
      "Observez-le calmement sans le poursuivre. Il viendra peut-être de lui-même.",
  },
  {
    id: "merle-a-plastron",
    slug: "merle-a-plastron",
    nameFr: "Merle à plastron",
    nameLatin: "Turdus torquatus",
    family: "Turdidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/merle-a-plastron.png",
    rarityLocal: "occasionnel",
    habitats: ["alpage", "foret"],
    seasons: ["printemps", "ete"],
    bestMoment: "Printemps et été en altitude",
    emotionalTag: "Le merle de montagne",
    shortDescription:
      "Un merle sombre avec un croissant blanc sur la poitrine. Il chante dans les forêts d'altitude.",
    longDescription:
      "Le merle à plastron ressemble à son cousin le merle noir, mais porte un croissant blanc caractéristique sur la poitrine — son plastron. Il vit plus haut en altitude, dans les forêts claires de montagne, les landes à myrtilles, les alpages. Son chant, flûté comme celui du merle noir mais plus simple, accompagne les matinées de juin dans les vallons d'altitude. Il niche au sol ou dans les buissons bas, souvent près des éboulis.",
    identificationTips: [
      "Ressemble au merle noir",
      "Croissant blanc sur la poitrine (plastron)",
      "Plumage légèrement écaillé chez la femelle",
      "Chant flûté, plus simple que le merle noir",
    ],
    whereToLook:
      "Forêts d'altitude, landes à rhododendrons et myrtilles, alpages.",
    localNote:
      "Présent dans les forêts au-dessus de 1500 m, surtout au printemps. Son chant à deux notes résonne dans les sapins.",
    responsibleNote:
      "Niche au sol : restez sur les sentiers pour éviter de déranger.",
  },
  {
    id: "monticole-de-roche",
    slug: "monticole-de-roche",
    nameFr: "Monticole de roche",
    nameLatin: "Monticola saxatilis",
    family: "Muscicapidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/monticole-de-roche.png",
    rarityLocal: "rare",
    habitats: ["falaise", "alpage"],
    seasons: ["printemps", "ete"],
    bestMoment: "Printemps et été sur les pentes rocheuses",
    emotionalTag: "Le merle bleu des rochers",
    shortDescription:
      "Le mâle est bleu et orange, spectaculaire. Il se perche sur les rochers des alpages.",
    longDescription:
      "Le monticole de roche est l'un des oiseaux les plus colorés des Alpes. Le mâle arbore une tête et un dos bleu ardoise, une poitrine et un ventre orange vif — une combinaison unique. La femelle, brune et écaillée, est beaucoup plus discrète. Il fréquente les pentes rocheuses ensoleillées, les alpages parsemés de blocs, où il chasse les insectes depuis un perchoir en vue. Son chant mélodieux s'élève des rochers au petit matin.",
    identificationTips: [
      "Mâle : tête et dos bleus, dessous orange vif",
      "Femelle : brune tachetée, discrète",
      "Se perche sur les rochers",
      "Chant mélodieux et varié",
    ],
    whereToLook:
      "Pentes rocheuses, alpages avec blocs, zones ensoleillées entre 1500 et 2500 m.",
    localNote:
      "Rare mais présent sur certains alpages. Un oiseau chanceux à observer, discret dans les herbes.",
    responsibleNote:
      "Le monticole est discret et sensible. Restez à distance et utilisez des jumelles.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // LES VOIX DU JARDIN (Lot 5)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "mesange-a-longue-queue",
    slug: "mesange-a-longue-queue",
    nameFr: "Mésange à longue queue",
    nameLatin: "Aegithalos caudatus",
    family: "Aegithalidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/mesange-a-longue-queue.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin calme, surtout quand les haies commencent à bouger.",
    emotionalTag: "La petite boule de coton des branches",
    shortDescription:
      "Minuscule, ronde, presque trop fragile, elle traverse les haies en petites bandes discrètes.",
    longDescription:
      "La Mésange à longue queue ressemble à une petite pensée blanche et rose accrochée aux branches. Elle passe rarement seule : on la devine d'abord par un mouvement collectif, une petite agitation douce dans les haies, puis elle apparaît avec sa longue queue fine et son corps minuscule.",
    identificationTips: [
      "Très longue queue par rapport au corps.",
      "Petit corps rond, blanc, noir et rosé.",
      "Se déplace souvent en petits groupes.",
      "Vol ondulant et léger entre les branches.",
    ],
    whereToLook:
      "Dans les haies, jardins arborés, lisières et petits bois autour du village.",
    localNote:
      "On la croise en petites bandes dans les haies. En hiver, elle rejoint parfois les rondes de mésanges près des jardins.",
    responsibleNote:
      "Observe-la à distance, surtout au printemps quand les groupes familiaux circulent près des nids.",
  },
  {
    id: "troglodyte-mignon",
    slug: "troglodyte-mignon",
    nameFr: "Troglodyte mignon",
    nameLatin: "Troglodytes troglodytes",
    family: "Troglodytidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/troglodyte-mignon.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret", "riviere"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin ou fin de journée, près des buissons et des murs végétalisés.",
    emotionalTag: "La voix minuscule des broussailles",
    shortDescription:
      "Petit, brun, nerveux, presque invisible, mais capable d'un chant étonnamment puissant.",
    longDescription:
      "Le Troglodyte mignon est si petit qu'on pourrait le manquer même en le regardant. Il surgit des racines, des tas de bois, des pierres et des buissons comme un secret vivant. Sa queue redressée et son chant immense donnent l'impression qu'un tout petit être essaie de remplir toute la vallée.",
    identificationTips: [
      "Très petit oiseau brun.",
      "Queue courte souvent dressée vers le haut.",
      "Plumage finement barré.",
      "Chant fort et rapide pour sa taille.",
    ],
    whereToLook:
      "Dans les buissons denses, les murets, les tas de bois, les jardins un peu sauvages et les bords de torrents.",
    localNote:
      "Son chant puissant résonne le long des murs de pierre et des tas de bois, surtout au printemps.",
    responsibleNote:
      "Ne fouille pas les buissons pour le voir : laisse-le venir au bord du visible.",
  },
  {
    id: "accenteur-mouchet",
    slug: "accenteur-mouchet",
    nameFr: "Accenteur mouchet",
    nameLatin: "Prunella modularis",
    family: "Prunellidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/accenteur-mouchet.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin doux, dans les haies basses ou au pied des arbustes.",
    emotionalTag: "Le discret qu'on confond avec le silence",
    shortDescription:
      "Un petit oiseau brun-gris, modeste, souvent caché près du sol.",
    longDescription:
      "L'Accenteur mouchet n'attire pas l'œil au premier passage. Il est brun, gris, discret, presque effacé. Pourtant, quand on commence à le reconnaître, il devient l'un de ces petits compagnons du quotidien, présent dans les haies comme une note basse dans le paysage.",
    identificationTips: [
      "Tête et poitrine grisâtres.",
      "Dos brun fortement strié.",
      "Bec fin, plus délicat que celui d'un moineau.",
      "Reste souvent près du sol ou dans les haies.",
    ],
    whereToLook:
      "Au pied des haies, dans les jardins calmes, les lisières et les zones arbustives.",
    localNote:
      "Il sautille discrètement au pied des haies. On le remarque souvent en le confondant d'abord avec un moineau.",
    responsibleNote:
      "Évite de trop t'approcher des haies épaisses au printemps.",
  },
  {
    id: "fauvette-a-tete-noire",
    slug: "fauvette-a-tete-noire",
    nameFr: "Fauvette à tête noire",
    nameLatin: "Sylvia atricapilla",
    family: "Sylviidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/fauvette-a-tete-noire.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Matin de printemps, quand les buissons chantent avant d'être visibles.",
    emotionalTag: "La voix claire derrière les feuilles",
    shortDescription:
      "Une fauvette discrète, souvent entendue avant d'être vue, au chant fluide et lumineux.",
    longDescription:
      "La Fauvette à tête noire se cache volontiers dans le feuillage. On la remarque d'abord par son chant, souple, rond, presque liquide. Le mâle porte une calotte noire nette, comme une petite signature posée sur un plumage discret.",
    identificationTips: [
      "Mâle avec une calotte noire.",
      "Femelle avec une calotte brun-roux.",
      "Corps gris-brun sobre.",
      "Chant mélodieux, riche et fluide.",
    ],
    whereToLook:
      "Dans les haies, jardins arborés, bosquets et lisières autour des villages.",
    localNote:
      "Son chant flûté est l'un des premiers à revenir dès mars. On l'entend souvent avant de la voir.",
    responsibleNote:
      "Reste sur les chemins et évite de déranger les zones de nidification dans les fourrés.",
  },
  {
    id: "pouillot-veloce",
    slug: "pouillot-veloce",
    nameFr: "Pouillot véloce",
    nameLatin: "Phylloscopus collybita",
    family: "Phylloscopidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/pouillot-veloce.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret", "riviere"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Début du printemps, quand son chant répété annonce les beaux jours.",
    emotionalTag: "Le petit métronome du printemps",
    shortDescription:
      "Petit oiseau olive-brun, discret, mais célèbre par son chant régulier et répétitif.",
    longDescription:
      "Le Pouillot véloce est un petit trait vivant dans les branches. Visuellement, il est discret, presque anonyme. Mais son chant répété, simple et obstiné, finit par devenir l'un des premiers signes que quelque chose revient dans l'air.",
    identificationTips: [
      "Petit oiseau olive-brun.",
      "Sourcil pâle discret.",
      "Bec fin.",
      "Chant répétitif typique, souvent transcrit comme 'tchip-tchap'.",
    ],
    whereToLook:
      "Dans les arbres bas, lisières, jardins, bords de ruisseaux et petits bois.",
    localNote:
      "Son « tchip-tchap » répétitif marque le retour du printemps. On l'entend partout dès fin février.",
    responsibleNote:
      "Ne poursuis pas l'oiseau dans les branches : son chant suffit souvent à la rencontre.",
  },
  {
    id: "rougequeue-a-front-blanc",
    slug: "rougequeue-a-front-blanc",
    nameFr: "Rougequeue à front blanc",
    nameLatin: "Phoenicurus phoenicurus",
    family: "Muscicapidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/rougequeue-a-front-blanc.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete"],
    bestMoment: "Matin de printemps ou d'été, dans les vieux arbres et jardins ouverts.",
    emotionalTag: "La petite braise revenue de loin",
    shortDescription:
      "Un oiseau élégant, coloré, migrateur, avec une queue rousse qui tremble dans la lumière.",
    longDescription:
      "Le Rougequeue à front blanc a quelque chose de plus fragile et plus précieux que son cousin des toits. Son orange chaud, son front clair et sa queue rousse donnent l'impression d'un petit feu discret revenu avec la belle saison.",
    identificationTips: [
      "Mâle avec front blanc marqué.",
      "Face sombre et poitrine orange.",
      "Queue rousse souvent agitée.",
      "Plus coloré que le Rougequeue noir.",
    ],
    whereToLook:
      "Dans les vieux jardins, vergers, lisières claires et zones avec arbres creux.",
    localNote:
      "Plus rare que son cousin, il niche dans les vieux arbres creux des vergers. Son retour en avril est un petit événement.",
    responsibleNote:
      "Préserve les vieux arbres et cavités : ils sont précieux pour les oiseaux nicheurs.",
  },
  {
    id: "bouvreuil-pivoine",
    slug: "bouvreuil-pivoine",
    nameFr: "Bouvreuil pivoine",
    nameLatin: "Pyrrhula pyrrhula",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/bouvreuil-pivoine.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Hiver ou matin calme, dans les haies et arbres fruitiers.",
    emotionalTag: "Le rouge doux de l'hiver",
    shortDescription:
      "Un oiseau rond et silencieux, au rouge tendre, souvent aperçu comme une surprise.",
    longDescription:
      "Le Bouvreuil pivoine semble porter une couleur trop douce pour les jours froids. Il apparaît parfois dans les haies, posé calmement, presque immobile. Son rouge n'est pas criard : c'est un rouge de souvenir, de fruit oublié, de fin d'hiver.",
    identificationTips: [
      "Mâle avec poitrine rose-rouge.",
      "Calotte noire.",
      "Corps rond et compact.",
      "Bec court et épais.",
    ],
    whereToLook:
      "Dans les haies, vergers, lisières, jardins arborés et jeunes boisements.",
    localNote:
      "Il descend des forêts d'altitude vers les jardins en hiver. On peut le surprendre dans les haies de sureaux et de sorbiers.",
    responsibleNote:
      "Ne coupe pas trop vite les haies : elles sont des refuges et des garde-manger.",
  },
  {
    id: "grosbec-casse-noyaux",
    slug: "grosbec-casse-noyaux",
    nameFr: "Grosbec casse-noyaux",
    nameLatin: "Coccothraustes coccothraustes",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/grosbec-casse-noyaux.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin ou fin d'après-midi, haut dans les arbres fruitiers ou feuillus.",
    emotionalTag: "Le petit casseur de silence",
    shortDescription:
      "Un gros fringille robuste, discret malgré sa carrure et son énorme bec.",
    longDescription:
      "Le Grosbec casse-noyaux a une silhouette presque disproportionnée : une tête forte, un bec puissant, un regard déterminé. Il reste pourtant souvent discret, haut dans les arbres. Le voir donne l'impression d'avoir surpris un personnage rare du jardin.",
    identificationTips: [
      "Très gros bec conique.",
      "Tête massive.",
      "Couleurs brun, beige, noir et blanc.",
      "Vol puissant, silhouette trapue.",
    ],
    whereToLook:
      "Dans les feuillus, vergers, grands jardins, lisières et zones arborées.",
    localNote:
      "Discret et haut perché, on le repère parfois dans les grands feuillus. Les merisiers en fruits l'attirent en été.",
    responsibleNote:
      "Observe-le sans chercher à l'attirer excessivement à la mangeoire.",
  },
  {
    id: "tarin-des-aulnes",
    slug: "tarin-des-aulnes",
    nameFr: "Tarin des aulnes",
    nameLatin: "Spinus spinus",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/tarin-des-aulnes.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "foret", "riviere"],
    seasons: ["automne", "hiver", "printemps"],
    bestMoment: "Hiver et début de printemps, près des aulnes, bouleaux et conifères.",
    emotionalTag: "Le petit éclat jaune dans les branches froides",
    shortDescription:
      "Un petit fringille jaune-vert, souvent en groupe, actif dans les arbres en hiver.",
    longDescription:
      "Le Tarin des aulnes apporte une vibration jaune dans les jours ternes. Il se déplace souvent en bande, suspendu aux petites graines, agité mais léger. On le remarque comme une étincelle dans les branches encore froides.",
    identificationTips: [
      "Petit oiseau jaune-vert.",
      "Mâle avec calotte noire.",
      "Ailes sombres avec jaune visible.",
      "Souvent en groupes actifs.",
    ],
    whereToLook:
      "Près des aulnes, bouleaux, conifères, bords d'eau et jardins arborés en saison froide.",
    localNote:
      "En hiver, des bandes visitent les aulnes le long de la rivière. On les entend avant de les voir, suspendus aux chatons.",
    responsibleNote:
      "Laisse les graines naturelles disponibles quand c'est possible.",
  },
  {
    id: "linotte-melodieuse",
    slug: "linotte-melodieuse",
    nameFr: "Linotte mélodieuse",
    nameLatin: "Linaria cannabina",
    family: "Fringillidés",
    chapter: "autour_de_la_maison",
    imagePlaceholder: "/images/birds/linotte-melodieuse.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "alpage"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Printemps et été, dans les milieux ouverts, friches et haies basses.",
    emotionalTag: "La chanson légère des herbes hautes",
    shortDescription:
      "Un petit fringille des milieux ouverts, au chant doux et au rouge discret chez le mâle.",
    longDescription:
      "La Linotte mélodieuse appartient aux endroits un peu ouverts, un peu secs, où les herbes montent et les haies restent basses. Son chant donne une impression de légèreté, comme une petite musique accrochée au vent.",
    identificationTips: [
      "Petit fringille brun.",
      "Mâle avec rouge au front et à la poitrine.",
      "Dos brun chaud.",
      "Aime les milieux ouverts avec buissons.",
    ],
    whereToLook:
      "Dans les friches, haies basses, pâtures, lisières sèches et zones ouvertes.",
    localNote:
      "Elle fréquente les friches et les prairies à herbes hautes. Son chant léger accompagne les promenades de printemps.",
    responsibleNote:
      "Évite de traverser les herbes hautes en période de nidification.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // LES BOIS PROFONDS (Lot 6)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "pic-vert",
    slug: "pic-vert",
    nameFr: "Pic vert",
    nameLatin: "Picus viridis",
    family: "Picidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/pic-vert.png",
    rarityLocal: "commun",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin, dans les pelouses, vergers et lisières.",
    emotionalTag: "Le rire vert des vieux arbres",
    shortDescription:
      "Un grand pic vert et rouge, souvent trahi par son cri rieur.",
    longDescription:
      "Le Pic vert a quelque chose de joyeux et ancien. On l'entend rire avant de le voir, puis on l'aperçoit au sol, dans l'herbe, à chercher des fourmis. Avec son plumage vert et sa calotte rouge, il ressemble à une couleur qui aurait pris vie.",
    identificationTips: [
      "Grand pic vert.",
      "Calotte rouge.",
      "Croupion jaune-vert visible en vol.",
      "Cri rieur très reconnaissable.",
    ],
    whereToLook:
      "Dans les pelouses, vergers, jardins, prairies avec arbres et lisières forestières.",
    localNote:
      "Autour des villages, c'est souvent son rire qui révèle sa présence.",
    responsibleNote:
      "Conserve les vieux arbres quand c'est possible : ils servent à de nombreuses espèces.",
  },
  {
    id: "roitelet-a-triple-bandeau",
    slug: "roitelet-a-triple-bandeau",
    nameFr: "Roitelet à triple bandeau",
    nameLatin: "Regulus ignicapilla",
    family: "Regulidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/roitelet-a-triple-bandeau.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin, dans les conifères et feuillus denses.",
    emotionalTag: "La couronne minuscule dans le vert",
    shortDescription:
      "Un des plus petits oiseaux, vif et délicat, avec une tête finement marquée.",
    longDescription:
      "Le Roitelet à triple bandeau est presque trop petit pour le monde. Il bouge sans cesse dans les branches, avec une énergie minuscule. Sa tête rayée, son sourcil clair et sa petite flamme sur le crâne lui donnent l'air d'un roi secret des feuillages.",
    identificationTips: [
      "Très petite taille.",
      "Sourcil blanc marqué.",
      "Trait noir à travers l'œil.",
      "Crest jaune-orangé bordé de noir.",
    ],
    whereToLook:
      "Dans les conifères, bois mixtes, jardins arborés et zones de feuillage dense.",
    localNote:
      "Il habite les forêts mixtes d'altitude. Son chant très aigu se mêle à celui de son cousin huppé dans les épicéas.",
    responsibleNote:
      "Ne secoue jamais les branches pour faire sortir un oiseau caché.",
  },
  {
    id: "grive-draine",
    slug: "grive-draine",
    nameFr: "Grive draine",
    nameLatin: "Turdus viscivorus",
    family: "Turdidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/grive-draine.png",
    rarityLocal: "commun",
    habitats: ["foret", "alpage", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin clair, dans les prairies arborées et lisières.",
    emotionalTag: "La grande grive des arbres ouverts",
    shortDescription:
      "Une grande grive pâle et tachetée, souvent visible dans les prairies et lisières.",
    longDescription:
      "La Grive draine a une présence plus grande, plus droite, plus sauvage que la Grive musicienne. Elle se tient dans les espaces ouverts près des arbres, comme si elle surveillait le passage entre prairie et forêt.",
    identificationTips: [
      "Grande grive.",
      "Poitrine claire fortement tachetée.",
      "Silhouette droite.",
      "Souvent dans les zones ouvertes avec arbres.",
    ],
    whereToLook:
      "Dans les prairies arborées, lisières, vergers, clairières et zones montagnardes ouvertes.",
    localNote:
      "On la voit souvent au sol dans les prairies arborées d'altitude. Plus grande et plus farouche que la grive musicienne.",
    responsibleNote:
      "Observe-la depuis les chemins pour éviter de déranger les oiseaux au sol.",
  },
  {
    id: "grive-litorne",
    slug: "grive-litorne",
    nameFr: "Grive litorne",
    nameLatin: "Turdus pilaris",
    family: "Turdidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/grive-litorne.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "foret", "alpage"],
    seasons: ["automne", "hiver", "printemps"],
    bestMoment: "Hiver, dans les prairies, vergers et arbres à baies.",
    emotionalTag: "La voyageuse des jours froids",
    shortDescription:
      "Une grive colorée et sociale, souvent observée en groupes durant la saison froide.",
    longDescription:
      "La Grive litorne arrive avec une impression de passage. Elle porte du gris, du brun, du roux, comme une carte des saisons froides. En groupe dans les champs ou les arbres à baies, elle transforme l'hiver en mouvement.",
    identificationTips: [
      "Tête et croupion gris.",
      "Dos brun-roux.",
      "Poitrine tachetée.",
      "Souvent en groupes en hiver.",
    ],
    whereToLook:
      "Dans les prairies, vergers, haies à baies et grands arbres en période froide.",
    localNote:
      "Des groupes venus du Nord s'installent certains hivers dans les vergers et les sorbiers. Une visiteuse des jours froids.",
    responsibleNote:
      "Évite de déranger les groupes en alimentation, surtout lors des périodes froides.",
  },
  {
    id: "bec-croise-des-sapins",
    slug: "bec-croise-des-sapins",
    nameFr: "Bec-croisé des sapins",
    nameLatin: "Loxia curvirostra",
    family: "Fringillidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/bec-croise-des-sapins.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Toute l'année, surtout dans les conifères en altitude ou forêt froide.",
    emotionalTag: "Le bec étrange des sapins",
    shortDescription:
      "Un oiseau de conifères au bec croisé, spécialisé dans les graines de cônes.",
    longDescription:
      "Le Bec-croisé des sapins semble conçu par la forêt elle-même. Son bec décalé, presque impossible, lui permet d'ouvrir les cônes de conifères. On le repère souvent par ses cris en vol, comme de petites notes métalliques dans les sapins.",
    identificationTips: [
      "Bec croisé très caractéristique.",
      "Mâle souvent rouge brique, femelle verdâtre.",
      "Fréquente les conifères.",
      "Souvent en petits groupes bruyants.",
    ],
    whereToLook:
      "Dans les forêts de conifères, bois montagnards, secteurs de sapins et épicéas.",
    localNote:
      "Présent toute l'année dans les forêts de conifères. On le repère à ses cris métalliques, suspendu aux cônes d'épicéa.",
    responsibleNote:
      "Observe depuis les chemins forestiers sans pénétrer dans les zones sensibles.",
  },
  {
    id: "mesange-boreale",
    slug: "mesange-boreale",
    nameFr: "Mésange boréale",
    nameLatin: "Poecile montanus",
    family: "Paridés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/mesange-boreale.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Matin froid, dans les boisements humides ou montagnards.",
    emotionalTag: "La petite voix des bois froids",
    shortDescription:
      "Une mésange discrète des milieux boisés frais, sobre et délicate.",
    longDescription:
      "La Mésange boréale a une beauté calme, presque effacée. Elle appartient aux bois plus froids, aux endroits où l'air semble plus dense. Elle ne cherche pas à attirer l'attention, mais sa présence rend la forêt plus profonde.",
    identificationTips: [
      "Calotte noire mate.",
      "Joues claires.",
      "Petit bavette noire.",
      "Teintes brunes et grises sobres.",
    ],
    whereToLook:
      "Dans les bois frais, zones humides forestières, lisières montagnardes et conifères.",
    localNote:
      "Elle fréquente les forêts fraîches et humides d'altitude. Plus discrète que la charbonnière, elle préfère les conifères.",
    responsibleNote:
      "Respecte les bois morts et les vieux arbres, importants pour les cavités naturelles.",
  },
  {
    id: "pouillot-de-bonelli",
    slug: "pouillot-de-bonelli",
    nameFr: "Pouillot de Bonelli",
    nameLatin: "Phylloscopus bonelli",
    family: "Phylloscopidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/pouillot-de-bonelli.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "falaise"],
    seasons: ["printemps", "ete"],
    bestMoment: "Printemps et été, dans les bois clairs et versants ensoleillés.",
    emotionalTag: "Le chant sec des pentes claires",
    shortDescription:
      "Un petit pouillot pâle des bois lumineux, souvent plus facile à entendre qu'à voir.",
    longDescription:
      "Le Pouillot de Bonelli appartient aux bois clairs, aux pentes chaudes, aux endroits où la lumière passe entre les troncs. Son apparence reste discrète, mais son chant sec et rapide accroche l'oreille comme une petite vibration d'été.",
    identificationTips: [
      "Petit oiseau pâle.",
      "Dessous blanchâtre.",
      "Dos gris-verdâtre.",
      "Ailes et queue parfois plus jaunâtres.",
    ],
    whereToLook:
      "Dans les bois clairs, lisières sèches, pentes ensoleillées et secteurs arbustifs.",
    localNote:
      "Il chante sur les versants ensoleillés et les pentes claires. Son trille sec résonne dans les bois de feuillus.",
    responsibleNote: "Reste sur les sentiers dans les milieux secs et fragiles.",
  },
  {
    id: "pouillot-fitis",
    slug: "pouillot-fitis",
    nameFr: "Pouillot fitis",
    nameLatin: "Phylloscopus trochilus",
    family: "Phylloscopidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/pouillot-fitis.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "jardin", "riviere"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Printemps, quand son chant descend doucement dans les branches.",
    emotionalTag: "La petite mélodie qui retombe",
    shortDescription:
      "Un petit oiseau olive et pâle, proche du Pouillot véloce, au chant plus mélodieux.",
    longDescription:
      "Le Pouillot fitis ressemble à une nuance. Il faut apprendre à l'écouter plus qu'à le regarder. Son chant descend doucement, comme une phrase qui accepte de finir. Dans l'app, c'est un oiseau parfait pour les rencontres par le son.",
    identificationTips: [
      "Petit pouillot olive-brun.",
      "Sourcil pâle souvent visible.",
      "Pattes plutôt claires.",
      "Chant descendant, doux et mélodieux.",
    ],
    whereToLook:
      "Dans les jeunes bois, lisières, bords de ruisseaux, fourrés et zones arbustives.",
    localNote:
      "De passage au printemps dans les bosquets et les lisières. Son chant qui descend doucement annonce les beaux jours.",
    responsibleNote: "Évite de trop t'approcher des fourrés au printemps.",
  },
  {
    id: "coucou-gris",
    slug: "coucou-gris",
    nameFr: "Coucou gris",
    nameLatin: "Cuculus canorus",
    family: "Cuculidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/coucou-gris.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "alpage", "jardin"],
    seasons: ["printemps", "ete"],
    bestMoment: "Printemps, surtout le matin, quand son appel porte loin.",
    emotionalTag: "L'appel qui revient avec le printemps",
    shortDescription:
      "Un oiseau souvent entendu avant d'être vu, symbole sonore du printemps.",
    longDescription:
      "Le Coucou gris est moins une apparition qu'un souvenir sonore. Son appel traverse les vallons, les bois et les prés, et l'on sait que la saison a changé. Le voir est plus rare ; l'entendre suffit souvent à marquer une journée.",
    identificationTips: [
      "Cri 'coucou' très connu.",
      "Silhouette rappelant un petit rapace en vol.",
      "Plumage gris avec dessous barré.",
      "Souvent discret et difficile à approcher.",
    ],
    whereToLook:
      "Dans les lisières, bois ouverts, prairies arborées, alpages bas et zones bocagères.",
    localNote:
      "Dès avril, son appel traverse la vallée, des vergers jusqu'aux premières pentes. L'entendre suffit.",
    responsibleNote:
      "Ne cherche pas à le poursuivre : son chant est déjà une vraie rencontre.",
  },
  {
    id: "chouette-hulotte",
    slug: "chouette-hulotte",
    nameFr: "Chouette hulotte",
    nameLatin: "Strix aluco",
    family: "Strigidés",
    chapter: "dans_les_bois",
    imagePlaceholder: "/images/birds/chouette-hulotte.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "jardin"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Soir, nuit ou tout début du matin.",
    emotionalTag: "La voix ronde de la nuit",
    shortDescription:
      "Une chouette forestière souvent entendue la nuit, au hululement profond et familier.",
    longDescription:
      "La Chouette hulotte transforme la nuit en espace habité. Son chant semble venir de loin, même quand elle est proche. Elle donne aux bois, aux jardins sombres et aux vieux arbres une présence presque ancienne.",
    identificationTips: [
      "Hululement nocturne profond.",
      "Tête ronde sans aigrettes.",
      "Grands yeux sombres.",
      "Plumage brun ou gris, très camouflé.",
    ],
    whereToLook:
      "Plutôt à écouter près des bois, vieux arbres, jardins calmes et lisières.",
    localNote:
      "Elle habite les vieux arbres autour des maisons. À la tombée de la nuit, son hululement donne aux jardins une profondeur nouvelle.",
    responsibleNote:
      "Ne diffuse pas de chants pour l'attirer : cela peut perturber les oiseaux nocturnes.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // LES GRANDS CERCLES DU CIEL (Lot 7)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "grand-corbeau",
    slug: "grand-corbeau",
    nameFr: "Grand corbeau",
    nameLatin: "Corvus corax",
    family: "Corvidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/grand-corbeau.png",
    rarityLocal: "occasionnel",
    habitats: ["falaise", "foret", "haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, près des falaises, forêts et grands espaces ouverts.",
    emotionalTag: "Le gardien noir des hauteurs",
    shortDescription:
      "Un grand corvidé puissant, intelligent, à la voix grave et à la silhouette imposante.",
    longDescription:
      "Le Grand corbeau n'a pas la présence ordinaire d'une corneille. Il est plus grand, plus profond, plus sauvage. Quand il passe au-dessus d'une falaise ou d'un versant, il donne au paysage une dimension presque mythologique.",
    identificationTips: [
      "Très grande taille.",
      "Queue en losange visible en vol.",
      "Voix grave et roulante.",
      "Silhouette puissante.",
    ],
    whereToLook:
      "Près des falaises, bois montagnards, pâturages d'altitude et grands espaces ouverts.",
    localNote:
      "Il appartient aux falaises et aux grandes parois. Sa voix grave donne au paysage une dimension presque ancienne.",
    responsibleNote:
      "Garde tes distances près des falaises, surtout en période de nidification.",
  },
  {
    id: "epervier-europe",
    slug: "epervier-europe",
    nameFr: "Épervier d'Europe",
    nameLatin: "Accipiter nisus",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/epervier-europe.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "foret"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, parfois en passage rapide au-dessus des jardins.",
    emotionalTag: "L'éclair bref entre deux arbres",
    shortDescription:
      "Un petit rapace vif, spécialiste des poursuites rapides entre les arbres.",
    longDescription:
      "L'Épervier d'Europe ne laisse souvent qu'une impression : une forme rapide, une trajectoire tendue, un silence soudain chez les petits oiseaux. Il traverse le jardin ou la lisière comme une pensée fulgurante.",
    identificationTips: [
      "Petit rapace à ailes courtes et queue longue.",
      "Vol rapide avec battements puis glissade.",
      "Mâle plus petit, dessous orangé barré.",
      "Femelle plus grande, dessous barré gris.",
    ],
    whereToLook: "Dans les lisières, jardins arborés, haies et bois clairs.",
    localNote:
      "Il traverse parfois les jardins comme un éclair gris. Quand les mésanges se taisent soudain, il n'est pas loin.",
    responsibleNote:
      "Ne cherche pas à intervenir dans la prédation naturelle : elle fait partie de l'équilibre.",
  },
  {
    id: "autour-des-palombes",
    slug: "autour-des-palombes",
    nameFr: "Autour des palombes",
    nameLatin: "Accipiter gentilis",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/autour-des-palombes.png",
    rarityLocal: "rare",
    habitats: ["foret", "haute_montagne"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, dans les grands bois et zones forestières calmes.",
    emotionalTag: "Le fantôme puissant de la forêt",
    shortDescription:
      "Un rapace forestier robuste, discret, rarement observé mais impressionnant.",
    longDescription:
      "L'Autour des palombes appartient aux grandes forêts. Il a quelque chose de caché, de dense, presque secret. Plus puissant que l'Épervier, il donne l'impression que la forêt garde encore des présences qu'on ne voit presque jamais.",
    identificationTips: [
      "Rapace forestier robuste.",
      "Ailes larges et queue longue.",
      "Sourcil clair marqué chez l'adulte.",
      "Dessous finement barré.",
    ],
    whereToLook:
      "Dans les grands bois, versants forestiers, clairières calmes et lisières montagnardes.",
    localNote:
      "Présent dans les grandes forêts d'altitude. Le croiser reste rare, mais son ombre plane quelque part dans les bois profonds.",
    responsibleNote:
      "Ne cherche jamais les sites de nidification de rapaces forestiers.",
  },
  {
    id: "faucon-crecerelle",
    slug: "faucon-crecerelle",
    nameFr: "Faucon crécerelle",
    nameLatin: "Falco tinnunculus",
    family: "Falconidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/faucon-crecerelle.png",
    rarityLocal: "commun",
    habitats: ["village", "falaise", "alpage"],
    seasons: ["printemps", "ete", "automne", "hiver"],
    bestMoment: "Journée, au-dessus des champs, talus et zones ouvertes.",
    emotionalTag: "Le veilleur immobile du vent",
    shortDescription:
      "Un petit faucon souvent visible en vol stationnaire au-dessus des prairies.",
    longDescription:
      "Le Faucon crécerelle semble tenir dans le vent. Il bat des ailes sur place, suspendu au-dessus d'un champ ou d'un talus, comme s'il lisait le sol. C'est l'un des rapaces les plus faciles à reconnaître quand on apprend à lever les yeux.",
    identificationTips: [
      "Vol stationnaire caractéristique.",
      "Queue longue.",
      "Dos roux tacheté.",
      "Mâle avec tête grise.",
    ],
    whereToLook:
      "Au-dessus des prairies, talus, friches, bords de route, falaises et bâtiments hauts.",
    localNote:
      "Souvent suspendu dans le vent au-dessus des prairies, face aux pentes. Le plus familier des rapaces du coin.",
    responsibleNote:
      "Observe sans t'approcher des bâtiments ou falaises où il pourrait nicher.",
  },
  {
    id: "faucon-hobereau",
    slug: "faucon-hobereau",
    nameFr: "Faucon hobereau",
    nameLatin: "Falco subbuteo",
    family: "Falconidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/faucon-hobereau.png",
    rarityLocal: "occasionnel",
    habitats: ["jardin", "riviere", "foret"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Fin de journée en saison chaude, quand les insectes volent.",
    emotionalTag: "La flèche du soir",
    shortDescription:
      "Un faucon élégant et rapide, souvent associé aux insectes et aux oiseaux en vol.",
    longDescription:
      "Le Faucon hobereau est une silhouette de vitesse. Plus fin, plus aérien, il traverse les fins de journée comme une flèche sombre. Il donne au ciel d'été un mouvement nerveux et précis.",
    identificationTips: [
      "Silhouette fine aux ailes longues et pointues.",
      "Dessous clair strié.",
      "Culotte rousse chez l'adulte.",
      "Vol rapide et agile.",
    ],
    whereToLook:
      "Au-dessus des zones ouvertes, rivières, lisières et espaces riches en insectes volants.",
    localNote:
      "Il chasse les libellules au-dessus de la rivière en fin de journée d'été. Une flèche sombre dans le ciel doré.",
    responsibleNote: "Observe-le en vol, sans chercher à localiser les nids.",
  },
  {
    id: "milan-royal",
    slug: "milan-royal",
    nameFr: "Milan royal",
    nameLatin: "Milvus milvus",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/milan-royal.png",
    rarityLocal: "occasionnel",
    habitats: ["alpage", "foret", "village"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Journée, quand les ascendances portent les rapaces.",
    emotionalTag: "La grande virgule rousse du ciel",
    shortDescription:
      "Un rapace élégant, reconnaissable à sa queue rousse profondément échancrée.",
    longDescription:
      "Le Milan royal a une élégance presque calligraphique. Sa queue fourchue corrige sans cesse sa trajectoire, comme une plume dans l'air. Quand il passe au-dessus de la vallée, le ciel paraît soudain plus vaste.",
    identificationTips: [
      "Queue rousse très fourchue.",
      "Grandes ailes longues.",
      "Taches claires sous les ailes.",
      "Vol souple et élégant.",
    ],
    whereToLook:
      "Au-dessus des prairies, vallées ouvertes, lisières, versants et zones agricoles.",
    localNote:
      "De passage certaines années au-dessus de la vallée. Sa queue fourchue dessine une virgule rousse dans le ciel.",
    responsibleNote:
      "Ne laisse pas de déchets alimentaires en nature : les rapaces peuvent être attirés par de mauvaises sources.",
  },
  {
    id: "bondree-apivore",
    slug: "bondree-apivore",
    nameFr: "Bondrée apivore",
    nameLatin: "Pernis apivorus",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/bondree-apivore.png",
    rarityLocal: "occasionnel",
    habitats: ["foret", "alpage"],
    seasons: ["printemps", "ete"],
    bestMoment: "Journée chaude, au-dessus des bois et clairières.",
    emotionalTag: "Le rapace discret des étés forestiers",
    shortDescription:
      "Un rapace migrateur discret, lié aux bois et aux insectes sociaux.",
    longDescription:
      "La Bondrée apivore ressemble à un secret d'été. Elle plane au-dessus des bois, souvent confondue avec une buse, mais son allure est plus fine, plus mystérieuse. Elle rappelle que même les grands oiseaux peuvent rester difficiles à nommer.",
    identificationTips: [
      "Silhouette proche de la buse mais plus fine.",
      "Petite tête allongée.",
      "Queue relativement longue avec barres.",
      "Plumage très variable.",
    ],
    whereToLook:
      "Au-dessus des forêts, clairières, lisières chaudes et versants boisés.",
    localNote:
      "Elle plane discrètement au-dessus des forêts en été. La distinguer d'une buse demande patience et observation.",
    responsibleNote:
      "Ne cherche pas les nids et ne dérange pas les zones forestières tranquilles.",
  },
  {
    id: "circaete-jean-le-blanc",
    slug: "circaete-jean-le-blanc",
    nameFr: "Circaète Jean-le-Blanc",
    nameLatin: "Circaetus gallicus",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/circaete-jean-le-blanc.png",
    rarityLocal: "rare",
    habitats: ["alpage", "falaise", "foret"],
    seasons: ["printemps", "ete"],
    bestMoment: "Journée chaude, au-dessus des pentes ouvertes et rocailleuses.",
    emotionalTag: "Le grand regard pâle des pentes chaudes",
    shortDescription:
      "Un grand rapace clair, spécialiste des reptiles, souvent observé en vol plané.",
    longDescription:
      "Le Circaète Jean-le-Blanc semble chercher quelque chose que nous ne voyons pas. Grand, clair, silencieux, il plane au-dessus des pentes ouvertes avec une concentration presque immobile. C'est un oiseau rare dans le regard, marquant quand on le reconnaît.",
    identificationTips: [
      "Grand rapace très clair dessous.",
      "Tête large et assez sombre.",
      "Ailes longues.",
      "Peut faire du vol stationnaire face au vent.",
    ],
    whereToLook:
      "Au-dessus des pentes sèches, zones ouvertes, lisières chaudes et secteurs rocheux.",
    localNote:
      "Très rarement observé, il fréquente parfois les pentes sèches et ouvertes, cherchant les reptiles dans la chaleur de l'été.",
    responsibleNote:
      "Reste à distance des zones rocheuses et respecte les reptiles comme les oiseaux.",
  },
  {
    id: "vautour-fauve",
    slug: "vautour-fauve",
    nameFr: "Vautour fauve",
    nameLatin: "Gyps fulvus",
    family: "Accipitridés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/vautour-fauve.png",
    rarityLocal: "rare",
    habitats: ["falaise", "haute_montagne", "alpage"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Journée, quand les ascendances thermiques sont fortes.",
    emotionalTag: "La grande voile des montagnes",
    shortDescription:
      "Un immense planeur clair et brun, impressionnant lorsqu'il apparaît au-dessus des reliefs.",
    longDescription:
      "Le Vautour fauve ne bat presque pas des ailes : il utilise le relief, l'air chaud, la patience. Son passage donne au paysage une échelle différente. Ce n'est pas un oiseau qu'on croise simplement ; c'est une présence qui agrandit la montagne.",
    identificationTips: [
      "Très grande envergure.",
      "Ailes larges et longues.",
      "Corps brun-fauve.",
      "Vol plané majestueux.",
    ],
    whereToLook:
      "Au-dessus des falaises, crêtes, alpages et grands reliefs ouverts.",
    localNote:
      "Parfois aperçu au-dessus des grands reliefs. Son apparition transforme le paysage en quelque chose d'immense.",
    responsibleNote:
      "Ne t'approche jamais des falaises ou reposoirs potentiels de grands rapaces.",
  },
  {
    id: "hirondelle-de-rochers",
    slug: "hirondelle-de-rochers",
    nameFr: "Hirondelle de rochers",
    nameLatin: "Ptyonoprogne rupestris",
    family: "Hirundinidés",
    chapter: "vers_les_sommets",
    imagePlaceholder: "/images/birds/hirondelle-de-rochers.png",
    rarityLocal: "occasionnel",
    habitats: ["falaise", "village"],
    seasons: ["printemps", "ete", "automne"],
    bestMoment: "Journée douce, près des falaises et parois ensoleillées.",
    emotionalTag: "La petite ombre des parois chaudes",
    shortDescription:
      "Une hirondelle brune des falaises, plus sobre que l'Hirondelle rustique.",
    longDescription:
      "L'Hirondelle de rochers appartient aux parois, aux villages alpins, aux pierres chaudes. Elle vole près du relief, comme si elle cousait l'air autour des falaises. Moins colorée que l'Hirondelle rustique, elle a une beauté plus minérale.",
    identificationTips: [
      "Plumage brun-gris sobre.",
      "Queue courte avec petites taches claires visibles de près.",
      "Vol près des rochers et falaises.",
      "Silhouette d'hirondelle sans longs filets.",
    ],
    whereToLook:
      "Autour des falaises, ponts, bâtiments en pierre, parois rocheuses et villages de montagne.",
    localNote:
      "Elle niche sur les parois et les vieux bâtiments de pierre. Son vol suit le relief comme un fil invisible tissé au rocher.",
    responsibleNote:
      "Ne dérange pas les sites de nidification sous les toits, ponts ou parois.",
  },
];

export function getBirdBySlug(slug: string): Bird | undefined {
  return birds.find((bird) => bird.slug === slug);
}

export function getBirdsByHabitat(habitat: string): Bird[] {
  return birds.filter((bird) => bird.habitats.includes(habitat as BirdHabitat));
}

export function getBirdsByRarity(rarity: string): Bird[] {
  return birds.filter((bird) => bird.rarityLocal === rarity);
}
