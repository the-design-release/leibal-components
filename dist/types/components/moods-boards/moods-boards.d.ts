import { MoodsBoardData } from '../moods-board-preview/moods-board-preview';
import { RemoveOverlayEvent } from '../remove-overlay/remove-overlay';
declare type SortBy = 'name' | 'timestamp';
declare type SortOrder = 'asc' | 'desc';
export declare class MoodsBoards {
  boards: string;
  boardsList: MoodsBoardData[];
  boardsChanged(newValue: string): void;
  sortBy: SortBy;
  sortOrder: SortOrder;
  setSort(sortBy: SortBy, sortOrder: SortOrder): void;
  sortSelectedClass(sortBy: SortBy, sortOrder: SortOrder): "" | "moods-boards__sort-by--selected";
  creatingBoard: boolean;
  creatingBoardName: string;
  apiUrl: string;
  wpNonce: string;
  createBoard(): Promise<void>;
  removeOverlayHandler(event: CustomEvent<RemoveOverlayEvent>): void;
  componentWillLoad(): void;
  render(): any;
}
export {};
