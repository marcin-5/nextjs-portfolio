"use client";
import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (callback: () => void) => {
  const animationRequestId = useRef<number | null>(null);

  const stopAnimation = useCallback(() => {
    if (animationRequestId.current !== null) {
      cancelAnimationFrame(animationRequestId.current);
    }
  }, []);

  const startAnimation = useCallback(() => {
    stopAnimation();
    animationRequestId.current = requestAnimationFrame(() => {
      callback();
      startAnimation();
    });
  }, [callback, stopAnimation]);

  useEffect(() => {
    return () => stopAnimation(); // Cleanup animation frame on unmount
  }, [stopAnimation]);

  return { startAnimation, stopAnimation };
};

export default function SvgCurve() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const progressRef = useRef(0);
  const mouseXRatioRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);

  const DEFAULT_PROGRESS = 0;
  const NEUTRAL_POINT = 0.5;

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const { movementY } = event;
    const box = (event.target as HTMLElement).getBoundingClientRect();
    mouseXRatioRef.current = (event.clientX - box.left) / box.width;
    progressRef.current += movementY;
  }, []);

  const updatePathAttribute = useCallback((value: number) => {
    const width = window.innerWidth * 0.7;
    pathRef.current?.setAttributeNS(null, "d", `M 0 50 Q ${width * mouseXRatioRef.current} ${50 + value} ${width} 50`);
  }, []);

  const linearInterpolate = useCallback(
    (from: number, to: number, alpha: number) => from * (1 - alpha) + to * alpha,
    [],
  );

  const { startAnimation: startAnimateIn, stopAnimation: stopAnimateIn } = useAnimationFrame(() => {
    updatePathAttribute(progressRef.current);
  });

  const resetAnimationState = useCallback(() => {
    timeRef.current = Math.PI / 2;
    progressRef.current = DEFAULT_PROGRESS;
  }, [DEFAULT_PROGRESS]);

  const { startAnimation: startAnimateOut, stopAnimation: stopAnimateOut } = useAnimationFrame(() => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    updatePathAttribute(newProgress);
    progressRef.current = linearInterpolate(progressRef.current, 0, 0.04);
    timeRef.current += 0.2;
    if (Math.abs(progressRef.current) <= NEUTRAL_POINT) {
      resetAnimationState();
      stopAnimateOut();
    }
  });

  useEffect(() => {
    startAnimateOut();
    const handleResize = () => {
      updatePathAttribute(progressRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      stopAnimateIn();
      stopAnimateOut();
    };
  }, [startAnimateOut, stopAnimateIn, stopAnimateOut, updatePathAttribute]);

  return (
    <div className="line">
      <span
        onMouseEnter={startAnimateIn}
        onMouseLeave={startAnimateOut}
        onMouseMove={handleMouseMove}
        className="box"
      ></span>
      <svg>
        <path ref={pathRef}></path>
      </svg>
    </div>
  );
}
