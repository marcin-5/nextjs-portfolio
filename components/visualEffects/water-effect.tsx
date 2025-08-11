import "jquery.ripples";
import $ from "jquery";
import {
  forwardRef,
  type MutableRefObject,
  type ReactNode,
  type Ref,
  type RefCallback,
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from "react";

interface RipplesOptions {
  imageUrl?: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: "anonymous" | "use-credentials";
}

const DEFAULT_VALUES = {
  DROP_RADIUS: 20,
  PERTURBANCE: 0.03,
  RESOLUTION: 256,
  INTERACTIVE: true,
  CROSS_ORIGIN: undefined as RipplesOptions["crossOrigin"],
  IMAGE_URL: undefined as string | undefined,
} as const;

type RipplesCommand = "destroy" | "drop" | "pause" | "play" | "hide" | "show" | "set" | "updateSize";
type Drop = ({ x, y, radius, strength }: { x: number; y: number; radius: number; strength: number }) => void;
type Set =
  | { property: "dropRadius"; value: number }
  | { property: "perturbance"; value: number }
  | { property: "interactive"; value: boolean }
  | { property: "imageUrl"; value: string };

interface RipplesActions {
  destroy: () => void;
  pause: () => void;
  play: () => void;
  hide: () => void;
  show: () => void;
  drop: Drop;
  set: (arg: Set) => void;
  updateSize: () => void;
}

declare global {
  interface JQuery<TElement = HTMLElement> {
    ripples(options: RipplesOptions): this;

    ripples(command: RipplesCommand, ...args: unknown[]): this;
  }
}

type WaterEffectBaseProps = Omit<React.ComponentPropsWithoutRef<"div">, "children">;

interface WaterEffectProps extends RipplesOptions, WaterEffectBaseProps {
  children: (props: RipplesActions) => ReactNode;
}

const initializeRipples = (ref: RefObject<HTMLDivElement>, options: RipplesOptions) => {
  const $element = $(ref.current!);
  $element.ripples(options);
  return $element as JQuery<HTMLDivElement>;
};

export const useRipples = (options: RipplesOptions & { rippleRef: RefObject<HTMLDivElement> }): RipplesActions => {
  const {
    rippleRef,
    // Defaults for both init and dynamic options
    dropRadius = DEFAULT_VALUES.DROP_RADIUS,
    perturbance = DEFAULT_VALUES.PERTURBANCE,
    interactive = DEFAULT_VALUES.INTERACTIVE,
    imageUrl = DEFAULT_VALUES.IMAGE_URL,
    resolution = DEFAULT_VALUES.RESOLUTION,
    crossOrigin = DEFAULT_VALUES.CROSS_ORIGIN,
  } = options;

  // Only re-initialize when init-only options change
  const initOptions = useMemo(() => ({ resolution, crossOrigin }), [resolution, crossOrigin]);

  const jqueryElementRef = useRef<JQuery<HTMLDivElement> | null>(null);

  // Initialize on mount and when init-only options change
  useEffect(() => {
    if (!rippleRef.current) return;

    // Pass full initial options at init time
    jqueryElementRef.current = initializeRipples(rippleRef, {
      resolution,
      crossOrigin,
      dropRadius,
      perturbance,
      interactive,
      imageUrl,
    });

    return () => {
      jqueryElementRef.current?.ripples("destroy");
      jqueryElementRef.current = null;
    };
    // Depend on memoized initOptions only to avoid churn
  }, [rippleRef, initOptions, dropRadius, perturbance, interactive, imageUrl]);

  // Apply dynamic option changes without re-init
  useEffect(() => {
    const $el = jqueryElementRef.current;
    if (!$el) return;

    $el.ripples("set", "dropRadius", dropRadius);
    $el.ripples("set", "perturbance", perturbance);
    $el.ripples("set", "interactive", interactive);
    if (typeof imageUrl !== "undefined") {
      $el.ripples("set", "imageUrl", imageUrl);
    }
  }, [dropRadius, perturbance, interactive, imageUrl]);

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
    set: (arg) => executeCommand("set", arg.property, arg.value),
    updateSize: () => executeCommand("updateSize"),
  };
};

// Helper to assign multiple refs to a single node
function useCombinedRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return useCallback(
    (node: T | null) => {
      for (const ref of refs) {
        if (!ref) continue;
        if (typeof ref === "function") {
          ref(node);
        } else {
          (ref as MutableRefObject<T | null>).current = node;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}

const WaterEffect = forwardRef<HTMLDivElement, WaterEffectProps>(function WaterEffect(
  { children, ...props },
  forwardedRef,
) {
  const internalRef = useRef<HTMLDivElement>(null);
  const combinedRef = useCombinedRefs(internalRef, forwardedRef);

  const { imageUrl, dropRadius, perturbance, resolution, interactive, crossOrigin, ...otherProps } = props;

  const rippleActions = useRipples({
    rippleRef: internalRef,
    imageUrl,
    dropRadius,
    perturbance,
    resolution,
    interactive,
    crossOrigin,
  });

  return (
    <div ref={combinedRef} {...otherProps}>
      {children(rippleActions)}
    </div>
  );
});

export default WaterEffect;
