import { BirdHabitat } from "@/types/bird";
import { habitatStyles } from "@/lib/badgeStyles";
import { SoftBadge } from "@/components/ui/SoftBadge";

type HabitatBadgeProps = {
  habitat: BirdHabitat;
  showDot?: boolean;
  className?: string;
};

export function HabitatBadge({
  habitat,
  showDot = false,
  className = "",
}: HabitatBadgeProps) {
  const style = habitatStyles[habitat];

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
