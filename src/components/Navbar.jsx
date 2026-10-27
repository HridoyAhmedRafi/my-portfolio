"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import SectionLink from "./SectionLink";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
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
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
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
        className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
      >
        {/* Mobile: logo left, buttons right (flex). Desktop: logo | links | buttons (grid) */}
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-border bg-card/90 px-5 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:h-16 sm:px-7 lg:grid lg:grid-cols-[1fr_auto_1fr] dark:shadow-none">
          {/* Logo */}
          <SectionLink
            id="home"
            onClick={closeMenu}
            className="justify-self-start text-xl font-extrabold uppercase tracking-tight text-accent"
          >
            Hridoy.
          </SectionLink>

          {/* Desktop navigation (centered) */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ id, label }) => {
                const isActive = currentId === id;
                return (
                  <li key={id} className="relative">
                    <SectionLink
                      id={id}
                      aria-current={isActive ? "location" : undefined}
                      className={`block px-4 py-2 text-sm font-semibold transition-colors hover:text-accent ${
                        isActive ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {label}
                    </SectionLink>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center gap-2 justify-self-end">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-accent hover:text-accent lg:hidden"
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
