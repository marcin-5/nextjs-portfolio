import { Variants } from "framer-motion";

// Constants
const CUBIC_BEZIER = [0.76, 0, 0.24, 1];
const BASE_DURATION = 0.8;
const DELAY_MULTIPLIER = 0.1;

const baseTransition = {
  duration: BASE_DURATION,
  ease: CUBIC_BEZIER,
};

export const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: baseTransition },
  exit: {
    x: "calc(100% + 100px)",
    transition: baseTransition,
  },
};

export const slide: Variants = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { ...baseTransition, delay: DELAY_MULTIPLIER * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { ...baseTransition, delay: DELAY_MULTIPLIER * i },
  }),
};

export const scale: Variants = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
