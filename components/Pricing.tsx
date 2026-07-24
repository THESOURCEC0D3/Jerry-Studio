import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { whatsappBookingUrl } from "@/lib/site-config";

/**
 * ⚠️ TEMPORARY PRICING SECTION — no package prices are shown on purpose.
 *
 * A flyer listed Bronze / Regular / Premium tiers (₦500k / ₦700k / ₦1M),
 * but it isn't confirmed whether those are wedding-only or the full
 * offering — so nothing is published yet. Until Jerry confirms them the
 * section positions pricing as *custom and tailored* and routes enquiries
 * to a personalised quote.
 *
 * TO PUBLISH THE REAL PACKAGES LATER:
 * Add a `packages` array (title, price, features[]) and render a card grid
 * in the marked slot below — the header and CTA can stay. This is its own
 * section (its own component), so nothing else needs to change.
 */

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="pricing-heading"
            eyebrow="Services & Packages"
            title="Every Moment, Carefully Preserved."
            subtitle="Every celebration, story, and project is unique. Jerry'Studio creates tailored photography and videography experiences designed to preserve meaningful moments with creativity, precision, and care."
          />
        </Reveal>

        {/* ── Confirmed package cards will render here once Jerry approves them. ── */}

        <Reveal
          delay={0.1}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface px-6 py-12 text-center md:px-10 md:py-14"
        >
          {/* Faint gold glow — same cinematic depth cue as the closing CTA. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_65%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Pricing is built around your event, not the other way round —
              share a few details and receive a quote tailored to exactly what
              your day needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={whatsappBookingUrl}>Get a Custom Quote</Button>
              <Button href="#portfolio" variant="secondary">
                Explore Our Work
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
