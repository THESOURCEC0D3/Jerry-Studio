import { Camera, CalendarCheck2, MessageCircle, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MessageCircle,
    title: "Contact Jerry",
    description: "Reach out on WhatsApp or email with your event type and date.",
  },
  {
    icon: Users,
    title: "Discuss Your Event",
    description: "Talk through your plans, coverage needs, and the right package.",
  },
  {
    icon: CalendarCheck2,
    title: "Confirm Booking",
    description: "Lock in your date — it's reserved for you and you alone.",
  },
  {
    icon: Camera,
    title: "Capture & Deliver Memories",
    description: "Jerry covers your day, then delivers your edited memories on time.",
  },
];

export default function BookingProcess() {
  return (
    <section aria-labelledby="process-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="How It Works"
            title="Booking Is Simple"
            subtitle="From first message to final delivery — four steps, no complications."
          />
        </Reveal>

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative">
              <Reveal delay={index * 0.12} className="flex flex-col items-center text-center">
                <div className="relative flex w-full items-center justify-center">
                  {/* Connecting line between steps (desktop only) */}
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-1/2 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-accent/40 to-line lg:block"
                    />
                  )}
                  <span className="flex size-20 items-center justify-center rounded-full border border-accent/30 bg-surface">
                    <Icon size={26} className="text-accent" aria-hidden />
                  </span>
                </div>
                <span className="mt-5 text-xs font-semibold tracking-[0.2em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
