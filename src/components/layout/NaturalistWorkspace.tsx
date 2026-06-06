"use client";

import { ReactNode } from "react";

type NaturalistWorkspaceProps = {
  children: ReactNode;
};

export function NaturalistWorkspace({ children }: NaturalistWorkspaceProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* 🏔️ MARGE GAUCHE : Montagnes de Passy & Coordonnées */}
      <div className="hidden xl:block absolute left-4 top-28 w-72 pointer-events-none select-none text-encre/10">
        {/* Silhouette de montagne (Aiguille de Varan / Fiz) */}
        <svg
          viewBox="0 0 300 120"
          className="w-full h-auto opacity-70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Peaks profile */}
          <path d="M 10,110 Q 35,90 45,75 T 70,60 T 95,45 T 120,65 T 145,50 T 170,25 T 195,55 T 220,70 T 255,85 T 290,110" />
          {/* Secondary ridges */}
          <path d="M 45,75 Q 60,85 80,95 M 120,65 Q 140,80 160,90 M 170,25 Q 185,45 200,60" strokeDasharray="2 3" strokeWidth="0.8" />
        </svg>

        {/* Coordonnées géographiques */}
        <div className="mt-6 px-4 space-y-1 font-cursive text-xl text-encre/40 tracking-wide rotate-[-1deg]">
          <p className="font-serif not-italic text-xs tracking-widest uppercase text-encre/30 mb-2 font-bold">
            Territoire
          </p>
          <p>Passy · Chedde</p>
          <p className="text-lg">45° 55&apos; 34&quot; N</p>
          <p className="text-lg">6° 42&apos; 07&quot; E</p>
          <p className="text-base font-serif italic mt-2 text-encre/30">
            Alt. 580m — 2400m
          </p>
        </div>
      </div>

      {/* 🪶 MARGE DROITE : Plume & Tache de café */}
      <div className="hidden xl:block absolute right-4 top-24 w-72 pointer-events-none select-none text-encre/10">
        {/* Grande plume de dessin */}
        <svg
          viewBox="0 0 100 250"
          className="w-48 h-auto opacity-60 mx-auto transform rotate-[15deg]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Main shaft */}
          <path d="M 50,230 Q 48,150 52,30" strokeWidth="1.8" />
          {/* Vanes / Barbs left */}
          <path d="M 49,200 Q 25,180 20,165 M 49,170 Q 20,150 15,130 M 49,140 Q 18,120 12,95 M 50,110 Q 20,90 15,65 M 50,80 Q 25,60 20,40 M 51,50 Q 35,40 30,25" />
          {/* Vanes / Barbs right */}
          <path d="M 51,205 Q 75,185 80,170 M 51,175 Q 80,155 85,135 M 51,145 Q 82,125 88,100 M 50,115 Q 80,95 85,70 M 50,85 Q 75,65 80,45 M 49,55 Q 65,45 70,30" />
          {/* Fine texture lines */}
          <path d="M 28,150 Q 38,158 48,162 M 25,120 Q 38,130 49,134" strokeWidth="0.6" strokeDasharray="1 2" />
        </svg>

        {/* Tache de café / tasse (Coffee ring stain) */}
        <div className="mt-16 flex justify-center opacity-40">
          <svg
            viewBox="0 0 100 100"
            className="w-28 h-28 text-bois/30"
            fill="none"
            stroke="currentColor"
          >
            {/* Rough circle representing coffee ring */}
            <path
              d="M 50,10 
                 A 40,40 0 1,1 49.9,10"
              strokeWidth="2"
              strokeDasharray="25 2 15 4 40 1 8 5"
              strokeLinecap="round"
            />
            {/* Inner secondary ring */}
            <path
              d="M 50,15 
                 A 35,35 0 1,1 49.9,15"
              strokeWidth="0.8"
              strokeDasharray="5 15 30 5"
              opacity="0.7"
            />
            {/* Coffee drops/splatters */}
            <circle cx="82" cy="72" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="85" cy="76" r="0.8" fill="currentColor" stroke="none" />
            <circle cx="22" cy="28" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>

      {/* CONTENU PRINCIPAL (Le carnet lui-même) */}
      <div className="max-w-5xl mx-auto px-4 py-8 relative">
        {/* Wrapper de style carnet physique */}
        <div className="xl:bg-white/60 xl:backdrop-blur-md xl:border xl:border-encre/10 xl:rounded-3xl xl:p-8 xl:shadow-card">
          {children}
        </div>
      </div>
    </div>
  );
}
