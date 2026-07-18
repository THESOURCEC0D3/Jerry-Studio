import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

/**
 * ⚠️ PLACEHOLDER CONTENT — no real reviews are shown on purpose.
 * When Jerry collects real client testimonials, replace the entries
 * below (quote, name, event) and delete the "(placeholder)" markers.
 * Nothing else needs to change.
 */
type Testimonial = {
  quote: string;
  name: string;
  event: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Replace with a real client testimonial — e.g. what they loved about the photos, the experience on the day, or the delivery.",
    name: "Client Name (placeholder)",
    event: "Wedding — placeholder",
  },
  {
    quote:
      "Replace with a real client testimonial — a short, specific story works better than general praise.",
    name: "Client Name (placeholder)",
    event: "Birthday — placeholder",
  },
  {
    quote:
      "Replace with a real client testimonial — ideally mentioning a concern they had and how it was handled.",
    name: "Client Name (placeholder)",
    event: "Church Program — placeholder",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="What Clients Say"
            subtitle="Real words from real clients. (Testimonials being collected — placeholders shown.)"
          />
        </Reveal>

        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, event }, index) => (
            <li key={index}>
              <Reveal
                delay={index * 0.1}
                className="flex h-full flex-col rounded-xl border border-line bg-surface p-8"
              >
                <Quote size={22} className="text-accent" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                    {event}
                  </p>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
