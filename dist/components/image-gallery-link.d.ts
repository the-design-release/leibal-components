import type { Components, JSX } from "../types/components";

interface ImageGalleryLink extends Components.ImageGalleryLink, HTMLElement {}
export const ImageGalleryLink: {
  prototype: ImageGalleryLink;
  new (): ImageGalleryLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
