import { Award, BookOpen, Clock, ScanEye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Copy is benefit-led: each card answers "what does this mean for ME?"
const reasons: Reason[] = [
  {
    icon: Award,
    title: "Professional Experience",
    description:
      "Your event runs once — there are no reshoots. Experience means the key moments get captured the first time, every time.",
  },
  {
    icon: ScanEye,
    title: "Attention to Detail",
    description:
      "The ring, the tears, the décor you spent months planning — the small things you'd forget are the ones you'll treasure.",
  },
  {
    icon: BookOpen,
    title: "Creative Storytelling",
    description:
      "You don't get a folder of random shots. You get a story with a beginning, middle, and end — your day, retold beautifully.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description:
      "Clear timelines agreed before booking, and photos delivered when promised — no chasing, no excuses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="why-heading"
            eyebrow="Why Jerry'Studio"
            title="Why Clients Choose Jerry"
            subtitle="Anyone can own a camera. Trusting someone with moments that never repeat is a different decision."
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <Reveal
                delay={index * 0.1}
                className="h-full rounded-xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-white/15"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                  <Icon size={20} className="text-accent" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
