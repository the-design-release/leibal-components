import type { Components, JSX } from "../types/components";

interface MoodsBoardPreview extends Components.MoodsBoardPreview, HTMLElement {}
export const MoodsBoardPreview: {
  prototype: MoodsBoardPreview;
  new (): MoodsBoardPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
