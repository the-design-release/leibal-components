import type { Components, JSX } from "../types/components";

interface MobileNavBar extends Components.MobileNavBar, HTMLElement {}
export const MobileNavBar: {
  prototype: MobileNavBar;
  new (): MobileNavBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
