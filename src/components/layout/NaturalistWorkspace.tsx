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
        <div className="xl:bg-white/60 xl:backdrop-blur-md xl:border xl:border-encre/10 xl:rounded-3xl xl:p-8 xl:shadow-card">
          {children}
        </div>
      </div>
    </div>
  );
}
