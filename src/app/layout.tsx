import type { Metadata, Viewport } from "next";
import { EB_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { NaturalistWorkspace } from "@/components/layout/NaturalistWorkspace";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plumes de Chedde",
  description:
    "Un carnet intime des oiseaux autour de Passy. Découvrez les oiseaux de la vallée de l'Arve, apprenez à les reconnaître, et gardez le souvenir de vos rencontres.",
  keywords: [
    "oiseaux",
    "Chedde",
    "Passy",
    "Haute-Savoie",
    "ornithologie",
    "nature",
    "vallée de l'Arve",
  ],
  authors: [{ name: "Plumes de Chedde" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Plumes de Chedde",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F1E7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${ebGaramond.variable} ${plusJakartaSans.variable} ${caveat.variable} font-sans min-h-screen bg-papier text-encre antialiased`}>
        <Navigation />
        <main>
          <NaturalistWorkspace>
            {children}
          </NaturalistWorkspace>
        </main>
        <footer className="border-t border-encre/5 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-encre-light">
            <p className="mb-2">
              Plumes de Chedde — Un carnet intime des oiseaux autour de Passy
            </p>
            <p className="text-xs opacity-70">
              Chedde · Passy · Vallée de l'Arve
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
