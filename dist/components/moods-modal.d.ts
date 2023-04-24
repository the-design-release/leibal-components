import type { Components, JSX } from "../types/components";

interface MoodsModal extends Components.MoodsModal, HTMLElement {}
export const MoodsModal: {
  prototype: MoodsModal;
  new (): MoodsModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
