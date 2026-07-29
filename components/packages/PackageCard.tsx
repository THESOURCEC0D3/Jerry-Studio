import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { formatNaira, type Tier } from "@/lib/packages";

/**
 * One priced tier. The flagship tier (`featured`) gets a gold border,
 * a faint gold glow, and a solid gold CTA so the eye lands on it — no
 * invented "most popular" labels, just quiet emphasis.
 */
export default function PackageCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-8 transition-colors duration-300 md:p-9 ${
        tier.featured
          ? "border-accent/40"
          : "border-line hover:border-white/15"
      }`}
    >
      {tier.featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.10),transparent_60%)]"
        />
      )}

      <div className="relative flex h-full flex-col">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            tier.featured ? "text-accent" : "text-muted"
          }`}
        >
          {tier.name}
        </p>

        <p className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">
          {formatNaira(tier.price)}
        </p>

        <ul className="mt-7 space-y-3">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Button
            href={tier.href}
            variant={tier.featured ? "primary" : "secondary"}
            className="w-full"
          >
            Book this Package
          </Button>
        </div>
      </div>
    </div>
  );
}
