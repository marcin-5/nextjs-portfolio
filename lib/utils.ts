import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function mcn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
