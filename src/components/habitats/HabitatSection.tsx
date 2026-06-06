import Link from "next/link";
import { HabitatInfo } from "@/data/habitats";
import { Bird } from "@/types/bird";
import { SoftCard } from "@/components/ui/SoftCard";
import { BirdPill } from "@/components/birds/BirdPill";

type HabitatSectionProps = {
  habitat: HabitatInfo;
  birds: Bird[];
};

const MAX_VISIBLE_BIRDS = 10;

export function HabitatSection({ habitat, birds }: HabitatSectionProps) {
  const visibleBirds = birds.slice(0, MAX_VISIBLE_BIRDS);
  const hiddenCount = birds.length - visibleBirds.length;

  return (
    <section>
      <SoftCard className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl ${habitat.accentBg} flex items-center justify-center shrink-0`}>
            <span className="text-2xl">{habitat.icon}</span>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl text-encre mb-1">{habitat.name}</h2>
            <p className="text-sm text-encre-light">
              {birds.length} espèce{birds.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-encre-light leading-relaxed mb-5">
          {habitat.description}
        </p>

        {/* Conseil */}
        <div className={`${habitat.accentBg} rounded-xl p-4 mb-6`}>
          <div className="flex items-start gap-3">
            <span className="text-lg">👁️</span>
            <div>
              <h3 className={`text-sm font-medium ${habitat.accentColor} mb-1`}>
                Pour observer
              </h3>
              <p className="text-sm text-encre-light leading-relaxed">
                {habitat.advice}
              </p>
            </div>
          </div>
        </div>

        {/* Oiseaux */}
        {birds.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-encre mb-3">
              Oiseaux de cet habitat
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {visibleBirds.map((bird) => (
                <BirdPill key={bird.id} bird={bird} />
              ))}
              {hiddenCount > 0 && (
                <Link
                  href={`/oiseaux?habitat=${habitat.id}`}
                  className={[
                    "inline-flex items-center px-3 py-1.5 rounded-full border text-sm transition-colors",
                    habitat.accentBg,
                    habitat.accentColor,
                    "border-current/20",
                    "hover:opacity-80",
                  ].join(" ")}
                >
                  + {hiddenCount} autre{hiddenCount > 1 ? "s" : ""}
                </Link>
              )}
            </div>

            {/* Lien explorer */}
            <Link
              href={`/oiseaux?habitat=${habitat.id}`}
              className={`inline-flex items-center gap-2 text-sm ${habitat.accentColor} hover:underline`}
            >
              <span>Explorer cet habitat</span>
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
          </div>
        )}
      </SoftCard>
    </section>
  );
}
