import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host, a as getElement } from './index-3f06ee34.js';

class Helper {
  static getDescendantProperty(object, path, list = []) {
    let firstSegment;
    let remaining;
    let dotIndex;
    let value;
    let index;
    let length;

    if (path) {
      dotIndex = path.indexOf('.');

      if (dotIndex === -1) {
        firstSegment = path;
      } else {
        firstSegment = path.slice(0, dotIndex);
        remaining = path.slice(dotIndex + 1);
      }

      value = object[firstSegment];
      if (value !== null && typeof value !== 'undefined') {
        if (! remaining && (typeof value === 'string' || typeof value === 'number')) {
          list.push(value);
        } else if (Object.prototype.toString.call(value) === '[object Array]') {
          for (index = 0, length = value.length; index < length; index++) {
            Helper.getDescendantProperty(value[index], remaining, list);
          }
        } else if (remaining) {
          Helper.getDescendantProperty(value, remaining, list);
        }
      }
    } else {
      list.push(object);
    }

    return list;
  }
}

class FuzzySearch {
  constructor(haystack = [], keys = [], options = {}) {
    if (! Array.isArray(keys)) {
      options = keys;
      keys = [];
    }

    this.haystack = haystack;
    this.keys = keys;
    this.options = Object.assign({
      caseSensitive: false,
      sort: false,
    }, options);
  }

  search(query = '') {
    if (query === '') {
      return this.haystack;
    }

    const results = [];

    for (let i = 0; i < this.haystack.length; i++) {
      const item = this.haystack[i];

      if (this.keys.length === 0) {
        const score = FuzzySearch.isMatch(item, query, this.options.caseSensitive);

        if (score) {
          results.push({ item, score });
        }
      } else {
        for (let y = 0; y < this.keys.length; y++) {
          const propertyValues = Helper.getDescendantProperty(item, this.keys[y]);

          let found = false;

          for (let z = 0; z < propertyValues.length; z++) {
            const score = FuzzySearch.isMatch(propertyValues[z], query, this.options.caseSensitive);

            if (score) {
              found = true;

              results.push({ item, score });

              break;
            }
          }

          if (found) {
            break;
          }
        }
      }
    }

    if (this.options.sort) {
      results.sort((a, b) => a.score - b.score);
    }

    return results.map(result => result.item);
  }

  static isMatch(item, query, caseSensitive) {
    item = String(item);
    query = String(query);

    if (! caseSensitive) {
      item = item.toLocaleLowerCase();
      query = query.toLocaleLowerCase();
    }

    const indexes = FuzzySearch.nearestIndexesFor(item, query);

    if (! indexes) {
      return false;
    }

    // Exact matches should be first.
    if (item === query) {
      return 1;
    }

    // If we have more than 2 letters, matches close to each other should be first.
    if (indexes.length > 1) {
      return 2 + (indexes[indexes.length - 1] - indexes[0]);
    }

    // Matches closest to the start of the string should be first.
    return 2 + indexes[0];
  }

  static nearestIndexesFor(item, query) {
    const letters = query.split('');
    let indexes = [];

    const indexesOfFirstLetter = FuzzySearch.indexesOfFirstLetter(item, query);

    indexesOfFirstLetter.forEach((startingIndex, loopingIndex) => {
      let index = startingIndex + 1;

      indexes[loopingIndex] = [startingIndex];

      for (let i = 1; i < letters.length; i++) {
        const letter = letters[i];

        index = item.indexOf(letter, index);

        if (index === -1) {
          indexes[loopingIndex] = false;

          break;
        }

        indexes[loopingIndex].push(index);

        index++;
      }
    });

    indexes = indexes.filter(letterIndexes => letterIndexes !== false);

    if (! indexes.length) {
      return false;
    }

    return indexes.sort((a, b) => {
      if (a.length === 1) {
        return a[0] - b[0];
      }

      a = a[a.length - 1] - a[0];
      b = b[b.length - 1] - b[0];

      return a - b;
    })[0];
  }

  static indexesOfFirstLetter(item, query) {
    const match = query[0];

    return item.split('').map((letter, index) => {
      if (letter !== match) {
        return false;
      }

      return index;
    }).filter(index => index !== false);
  }
}

