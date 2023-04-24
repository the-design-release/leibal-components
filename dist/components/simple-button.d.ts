import type { Components, JSX } from "../types/components";

interface SimpleButton extends Components.SimpleButton, HTMLElement {}
export const SimpleButton: {
  prototype: SimpleButton;
  new (): SimpleButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
