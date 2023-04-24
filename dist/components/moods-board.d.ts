import type { Components, JSX } from "../types/components";

interface MoodsBoard extends Components.MoodsBoard, HTMLElement {}
export const MoodsBoard: {
  prototype: MoodsBoard;
  new (): MoodsBoard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
