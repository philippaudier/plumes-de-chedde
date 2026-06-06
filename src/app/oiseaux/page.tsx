"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { birds } from "@/data/birds";
import {
  BirdHabitat,
  BirdRarity,
  BirdChapter,
  RARITY_LABELS,
  CHAPTER_LABELS,
  CHAPTER_DESCRIPTIONS,
  CHAPTER_ICONS,
} from "@/types/bird";
import { useBirdMemories } from "@/hooks/useBirdMemories";
import { PageHeader } from "@/components/layout/PageHeader";
import { BirdCard } from "@/components/birds/BirdCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SoftCard } from "@/components/ui/SoftCard";

type HabitatFilter = BirdHabitat | "all";
type RarityFilter = BirdRarity | "all";
type ViewMode = "flat" | "chapters";

const chapterOrder: BirdChapter[] = [
  "autour_de_la_maison",
  "au_fil_de_leau",
  "dans_les_bois",
  "vers_les_sommets",
];

const chapterAnchors: Record<BirdChapter, string> = {
  autour_de_la_maison: "maison",
  au_fil_de_leau: "eau",
  dans_les_bois: "bois",
  vers_les_sommets: "sommets",
};

const habitatFilters: { value: HabitatFilter; label: string; icon: string }[] = [
  { value: "all", label: "Tous", icon: "🌍" },
  { value: "village", label: "Village", icon: "🏘️" },
  { value: "jardin", label: "Jardins", icon: "🌿" },
  { value: "riviere", label: "Rivière", icon: "🌊" },
  { value: "foret", label: "Forêt", icon: "🌲" },
  { value: "falaise", label: "Falaises", icon: "🏔️" },
  { value: "alpage", label: "Alpages", icon: "⛰️" },
  { value: "haute_montagne", label: "Haute montagne", icon: "🗻" },
];

const rarityFilters: { value: RarityFilter; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "commun", label: "Compagnons du quotidien" },
  { value: "occasionnel", label: "Visiteurs de passage" },
  { value: "rare", label: "Rencontres fortuites" },
  { value: "emblematique", label: "Esprits des cimes" },
];

