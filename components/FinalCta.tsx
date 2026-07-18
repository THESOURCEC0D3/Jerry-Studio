import { Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import InstagramIcon from "@/components/ui/InstagramIcon";
import Reveal from "@/components/Reveal";
import {
  emailUrl,
  instagramUrl,
  site,
  whatsappBookingUrl,
} from "@/lib/site-config";

/**
 * The closing conversion moment — also the #contact anchor target,
 * so it carries the direct contact channels alongside the main CTA.
 */
export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-20 text-center md:py-28">
          {/* Faint gold glow behind the headline */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)]"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Ready When You Are
            </p>
            <h2
              id="cta-heading"
              className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium leading-[1.15] sm:text-4xl md:text-5xl"
            >
              Let&rsquo;s Capture <span className="italic">Your</span> Story
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Whether you&rsquo;re planning a wedding, birthday, church event,
              or another special occasion, {site.name} is ready to help
              preserve your memories beautifully.
            </p>

            <div className="mt-10 flex justify-center">
              <Button href={whatsappBookingUrl}>Book Your Session</Button>
            </div>

            {/* Direct contact channels */}
            <ul className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-muted sm:flex-row sm:gap-10">
              <li>
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <MessageCircle size={16} className="text-accent" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={emailUrl}
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail size={16} className="text-accent" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <InstagramIcon size={16} className="text-accent" />@
                  {site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
