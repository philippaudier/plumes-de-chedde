"use client";

import { ReactNode } from "react";

type NaturalistWorkspaceProps = {
  children: ReactNode;
};

export function NaturalistWorkspace({ children }: NaturalistWorkspaceProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* CONTENU PRINCIPAL (Le carnet lui-même) */}
      <div className="max-w-5xl mx-auto px-4 py-8 relative">
        {/* Wrapper de style carnet physique */}
        <div className="md:bg-white/60 md:backdrop-blur-md md:border md:border-encre/10 md:rounded-3xl md:p-6 lg:p-8 md:shadow-card">
          {children}
        </div>
      </div>
    </div>
  );
}
