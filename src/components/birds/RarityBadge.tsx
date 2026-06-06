import { BirdRarity } from "@/types/bird";
import { rarityStyles } from "@/lib/badgeStyles";
import { SoftBadge } from "@/components/ui/SoftBadge";

type RarityBadgeProps = {
  rarity: BirdRarity;
  showDot?: boolean;
  className?: string;
};

export function RarityBadge({
  rarity,
  showDot = false,
  className = "",
}: RarityBadgeProps) {
  const style = rarityStyles[rarity];

  return (
    <SoftBadge
      label={style.label}
      bg={style.bg}
      text={style.text}
      border={style.border}
      dot={style.dot}
      showDot={showDot}
      className={className}
    />
  );
}
