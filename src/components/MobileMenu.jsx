"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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
    document.body.style.overflow = "hidden"; // stop page scroll behind the menu

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
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
          className="fixed inset-x-0 bottom-0 top-16 z-40 bg-background lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-6xl px-6 py-6"
          >
            <ul className="flex flex-col gap-1">
              {links.map(({ id, label }) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <Link
                      href={`/#${id}`}
                      onClick={onClose}
                      aria-current={isActive ? "location" : undefined}
                      className={`block rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                        isActive
                          ? "bg-card text-accent"
                          : "text-foreground hover:bg-card"
                      }`}
                    >
                      {label}
                    </Link>
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
