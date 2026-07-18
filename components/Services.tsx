import {
  Cake,
  Camera,
  Church,
  Clapperboard,
  Film,
  Lamp,
  TreePine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Timeless coverage of your big day — from quiet preparations to the last dance, told frame by frame.",
  },
  {
    icon: Film,
    title: "Wedding Cinematics",
    description:
      "A cinematic film of your wedding day, edited to relive the emotion — not just watch it back.",
  },
  {
    icon: Cake,
    title: "Birthday Photography",
    description:
      "Milestone birthdays and intimate celebrations captured with warmth, colour, and personality.",
  },
  {
    icon: Clapperboard,
    title: "Birthday Cinematics",
    description:
      "Highlight films that bottle the energy of your celebration into something you can share in minutes.",
  },
  {
    icon: Church,
    title: "Church Event Coverage",
    description:
      "Respectful, unobtrusive coverage of services, dedications, and church programs of every size.",
  },
  {
    icon: Lamp,
    title: "Indoor Event Coverage",
    description:
      "Halls, receptions, and venues — handled with lighting expertise so every shot stays crisp and true.",
  },
  {
    icon: TreePine,
    title: "Outdoor Event Coverage",
    description:
      "Open-air ceremonies and gatherings, using natural light to its fullest at any time of day.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="What Jerry'Studio Covers"
            subtitle="Whatever the occasion, there's a package built around it — photography, cinematics, or both."
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <Reveal
                delay={(index % 3) * 0.1}
                className="group h-full rounded-xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-white/15"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
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
