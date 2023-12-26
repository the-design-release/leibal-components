import type { Components, JSX } from "../types/components";

interface NavBarV2 extends Components.NavBarV2, HTMLElement {}
export const NavBarV2: {
  prototype: NavBarV2;
  new (): NavBarV2;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
