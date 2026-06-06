import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Habitat badge colors
    "bg-[#F3E6DE]", "text-[#8A5A44]", "border-[#D8B7A6]", "bg-[#B97A5B]", // village
    "bg-[#EAF3EA]", "text-[#4C6B52]", "border-[#BED3C0]", "bg-[#6B8B6E]", // jardin
    "bg-[#E8F1F5]", "text-[#4F6E7D]", "border-[#BDD1DB]", "bg-[#6F94A8]", // riviere
    "bg-[#E4EEE8]", "text-[#3F5C4A]", "border-[#AFC3B4]", "bg-[#4F705C]", // foret
    "bg-[#EFE8E1]", "text-[#756457]", "border-[#CDBBAE]", "bg-[#9A806C]", // falaise
    "bg-[#F0F3E2]", "text-[#6B7548]", "border-[#CAD4A8]", "bg-[#95A16A]", // alpage
    "bg-[#ECEEF4]", "text-[#5F687D]", "border-[#C5CAD8]", "bg-[#7D88A3]", // haute_montagne
    // Memory status badge colors
    "bg-[#F1EFEA]", "text-[#7C766D]", "border-[#DDD7CE]", "bg-[#AAA399]", // unknown
    "bg-[#F8E9BE]", "text-[#8A6A1F]", "border-[#E7D18A]", "bg-[#D5AA3F]", // heard
    "bg-[#DDEBEA]", "border-[#B6CECB]", "bg-[#6F9892]", // seen
    "bg-[#E9E1EE]", "text-[#6B5478]", "border-[#CBBAD5]", "bg-[#9271A3]", // photographed
    "bg-[#F4E4D8]", "text-[#9B6A4B]", "border-[#E1C4AF]", "bg-[#C48662]", // memory
    // Rarity badge colors
    "bg-[#EEF1EA]", "text-[#5E6B55]", "border-[#D6DDCE]", "bg-[#8A9A78]", // commun
    "bg-[#EAEFF2]", "text-[#5F7078]", "border-[#D1DCE1]", "bg-[#8299A4]", // occasionnel
    "bg-[#F3EBDD]", "text-[#8A6A43]", "border-[#DEC9A8]", "bg-[#C49A5E]", // rare
    "bg-[#F3E2DC]", "text-[#8A4F42]", "border-[#D8B0A4]", "bg-[#B85C4A]", // emblematique
    // BirdPill colors
    "border-[#E2D8C8]", "bg-[#F8F4EC]", "text-[#4A4037]", "bg-[#FFFDF8]",
  ],
  theme: {
    extend: {
      colors: {
        papier: {
          DEFAULT: "#F6F1E7",
          dark: "#EDE6D8",
        },
        encre: {
          DEFAULT: "#2B2722",
          light: "#4A4540",
        },
        sapin: {
          DEFAULT: "#3F5C4A",
          light: "#5A7A62",
          dark: "#2E4536",
        },
        montagne: "#9EAFB7",
        bois: "#8A6A4F",
        accent: "#B85C4A",
        souvenir: "#E8C766",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "ui-serif", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(43, 39, 34, 0.06)",
        card: "0 4px 12px rgba(43, 39, 34, 0.08)",
      },
      borderRadius: {
        card: "0.75rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
