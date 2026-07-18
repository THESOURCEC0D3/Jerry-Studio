/**
 * All of Jerry's business details live here and ONLY here.
 * To go live: replace every PLACEHOLDER value below — nothing else
 * in the codebase needs to change.
 */

export const site = {
  name: "Jerry'Studio",
  tagline: "Capturing Moments. Preserving Memories.",

  // PLACEHOLDER — replace with Jerry's real WhatsApp number in
  // international format, digits only (e.g. "2348012345678").
  whatsappNumber: "2340000000000",

  // PLACEHOLDER — replace with Jerry's real email.
  email: "hello@jerrystudio.example",

  // PLACEHOLDER — replace with Jerry's real Instagram handle (no @).
  instagram: "jerrystudio",
} as const;

/** Pre-filled WhatsApp message so an enquiry takes one tap. */
const bookingMessage =
  "Hello Jerry'Studio! I'd like to book a photography session. My event: ";

export const whatsappBookingUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;

export const instagramUrl = `https://instagram.com/${site.instagram}`;

export const emailUrl = `mailto:${site.email}`;

/** Anchor navigation — one page, sections as destinations. */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
