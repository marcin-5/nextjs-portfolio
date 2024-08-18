"use client";
import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (callback: () => void) => {
  const animationRequestId = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (animationRequestId.current !== null) {
      cancelAnimationFrame(animationRequestId.current);
    }
  }, []);

  const start = useCallback(() => {
    stop();
    animationRequestId.current = requestAnimationFrame(() => {
      callback();
      start();
    });
  }, [callback, stop]);

  useEffect(() => {
    return () => stop(); // Cleanup animation frame on unmount
  }, [stop]);

  return { start, stop };
};

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  const progressRef = useRef(0);
  const mouseXRatioRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);
  const defaultProgress = 0;
  const neutral = 0.5;

  const manageMouseMove = (event: React.MouseEvent) => {
    const { movementY } = event;
    const box = (event.target as HTMLElement).getBoundingClientRect();
    mouseXRatioRef.current = (event.clientX - box.left) / box.width;
    progressRef.current += movementY;
  };

  const applyPathAttributes = (value: number) => {
    const width = window.innerWidth * 0.7;
    path.current?.setAttributeNS(null, "d", `M 0 50 Q ${width * mouseXRatioRef.current} ${50 + value} ${width} 50`);
  };

  const linearInterpolation = (from: number, to: number, alpha: number) => from * (1 - alpha) + to * alpha;

  const { start: startAnimateIn, stop: stopAnimateIn } = useAnimationFrame(() => {
    applyPathAttributes(progressRef.current);
  });

  const resetAnimationTimeAndProgress = useCallback(() => {
    timeRef.current = Math.PI / 2;
    progressRef.current = defaultProgress;
  }, [defaultProgress]);

  const { start: startAnimateOut, stop: stopAnimateOut } = useAnimationFrame(() => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    applyPathAttributes(newProgress);
    progressRef.current = linearInterpolation(progressRef.current, 0, 0.04);
    timeRef.current += 0.2;

    if (Math.abs(progressRef.current) <= neutral) {
      resetAnimationTimeAndProgress();
      stopAnimateOut();
    }
  });

  useEffect(() => {
    startAnimateOut();

    const handleResize = () => {
      applyPathAttributes(progressRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      stopAnimateIn();
      stopAnimateOut();
    };
  }, [startAnimateOut, stopAnimateIn, stopAnimateOut]);

  return (
    <div className="line">
      <span
        onMouseEnter={startAnimateIn}
        onMouseLeave={startAnimateOut}
        onMouseMove={manageMouseMove}
        className="box"
      ></span>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
