"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const TYPING_SPEED = 85; // ms per character while typing
const DELETING_SPEED = 40; // ms per character while erasing
const PAUSE_AFTER_TYPING = 1700; // how long a finished title stays on screen
const PAUSE_AFTER_DELETING = 350; // short break before the next title

export default function TypingText({ titles, fallback }) {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const current = titles[index];
    let timer;

    if (!isDeleting && text === current) {
      // Fully typed: wait, then start erasing
      timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
    } else if (isDeleting && text === "") {
      // Fully erased: move to the next title
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % titles.length);
      }, PAUSE_AFTER_DELETING);
    } else {
      // Type or erase one character
      timer = setTimeout(
        () =>
          setText(
            isDeleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, titles, reduceMotion]);

  // People who prefer reduced motion get a plain, static title
  if (reduceMotion) return <span>{fallback}</span>;

  return (
    <>
      {/* Screen readers read the main title once instead of every letter */}
      <span className="sr-only">{fallback}</span>
      <span aria-hidden="true" className="inline-block min-h-[1.5em]">
        {text}
        <span className="typing-cursor" />
      </span>
    </>
  );
}