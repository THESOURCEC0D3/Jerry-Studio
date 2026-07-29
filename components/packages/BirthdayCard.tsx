import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { formatNaira, type BirthdayGroup } from "@/lib/packages";

/**
 * A birthday location (Outdoor / Indoor) presented as one card that
 * holds its two priced options — keeps four options readable as two
 * cards instead of four look-alike columns.
 */
export default function BirthdayCard({ group }: { group: BirthdayGroup }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-white/15 md:p-9">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {group.name}
      </p>

      <div className="mt-6 space-y-5">
        {group.options.map((option) => (
          <div
            key={option.label}
            className="rounded-xl border border-line bg-background/40 p-6"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {option.label}
              </span>
              <span className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                {formatNaira(option.price)}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {option.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <Check size={16} className="shrink-0 text-accent" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <Button href={option.href} variant="secondary" className="w-full">
                Book this Package
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
