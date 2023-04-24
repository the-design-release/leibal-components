import type { Components, JSX } from "../types/components";

interface FooterNav extends Components.FooterNav, HTMLElement {}
export const FooterNav: {
  prototype: FooterNav;
  new (): FooterNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
