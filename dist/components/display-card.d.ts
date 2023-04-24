import type { Components, JSX } from "../types/components";

interface DisplayCard extends Components.DisplayCard, HTMLElement {}
export const DisplayCard: {
  prototype: DisplayCard;
  new (): DisplayCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
