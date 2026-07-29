import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { categoryPreviews } from "@/lib/packages";

/**
 * Homepage preview of the Packages experience. It introduces the service
 * categories (not every price) and sends visitors to the full catalogue.
 * Reuses the image-card treatment from the Services section so it reads
 * as part of the same design language.
 */
export default function PackagesPreview() {
  return (
    <section id="packages" aria-labelledby="packages-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="packages-heading"
            eyebrow="Our Packages"
            title="Packages for Every Occasion"
            subtitle="From weddings to convocations, each celebration has its own carefully crafted package. Explore the category that fits your story."
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryPreviews.map((category, index) => (
            <li key={category.id}>
              <Reveal delay={(index % 4) * 0.08} className="h-full">
                <a
                  href={category.href}
                  className="group relative flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-xl border border-line transition-colors duration-300 hover:border-white/15"
                >
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"
                  />

                  <div className="relative z-10 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Explore Packages
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
