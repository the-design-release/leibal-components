import type { Components, JSX } from "../types/components";

interface MoodsBoards extends Components.MoodsBoards, HTMLElement {}
export const MoodsBoards: {
  prototype: MoodsBoards;
  new (): MoodsBoards;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
