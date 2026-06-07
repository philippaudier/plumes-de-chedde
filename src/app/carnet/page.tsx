"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { birds, getBirdBySlug } from "@/data/birds";
import { useBirdMemories } from "@/hooks/useBirdMemories";
import { PageHeader } from "@/components/layout/PageHeader";
import { SoftCard } from "@/components/ui/SoftCard";
import { ProgressSummary } from "@/components/birds/ProgressSummary";
import { BirdCard } from "@/components/birds/BirdCard";
import { BirdStatusBadge } from "@/components/birds/BirdStatusBadge";
import { STATUS_LABELS, MOOD_LABELS, BirdMemory } from "@/types/memory";

export default function CarnetPage() {
  const {
    getStats,
    getEncounteredBirds,
    getMemoriesWithNotes,
    getStatus,
    getMemory,
    isLoaded,
  } = useBirdMemories();

  const stats = getStats();
  const encounteredMemories = getEncounteredBirds();
  const memoriesWithNotes = getMemoriesWithNotes();

  // Associer les mémoires aux données des oiseaux
  const encounteredBirds = useMemo(() => {
    return encounteredMemories
      .map((memory) => {
        const bird = birds.find((b) => b.id === memory.birdId);
        return bird ? { bird, memory } : null;
      })
      .filter(Boolean) as { bird: (typeof birds)[0]; memory: BirdMemory }[];
  }, [encounteredMemories]);

  const notesWithBirds = useMemo(() => {
    return memoriesWithNotes
      .map((memory) => {
        const bird = birds.find((b) => b.id === memory.birdId);
        return bird ? { bird, memory } : null;
      })
      .filter(Boolean) as { bird: (typeof birds)[0]; memory: BirdMemory }[];
  }, [memoriesWithNotes]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-encre-light">Chargement de ton carnet...</div>
      </div>
    );
  }

  const hasEncounters = encounteredBirds.length > 0;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Mon carnet"
        subtitle="Tes rencontres avec les oiseaux de la vallée."
      />

      {/* Progression */}
      <ProgressSummary stats={stats} totalBirds={birds.length} />

      {hasEncounters ? (
        <>
          {/* Timeline des rencontres */}
          <section>
            <h2 className="font-serif text-2xl text-encre mb-4">
              Tes rencontres récentes
            </h2>
            <div className="space-y-3">
              {encounteredBirds.slice(0, 10).map(({ bird, memory }) => (
                <Link key={bird.id} href={`/oiseaux/${bird.slug}`}>
                  <SoftCard hover className="p-3">
                    <div className="flex items-center gap-4">
                      {/* Thumbnail */}
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-papier-dark shrink-0">
                        <Image
                          src={memory.photoUrl || bird.imagePlaceholder}
                          alt={bird.nameFr}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                        {memory.photoUrl && (
                          <div className="absolute inset-0 ring-2 ring-inset ring-sapin/30 rounded-lg" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-serif text-lg text-encre truncate">
                            {bird.nameFr}
                          </h3>
                          <BirdStatusBadge
                            status={memory.status}
                            hasNote={!!(
                              memory.personalNote ||
                              memory.photoUrl ||
                              memory.placeName ||
                              memory.mood
                            )}
                          />
                        </div>
                        <p className="text-sm text-encre-light truncate">
                          {bird.emotionalTag}
                        </p>
                      </div>
                      {memory.firstSeenAt && (
                        <div className="text-right text-sm text-encre-light shrink-0">
                          {new Date(memory.firstSeenAt).toLocaleDateString(
                            "fr-FR",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )}
                        </div>
                      )}
                    </div>
                  </SoftCard>
                </Link>
              ))}
            </div>

            {encounteredBirds.length > 10 && (
              <p className="text-center text-sm text-encre-light mt-4">
                Et {encounteredBirds.length - 10} autre
                {encounteredBirds.length - 10 > 1 ? "s" : ""} rencontre
                {encounteredBirds.length - 10 > 1 ? "s" : ""}...
              </p>
            )}
          </section>

          {/* Souvenirs */}
          {notesWithBirds.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl text-encre mb-6 flex items-center gap-2">
                <span>🪶</span> Tes souvenirs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
                {notesWithBirds.map(({ bird, memory }, index) => {
                  const angle = (index % 2 === 0 ? 1 : -1) * (1 + (index % 3) * 0.4);
                  const isPolaroid = !!memory.photoUrl;

                  return (
                    <Link
                      key={bird.id}
                      href={`/oiseaux/${bird.slug}`}
                      className="block hover:scale-[1.02] transition-transform duration-300"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      {isPolaroid ? (
                        /* Polaroid Style Card */
                        <div className="bg-white p-4 pb-8 shadow-card border border-encre/5 rounded-sm flex flex-col h-full">
                          {/* Polaroid photo frame */}
                          <div className="relative aspect-square w-full bg-papier-dark mb-4 border border-encre/5 overflow-hidden">
                            <img
                              src={memory.photoUrl}
                              alt={bird.nameFr}
                              className="w-full h-full object-cover"
                            />
                            {memory.mood && (
                              <div className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 rounded text-xs font-serif backdrop-blur-sm shadow-soft text-encre-light">
                                {MOOD_LABELS[memory.mood]}
                              </div>
                            )}
                          </div>
                          {/* Polaroid text area */}
                          <div className="flex-1 flex flex-col justify-between px-1">
                            <div>
                              <h3 className="font-serif text-lg text-encre leading-tight mb-1">
                                {bird.nameFr}
                              </h3>
                              {memory.personalNote && (
                                <p className="font-cursive text-2xl text-encre-light leading-relaxed mb-3 line-clamp-3">
                                  {memory.personalNote}
                                </p>
                              )}
                            </div>
                            <div className="flex justify-between items-end text-xs text-encre-light/70 font-sans border-t border-encre/5 pt-2">
                              <span>{memory.placeName ? `📍 ${memory.placeName}` : "Passy"}</span>
                              {memory.firstSeenAt && (
                                <span>
                                  {new Date(memory.firstSeenAt).toLocaleDateString("fr-FR", {
                                    day: "numeric",
                                    month: "short",
                                  })}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Lined Notebook Paper Card */
                        <div className="bg-[#FAF8F5] p-5 shadow-card border-l-4 border-l-sapin border border-encre/5 rounded-card flex flex-col h-full justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-serif text-lg text-encre leading-tight">
                                  {bird.nameFr}
                                </h3>
                                <p className="text-xs text-encre-light/60 font-sans mt-0.5">
                                  {bird.emotionalTag}
                                </p>
                              </div>
                              {memory.mood && (
                                <span className="text-xs bg-sapin/5 text-sapin px-2 py-0.5 rounded-full font-sans">
                                  {MOOD_LABELS[memory.mood]}
                                </span>
                              )}
                            </div>
                            
                            {/* Lined text block */}
                            {memory.personalNote && (
                              <div 
                                className="relative font-cursive text-2xl text-encre-light leading-relaxed my-3 py-2 px-4 rounded-xl shadow-2xs border pl-6"
                                style={{
                                  backgroundColor: '#FAF9F5',
                                  backgroundImage: 'linear-gradient(rgba(61, 46, 26, 0.08) 1px, transparent 1px)',
                                  backgroundSize: '100% 32px',
                                  lineHeight: '32px',
                                  borderColor: 'rgba(61, 46, 26, 0.12)',
                                  paddingTop: '4px',
                                  paddingBottom: '4px',
                                }}
                              >
                                <span className="absolute top-0.5 left-2.5 text-lg text-bois select-none opacity-45 font-serif">“</span>
                                <p className="line-clamp-4 relative z-10">{memory.personalNote}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex justify-between items-end text-xs text-encre-light/60 font-sans border-t border-encre/5 pt-3 mt-4">
                            <span>{memory.placeName ? `📍 ${memory.placeName}` : "Dans la vallée"}</span>
                            {memory.firstSeenAt && (
                              <span>
                                {new Date(memory.firstSeenAt).toLocaleDateString("fr-FR", {
                                  day: "numeric",
                                  month: "short",
                                })}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Grille des oiseaux rencontrés */}
          <section>
            <h2 className="font-serif text-2xl text-encre mb-4">
              Tous les oiseaux rencontrés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {encounteredBirds.map(({ bird, memory }) => (
                <BirdCard
                  key={bird.id}
                  bird={bird}
                  status={memory.status}
                  hasNote={!!(
                    memory.personalNote ||
                    memory.photoUrl ||
                    memory.placeName ||
                    memory.mood
                  )}
                  userPhotoUrl={memory.photoUrl}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="space-y-6">
          {/* État vide principal */}
          <SoftCard className="p-8 text-center">
            <div className="text-4xl mb-4">🪶</div>
            <h2 className="font-serif text-2xl text-encre mb-3">
              Ton carnet est encore silencieux
            </h2>
            <p className="text-encre-light leading-relaxed max-w-md mx-auto mb-6">
              Peut-être qu'un rougegorge, demain matin, écrira la première ligne.
              Commence simplement : écoute quelques minutes, puis note la première
              présence que tu reconnais.
            </p>
            <Link
              href="/oiseaux"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sapin text-white font-medium hover:bg-sapin-dark transition-colors"
            >
              <span>Découvrir les oiseaux</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <p className="text-sm text-encre-light/70 mt-4 italic">
              Pas besoin de tout voir. Une seule rencontre suffit à commencer.
            </p>
          </SoftCard>

          {/* Carte conseil */}
          <SoftCard className="p-5 bg-sapin/5 border border-sapin/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sapin/10 flex items-center justify-center shrink-0">
                <span className="text-lg">💡</span>
              </div>
              <div>
                <h3 className="font-serif text-encre mb-1">
                  Pour commencer doucement
                </h3>
                <p className="text-sm text-encre-light leading-relaxed">
                  Choisis un endroit calme : une fenêtre, une haie, un arbre, le
                  bord d'un chemin. Reste cinq minutes. Écoute avant de chercher
                  à voir.
                </p>
              </div>
            </div>
          </SoftCard>
        </div>
      )}
    </div>
  );
}