const moodsBoardPickerCss = ":host{display:block}.moods-board-picker{display:block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.moods-board-picker__container{background:#fff;border:1px solid #000;padding:1rem 1.5rem;position:relative}.moods-board-picker__selected{display:flex;width:100%}.moods-board-picker__selected__arrow{cursor:pointer}.moods-board-picker__selected__arrow,.moods-board-picker__selected__arrow--open{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.moods-board-picker__selected__arrow--open{transform:rotate(180deg)}.moods-board-picker__title{font-size:9px;font-weight:300;margin-bottom:.5rem;text-transform:uppercase;width:100%}.moods-board-picker__input{border-width:0;display:block;font-weight:300;padding:0;width:100%}.moods-board-picker__input,.moods-board-picker__input:focus{outline:2px solid transparent;outline-offset:2px}.moods-board-picker__input{background:none;font-size:1rem;letter-spacing:1.5px}.moods-board-picker__input::-moz-placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input:-ms-input-placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input::placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input::-moz-selection{background:none}.moods-board-picker__input::selection{background:none}.moods-board-picker__options{background:#fff;border:1px solid #000;left:0;margin-top:-1px;max-height:275px;opacity:0;overflow-x:hidden;overflow-y:auto;position:absolute;right:0;scrollbar-width:none;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:10}.moods-board-picker__options--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-board-picker__options::-webkit-scrollbar{display:none}.moods-board-picker__option{cursor:pointer;display:block;padding:.75rem 1.5rem;transition-duration:.3s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.moods-board-picker__option:first-child{padding-top:0}.moods-board-picker__option:hover{background:#000;color:#fff;transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.moods-board-picker__option--no-results{cursor:default!important;text-decoration:none!important}.moods-board-picker__new-board{align-items:center;display:flex;justify-content:space-between;padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem}.moods-board-picker__new-board>:first-child{width:100%}.moods-board-picker__new-board>:last-child{cursor:pointer;margin-left:1.5rem}.moods-board-picker__new-board-icon{width:1.5rem}.moods-board-picker__new-board-input{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(0 0 0/var(--tw-border-opacity));margin-bottom:.5rem;padding-bottom:1rem}.moods-board-picker__button{margin-top:2rem;width:100%}";

let MoodsBoardPicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.moodsBoardPicked = createEvent(this, "moodsBoardPicked", 7);
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
    return (h(Host, null, h("div", { class: "moods-board-picker" }, h("div", { onClick: () => this.toggleOpen(), class: "moods-board-picker__container" }, h("div", { class: "moods-board-picker__title" }, "Save Into:"), h("div", { class: "moods-board-picker__selected" }, h("input", { class: "moods-board-picker__input", type: "text", value: this.inputValue, onKeyDown: this.onInputKeyDown.bind(this), onInput: this.onInputInput.bind(this), onClick: e => {
        if (this.open) {
          e.stopImmediatePropagation();
          return false;
        }
      }, placeholder: "Search..." }), h("span", { class: 'moods-board-picker__selected__arrow ' +
        (this.open ? 'moods-board-picker__selected__arrow--open' : '') }, "\u25BC"))), h("div", { class: 'moods-board-picker__options ' + (this.open ? 'moods-board-picker__options--visible' : '') }, h("div", { class: "moods-board-picker__new-board" }, h("div", null, h("div", { class: "moods-board-picker__title" }, "Create New Board:"), h("input", { class: "moods-board-picker__input moods-board-picker__new-board-input", type: "text", placeholder: "Start Typing...", onInput: this.handleNewBoardInput.bind(this), onKeyDown: e => {
        if (e.key === 'Enter') {
          this.handleNewBoardClick();
        }
      }, value: this.newBoardName })), h("div", { onClick: this.handleNewBoardClick.bind(this) }, h("img", { class: "moods-board-picker__new-board-icon", src: getAssetPath('./assets/plus.png') }))), this.moodBoards.length === 0 && (h("div", { class: "moods-board-picker__option moods-board-picker__option--no-results" }, "No results")), this.moodBoards.map(moodBoard => (h("div", { class: "moods-board-picker__option", onClick: () => {
        this.selectedMoodBoard = moodBoard;
        this.toggleOpen();
      } }, moodBoard.name)))), h("simple-button", { theme: "dark", onClick: () => {
        this.handleBoardClick();
      }, class: "moods-board-picker__button" }, "Save"))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "selectedMoodBoard": ["selectedMoodBoardChanged"]
  }; }
};
MoodsBoardPicker.style = moodsBoardPickerCss;

export { MoodsBoardPicker as moods_board_picker };
