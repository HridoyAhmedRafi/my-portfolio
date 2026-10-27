"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-accent"
    >
      {/* Dark mode is on: show the Moon */}
      <Moon
        size={18}
        className="hidden text-accent dark:block"
        aria-hidden="true"
      />
      {/* Light mode is on: show the Sun */}
      <Sun
        size={18}
        className="block text-amber-500 dark:hidden"
        aria-hidden="true"
      />
    </button>
  );
}
