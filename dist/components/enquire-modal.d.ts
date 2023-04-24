import type { Components, JSX } from "../types/components";

interface EnquireModal extends Components.EnquireModal, HTMLElement {}
export const EnquireModal: {
  prototype: EnquireModal;
  new (): EnquireModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
