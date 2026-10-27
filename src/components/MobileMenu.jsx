"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLink from "./SectionLink";

export default function MobileMenu({ isOpen, onClose, links, activeId }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-4 top-[5.5rem] z-40 rounded-2xl border border-border bg-card p-2 shadow-xl sm:inset-x-6 lg:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {links.map(({ id, label }) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <SectionLink
                      id={id}
                      onClick={onClose}
                      aria-current={isActive ? "location" : undefined}
                      className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-background text-accent"
                          : "text-foreground hover:bg-background"
                      }`}
                    >
                      {label}
                    </SectionLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}