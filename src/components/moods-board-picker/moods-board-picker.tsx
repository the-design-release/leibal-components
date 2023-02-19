import { Component, Element, Host, h, State, Prop, Watch, EventEmitter, Event, getAssetPath } from '@stencil/core';
// import { ClickOutside } from 'stencil-click-outside';
import FuzzySearch from 'fuzzy-search';

export interface MoodBoard {
  postId: string;
  name: string;
}

export interface MoodsBoardPickedEvent {
  board: MoodBoard;
}

@Component({
  tag: 'moods-board-picker',
  styleUrl: 'moods-board-picker.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MoodsBoardPicker {
  @Element()
  el: HTMLElement;

  searcher: FuzzySearch;

  @Prop({ reflect: true, mutable: true })
  boards: string = '';

  @Prop({ reflect: true, mutable: true })
  selectedMoodBoard: MoodBoard;

  @State()
  open: boolean = false;

  @State()
  moodBoards: MoodBoard[] = [];

  @State()
  inputValue: string = '';

  @State()
  newBoardName: string = '';

  @Event({
    eventName: 'moodsBoardPicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  moodsBoardPicked: EventEmitter<MoodsBoardPickedEvent>;

  componentDidLoad() {
    try {
      this.moodBoards = JSON.parse(this.boards);
    } finally {
      this.searcher = new FuzzySearch(this.moodBoards, ['name'], {
        caseSensitive: false,
      });
    }

    // Close on click outside
    document.addEventListener('click', (event: MouseEvent) => {
      if (!this.el.contains(event.target as Node)) {
        this.open = false;
      }
    });
  }

  toggleOpen() {
    this.open = !this.open;
  }

  onInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (!this.selectedMoodBoard) {
        this.selectedMoodBoard = this.moodBoards[0];
      }
      this.toggleOpen();
      return;
    }

    if (event.key === 'Escape') {
      event.stopPropagation();
      event.preventDefault();

      this.open = false;
      return;
    }

    if (!this.open) {
      this.open = true;
    }
  }

  onInputInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    if (this.inputValue) {
      this.moodBoards = this.searcher.search(this.inputValue);

      // TODO: How to handle no search results?
      // if (this.moodBoards.length === 0) {
      //   this.moodBoards = JSON.parse(this.boards);
      // }
    } else {
      this.moodBoards = JSON.parse(this.boards);
    }
  }

  @Watch('selectedMoodBoard')
  selectedMoodBoardChanged(selectedMoodBoard, oldSelectedMoodBoard) {
    if (selectedMoodBoard !== oldSelectedMoodBoard) {
      this.inputValue = selectedMoodBoard.name;
    }
  }

  handleNewBoardInput(event: Event) {
    this.newBoardName = (event.target as HTMLInputElement).value;
  }

  handleNewBoardClick() {
    this.selectedMoodBoard = {
      postId: null,
      name: this.newBoardName,
    };
    this.newBoardName = '';
    this.open = false;
  }

  handleBoardClick() {
    this.moodsBoardPicked.emit({
      board: this.selectedMoodBoard,
    });
  }

  render() {
    return (
      <Host>
        <div class="moods-board-picker">
          <div onClick={() => this.toggleOpen()} class="moods-board-picker__container">
            <div class="moods-board-picker__title">Save Into:</div>
            <div class="moods-board-picker__selected">
              <input
                class="moods-board-picker__input"
                type="text"
                value={this.inputValue}
                onKeyDown={this.onInputKeyDown.bind(this)}
                onInput={this.onInputInput.bind(this)}
                onClick={e => {
                  if (this.open) {
                    e.stopImmediatePropagation();
                    return false;
                  }
                }}
                placeholder="Search..."
              />
              <span
                class={
                  'moods-board-picker__selected__arrow ' +
                  (this.open ? 'moods-board-picker__selected__arrow--open' : '')
                }
              >
                ▼
              </span>
            </div>
          </div>
          <div class={'moods-board-picker__options ' + (this.open ? 'moods-board-picker__options--visible' : '')}>
            <div class="moods-board-picker__new-board">
              <div>
                <div class="moods-board-picker__title">Create New Board:</div>
                <input
                  class="moods-board-picker__input moods-board-picker__new-board-input"
                  type="text"
                  placeholder="Start Typing..."
                  onInput={this.handleNewBoardInput.bind(this)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      this.handleNewBoardClick();
                    }
                  }}
                  value={this.newBoardName}
                />
              </div>
              <div onClick={this.handleNewBoardClick.bind(this)}>
                <img class="moods-board-picker__new-board-icon" src={getAssetPath('./assets/plus.png')} />
              </div>
            </div>
            {this.moodBoards.length === 0 && (
              <div class="moods-board-picker__option moods-board-picker__option--no-results">No results</div>
            )}
            {this.moodBoards.map(moodBoard => (
              <div
                class="moods-board-picker__option"
                onClick={() => {
                  this.selectedMoodBoard = moodBoard;
                  this.toggleOpen();
                }}
              >
                {moodBoard.name}
              </div>
            ))}
          </div>
          <simple-button
            theme="dark"
            onClick={() => {
              this.handleBoardClick();
            }}
            class="moods-board-picker__button"
          >
            Save
          </simple-button>
        </div>
      </Host>
    );
  }
}
