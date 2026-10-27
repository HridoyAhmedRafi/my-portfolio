"use client";

import { useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";

const styles =
  "cursor-pointer inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent";

export default function ResumeButton() {
  const [showNote, setShowNote] = useState(false);

  if (profile.resume) {
    return (
      <Link
        href={profile.resume}
        download="Hridoy-Ahmed-Rafi-Resume.pdf"
        className={styles}
      >
        <Download size={18} aria-hidden="true" />
        Resume
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowNote(true)}
        className={styles}
      >
        <Download size={18} aria-hidden="true" />
        Resume
      </button>
      <p
        role="status"
        aria-live="polite"
        className="absolute left-0 top-full mt-2 whitespace-nowrap text-xs text-muted"
      >
        {showNote && "Resume coming soon."}
      </p>
    </div>
  );
}
