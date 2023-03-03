import { Component, Host, h, Prop, State, Watch, getAssetPath, Listen } from '@stencil/core';
import { MoodsBoardData } from '../moods-board-preview/moods-board-preview';
import { RemoveOverlayEvent } from '../remove-overlay/remove-overlay';

type SortBy = 'name' | 'timestamp';
type SortOrder = 'asc' | 'desc';

@Component({
  tag: 'moods-boards',
  styleUrl: 'moods-boards.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MoodsBoards {
  // Boards
  @Prop({ reflect: true, mutable: true }) boards: string;
  @State()
  boardsList: MoodsBoardData[] = [];
  @Watch('boards')
  boardsChanged(newValue: string) {
    this.boardsList = JSON.parse(newValue);
  }

  // Sorting
  @State() sortBy: SortBy = 'timestamp';
  @State() sortOrder: SortOrder = 'desc';
  setSort(sortBy: SortBy, sortOrder: SortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
  sortSelectedClass(sortBy: SortBy, sortOrder: SortOrder) {
    const selected = this.sortBy == sortBy && this.sortOrder == sortOrder;
    return selected ? 'moods-boards__sort-by--selected' : '';
  }

  // Create Board
  @State() creatingBoard: boolean = false;
  @State() creatingBoardName: string = '';

  @Prop({ reflect: true, mutable: true })
  apiUrl: string = '/wp-json/moods/v1/create';

  @Prop({ reflect: true, mutable: true }) wpNonce: string;
  async createBoard() {
    const formData = new FormData();
    formData.append('title', this.creatingBoardName);

    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'X-WP-Nonce': this.wpNonce,
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.boardsList.push(data);
        this.creatingBoard = false;
        this.creatingBoardName = '';
      });
  }

  // Listen for remove-overlay event
  @Listen('removeOverlayEvent')
  removeOverlayHandler(event: CustomEvent<RemoveOverlayEvent>) {
    const payload = event.detail.payload;

    const data = new FormData();
    data.append('id', payload.id);

    fetch('/wp-json/moods/v1/delete', {
      method: 'POST',
      headers: {
        'X-WP-Nonce': this.wpNonce,
      },
      body: data,
    })
      .then(response => response.json())
      .then(_ => {
        this.boardsList = this.boardsList.filter(board => board.id != payload.id);
      });
  }

  componentWillLoad() {
    this.boardsList = JSON.parse(this.boards);
  }

  render() {
    return (
      <Host>
        <div class="moods-boards">
          <div class="moods-boards__sidebar">
            <sticky-scroller startOffset={130}>
              <div>
                <div class="moods-boards__create-board">
                  {this.creatingBoard ? (
                    <div class="moods-boards__create-board__input">
                      <input
                        onKeyDown={e => {
                          if (e.key == 'Escape') {
                            this.creatingBoard = false;
                          }
                          if (e.key == 'Enter') {
                            this.createBoard();
                          }
                        }}
                        onInput={(e: any) => {
                          this.creatingBoardName = e.target.value;
                        }}
                        type="text"
                        placeholder="Type Board Title"
                      />
                      <div
                        class="moods-boards__create-board__button"
                        onClick={async () => {
                          await this.createBoard();
                        }}
                      >
                        <img src={getAssetPath('./assets/arrow.png')} alt="Submit" />
                      </div>
                    </div>
                  ) : (
                    <a
                      onClick={() => {
                        this.creatingBoard = true;
                      }}
                    >
                      Create New Board
                    </a>
                  )}
                </div>
                <div class="moods-boards__sort">
                  <div class="moods-boards__sort__header">Sort Boards</div>
                  <div
                    class={'moods-boards__sort-by ' + this.sortSelectedClass('timestamp', 'desc')}
                    onClick={() => this.setSort('timestamp', 'desc')}
                  >
                    Latest
                  </div>
                  <div
                    class={'moods-boards__sort-by ' + this.sortSelectedClass('timestamp', 'asc')}
                    onClick={() => this.setSort('timestamp', 'asc')}
                  >
                    Oldest
                  </div>
                  <div
                    class={'moods-boards__sort-by ' + this.sortSelectedClass('name', 'asc')}
                    onClick={() => this.setSort('name', 'asc')}
                  >
                    A - Z
                  </div>
                  <div
                    class={'moods-boards__sort-by ' + this.sortSelectedClass('name', 'desc')}
                    onClick={() => this.setSort('name', 'desc')}
                  >
                    Z - A
                  </div>
                </div>
              </div>
            </sticky-scroller>
          </div>
          <div class="moods-boards__content">
            {this.boardsList
              .sort((_x, _y) => {
                let x = _x[this.sortBy];
                let y = _y[this.sortBy];

                // Order by last image timestamp or createdAt
                if (this.sortBy == 'timestamp') {
                  x =
                    Array.isArray(_x.images) && _x.images.length > 0 ? _x.images.slice(-1)[0].timestamp : _x.timestamp;
                  y =
                    Array.isArray(_y.images) && _y.images.length > 0 ? _y.images.slice(-1)[0].timestamp : _y.timestamp;
                }

                if (this.sortOrder == 'asc') {
                  return x > y ? 1 : -1;
                } else {
                  return x < y ? 1 : -1;
                }
              })
              .map(board => (
                <a href={board.url}>
                  <moods-board-preview board={board}></moods-board-preview>
                </a>
              ))}
          </div>
        </div>
      </Host>
    );
  }
}
