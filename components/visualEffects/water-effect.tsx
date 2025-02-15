import $ from "jquery";
import { type ReactNode, type RefObject, useEffect, useRef } from "react";
import "jquery.ripples";

// Constants for default values
const DEFAULT_VALUES = {
  DROP_RADIUS: 20,
  PERTURBANCE: 0.03,
  RESOLUTION: 256,
  INTERACTIVE: true,
  CROSS_ORIGIN: "",
  IMAGE_URL: "",
} as const;

// Types and Interfaces
interface RipplesOptions {
  imageUrl: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: string;
}

type SetProperties = "dropRadius" | "perturbance" | "interactive" | "imageUrl" | "crossOrigin";
type RipplesCommand = "destroy" | "drop" | "pause" | "play" | "hide" | "show" | "set" | "updateSize";
type Drop = ({ x, y, radius, strength }: { x: number; y: number; radius: number; strength: number }) => void;
type Set = ({ property, value }: { property: SetProperties; value: unknown }) => void;

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

declare global {
  interface JQuery {
    ripples(options: RipplesOptions): this;

    ripples(command: RipplesCommand, ...args: unknown[]): this;
  }
}

type WaterEffectBaseProps = Omit<React.ComponentPropsWithoutRef<"div">, "children">;

interface WaterEffectProps extends RipplesOptions, WaterEffectBaseProps {
  children: (props: RipplesActions) => ReactNode;
}

// Utility to initialize ripples
const initializeRipples = (ref: RefObject<HTMLDivElement>, options: RipplesOptions) => {
  const $element = $(ref.current!);
  $element.ripples(options);
  return $element;
};

// Custom Hook: useRipples
export const useRipples = (options: RipplesOptions & { rippleRef: RefObject<HTMLDivElement> }): RipplesActions => {
  const { rippleRef, ...rippleOptions } = options;
  const jqueryElementRef = useRef<JQuery | null>(null);

  useEffect(() => {
    if (!rippleRef.current) return;
    jqueryElementRef.current = initializeRipples(rippleRef, rippleOptions);

    return () => {
      jqueryElementRef.current?.ripples("destroy");
    };
  }, [rippleRef, rippleOptions]);

  const executeCommand = (command: RipplesCommand, ...args: unknown[]) => {
    jqueryElementRef.current?.ripples(command, ...args);
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

// Functional Component: WaterEffect
function WaterEffect({
  children,
  rippleRef = useRef<HTMLDivElement>(null),
  ...props
}: WaterEffectProps & { rippleRef?: RefObject<HTMLDivElement> }) {
  const {
    imageUrl = DEFAULT_VALUES.IMAGE_URL,
    dropRadius = DEFAULT_VALUES.DROP_RADIUS,
    perturbance = DEFAULT_VALUES.PERTURBANCE,
    resolution = DEFAULT_VALUES.RESOLUTION,
    interactive = DEFAULT_VALUES.INTERACTIVE,
    crossOrigin = DEFAULT_VALUES.CROSS_ORIGIN,
    ...otherProps
  } = props;

  const rippleActions = useRipples({
    rippleRef,
    imageUrl,
    dropRadius,
    perturbance,
    resolution,
    interactive,
    crossOrigin,
  });

  return (
    <div ref={rippleRef} {...otherProps}>
      {children(rippleActions)}
    </div>
  );
}

export default WaterEffect;
