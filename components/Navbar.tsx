"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site, whatsappBookingUrl } from "@/lib/site-config";

/**
 * Sticky navigation: transparent over the hero, frosted dark glass once
 * the page scrolls. Collapses to a full-screen overlay menu on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page behind the open mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-xl font-medium tracking-tight md:text-2xl"
        >
          Jerry<span className="text-accent">&rsquo;</span>Studio
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={whatsappBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold tracking-wide text-background transition-all duration-300 hover:bg-accent-hover md:inline-flex"
        >
          Book a Session
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-foreground md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>

    {/* Mobile overlay menu — a SIBLING of <header>, not a child: the
        header's backdrop-blur creates a containing block that would
        collapse a fixed-position descendant to zero height. */}
    {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="font-display text-3xl text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-12">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-accent-hover"
            >
              Book a Session — {site.name}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
