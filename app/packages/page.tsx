import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PackageCard from "@/components/packages/PackageCard";
import BirthdayCard from "@/components/packages/BirthdayCard";
import CustomPackageCta from "@/components/packages/CustomPackageCta";
import { whatsappBookingUrl } from "@/lib/site-config";
import {
  birthdayExtraPhoto,
  birthdayGroups,
  birthdayNote,
  convocationDelivery,
  convocationExtraPhoto,
  convocationPackages,
  formatNaira,
  traditionalPackages,
  weddingNotes,
  weddingPackages,
  type Tier,
} from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages — Jerry'Studio",
  description:
    "Explore Jerry'Studio's photography and videography packages for weddings, traditional ceremonies, birthdays, and convocations — or request a custom quote.",
};

/** A responsive grid of standard tier cards, revealed with a stagger. */
function TierGrid({ tiers, className }: { tiers: Tier[]; className: string }) {
  return (
    <div className={className}>
      {tiers.map((tier, index) => (
        <Reveal key={tier.name} delay={(index % 3) * 0.1} className="h-full">
          <PackageCard tier={tier} />
        </Reveal>
      ))}
    </div>
  );
}

/** Elegant caveats panel shown beneath a pricing section. */
function NotePanel({ title, notes }: { title: string; notes: string[] }) {
  return (
    <Reveal
      delay={0.1}
      className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-surface p-8 md:mt-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {notes.map((note) => (
          <li
            key={note}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted"
          >
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Small pill row for at-a-glance facts (extra photo cost, delivery time). */
function InfoPills({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm"
        >
          <span className="font-medium text-foreground">{item.label}</span>
          <span className="text-accent">{item.value}</span>
        </span>
      ))}
    </div>
  );
}

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="packages-hero-heading"
          className="relative flex min-h-[86svh] items-center justify-center overflow-hidden"
        >
          <Image
            src="/images/portfolio/traditional-wedding-couple-bw.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background"
          />

          <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-16 text-center lg:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Our Packages
              </p>
              <h1
                id="packages-hero-heading"
                className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
              >
                Find the Perfect Package
                <span className="block">For Your Special Occasion</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Every event tells a different story. Our carefully crafted
                photography and videography packages are designed to preserve
                your most meaningful moments with creativity, professionalism,
                and attention to detail.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={whatsappBookingUrl}>Book Your Session</Button>
                <Button href="#wedding" variant="secondary">
                  View Packages
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Wedding ───────────────────────────────────────────── */}
        <section id="wedding" aria-labelledby="wedding-heading" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                id="wedding-heading"
                eyebrow="Weddings"
                title="Wedding Packages"
                subtitle="Full-day storytelling — from the pre-wedding shoot to the highlight film — across three tiers."
              />
            </Reveal>
            <TierGrid
              tiers={weddingPackages}
              className="grid gap-6 lg:grid-cols-3"
            />
            <NotePanel title="Good to Know" notes={weddingNotes} />
          </div>
        </section>

        {/* ── Traditional Ceremony ──────────────────────────────── */}
        <section
          id="traditional"
          aria-labelledby="traditional-heading"
          className="py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                id="traditional-heading"
                eyebrow="Traditional"
                title="Traditional Ceremony"
                subtitle="Vivid, respectful coverage of your rites — photography and film, beautifully preserved."
              />
            </Reveal>
            <TierGrid
              tiers={traditionalPackages}
              className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2"
            />
          </div>
        </section>

        {/* ── Birthday ──────────────────────────────────────────── */}
        <section id="birthday" aria-labelledby="birthday-heading" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                id="birthday-heading"
                eyebrow="Birthdays"
                title="Birthday Photography"
                subtitle="Choose an outdoor or indoor session, then pick the picture and outfit count that suits your celebration."
              />
            </Reveal>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {birthdayGroups.map((group, index) => (
                <Reveal key={group.name} delay={(index % 2) * 0.1} className="h-full">
                  <BirthdayCard group={group} />
                </Reveal>
              ))}
            </div>

            <InfoPills
              items={[
                {
                  label: "Extra Photo",
                  value: `${formatNaira(birthdayExtraPhoto)} each`,
                },
              ]}
            />
            <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-muted">
              {birthdayNote}
            </p>
          </div>
        </section>

        {/* ── Convocation ───────────────────────────────────────── */}
        <section
          id="convocation"
          aria-labelledby="convocation-heading"
          className="py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                id="convocation-heading"
                eyebrow="Convocation"
                title="Convocation Packages"
                subtitle="Mark the milestone with polished portraits and reels — delivered fast."
              />
            </Reveal>
            <TierGrid
              tiers={convocationPackages}
              className="grid gap-6 lg:grid-cols-3"
            />
            <InfoPills
              items={[
                {
                  label: "Extra Photo",
                  value: `${formatNaira(convocationExtraPhoto)} each`,
                },
                { label: "Delivery", value: convocationDelivery },
              ]}
            />
          </div>
        </section>

        {/* ── Custom package (final conversion) ─────────────────── */}
        <CustomPackageCta />
      </main>
      <Footer />
    </>
  );
}
