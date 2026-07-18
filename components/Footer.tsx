import { Mail, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import {
  emailUrl,
  instagramUrl,
  navLinks,
  site,
  whatsappBookingUrl,
} from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-medium tracking-tight md:text-2xl">
            Jerry<span className="text-accent">&rsquo;</span>Studio
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline} Professional photography and cinematics for
            weddings, birthdays, church programs, and special events.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <MessageCircle size={16} className="text-accent" aria-hidden />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <InstagramIcon size={16} className="text-accent" />
                @{site.instagram}
              </a>
            </li>
            <li>
              <a
                href={emailUrl}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail size={16} className="text-accent" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-muted sm:text-left lg:px-8">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
