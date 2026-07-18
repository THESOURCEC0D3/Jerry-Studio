"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { portfolioImages } from "@/lib/portfolio";

/**
 * Masonry-style gallery (CSS columns) + full-screen lightbox.
 * Client Component: the lightbox needs state and keyboard handling.
 */
export default function PortfolioGallery() {
  // Index of the image open in the lightbox, or null when closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActiveIndex(null);
    // Return keyboard focus to the thumbnail that opened the lightbox.
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      const count = portfolioImages.length;
      return (current + direction + count) % count;
    });
  }, []);

  // Keyboard controls while the lightbox is open.
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex !== null, close, step]);

  const activeImage = activeIndex === null ? null : portfolioImages[activeIndex];

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="portfolio-heading"
            eyebrow="Featured Work"
            title="Featured Work"
            subtitle="A collection of memorable moments captured for real clients."
          />
        </Reveal>

        {/* CSS-columns masonry: images keep their natural aspect ratios */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {portfolioImages.map((image, index) => (
            <Reveal key={image.src + index} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
                aria-label={`View larger: ${image.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Hover overlay with category label */}
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {image.category}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${activeIndex + 1} of ${portfolioImages.length}: ${activeImage.alt}`}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 rounded-full p-2 text-muted transition-colors hover:text-foreground"
            >
              <X size={26} aria-hidden />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 rounded-full p-2 text-muted transition-colors hover:text-foreground md:left-6"
            >
              <ChevronLeft size={30} aria-hidden />
            </button>

            <figure
              className="max-h-full"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                sizes="90vw"
                className="max-h-[82svh] w-auto rounded-lg object-contain"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-muted">
                <span className="uppercase tracking-[0.2em] text-accent">
                  {activeImage.category}
                </span>
                <span>
                  {activeIndex + 1} / {portfolioImages.length}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-3 rounded-full p-2 text-muted transition-colors hover:text-foreground md:right-6"
            >
              <ChevronRight size={30} aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
