"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { birds } from "@/data/birds";
import { useBirdMemories } from "@/hooks/useBirdMemories";
import { SoftCard } from "@/components/ui/SoftCard";
import { BirdCard } from "@/components/birds/BirdCard";
import { RarityBadge } from "@/components/birds/RarityBadge";
import { HabitatBadge } from "@/components/birds/HabitatBadge";

export default function HomePage() {
  const { getStatus, getMemory, getStats, isLoaded } = useBirdMemories();

  const [greeting, setGreeting] = useState("Un carnet intime des oiseaux autour de Passy.");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Matin calme sur Chedde. Les premiers chants s'élèvent.");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Une après-midi paisible au fil de l'Arve.");
    } else if (hour >= 18 && hour < 22) {
      setGreeting("Soir doré sur les versants de Passy. Le jour s'éteint doucement.");
    } else {
      setGreeting("La nuit enveloppe la vallée. Le silence règne sur les sommets.");
    }
  }, []);

  // Oiseau du jour (basé sur la date)
  const birdOfTheDay = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return birds[dayOfYear % birds.length];
  }, []);

  // 3 oiseaux recommandés (différents de l'oiseau du jour)
  const recommendedBirds = useMemo(() => {
    const today = new Date();
    const seed = today.getDate() + today.getMonth() * 31 + today.getFullYear();
    const filtered = birds.filter((b) => b.id !== birdOfTheDay.id);

    const step = Math.floor(filtered.length / 4);
    const startIndex = seed % step;
    return [
      filtered[startIndex % filtered.length],
      filtered[(startIndex + step) % filtered.length],
      filtered[(startIndex + step * 2) % filtered.length],
    ];
  }, [birdOfTheDay.id]);

  const stats = getStats();
  const seenCount = stats.seen + stats.photographed;
  const heardCount = stats.heard;
  const notesCount = stats.withNotes;
  const encountered = seenCount + heardCount;

  // Helper pour gérer les singuliers/pluriels
  const pluralize = (count: number, singular: string, plural: string) =>
    count <= 1 ? singular : plural;

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative text-center py-10 overflow-hidden">
        {/* Glows poétiques */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-sapin/5 rounded-full blur-3xl -z-10 pointer-events-none select-none" />
        <div className="absolute bottom-2 right-1/4 w-72 h-72 bg-bois/5 rounded-full blur-3xl -z-10 pointer-events-none select-none" />

        <h1 className="font-serif text-4xl md:text-5xl text-encre mb-4">
          Plumes de Chedde
        </h1>
        <p className="text-xl text-sapin mb-6 font-serif italic">
          {greeting}
        </p>
        <p className="text-encre-light max-w-2xl mx-auto leading-relaxed">
          Apprendre à reconnaître les présences discrètes de la vallée : un
          chant dans une haie, une silhouette au-dessus des versants, un
          souvenir posé sur une branche.
        </p>
      </section>

      {/* Oiseau du jour - Carte vedette */}
      <section>
        <Link href={`/oiseaux/${birdOfTheDay.slug}`} className="group">
          <SoftCard hover className="p-0 overflow-hidden bg-papier-dark/30">
            <div className="flex flex-col md:flex-row">
              {/* Image plus grande */}
              <div className="relative w-full md:w-80 lg:w-96 aspect-square md:aspect-auto md:min-h-[320px] shrink-0 bg-papier-dark">
                <Image
                  src={birdOfTheDay.imagePlaceholder}
                  alt={birdOfTheDay.nameFr}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
              </div>
              {/* Contenu */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                {/* Label */}
                <div className="inline-flex items-center gap-2 text-sm text-souvenir mb-4">
                  <span>🌅</span>
                  <span className="font-medium">Oiseau du jour</span>
                </div>

                {/* Nom et rareté */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="font-serif text-3xl text-encre">
                    {birdOfTheDay.nameFr}
                  </h2>
                  <RarityBadge rarity={birdOfTheDay.rarityLocal} />
                </div>

                {/* Nom latin */}
                <p className="text-sm text-encre-light italic mb-3">
                  {birdOfTheDay.nameLatin}
                </p>

                {/* Emotional tag */}
                <p className="text-sapin text-lg mb-4">
                  {birdOfTheDay.emotionalTag}
                </p>

                {/* Habitats */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {birdOfTheDay.habitats.slice(0, 3).map((habitat) => (
                    <HabitatBadge key={habitat} habitat={habitat} />
                  ))}
                </div>

                {/* Invitation */}
                <p className="text-encre-light leading-relaxed mb-6 max-w-lg">
                  Aujourd'hui, prends quelques secondes pour le chercher dans
                  son habitat. Parfois, une rencontre commence simplement par un
                  mouvement aperçu du coin de l'œil.
                </p>

                {/* Bouton */}
                <div>
                  <span className="inline-flex items-center gap-2 text-sapin font-medium group-hover:underline">
                    Voir sa fiche
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
                  </span>
                </div>
              </div>
            </div>
          </SoftCard>
        </Link>
      </section>

      {/* Navigation rapide */}
      <section>
        <h2 className="font-serif text-2xl text-encre mb-4">Explorer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/oiseaux">
            <SoftCard
              hover
              className="p-6 text-center h-full flex flex-col items-center justify-center"
            >
              <span className="text-4xl mb-3">🐦</span>
              <h3 className="font-serif text-lg text-encre mb-1">
                Les oiseaux
              </h3>
              <p className="text-sm text-encre-light">
                {birds.length} espèces à rencontrer dans la vallée.
              </p>
            </SoftCard>
          </Link>

          <Link href="/carnet">
            <SoftCard
              hover
              className="p-6 text-center h-full flex flex-col items-center justify-center"
            >
              <span className="text-4xl mb-3">📖</span>
              <h3 className="font-serif text-lg text-encre mb-1">Mon carnet</h3>
              <p className="text-sm text-encre-light">
                {isLoaded
                  ? encountered > 0
                    ? `${encountered} ${pluralize(encountered, "rencontre", "rencontres")} dans ton carnet`
                    : "Tes observations, tes photos, tes souvenirs."
                  : "Chargement..."}
              </p>
            </SoftCard>
          </Link>

          <Link href="/habitats">
            <SoftCard
              hover
              className="p-6 text-center h-full flex flex-col items-center justify-center"
            >
              <span className="text-4xl mb-3">🏔️</span>
              <h3 className="font-serif text-lg text-encre mb-1">
                Les habitats
              </h3>
              <p className="text-sm text-encre-light">
                Du village aux crêtes, où regarder.
              </p>
            </SoftCard>
          </Link>
        </div>
      </section>

      {/* Statistiques */}
      {isLoaded && (
        <section>
          <h2 className="font-serif text-2xl text-encre mb-4">Le carnet s'écrit...</h2>
          <SoftCard className="p-5 md:p-8 bg-gradient-to-br from-papier-dark/40 to-white/20 border-dashed border-encre/10">
            <p className="text-lg leading-relaxed text-encre-light font-serif italic max-w-2xl mx-auto text-center">
              "Dans le silence de la vallée, ton regard s'est posé sur{" "}
              <span className="text-sapin font-bold not-italic">{seenCount}</span>{" "}
              {pluralize(seenCount, "silhouette complice", "silhouettes complices")} et tu as écouté{" "}
              <span className="text-sapin font-bold not-italic">{heardCount}</span>{" "}
              {pluralize(heardCount, "chant discret", "chants discrets")}.{" "}
              {notesCount > 0 ? (
                <span>
                  Tu as gravé <span className="text-bois font-bold not-italic">{notesCount}</span>{" "}
                  {pluralize(notesCount, "instant de vie", "instants de vie")} dans ces pages.
                </span>
              ) : (
                <span>Aucun souvenir n'est encore écrit, mais chaque promenade appelle un mot.</span>
              )}
              "
            </p>
          </SoftCard>
        </section>
      )}

      {/* Oiseaux recommandés */}
      <section>
        <h2 className="font-serif text-2xl text-encre mb-2 flex items-center gap-2">
          <span>👀</span> Aujourd'hui, ouvre l'œil…
        </h2>
        <p className="text-encre-light mb-4">
          Trois présences à chercher sans forcer : près d'un arbre, d'une haie,
          ou simplement en levant les yeux.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recommendedBirds.map((bird) => (
            <BirdCard
              key={bird.id}
              bird={bird}
              status={getStatus(bird.id)}
              hasNote={!!getMemory(bird.id)?.personalNote}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
