import Link from "next/link";
import Image from "next/image";
import { Bird } from "@/types/bird";
import { BirdMemoryStatus } from "@/types/memory";
import { RarityBadge } from "./RarityBadge";
import { HabitatBadge } from "./HabitatBadge";
import { BirdStatusBadge } from "./BirdStatusBadge";

type BirdCardProps = {
  bird: Bird;
  status?: BirdMemoryStatus;
  hasNote?: boolean;
  /** URL de la photo personnelle de l'utilisateur (future feature) */
  userPhotoUrl?: string;
};

export function BirdCard({
  bird,
  status = "unknown",
  hasNote = false,
  userPhotoUrl,
}: BirdCardProps) {
  const isEncountered = status !== "unknown";
  const imageSrc = userPhotoUrl || bird.imagePlaceholder;
  const isUserPhoto = Boolean(userPhotoUrl);

  return (
    <Link href={`/oiseaux/${bird.slug}`} className="block group h-full">
      <div
        className={`overflow-hidden rounded-2xl border bg-papier-dark shadow-soft transition-[transform,box-shadow,border-color] duration-300 transform-gpu will-change-transform hover:-translate-y-1 hover:shadow-card h-full flex flex-col justify-between ${
          isEncountered
            ? "border-sapin/20"
            : "border-encre/5"
        }`}
      >
        {/* Top section: Image & Text info */}
        <div className="flex flex-col flex-1">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-papier-dark">
            <Image
              src={imageSrc}
              alt={bird.nameFr}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Status badge overlay */}
            <div className="absolute right-3 top-3">
              <BirdStatusBadge status={status} hasNote={hasNote} />
            </div>

            {/* User photo badge */}
            {isUserPhoto && (
              <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-2 py-0.5 text-xs text-encre backdrop-blur-sm">
                Ta photo
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="font-serif text-lg text-encre leading-tight">
                {bird.nameFr}
              </h3>
              <p className="text-sm italic text-sapin">
                {bird.emotionalTag}
              </p>
            </div>

            <p className="text-sm text-encre-light line-clamp-2 leading-relaxed flex-1">
              {bird.shortDescription}
            </p>
          </div>
        </div>

        {/* Footer: Poetic Badges */}
        <div className="flex flex-wrap items-center gap-1.5 p-4 pt-0">
          <RarityBadge rarity={bird.rarityLocal} showDot />
          {bird.habitats.slice(0, 1).map((habitat) => (
            <HabitatBadge key={habitat} habitat={habitat} />
          ))}
          {bird.habitats.length > 1 && (
            <span className="inline-flex items-center rounded-full border border-encre/10 bg-encre/5 px-2.5 py-1 text-xs text-encre-light leading-none">
              +{bird.habitats.length - 1}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
