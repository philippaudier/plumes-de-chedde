type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backLink?: {
    href: string;
    label: string;
  };
};

export function PageHeader({ title, subtitle, backLink }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {backLink && (
        <a
          href={backLink.href}
          className="inline-flex items-center gap-1 text-sm text-encre-light hover:text-sapin transition-colors mb-4"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {backLink.label}
        </a>
      )}
      <h1 className="font-serif text-3xl md:text-4xl text-encre mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-encre-light text-lg leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
}
