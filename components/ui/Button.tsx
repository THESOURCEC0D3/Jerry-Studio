import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(212,175,55,0.18)]",
  secondary:
    "border border-white/20 text-foreground hover:border-white/40 hover:bg-white/10",
};

/**
 * Every CTA on the site is a link (to a section anchor or an external
 * channel like WhatsApp), so this renders an <a> styled as a button.
 */
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
