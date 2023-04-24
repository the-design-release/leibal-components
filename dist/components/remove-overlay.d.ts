import type { Components, JSX } from "../types/components";

interface RemoveOverlay extends Components.RemoveOverlay, HTMLElement {}
export const RemoveOverlay: {
  prototype: RemoveOverlay;
  new (): RemoveOverlay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
