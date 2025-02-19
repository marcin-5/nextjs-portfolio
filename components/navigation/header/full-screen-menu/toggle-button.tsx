import { mergeClassNames } from "@/lib/utils";
import React from "react";

interface Props {
  open: boolean;
  toggleOpen: (updater: (prev: boolean) => boolean) => void;
}

export default function ToggleButton({ open, toggleOpen }: Props) {
  const RenderBar = ({ extraClass, delay }: { extraClass?: string; delay?: string }) => (
    <div
      className={mergeClassNames(
        `bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${extraClass || ""}`,
        delay ? `delay-${delay}` : "",
        { "translate-x-10": open },
      )}
    />
  );

  const RenderCross = ({ rotateClass }: { rotateClass: string }) => (
    <div
      className={mergeClassNames("absolute bg-white h-[2px] w-7 transform transition-all duration-500 delay-300", {
        [rotateClass]: open,
      })}
    />
  );

  return (
    <button
      onClick={() => toggleOpen((prev) => !prev)}
      className="fixed right-4 top-4 m-5 z-50 w-20 h-20 rounded-full bg-slate-800 cursor-pointer"
    >
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-y-2 w-[30px] transform transition-all duration-300 origin-center overflow-hidden">
          {/* Static Bars */}
          <RenderBar />
          <RenderBar delay="75" />
          <RenderBar extraClass="w-3 delay-150 hover:w-7" />
          {/* Cross Icon */}
          <div
            className={mergeClassNames(
              "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0",
              { "translate-x-0 w-12": open },
            )}
          >
            <RenderCross rotateClass="rotate-45" />
            <RenderCross rotateClass="-rotate-45" />
          </div>
        </div>
      </div>
    </button>
  );
}
