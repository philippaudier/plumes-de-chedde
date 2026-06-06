type SoftBadgeProps = {
  label: string;
  bg: string;
  text: string;
  border: string;
  dot?: string;
  showDot?: boolean;
  className?: string;
};

export function SoftBadge({
  label,
  bg,
  text,
  border,
  dot,
  showDot = false,
  className = "",
}: SoftBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        "text-xs font-medium leading-none transition-colors",
        bg,
        text,
        border,
        className,
      ].join(" ")}
    >
      {showDot && dot && (
        <span className={["h-1.5 w-1.5 rounded-full shrink-0", dot].join(" ")} />
      )}
      {label}
    </span>
  );
}
