"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * Real client feedback, lightly polished from the original WhatsApp
 * messages while preserving their meaning. No names, events, or dates
 * are invented — attribution stays neutral until Jerry confirms details
 * we can safely publish.
 *
 * TO ADD A TESTIMONIAL: append an entry below. The featured-quote layout
 * scales to any count — nothing else needs to change.
 */
type Testimonial = {
  quote: string;
  attribution: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The photos look really beautiful. Thank you so much.",
    attribution: "Client Review",
  },
  {
    quote:
      "He absolutely loved the work you did for us. You have truly won his heart.",
    attribution: "Client Review",
  },
  {
    quote:
      "The work is excellent. I would be happy to work with you again.",
    attribution: "Client Review",
  },
];

/** Design.md motion token: ease-out-quint feel. */
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Gentle auto-advance — paused on hover/focus, and disabled entirely for
  // reduced-motion users so nothing moves without their input.
  useEffect(() => {
    if (prefersReducedMotion || isPaused || testimonials.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(id);
  }, [prefersReducedMotion, isPaused]);

  const active = testimonials[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Faint gold glow — same cinematic depth cue as the closing CTA. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Kind Words
            </p>
            <h2
              id="testimonials-heading"
              className="mt-4 font-display text-3xl font-medium leading-[1.15] sm:text-4xl md:text-5xl"
            >
              In Their Words
            </h2>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="group relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <Quote
              size={44}
              className="mx-auto text-accent/70"
              aria-hidden
            />

            {/* Reserve height so the layout never jumps between quote lengths. */}
            <div className="relative mt-8 flex min-h-[13rem] items-center justify-center sm:min-h-[11rem] md:min-h-[12rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 12,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <blockquote className="font-display text-2xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-[1.2]">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    &mdash; {active.attribution}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Dot navigation — jump to any testimonial. */}
            {testimonials.length > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                {testimonials.map((_, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                      aria-current={isActive}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-accent"
                          : "w-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
