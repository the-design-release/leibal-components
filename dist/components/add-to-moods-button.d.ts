import type { Components, JSX } from "../types/components";

interface AddToMoodsButton extends Components.AddToMoodsButton, HTMLElement {}
export const AddToMoodsButton: {
  prototype: AddToMoodsButton;
  new (): AddToMoodsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