function OiseauxContent() {
  const searchParams = useSearchParams();
  const { getStatus, getMemory, isLoaded } = useBirdMemories();
  const [searchQuery, setSearchQuery] = useState("");
  const [habitatFilter, setHabitatFilter] = useState<HabitatFilter>("all");
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("chapters");

  // Initialiser le filtre habitat depuis l'URL
  useEffect(() => {
    const habitatParam = searchParams.get("habitat");
    if (habitatParam && habitatFilters.some((f) => f.value === habitatParam)) {
      setHabitatFilter(habitatParam as HabitatFilter);
      setViewMode("flat");
    }
  }, [searchParams]);

  const filteredBirds = useMemo(() => {
    return birds.filter((bird) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName =
          bird.nameFr.toLowerCase().includes(query) ||
          bird.nameLatin.toLowerCase().includes(query) ||
          bird.emotionalTag.toLowerCase().includes(query);
        if (!matchesName) return false;
      }

      if (habitatFilter !== "all") {
        if (!bird.habitats.includes(habitatFilter)) return false;
      }

      if (rarityFilter !== "all") {
        if (bird.rarityLocal !== rarityFilter) return false;
      }

      return true;
    });
  }, [searchQuery, habitatFilter, rarityFilter]);

  const birdsByChapter = useMemo(() => {
    const grouped = new Map<BirdChapter, typeof filteredBirds>();
    for (const chapter of chapterOrder) {
      const chapterBirds = filteredBirds.filter((b) => b.chapter === chapter);
      if (chapterBirds.length > 0) {
        grouped.set(chapter, chapterBirds);
      }
    }
    return grouped;
  }, [filteredBirds]);

  const hasActiveFilters =
    searchQuery !== "" || habitatFilter !== "all" || rarityFilter !== "all";

  return (
    <>
      {/* Filtres */}
      <div className="space-y-5 mb-8">
        {/* Recherche */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un oiseau..."
            className="w-full px-4 py-3 pl-11 rounded-lg border border-encre/10 bg-white/50 text-encre placeholder:text-encre-light/50 focus:outline-none focus:ring-2 focus:ring-sapin/30"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-encre-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-encre-light hover:text-encre"
              aria-label="Effacer la recherche"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Filtres habitats */}
        <div>
          <p className="text-xs uppercase tracking-widest text-encre-light/70 mb-2">
            Habitat
          </p>
          <div className="flex flex-wrap gap-2">
            {habitatFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setHabitatFilter(filter.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                  habitatFilter === filter.value
                    ? "bg-sapin/15 text-sapin ring-1 ring-sapin/30"
                    : "bg-encre/5 text-encre-light hover:bg-encre/10"
                }`}
              >
                <span className="text-xs">{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtre rareté */}
        <div>
          <p className="text-xs uppercase tracking-widest text-encre-light/70 mb-2">
            Rareté
          </p>
          <div className="flex flex-wrap gap-2">
            {rarityFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setRarityFilter(filter.value)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  rarityFilter === filter.value
                    ? "bg-bois/15 text-bois ring-1 ring-bois/30"
                    : "bg-encre/5 text-encre-light hover:bg-encre/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle vue */}
        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs uppercase tracking-widest text-encre-light/70">
            Affichage
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setViewMode("chapters")}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                viewMode === "chapters"
                  ? "bg-sapin/15 text-sapin ring-1 ring-sapin/30"
                  : "bg-encre/5 text-encre-light hover:bg-encre/10"
              }`}
            >
              Par chapitre
            </button>
            <button
              onClick={() => setViewMode("flat")}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                viewMode === "flat"
                  ? "bg-sapin/15 text-sapin ring-1 ring-sapin/30"
                  : "bg-encre/5 text-encre-light hover:bg-encre/10"
              }`}
            >
              Liste
            </button>
          </div>
        </div>

        {/* Navigation rapide par chapitre */}
        {viewMode === "chapters" && birdsByChapter.size > 1 && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-encre/5">
            <span className="text-xs text-encre-light/70">Aller à :</span>
            {Array.from(birdsByChapter.keys()).map((chapter) => (
              <a
                key={chapter}
                href={`#${chapterAnchors[chapter]}`}
                className="text-sm text-sapin hover:underline"
              >
                {CHAPTER_LABELS[chapter]}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Résultats */}
      <div className="mb-4 text-sm text-encre-light">
        {filteredBirds.length} espèce{filteredBirds.length > 1 ? "s" : ""}{" "}
        {hasActiveFilters
          ? `trouvée${filteredBirds.length > 1 ? "s" : ""}`
          : ""}
      </div>

      {filteredBirds.length > 0 ? (
        viewMode === "chapters" ? (
          // Vue par chapitre
          <div className="space-y-10">
            {Array.from(birdsByChapter.entries()).map(([chapter, chapterBirds]) => (
              <section key={chapter} id={chapterAnchors[chapter]}>
                <SoftCard className="p-4 mb-4 bg-papier-dark/30">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{CHAPTER_ICONS[chapter]}</span>
                    <div>
                      <h2 className="font-serif text-xl text-encre">
                        {CHAPTER_LABELS[chapter]}
                      </h2>
                      <p className="text-sm text-encre-light">
                        {CHAPTER_DESCRIPTIONS[chapter]}
                      </p>
                    </div>
                    <span className="ml-auto text-sm text-encre-light bg-encre/5 px-2 py-0.5 rounded-full">
                      {chapterBirds.length}
                    </span>
                  </div>
                </SoftCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapterBirds.map((bird) => (
                    <BirdCard
                      key={bird.id}
                      bird={bird}
                      status={isLoaded ? getStatus(bird.id) : "unknown"}
                      hasNote={isLoaded ? !!getMemory(bird.id)?.personalNote : false}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          // Vue liste plate
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBirds.map((bird) => (
              <BirdCard
                key={bird.id}
                bird={bird}
                status={isLoaded ? getStatus(bird.id) : "unknown"}
                hasNote={isLoaded ? !!getMemory(bird.id)?.personalNote : false}
              />
            ))}
          </div>
        )
      ) : (
        <EmptyState
          icon="🔍"
          title="Aucun oiseau trouvé"
          description="Essaie d'élargir ta recherche ou de modifier les filtres."
        />
      )}
    </>
  );
}

export default function OiseauxPage() {
  return (
    <div>
      <PageHeader
        title="Les oiseaux"
        subtitle="Découvre les oiseaux qui partagent la vallée de l'Arve, des jardins de Chedde aux crêtes au-dessus de Passy."
      />
      <Suspense fallback={<div className="text-encre-light">Chargement...</div>}>
        <OiseauxContent />
      </Suspense>
    </div>
  );
}
