import type { Components, JSX } from "../types/components";

interface StickyScroller extends Components.StickyScroller, HTMLElement {}
export const StickyScroller: {
  prototype: StickyScroller;
  new (): StickyScroller;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
