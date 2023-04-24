import type { Components, JSX } from "../types/components";

interface TelePortal extends Components.TelePortal, HTMLElement {}
export const TelePortal: {
  prototype: TelePortal;
  new (): TelePortal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
