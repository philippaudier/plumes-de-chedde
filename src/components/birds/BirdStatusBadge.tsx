import { BirdMemoryStatus } from "@/types/memory";
import { memoryStatusStyles } from "@/lib/badgeStyles";
import { SoftBadge } from "@/components/ui/SoftBadge";

type BirdStatusBadgeProps = {
  status: BirdMemoryStatus;
  hasNote?: boolean;
  showDot?: boolean;
  className?: string;
};

export function BirdStatusBadge({
  status,
  hasNote = false,
  showDot = true,
  className = "",
}: BirdStatusBadgeProps) {
  // Si l'oiseau a une note souvenir, afficher le badge souvenir à la place
  const styleKey = hasNote ? "memory" : status;
  const style = memoryStatusStyles[styleKey];

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
