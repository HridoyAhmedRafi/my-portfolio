"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  // Fades out as soon as the visitor starts scrolling
  const opacity = useTransform(scrollY, [0, 160], [1, 0]);
  const pointerEvents = useTransform(scrollY, (value) => (value > 100 ? "none" : "auto"));

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex [@media(max-height:700px)]:hidden">
      <motion.div style={{ opacity, pointerEvents }}>
        <Link
          href="/#about"
          aria-label="Scroll to the About section"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
          <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current p-1.5">
            <span className="scroll-dot h-1.5 w-1 rounded-full bg-current" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}