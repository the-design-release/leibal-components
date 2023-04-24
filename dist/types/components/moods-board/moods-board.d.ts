import { EventEmitter } from '../../stencil-public-runtime';
import { MoodsBoardImage } from '../moods-board-preview/moods-board-preview';
import { RemoveOverlayEvent } from '../remove-overlay/remove-overlay';
declare type SortBy = 'postTitle' | 'timestamp';
declare type SortOrder = 'asc' | 'desc';
export declare class MoodsBoard {
  el: HTMLElement;
  boardId: string;
  wpNonce: string;
  images: string;
  imageList: MoodsBoardImage[];
  sortBy: SortBy;
  sortOrder: SortOrder;
  setSort(sortBy: SortBy, sortOrder: SortOrder): void;
  sortSelectedClass(sortBy: SortBy, sortOrder: SortOrder): "" | "moods-board__sort-by--selected";
  componentWillLoad(): void;
  removeOverlayHandler(event: CustomEvent<RemoveOverlayEvent>): void;
  openMoodsGallery: EventEmitter<MoodsBoardImage>;
  render(): any;
}
export {};
