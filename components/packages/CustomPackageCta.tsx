import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { customPackageUrl } from "@/lib/packages";

/**
 * The final conversion moment of the Packages page: a full-bleed
 * cinematic panel for visitors whose event isn't a listed package.
 * Deliberately unlike the pricing cards above — image-led, editorial.
 */
export default function CustomPackageCta() {
  return (
    <section aria-labelledby="custom-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl border border-line">
          {/* Cinematic background photo + soft dark overlay for legibility. */}
          <Image
            src="/images/portfolio/service-wedding-cinematics.jpeg"
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.10),transparent_65%)]"
          />

          <div className="relative px-6 py-20 text-center md:px-10 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Tailored to You
            </p>
            <h2
              id="custom-heading"
              className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium leading-[1.15] sm:text-4xl md:text-5xl"
            >
              Need a Custom Package?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Every event is unique, and not every occasion fits a standard
              package. Whether you&rsquo;re planning an engagement, baby
              dedication, maternity session, anniversary, corporate event,
              family portrait, or another special celebration, {""}
              Jerry&rsquo;Studio will craft a package built around exactly what
              you need.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href={customPackageUrl}>Request a Custom Quote</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
