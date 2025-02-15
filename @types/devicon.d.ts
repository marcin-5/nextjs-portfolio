// For module resolution
declare module "devicon" {
  export const devicon: any;
}

// For class name autocompletion (optional but useful)
type DeviconClass = `devicon-${string}-${"plain" | "original" | "line" | "wordmark"}${"-colored" | ""}`;
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: DeviconClass | string;
  }
}
