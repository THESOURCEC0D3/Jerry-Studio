type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** id for the h2 so sections can reference it via aria-labelledby */
  id?: string;
  align?: "center" | "left";
};

/**
 * The editorial header that opens every section:
 * small gold uppercase eyebrow → large Playfair heading → muted subtitle.
 * Keeping it in one component keeps the rhythm identical down the page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} mb-14 md:mb-16`}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-3xl font-medium leading-[1.15] sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
