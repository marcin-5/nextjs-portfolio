import $ from "jquery";
import type { ReactNode, RefObject } from "react";
import { useEffect, useRef } from "react";
import "jquery.ripples";

// Constants
const DEFAULT_VALUES = {
  DROP_RADIUS: 20,
  PERTURBANCE: 0.03,
  RESOLUTION: 256,
  INTERACTIVE: true,
  CROSS_ORIGIN: "",
  IMAGE_URL: "",
} as const;

// Types and Interfaces
export interface RipplesOptions {
  imageUrl: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: string;
}

interface RipplesActions {
  destroy: () => void;
  pause: () => void;
  play: () => void;
  hide: () => void;
  show: () => void;
  drop: Drop;
  set: Set;
  updateSize: () => void;
}

export type SetProperties = "dropRadius" | "perturbance" | "interactive" | "imageUrl" | "crossOrigin";
export type Drop = ({ x, y, radius, strength }: { x: number; y: number; radius: number; strength: number }) => void;
export type Set = ({ property, value }: { property: SetProperties; value: unknown }) => void;
export type RipplesCommand = "destroy" | "drop" | "pause" | "play" | "hide" | "show" | "set" | "updateSize";

declare global {
  interface JQuery {
    ripples(options: RipplesOptions): this;

    ripples(command: RipplesCommand, ...args: any[]): this;
  }
}

type WaterEffectBaseProps = Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export interface WaterEffectProps extends RipplesOptions, WaterEffectBaseProps {
  children: (props: RipplesActions) => ReactNode;
}

export const useRipples = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  interactive,
  crossOrigin,
  rippleRef,
}: RipplesOptions & {
  rippleRef: RefObject<HTMLDivElement>;
}): RipplesActions => {
  const jqueryElementRef = useRef<JQuery>(null!);

  useEffect(() => {
    jqueryElementRef.current = $(rippleRef.current!);
    jqueryElementRef.current.ripples({
      imageUrl,
      dropRadius,
      perturbance,
      resolution,
      interactive,
      crossOrigin,
    });

    return () => {
      jqueryElementRef.current.ripples("destroy");
    };
  }, [crossOrigin, dropRadius, imageUrl, interactive, perturbance, resolution, rippleRef]);

  const executeCommand = (command: RipplesCommand, ...args: any[]) => {
    jqueryElementRef.current.ripples(command, ...args);
  };

  return {
    destroy: () => executeCommand("destroy"),
    drop: ({ x, y, radius, strength }) => executeCommand("drop", x, y, radius, strength),
    pause: () => executeCommand("pause"),
    play: () => executeCommand("play"),
    hide: () => executeCommand("hide"),
    show: () => executeCommand("show"),
    set: ({ property, value }) => executeCommand("set", property, value),
    updateSize: () => executeCommand("updateSize"),
  };
};

function WaterEffect({
  imageUrl = DEFAULT_VALUES.IMAGE_URL,
  dropRadius = DEFAULT_VALUES.DROP_RADIUS,
  perturbance = DEFAULT_VALUES.PERTURBANCE,
  resolution = DEFAULT_VALUES.RESOLUTION,
  interactive = DEFAULT_VALUES.INTERACTIVE,
  crossOrigin = DEFAULT_VALUES.CROSS_ORIGIN,
  children,
  ...otherProps
}: WaterEffectProps) {
  const rippleRef = useRef<HTMLDivElement>(null);
  const rippleActions = useRipples({
    imageUrl,
    dropRadius,
    perturbance,
    resolution,
    interactive,
    crossOrigin,
    rippleRef,
  });

  return (
    <div ref={rippleRef} {...otherProps}>
      {children(rippleActions)}
    </div>
  );
}

export default WaterEffect;
