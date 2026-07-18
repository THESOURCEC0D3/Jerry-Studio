import Image from "next/image";
import { Camera, ChevronDown, Sparkles, Wand2, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { heroImage } from "@/lib/portfolio";
import { whatsappBookingUrl } from "@/lib/site-config";

const trustHighlights = [
  { icon: Camera, label: "Professional Photography" },
  { icon: Sparkles, label: "Creative Storytelling" },
  { icon: Wand2, label: "High-Quality Editing" },
  { icon: Zap, label: "Fast Delivery" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center">
      {/* Full-bleed background image */}
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark overlay: keeps text readable, fades into the page background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-background"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Photography Studio
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Capturing Moments.{" "}
            <span className="italic">Preserving Memories.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            From weddings and birthdays to church programs and special events,
            Jerry&rsquo;Studio captures meaningful moments with creativity,
            professionalism, and attention to detail. Every photograph tells a
            story you&rsquo;ll be proud to revisit for years to come.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappBookingUrl}>Book Your Session</Button>
            <Button href="#portfolio" variant="secondary">
              View Portfolio
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
            {trustHighlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon size={18} className="shrink-0 text-accent" aria-hidden />
                <span className="text-sm text-muted">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <a
        href="#portfolio"
        aria-label="Scroll to portfolio"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ChevronDown size={22} className="motion-safe:animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
