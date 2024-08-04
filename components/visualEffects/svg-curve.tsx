"use client";
import {useEffect, useRef} from "react";

const useAnimationFrame = (callback: () => void) => {
  let animationRequestId: number | null = null;
  return () => {
    stop();
    animationRequestId = requestAnimationFrame(callback);
  };
};

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let mouseXRatio = 0.5;
  let time = Math.PI / 2;
  const defaultProgress = 0;
  const neutral = 0.5;

  const manageMouseMove = (event: React.MouseEvent) => {
    const {movementY} = event;
    const box = (event.target as HTMLElement).getBoundingClientRect();
    mouseXRatio = (event.clientX - box.left) / box.width;
    progress += movementY;
  };

  const applyPathAttributes = (value: number) => {
    const width = window.innerWidth * 0.7;
    path.current?.setAttributeNS(null, "d", `M 0 50 Q ${width * mouseXRatio} ${50 + value} ${width} 50`);
  };

  const linearInterpolation = (from: number, to: number, alpha: number) =>
    from * (1 - alpha) + to * alpha;

  const startAnimateIn = useAnimationFrame(() => {
    applyPathAttributes(progress);
    startAnimateIn();
  });

  const resetAnimationTimeAndProgress = () => {
    time = Math.PI / 2;
    progress = defaultProgress;
  };

  const continueAnimationOrReset = () => {
    Math.abs(progress) > neutral ? startAnimateOut() : resetAnimationTimeAndProgress();
  };

  const startAnimateOut = useAnimationFrame(() => {
    const newProgress = progress * Math.sin(time);
    applyPathAttributes(newProgress);
    progress = linearInterpolation(progress, 0, 0.04);
    time += 0.2;
    continueAnimationOrReset();
  });

  startAnimateOut(); // initializing the component with final animation state

  useEffect(() => {
    const handleResize = () => {
      applyPathAttributes(progress);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [progress]);

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
