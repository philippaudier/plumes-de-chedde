"use client";

import { habitats } from "@/data/habitats";
import { birds, getBirdsByHabitat } from "@/data/birds";
import { PageHeader } from "@/components/layout/PageHeader";
import { HabitatSection } from "@/components/habitats/HabitatSection";

export default function HabitatsPage() {
  return (
    <div>
      <PageHeader
        title="Les habitats"
        subtitle="Du village aux crêtes, les oiseaux suivent les lieux : les haies, l'eau vive, les forêts, les falaises, les alpages. Cette page t'aide à savoir où regarder — et surtout comment regarder."
      />

      <div className="space-y-8">
        {habitats.map((habitat) => {
          const habitatBirds = getBirdsByHabitat(habitat.id);
          return (
            <HabitatSection
              key={habitat.id}
              habitat={habitat}
              birds={habitatBirds}
            />
          );
        })}
      </div>
    </div>
  );
}
