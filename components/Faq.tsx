"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";

/**
 * NOTE FOR JERRY: the answers below are sensible defaults. Confirm the
 * specifics (delivery timeline, travel policy) and edit the text here.
 */
type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do I book?",
    answer:
      "Tap any \"Book Your Session\" button on this page — it opens a WhatsApp chat with Jerry directly. Share your event type, date, and location, and you'll get a response with availability and package options. You can also reach out by email if you prefer.",
  },
  {
    question: "How early should I book?",
    answer:
      "As early as you can. Dates are reserved on a first-come basis, and weekends — especially in festive seasons — fill up fast. For weddings, a few months ahead is ideal; for smaller events, a few weeks is usually enough.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. Jerry'Studio covers events outside the local area — travel arrangements and any associated costs are simply discussed and agreed during booking, so there are no surprises.",
  },
  {
    question: "How long before I receive my photos?",
    answer:
      "A set of edited highlights is delivered shortly after your event, with the complete edited gallery following within the timeline agreed at booking — depending on the size of the event and package.",
  },
  {
    question: "Do you cover weddings?",
    answer:
      "Absolutely — weddings are at the heart of what Jerry'Studio does. Both traditional and white weddings are covered, with photography, cinematics, or both combined.",
  },
  {
    question: "Can I request custom packages?",
    answer:
      "Yes. No two events are the same, so packages are flexible — tell Jerry what your event needs (hours of coverage, photo and video, prints), and a package will be built around it.",
  },
];

export default function Faq() {
  // Index of the open item; null means all closed. One open at a time.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Everything you might want to know before reaching out."
          />
        </Reveal>

        <div className="space-y-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={question} delay={index * 0.05}>
                <div className="rounded-xl border border-line bg-surface">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="flex w-full items-center justify-between gap-4 rounded-xl px-6 py-5 text-left text-sm font-semibold md:text-base"
                    >
                      {question}
                      <ChevronDown
                        size={18}
                        aria-hidden
                        className={`shrink-0 text-accent transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  {/* CSS grid-rows trick: rows animate 0fr -> 1fr for smooth height */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
