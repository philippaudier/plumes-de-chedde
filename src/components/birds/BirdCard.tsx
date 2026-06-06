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
    <Link href={`/oiseaux/${bird.slug}`} className="block group">
      <div
        className={`overflow-hidden rounded-2xl border bg-papier-dark shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
          isEncountered
            ? "border-sapin/20"
            : "border-encre/5"
        }`}
      >
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
        <div className="space-y-3 p-4">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-lg text-encre leading-tight min-h-[2.75rem]">
                {bird.nameFr}
              </h3>
              <RarityBadge rarity={bird.rarityLocal} />
            </div>
            <p className="text-sm italic text-sapin mt-1">
              {bird.emotionalTag}
            </p>
          </div>

          <p className="text-sm text-encre-light line-clamp-2 leading-relaxed">
            {bird.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            {bird.habitats.slice(0, 2).map((habitat) => (
              <HabitatBadge key={habitat} habitat={habitat} />
            ))}
            {bird.habitats.length > 2 && (
              <span className="inline-flex items-center rounded-full border border-encre/10 bg-encre/5 px-2 py-1 text-xs text-encre-light leading-none">
                +{bird.habitats.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
