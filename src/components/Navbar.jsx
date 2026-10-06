"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      // Add a border to the navbar after the user scrolls a little
      setScrolled(window.scrollY > 10);

      if (!isHome) return;

      // The active section is the last one whose top has passed this line
      const triggerLine = window.innerHeight * 0.35;
      let currentId = navLinks[0].id;

      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= triggerLine) {
          currentId = id;
        }
      });

      // At the very bottom of the page, the last section is active
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (reachedBottom) {
        currentId = navLinks[navLinks.length - 1].id;
      }

      setActiveId(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHome]);

  // On project detail pages no section is active
  const currentId = isHome ? activeId : null;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 h-16 bg-background/85 backdrop-blur-md transition-colors ${
          scrolled || menuOpen ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <Link
            href="/#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight"
          >
            Hridoy<span className="text-accent">.</span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ id, label }) => {
                const isActive = currentId === id;
                return (
                  <li key={id} className="relative">
                    <Link
                      href={`/#${id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                        isActive ? "text-accent" : "text-muted"
                      }`}
                    >
                      {label}
                    </Link>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={closeMenu}
        links={navLinks}
        activeId={currentId}
      />
    </>
  );
}