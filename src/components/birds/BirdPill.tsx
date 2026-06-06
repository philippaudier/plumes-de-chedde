import Link from "next/link";
import { Bird } from "@/types/bird";
import { rarityStyles } from "@/lib/badgeStyles";

type BirdPillProps = {
  bird: Bird;
  showRarityDot?: boolean;
  className?: string;
};

export function BirdPill({
  bird,
  showRarityDot = false,
  className = "",
}: BirdPillProps) {
  const dotColor = rarityStyles[bird.rarityLocal].dot;

  return (
    <Link
      href={`/oiseaux/${bird.slug}`}
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5",
        "text-sm transition-colors",
        "border-[#E2D8C8] bg-[#F8F4EC] text-[#4A4037]",
        "hover:bg-[#FFFDF8] hover:border-[#CDBBAE]",
        "focus:outline-none focus:ring-2 focus:ring-sapin/30 focus:ring-offset-1",
        className,
      ].join(" ")}
    >
      {showRarityDot && (
        <span className={["h-1.5 w-1.5 rounded-full shrink-0", dotColor].join(" ")} />
      )}
      {bird.nameFr}
    </Link>
  );
}
