"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SectionLink({ id, onClick, children, ...props }) {
  const pathname = usePathname();

  const handleClick = (event) => {
    onClick?.(event);

    // Let the browser handle ctrl/cmd/shift clicks (open in a new tab, etc.)
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    // On other pages (like a project page), let Next.js go to the home page
    if (pathname !== "/") return;

    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView(); // uses the smooth scroll from globals.css
    window.history.replaceState(null, "", `/#${id}`);
  };

  return (
    <Link href={`/#${id}`} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}