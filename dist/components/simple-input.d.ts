import type { Components, JSX } from "../types/components";

interface SimpleInput extends Components.SimpleInput, HTMLElement {}
export const SimpleInput: {
  prototype: SimpleInput;
  new (): SimpleInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
