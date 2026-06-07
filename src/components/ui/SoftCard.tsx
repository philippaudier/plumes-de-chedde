import { ReactNode, CSSProperties } from "react";

type SoftCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
  onClick?: () => void;
};

export function SoftCard({
  children,
  className = "",
  style,
  hover = false,
  onClick,
}: SoftCardProps) {
  const baseClasses =
    "bg-white/80 border border-encre/5 rounded-card shadow-soft";
  const hoverClasses = hover
    ? "transition-all duration-300 hover:shadow-card hover:border-encre/10 hover:-translate-y-0.5 hover:rotate-[0.3deg] odd:hover:rotate-[-0.3deg]"
    : "";
  const interactiveClasses = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${interactiveClasses} ${className}`}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
