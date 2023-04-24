import type { Components, JSX } from "../types/components";

interface TermsOfService extends Components.TermsOfService, HTMLElement {}
export const TermsOfService: {
  prototype: TermsOfService;
  new (): TermsOfService;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
