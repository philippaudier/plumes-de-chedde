import { BirdHabitat } from "@/types/bird";

export type HabitatInfo = {
  id: BirdHabitat;
  name: string;
  description: string;
  advice: string;
  icon: string;
  accentColor: string;
  accentBg: string;
};

export const habitats: HabitatInfo[] = [
  {
    id: "village",
    name: "Village & maisons",
    description:
      "Autour des maisons, les oiseaux vivent dans les détails : un rebord de fenêtre, un vieux mur, une cheminée, une haie qui touche la rue. Ce sont souvent les premiers compagnons du carnet.",
    advice:
      "Ouvre les volets le matin et écoute. Les oiseaux du village sont là avant nous, déjà affairés.",
    icon: "🏘️",
    accentColor: "text-amber-700",
    accentBg: "bg-amber-50",
  },
  {
    id: "jardin",
    name: "Jardins",
    description:
      "Les potagers, les vergers, les haies qui bordent les maisons. Un monde miniature où la vie circule à hauteur de regard : mésanges dans les branches, rougegorge au sol, merle dans l'herbe humide.",
    advice:
      "Laisse un coin de jardin un peu sauvage. Les graines montées, les feuilles mortes, les tas de bois attirent une vie discrète mais riche.",
    icon: "🌿",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-50",
  },
  {
    id: "riviere",
    name: "L'Arve & les torrents",
    description:
      "L'eau froide descend des glaciers, roule sur les galets, longe les saules et les ponts. Ici, les oiseaux sont rapides, nerveux, souvent liés au courant.",
    advice:
      "Marche le long de la rivière le matin. Arrête-toi aux ponts, aux rapides. Cherche les rochers au milieu du courant : un cincle s'y tient peut-être.",
    icon: "🌊",
    accentColor: "text-sky-600",
    accentBg: "bg-sky-50",
  },
  {
    id: "foret",
    name: "Forêts",
    description:
      "Les sapinières sombres, les hêtraies claires, les sous-bois silencieux. Un monde de pics qui tambourinent, de geais qui alertent, de roitelets minuscules dans les branches hautes.",
    advice:
      "Entre en forêt doucement. Arrête-toi souvent. Les oiseaux forestiers se manifestent d'abord par leurs cris et leurs chants.",
    icon: "🌲",
    accentColor: "text-sapin",
    accentBg: "bg-sapin/5",
  },
  {
    id: "falaise",
    name: "Falaises",
    description:
      "Les grandes parois rocheuses, les gorges, les vires inaccessibles. Le domaine des rapaces, du tichodrome et des oiseaux qui savent lire la pierre.",
    advice:
      "Munis-toi de jumelles et de patience. Les falaises se contemplent de loin. Scrute les parois pour repérer un mouvement, une silhouette.",
    icon: "🏔️",
    accentColor: "text-stone-600",
    accentBg: "bg-stone-100",
  },
  {
    id: "alpage",
    name: "Alpages",
    description:
      "Les prairies d'altitude, les rhododendrons, les zones où la forêt cède la place aux herbes rases. Ici, le ciel semble plus proche et les oiseaux se font plus rares, mais plus marquants.",
    advice:
      "Monte tôt pour profiter de la fraîcheur et du calme. Les oiseaux d'alpage sont actifs le matin. Reste sur les sentiers.",
    icon: "⛰️",
    accentColor: "text-lime-700",
    accentBg: "bg-lime-50",
  },
  {
    id: "haute_montagne",
    name: "Haute montagne",
    description:
      "Là-haut, les arbres disparaissent. Il reste les pierriers, les névés, les pelouses rases et le vent. Peu d'espèces vivent vraiment ici, mais celles qui y parviennent semblent taillées pour l'extrême.",
    advice:
      "La haute montagne demande préparation et humilité. Les oiseaux qui y vivent sont adaptés à des conditions extrêmes. Ne les dérange pas.",
    icon: "🗻",
    accentColor: "text-slate-600",
    accentBg: "bg-slate-100",
  },
];

export function getHabitatInfo(id: BirdHabitat): HabitatInfo | undefined {
  return habitats.find((h) => h.id === id);
}
