import Image from "next/image";
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
  /**
   * Background photo for the card. Decorative (the title carries the
   * meaning), so `alt` is intentionally empty. To swap: drop a new file
   * in /public/images/portfolio and change the path here — nothing else
   * needs to change.
   */
  image: string;
};

const services: Service[] = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Timeless coverage of your big day — from quiet preparations to the last dance, told frame by frame.",
    image: "/images/portfolio/service-wedding-photography.jpeg",
  },
  {
    icon: Film,
    title: "Wedding Cinematics",
    description:
      "A cinematic film of your wedding day, edited to relive the emotion — not just watch it back.",
    image: "/images/portfolio/service-wedding-cinematics.jpeg",
  },
  {
    icon: Cake,
    title: "Birthday Photography",
    description:
      "Milestone birthdays and intimate celebrations captured with warmth, colour, and personality.",
    image: "/images/portfolio/service-birthday-photography.jpeg",
  },
  {
    icon: Clapperboard,
    title: "Birthday Cinematics",
    description:
      "Highlight films that bottle the energy of your celebration into something you can share in minutes.",
    image: "/images/portfolio/service-birthday-cinematics.jpeg",
  },
  {
    icon: Church,
    title: "Church Event Coverage",
    description:
      "Respectful, unobtrusive coverage of services, dedications, and church programs of every size.",
    image: "/images/portfolio/service-church-event.jpeg",
  },
  {
    icon: Lamp,
    title: "Indoor Event Coverage",
    description:
      "Halls, receptions, and venues — handled with lighting expertise so every shot stays crisp and true.",
    image: "/images/portfolio/service-indoor-event.jpeg",
  },
  {
    icon: TreePine,
    title: "Outdoor Event Coverage",
    description:
      "Open-air ceremonies and gatherings, using natural light to its fullest at any time of day.",
    image: "/images/portfolio/service-outdoor-event.jpeg",
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
          {services.map(({ icon: Icon, title, description, image }, index) => (
            <li key={title}>
              <Reveal
                delay={(index % 3) * 0.1}
                className="group relative flex h-full min-h-88 flex-col justify-end overflow-hidden rounded-xl border border-line transition-colors duration-300 hover:border-white/15 md:min-h-96"
              >
                {/* Background photo — cover, slow zoom on hover (matches the gallery). */}
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* Dark gradient — heaviest at the base so the text stays legible. */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"
                />

                {/* Content, anchored to the lower area of the card. */}
                <div className="relative z-10 p-6 md:p-7">
                  <span className="flex size-11 items-center justify-center rounded-full bg-background/50 ring-1 ring-white/15 backdrop-blur-sm">
                    <Icon size={20} className="text-accent" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
