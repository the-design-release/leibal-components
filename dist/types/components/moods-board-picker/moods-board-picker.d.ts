import { EventEmitter } from '../../stencil-public-runtime';
import FuzzySearch from 'fuzzy-search';
export interface MoodBoard {
  postId: string;
  name: string;
}
export interface MoodsBoardPickedEvent {
  board: MoodBoard;
}
export declare class MoodsBoardPicker {
  el: HTMLElement;
  searcher: FuzzySearch;
  boards: string;
  selectedMoodBoard: MoodBoard;
  open: boolean;
  moodBoards: MoodBoard[];
  inputValue: string;
  newBoardName: string;
  moodsBoardPicked: EventEmitter<MoodsBoardPickedEvent>;
  componentDidLoad(): void;
  toggleOpen(): void;
  onInputKeyDown(event: KeyboardEvent): void;
  onInputInput(event: Event): void;
  selectedMoodBoardChanged(selectedMoodBoard: any, oldSelectedMoodBoard: any): void;
  handleNewBoardInput(event: Event): void;
  handleNewBoardClick(): void;
  handleBoardClick(): void;
  render(): any;
}
