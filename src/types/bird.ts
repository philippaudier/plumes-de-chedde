export type BirdRarity = "commun" | "occasionnel" | "rare" | "emblematique";

export type BirdHabitat =
  | "village"
  | "jardin"
  | "riviere"
  | "foret"
  | "falaise"
  | "alpage"
  | "haute_montagne";

export type BirdSeason = "printemps" | "ete" | "automne" | "hiver";

export type BirdChapter =
  | "autour_de_la_maison"
  | "au_fil_de_leau"
  | "dans_les_bois"
  | "vers_les_sommets";

export type Bird = {
  id: string;
  slug: string;
  nameFr: string;
  nameLatin: string;
  family: string;
  chapter: BirdChapter;
  imagePlaceholder: string;
  rarityLocal: BirdRarity;
  habitats: BirdHabitat[];
  seasons: BirdSeason[];
  bestMoment: string;
  emotionalTag: string;
  shortDescription: string;
  longDescription: string;
  identificationTips: string[];
  whereToLook: string;
  localNote: string;
  responsibleNote: string;
};

// Helper pour générer le chemin d'image depuis le slug
export function getBirdImagePath(slug: string): string {
  return `/images/birds/${slug}.png`;
}

export const HABITAT_LABELS: Record<BirdHabitat, string> = {
  village: "Village",
  jardin: "Jardins",
  riviere: "Rivière & torrents",
  foret: "Forêt",
  falaise: "Falaises",
  alpage: "Alpages",
  haute_montagne: "Haute montagne",
};

export const RARITY_LABELS: Record<BirdRarity, string> = {
  commun: "Commun",
  occasionnel: "Occasionnel",
  rare: "Rare",
  emblematique: "Emblématique",
};

export const SEASON_LABELS: Record<BirdSeason, string> = {
  printemps: "Printemps",
  ete: "Été",
  automne: "Automne",
  hiver: "Hiver",
};

export const CHAPTER_LABELS: Record<BirdChapter, string> = {
  autour_de_la_maison: "Autour de la maison",
  au_fil_de_leau: "Au fil de l'eau",
  dans_les_bois: "Dans les bois",
  vers_les_sommets: "Vers les sommets",
};

export const CHAPTER_DESCRIPTIONS: Record<BirdChapter, string> = {
  autour_de_la_maison: "Les familiers du village et des jardins",
  au_fil_de_leau: "Ceux qui vivent près des torrents et rivières",
  dans_les_bois: "Les habitants des forêts et des bois profonds",
  vers_les_sommets: "Les grands du ciel, des falaises et des hauteurs",
};

export const CHAPTER_ICONS: Record<BirdChapter, string> = {
  autour_de_la_maison: "🏡",
  au_fil_de_leau: "💧",
  dans_les_bois: "🌲",
  vers_les_sommets: "🏔️",
};
