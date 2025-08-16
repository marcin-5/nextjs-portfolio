import { mergeClassNames as mcn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC, MouseEvent, ReactNode, useRef, useState } from "react";

const transitionParams = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
}

interface MiddlePoint {
  x: number;
  y: number;
}

const calculateMiddle = (
  eventX: number,
  eventY: number,
  left: number,
  width: number,
  top: number,
  height: number,
): MiddlePoint => {
  const middleX = eventX - (left + width / 2);
  const middleY = eventY - (top + height / 2);
  return { x: middleX, y: middleY };
};

const MagneticWrapper: FC<MagneticWrapperProps> = ({ children = null, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const onMouseMove = ({ clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    const boundingRect = divRef.current?.getBoundingClientRect();
    if (divRef.current && boundingRect) {
      const { width, height, top, left } = boundingRect;
      setPosition(calculateMiddle(clientX, clientY, left, width, top, height));
    }
  };

  return (
    <div className={mcn("relative", className)} ref={divRef} onMouseMove={onMouseMove} onMouseLeave={resetPosition}>
      <motion.div animate={{ x, y }} transition={transitionParams}>
        {children}
      </motion.div>
    </div>
  );
};

export default MagneticWrapper;
