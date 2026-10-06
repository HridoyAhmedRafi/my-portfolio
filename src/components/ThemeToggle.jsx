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
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {/* Dark mode: show Sun (click to go light) */}
      <Sun size={18} className="hidden dark:block" aria-hidden="true" />
      {/* Light mode: show Moon (click to go dark) */}
      <Moon size={18} className="block dark:hidden" aria-hidden="true" />
    </button>
  );
}
