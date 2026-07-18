"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before animating — used to stagger sibling cards. */
  delay?: number;
  className?: string;
};

/** Design.md motion tokens: ease-out-quint feel, 0.7s reveals. */
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps any block and fades it in (up 24px) the first time it scrolls
 * into view. Reduced-motion users get a plain opacity fade instead.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
