"use client";

import React from "react";

type ScrollDownProps = {
  targetId?: string; // default: 'about'
};

export default function ScrollDown({ targetId = "about" }: ScrollDownProps) {
  const handleActivate = () => {
    try {
      if (typeof document !== "undefined" && targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      if (typeof window !== "undefined") {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }
    } catch (_) {
      // no-op: fail quietly
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <button
      type="button"
      aria-label="Scroll to next section"
      onClick={handleActivate}
      onKeyDown={onKeyDown}
      className="pointer-events-auto cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded-full grid place-items-center border border-primary-foreground w-24 h-24 sm:w-40 sm:h-40"
    >
      <span className="grid place-items-center w-10 h-12 sm:w-[2.9rem] sm:h-[3.6rem]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "translate3d(1.13422e-12px, -2.19519e-13px, 0px)" }}
        >
          <path
            d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
}
