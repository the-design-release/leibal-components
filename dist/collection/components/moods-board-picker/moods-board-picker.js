import { Component, Element, Host, h, State, Prop, Watch, Event, getAssetPath } from '@stencil/core';
// import { ClickOutside } from 'stencil-click-outside';
import FuzzySearch from 'fuzzy-search';
export class MoodsBoardPicker {
  constructor() {
    this.boards = '';
    this.open = false;
    this.moodBoards = [];
    this.inputValue = '';
    this.newBoardName = '';
  }
  componentDidLoad() {
    try {
      this.moodBoards = JSON.parse(this.boards);
    }
    finally {
      this.searcher = new FuzzySearch(this.moodBoards, ['name'], {
        caseSensitive: false,
      });
    }
    // Close on click outside
    document.addEventListener('click', (event) => {
      if (!this.el.contains(event.target)) {
        this.open = false;
      }
    });
  }
  toggleOpen() {
    this.open = !this.open;
  }
  onInputKeyDown(event) {
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
  onInputInput(event) {
    this.inputValue = event.target.value;
    if (this.inputValue) {
      this.moodBoards = this.searcher.search(this.inputValue);
      // TODO: How to handle no search results?
      // if (this.moodBoards.length === 0) {
      //   this.moodBoards = JSON.parse(this.boards);
      // }
    }
    else {
      this.moodBoards = JSON.parse(this.boards);
    }
  }
  selectedMoodBoardChanged(selectedMoodBoard, oldSelectedMoodBoard) {
    if (selectedMoodBoard !== oldSelectedMoodBoard) {
      this.inputValue = selectedMoodBoard.name;
    }
  }
  handleNewBoardInput(event) {
    this.newBoardName = event.target.value;
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
    return (h(Host, null,
      h("div", { class: "moods-board-picker" },
        h("div", { onClick: () => this.toggleOpen(), class: "moods-board-picker__container" },
          h("div", { class: "moods-board-picker__title" }, "Save Into:"),
          h("div", { class: "moods-board-picker__selected" },
            h("input", { class: "moods-board-picker__input", type: "text", value: this.inputValue, onKeyDown: this.onInputKeyDown.bind(this), onInput: this.onInputInput.bind(this), onClick: e => {
                if (this.open) {
                  e.stopImmediatePropagation();
                  return false;
                }
              }, placeholder: "Search..." }),
            h("span", { class: 'moods-board-picker__selected__arrow ' +
                (this.open ? 'moods-board-picker__selected__arrow--open' : '') }, "\u25BC"))),
        h("div", { class: 'moods-board-picker__options ' + (this.open ? 'moods-board-picker__options--visible' : '') },
          h("div", { class: "moods-board-picker__new-board" },
            h("div", null,
              h("div", { class: "moods-board-picker__title" }, "Create New Board:"),
              h("input", { class: "moods-board-picker__input moods-board-picker__new-board-input", type: "text", placeholder: "Start Typing...", onInput: this.handleNewBoardInput.bind(this), onKeyDown: e => {
                  if (e.key === 'Enter') {
                    this.handleNewBoardClick();
                  }
                }, value: this.newBoardName })),
            h("div", { onClick: this.handleNewBoardClick.bind(this) },
              h("img", { class: "moods-board-picker__new-board-icon", src: getAssetPath('./assets/plus.png') }))),
          this.moodBoards.length === 0 && (h("div", { class: "moods-board-picker__option moods-board-picker__option--no-results" }, "No results")),
          this.moodBoards.map(moodBoard => (h("div", { class: "moods-board-picker__option", onClick: () => {
              this.selectedMoodBoard = moodBoard;
              this.toggleOpen();
            } }, moodBoard.name)))),
        h("simple-button", { theme: "dark", onClick: () => {
            this.handleBoardClick();
          }, class: "moods-board-picker__button" }, "Save"))));
  }
  static get is() { return "moods-board-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["moods-board-picker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["moods-board-picker.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "boards": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "boards",
      "reflect": true,
      "defaultValue": "''"
    },
    "selectedMoodBoard": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "MoodBoard",
        "resolved": "MoodBoard",
        "references": {
          "MoodBoard": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "open": {},
    "moodBoards": {},
    "inputValue": {},
    "newBoardName": {}
  }; }
  static get events() { return [{
      "method": "moodsBoardPicked",
      "name": "moodsBoardPicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MoodsBoardPickedEvent",
        "resolved": "MoodsBoardPickedEvent",
        "references": {
          "MoodsBoardPickedEvent": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "selectedMoodBoard",
      "methodName": "selectedMoodBoardChanged"
    }]; }
}
