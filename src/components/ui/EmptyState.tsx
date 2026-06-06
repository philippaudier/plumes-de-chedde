type EmptyStateProps = {
  icon?: string;
  title: string;
  description: string;
};

export function EmptyState({
  icon = "🪶",
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <span className="text-5xl mb-4 opacity-60" role="img" aria-hidden="true">
        {icon}
      </span>
      <h3 className="font-serif text-xl text-encre mb-2">{title}</h3>
      <p className="text-encre-light max-w-md leading-relaxed">{description}</p>
    </div>
  );
}
