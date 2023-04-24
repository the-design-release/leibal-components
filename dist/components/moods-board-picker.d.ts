import type { Components, JSX } from "../types/components";

interface MoodsBoardPicker extends Components.MoodsBoardPicker, HTMLElement {}
export const MoodsBoardPicker: {
  prototype: MoodsBoardPicker;
  new (): MoodsBoardPicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
