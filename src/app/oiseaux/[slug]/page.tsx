"use client";

import { useState, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBirdBySlug, birds } from "@/data/birds";
import { HABITAT_LABELS, SEASON_LABELS } from "@/types/bird";
import { MOOD_LABELS, BirdMood } from "@/types/memory";
import { useBirdMemories } from "@/hooks/useBirdMemories";
import { PageHeader } from "@/components/layout/PageHeader";
import { SoftCard } from "@/components/ui/SoftCard";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { RarityBadge } from "@/components/birds/RarityBadge";
import { HabitatBadge } from "@/components/birds/HabitatBadge";
import { BirdStatusBadge } from "@/components/birds/BirdStatusBadge";
import { BirdMemoryActions } from "@/components/birds/BirdMemoryActions";
import { MemoryNoteEditor } from "@/components/birds/MemoryNoteEditor";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BirdDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const bird = getBirdBySlug(slug);
  const {
    getStatus,
    getMemory,
    markAsHeard,
    markAsSeen,
    markAsPhotographed,
    setPersonalNote,
    clearMemory,
    isLoaded,
  } = useBirdMemories();

  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!bird) {
    notFound();
  }

  const status = isLoaded ? getStatus(bird.id) : "unknown";
  const memory = isLoaded ? getMemory(bird.id) : undefined;
  const hasNote = !!memory?.personalNote;

  const handleSaveNote = (note: string, place?: string, mood?: BirdMood, photoUrl?: string) => {
    setPersonalNote(bird.id, note, place, mood, photoUrl);
    setIsNoteEditorOpen(false);
  };

  const handleMarkHeard = () => {
    markAsHeard(bird.id);
    if (!hasNote) {
      setTimeout(() => setIsNoteEditorOpen(true), 200);
    }
  };

  const handleMarkSeen = () => {
    markAsSeen(bird.id);
    if (!hasNote) {
      setTimeout(() => setIsNoteEditorOpen(true), 200);
    }
  };

  const handleMarkPhotographed = () => {
    markAsPhotographed(bird.id);
    if (!hasNote) {
      setTimeout(() => setIsNoteEditorOpen(true), 200);
    }
  };

  // Image source: user photo if exists, otherwise placeholder
  const imageSrc = memory?.photoUrl || bird.imagePlaceholder;
  const isUserPhoto = Boolean(memory?.photoUrl);

  return (
    <div>
      <PageHeader
        title={bird.nameFr}
        subtitle={bird.emotionalTag}
        backLink={{ href: "/oiseaux", label: "Retour aux oiseaux" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image principale */}
          <SoftCard className="p-0 overflow-hidden">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="relative w-full aspect-square bg-papier-dark group cursor-zoom-in"
              aria-label="Agrandir l'image"
            >
              <Image
                src={imageSrc}
                alt={bird.nameFr}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              {/* Zoom hint */}
              <div className="absolute inset-0 bg-encre/0 group-hover:bg-encre/10 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-soft">
                  <svg
                    className="w-6 h-6 text-encre"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
              {isUserPhoto && (
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm text-encre backdrop-blur-sm shadow-soft">
                  Ta photo
                </div>
              )}
            </button>
            <p className="px-4 py-3 text-sm text-encre-light/70 italic text-center border-t border-encre/5">
              {isUserPhoto
                ? "Ta rencontre personnelle"
                : "Illustration temporaire — remplaçable par ta propre rencontre."}
            </p>
          </SoftCard>

          {/* Info de base */}
          <SoftCard className="p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="text-lg text-encre-light italic">{bird.nameLatin}</p>
              <span className="text-encre-light">·</span>
              <p className="text-encre-light">{bird.family}</p>
              <RarityBadge rarity={bird.rarityLocal} />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {bird.habitats.map((habitat) => (
                <HabitatBadge key={habitat} habitat={habitat} />
              ))}
            </div>

            <p className="text-encre leading-relaxed">{bird.longDescription}</p>
          </SoftCard>

          {/* Identification */}
          <SoftCard className="p-6">
            <h2 className="font-serif text-xl text-encre mb-4">
              Pour le reconnaître
            </h2>
            <ul className="space-y-2">
              {bird.identificationTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-encre-light"
                >
                  <span className="text-sapin mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </SoftCard>

          {/* Où et quand */}
          <SoftCard className="p-6">
            <h2 className="font-serif text-xl text-encre mb-4">
              Où et quand le chercher
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-sapin mb-1">
                  Autour de Passy / Chedde
                </h3>
                <p className="text-encre-light">{bird.whereToLook}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-sapin mb-1">
                  Meilleur moment
                </h3>
                <p className="text-encre-light">{bird.bestMoment}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-sapin mb-2">Saisons</h3>
                <div className="flex flex-wrap gap-2">
                  {bird.seasons.map((season) => (
                    <span
                      key={season}
                      className="px-3 py-1 rounded-full bg-encre/5 text-sm text-encre-light"
                    >
                      {SEASON_LABELS[season]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SoftCard>

          {/* Note locale */}
          {bird.localNote && (
            <SoftCard className="p-6 bg-sapin/5">
              <h2 className="font-serif text-xl text-sapin mb-3">
                Note locale
              </h2>
              <p className="text-encre-light">{bird.localNote}</p>
            </SoftCard>
          )}

          {/* Observation responsable */}
          <SoftCard className="p-6 bg-accent/5">
            <h2 className="font-serif text-xl text-accent mb-3">
              Observer avec respect
            </h2>
            <p className="text-encre-light">{bird.responsibleNote}</p>
          </SoftCard>
        </div>

        {/* Colonne latérale */}
        <div className="space-y-6">
          {/* Statut personnel */}
          <SoftCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl text-encre">Ta rencontre</h2>
              <BirdStatusBadge status={status} hasNote={hasNote} />
            </div>

            {isLoaded && (
              <BirdMemoryActions
                status={status}
                onMarkHeard={handleMarkHeard}
                onMarkSeen={handleMarkSeen}
                onMarkPhotographed={handleMarkPhotographed}
                onOpenNoteEditor={() => setIsNoteEditorOpen(true)}
                onReset={() => clearMemory(bird.id)}
                hasNote={hasNote}
              />
            )}
          </SoftCard>

          {/* Souvenir personnel */}
          {memory?.personalNote && (
            <SoftCard className="p-6 bg-souvenir/10">
              <h2 className="font-serif text-xl text-encre mb-3 flex items-center gap-2">
                <span>🪶</span> Ton souvenir
              </h2>

              <p className="text-encre-light leading-relaxed mb-4">
                {memory.personalNote}
              </p>

              {(memory.placeName || memory.mood) && (
                <div className="flex flex-wrap gap-2 text-sm">
                  {memory.placeName && (
                    <span className="text-encre-light">
                      📍 {memory.placeName}
                    </span>
                  )}
                  {memory.mood && (
                    <span className="text-encre-light">
                      · {MOOD_LABELS[memory.mood]}
                    </span>
                  )}
                </div>
              )}

              {memory.firstSeenAt && (
                <p className="text-xs text-encre-light/70 mt-3">
                  Première rencontre le{" "}
                  {new Date(memory.firstSeenAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
            </SoftCard>
          )}
        </div>
      </div>

      {/* Modal d'édition de note */}
      {isNoteEditorOpen && (
        <MemoryNoteEditor
          initialNote={memory?.personalNote}
          initialPlace={memory?.placeName}
          initialMood={memory?.mood}
          initialPhotoUrl={memory?.photoUrl}
          onSave={handleSaveNote}
          onCancel={() => setIsNoteEditorOpen(false)}
        />
      )}

      {/* Lightbox pour l'image en plein écran */}
      {isLightboxOpen && (
        <ImageLightbox
          src={imageSrc}
          alt={bird.nameFr}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
}
