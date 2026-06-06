import { BirdHabitat, BirdRarity } from "@/types/bird";
import { BirdMemoryStatus } from "@/types/memory";

export type BadgeStyle = {
  label: string;
  bg: string;
  text: string;
  border: string;
  dot: string;
};

export const habitatStyles: Record<BirdHabitat, BadgeStyle> = {
  village: {
    label: "Village",
    bg: "bg-[#F3E6DE]",
    text: "text-[#8A5A44]",
    border: "border-[#D8B7A6]",
    dot: "bg-[#B97A5B]",
  },
  jardin: {
    label: "Jardin",
    bg: "bg-[#EAF3EA]",
    text: "text-[#4C6B52]",
    border: "border-[#BED3C0]",
    dot: "bg-[#6B8B6E]",
  },
  riviere: {
    label: "Rivière",
    bg: "bg-[#E8F1F5]",
    text: "text-[#4F6E7D]",
    border: "border-[#BDD1DB]",
    dot: "bg-[#6F94A8]",
  },
  foret: {
    label: "Forêt",
    bg: "bg-[#E4EEE8]",
    text: "text-[#3F5C4A]",
    border: "border-[#AFC3B4]",
    dot: "bg-[#4F705C]",
  },
  falaise: {
    label: "Falaise",
    bg: "bg-[#EFE8E1]",
    text: "text-[#756457]",
    border: "border-[#CDBBAE]",
    dot: "bg-[#9A806C]",
  },
  alpage: {
    label: "Alpage",
    bg: "bg-[#F0F3E2]",
    text: "text-[#6B7548]",
    border: "border-[#CAD4A8]",
    dot: "bg-[#95A16A]",
  },
  haute_montagne: {
    label: "Haute montagne",
    bg: "bg-[#ECEEF4]",
    text: "text-[#5F687D]",
    border: "border-[#C5CAD8]",
    dot: "bg-[#7D88A3]",
  },
};

export const memoryStatusStyles: Record<BirdMemoryStatus | "memory", BadgeStyle> = {
  unknown: {
    label: "Non rencontré",
    bg: "bg-[#F1EFEA]",
    text: "text-[#7C766D]",
    border: "border-[#DDD7CE]",
    dot: "bg-[#AAA399]",
  },
  heard: {
    label: "Entendu",
    bg: "bg-[#F8E9BE]",
    text: "text-[#8A6A1F]",
    border: "border-[#E7D18A]",
    dot: "bg-[#D5AA3F]",
  },
  seen: {
    label: "Vu",
    bg: "bg-[#DDEBEA]",
    text: "text-[#3F5C4A]",
    border: "border-[#B6CECB]",
    dot: "bg-[#6F9892]",
  },
  photographed: {
    label: "Photographié",
    bg: "bg-[#E9E1EE]",
    text: "text-[#6B5478]",
    border: "border-[#CBBAD5]",
    dot: "bg-[#9271A3]",
  },
  memory: {
    label: "Souvenir",
    bg: "bg-[#F4E4D8]",
    text: "text-[#9B6A4B]",
    border: "border-[#E1C4AF]",
    dot: "bg-[#C48662]",
  },
};

export const rarityStyles: Record<BirdRarity, BadgeStyle> = {
  commun: {
    label: "Compagnon du quotidien",
    bg: "bg-[#EEF1EA]",
    text: "text-[#5E6B55]",
    border: "border-[#D6DDCE]",
    dot: "bg-[#8A9A78]",
  },
  occasionnel: {
    label: "Visiteur de passage",
    bg: "bg-[#EAEFF2]",
    text: "text-[#5F7078]",
    border: "border-[#D1DCE1]",
    dot: "bg-[#8299A4]",
  },
  rare: {
    label: "Rencontre fortuite",
    bg: "bg-[#F3EBDD]",
    text: "text-[#8A6A43]",
    border: "border-[#DEC9A8]",
    dot: "bg-[#C49A5E]",
  },
  emblematique: {
    label: "Esprit des cimes",
    bg: "bg-[#F3E2DC]",
    text: "text-[#8A4F42]",
    border: "border-[#D8B0A4]",
    dot: "bg-[#B85C4A]",
  },
};
