/**
 * Single source of truth for every Jerry'Studio package.
 *
 * To change a price, feature, or add a whole new tier: edit the data
 * below — the Packages page and the homepage preview both read from here,
 * so nothing in the components needs to change.
 */

import { site } from "@/lib/site-config";

/** ₦1,000,000 → "₦1,000,000" (en-US grouping is always comma-separated). */
export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-US")}`;

/**
 * Builds a WhatsApp deep-link with a message pre-filled for one package,
 * so a visitor's enquiry arrives already naming what they want.
 */
export function bookingUrl(packageLabel: string): string {
  const message = `Hello ${site.name},\n\nI'm interested in your ${packageLabel}.\nI'd like to know if my preferred date is available.\n\nThank you.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** The closing "custom package" enquiry link. */
export const customPackageUrl = (() => {
  const message = `Hello ${site.name},\n\nI'm interested in a custom photography/videography package for my event.\nI'd like to discuss my requirements and receive a personalised quote.\n\nThank you.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
})();

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

/** A standard priced tier (Wedding, Traditional, Convocation). */
export type Tier = {
  name: string;
  price: number;
  features: string[];
  /** Visually emphasised as the flagship tier. */
  featured?: boolean;
  /** Pre-built WhatsApp booking link. */
  href: string;
};

/** One priced option inside a Birthday location card. */
export type BirthdayOption = {
  label: string;
  price: number;
  features: string[];
  href: string;
};

/** A Birthday location card (Outdoor / Indoor) holding two options. */
export type BirthdayGroup = {
  name: string;
  options: BirthdayOption[];
};

/** A homepage preview card that links into the full Packages page. */
export type CategoryPreview = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

/* ------------------------------------------------------------------ */
/* Homepage preview categories                                        */
/* ------------------------------------------------------------------ */

export const categoryPreviews: CategoryPreview[] = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description:
      "Full-day coverage, pre-wedding shoots, and cinematic films across three curated tiers.",
    image: "/images/portfolio/service-wedding-photography.jpeg",
    href: "/packages#wedding",
  },
  {
    id: "traditional",
    title: "Traditional Ceremony",
    description:
      "Respectful, vivid coverage of your traditional rites — photography and film together.",
    image: "/images/portfolio/traditional-bride-procession.jpeg",
    href: "/packages#traditional",
  },
  {
    id: "birthday",
    title: "Birthday Photography",
    description:
      "Studio or on-location sessions with flexible outfit and print options for any milestone.",
    image: "/images/portfolio/studio-portrait-cream.jpeg",
    href: "/packages#birthday",
  },
  {
    id: "convocation",
    title: "Convocation Photography",
    description:
      "Celebrate the achievement with polished portraits, reels, and fast turnaround.",
    image: "/images/portfolio/graduation-friends.jpeg",
    href: "/packages#convocation",
  },
];

/* ------------------------------------------------------------------ */
/* Wedding                                                            */
/* ------------------------------------------------------------------ */

export const weddingPackages: Tier[] = [
  {
    name: "Regular",
    price: 500_000,
    href: bookingUrl("Regular Wedding Package"),
    features: [
      "Flash Drive",
      "Pre-Wedding Shoot",
      "Full HD Video",
      "Highlight / Trailer Video",
      "All Soft Copies",
      "Photographer",
      "Videographer",
    ],
  },
  {
    name: "Bronze",
    price: 700_000,
    href: bookingUrl("Bronze Wedding Package"),
    features: [
      "Regular Photobook (12×24)",
      "Flash Drive",
      "Pre-Wedding Shoot",
      "Bridal Shower",
      "Full HD Video",
      "Highlight / Trailer Video",
      "All Soft Copies",
      "Photographer",
      "Videographer",
      "Content Creator",
      "Crystal Borderless Frame (12×16)",
    ],
  },
  {
    name: "Premium",
    price: 1_000_000,
    featured: true,
    href: bookingUrl("Premium Wedding Package"),
    features: [
      "Synthetic Photobook (12×12)",
      "Flash Drive",
      "Pre-Wedding Shoot",
      "Bridal Shower",
      "Full HD Video",
      "Highlight / Trailer Video",
      "All Soft Copies",
      "2 Photographers",
      "2 Videographers",
      "Content Creator",
      "2 Crystal Borderless Frames (16×20)",
    ],
  },
];

export const weddingNotes: string[] = [
  "Pre-wedding venue costs are covered by the client.",
  "Bridal Shower can be added to the Regular package for ₦50,000.",
  "Drone coverage is available for ₦60,000.",
];

/* ------------------------------------------------------------------ */
/* Traditional Ceremony                                               */
/* ------------------------------------------------------------------ */

export const traditionalPackages: Tier[] = [
  {
    name: "Regular",
    price: 350_000,
    href: bookingUrl("Regular Traditional Ceremony Package"),
    features: [
      "Flash Drive",
      "Full HD Video",
      "Highlight / Trailer Video",
      "All Soft Copies",
      "Photographer",
      "Videographer",
      "Borderless Frame",
    ],
  },
  {
    name: "Premium",
    price: 650_000,
    featured: true,
    href: bookingUrl("Premium Traditional Ceremony Package"),
    features: [
      "Regular Photobook (12×24)",
      "Flash Drive",
      "Full HD Video",
      "Highlight / Trailer Video",
      "All Soft Copies",
      "Photographer",
      "Videographer",
      "Content Creator",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Birthday                                                           */
/* ------------------------------------------------------------------ */

export const birthdayGroups: BirthdayGroup[] = [
  {
    name: "Outdoor",
    options: [
      {
        label: "Package 1",
        price: 50_000,
        features: ["5 Pictures", "1 Outfit"],
        href: bookingUrl("Outdoor Birthday Package (Package 1 — ₦50,000)"),
      },
      {
        label: "Package 2",
        price: 70_000,
        features: ["7 Pictures", "2 Outfits"],
        href: bookingUrl("Outdoor Birthday Package (Package 2 — ₦70,000)"),
      },
    ],
  },
  {
    name: "Indoor",
    options: [
      {
        label: "Package 1",
        price: 75_000,
        features: ["5 Pictures", "1 Outfit"],
        href: bookingUrl("Indoor Birthday Package (Package 1 — ₦75,000)"),
      },
      {
        label: "Package 2",
        price: 100_000,
        features: ["7 Pictures", "2 Outfits"],
        href: bookingUrl("Indoor Birthday Package (Package 2 — ₦100,000)"),
      },
    ],
  },
];

export const birthdayExtraPhoto = 3_000;
export const birthdayNote =
  "Outdoor locations are chosen and paid for by the client.";

/* ------------------------------------------------------------------ */
/* Convocation                                                        */
/* ------------------------------------------------------------------ */

export const convocationPackages: Tier[] = [
  {
    name: "Basic",
    price: 25_000,
    href: bookingUrl("Basic Convocation Package"),
    features: ["4 Pictures"],
  },
  {
    name: "Bronze",
    price: 60_000,
    href: bookingUrl("Bronze Convocation Package"),
    features: ["6 Pictures", "Short Reels Video"],
  },
  {
    name: "Premium",
    price: 100_000,
    featured: true,
    href: bookingUrl("Premium Convocation Package"),
    features: ["8 Pictures", "2 Outfits", "Reels Video"],
  },
];

export const convocationExtraPhoto = 1_500;
export const convocationDelivery = "2–3 Days";
