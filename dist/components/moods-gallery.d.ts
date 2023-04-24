import type { Components, JSX } from "../types/components";

interface MoodsGallery extends Components.MoodsGallery, HTMLElement {}
export const MoodsGallery: {
  prototype: MoodsGallery;
  new (): MoodsGallery;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
