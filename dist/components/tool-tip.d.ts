import type { Components, JSX } from "../types/components";

interface ToolTip extends Components.ToolTip, HTMLElement {}
export const ToolTip: {
  prototype: ToolTip;
  new (): ToolTip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
