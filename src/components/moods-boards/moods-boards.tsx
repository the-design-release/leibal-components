import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { MoodsBoardData } from '../moods-board-preview/moods-board-preview';

type SortBy = 'name' | 'timestamp';
type SortOrder = 'asc' | 'desc';

@Component({
  tag: 'moods-boards',
  styleUrl: 'moods-boards.css',
  shadow: true,
})
export class MoodsBoards {
  // Boards
  @Prop({ reflect: true, mutable: true }) boards: string;
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

  componentWillLoad() {
    this.boardsList = JSON.parse(this.boards);
  }

  render() {
    return (
      <Host>
        <div class="moods-boards">
          <div class="moods-boards__sidebar">
            <div class="moods-boards__create-board">Create New Board</div>
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
          <div class="moods-boards__content">
            {this.boardsList
              .sort((_x, _y) => {
                let x = _x[this.sortBy];
                let y = _y[this.sortBy];

                // Order by last image timestamp or createdAt
                if (this.sortBy == 'timestamp') {
                  x = Array.isArray(_x.images) ? _x.images.slice(-1)[0].timestamp : _x.createdAt;
                  y = Array.isArray(_y.images) ? _y.images.slice(-1)[0].timestamp : _y.createdAt;
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
