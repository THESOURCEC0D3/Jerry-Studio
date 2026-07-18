import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/images/jerry-portrait-bw.jpeg"
              alt="Black and white portrait of Jerry, founder of Jerry'Studio, adjusting the lens of his camera outside the studio."
              width={960}
              height={1280}
              sizes="(min-width: 640px) 448px, 100vw"
              className="w-full"
            />
            {/* Subtle gold corner accents framing the portrait */}
            <span aria-hidden className="absolute top-4 left-4 h-8 w-8 border-t border-l border-accent/40" />
            <span aria-hidden className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-accent/40" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Meet Jerry"
            align="left"
          />
          <div className="-mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
            <p className="font-display text-lg italic text-foreground md:text-xl">
              Photography is more than taking pictures.
            </p>
            <p>
              It&rsquo;s about preserving emotions, celebrating milestones, and
              telling stories that people can revisit for years.
            </p>
            <p>
              At Jerry&rsquo;Studio, every event is approached with
              professionalism, creativity, and genuine care — because every
              moment deserves to be remembered beautifully.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
