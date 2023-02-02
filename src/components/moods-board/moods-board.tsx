import { Component, Host, h, Prop, State, Watch, Element } from '@stencil/core';
import { MoodsBoardImage } from '../moods-board-preview/moods-board-preview';
// import Masonry from 'masonry-layout';

type SortBy = 'postTitle' | 'timestamp';
type SortOrder = 'asc' | 'desc';

@Component({
  tag: 'moods-board',
  styleUrl: 'moods-board.css',
  shadow: true,
})
export class MoodsBoard {
  @Element() el: HTMLElement;

  // Boards
  @Prop({ reflect: true, mutable: true }) images: string;
  imageList: MoodsBoardImage[] = [];
  @Watch('images')
  boardsChanged(newValue: string) {
    this.imageList = JSON.parse(newValue);
  }

  // Sorting
  @State() sortBy: SortBy = 'postTitle';
  @State() sortOrder: SortOrder = 'asc';
  setSort(sortBy: SortBy, sortOrder: SortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
  sortSelectedClass(sortBy: SortBy, sortOrder: SortOrder) {
    const selected = this.sortBy == sortBy && this.sortOrder == sortOrder;
    return selected ? 'moods-board__sort-by--selected' : '';
  }

  componentWillLoad() {
    this.imageList = JSON.parse(this.images);
  }

  render() {
    const imageList = this.imageList.sort((x, y) => {
      if (this.sortOrder == 'asc') {
        return x[this.sortBy] > y[this.sortBy] ? 1 : -1;
      } else {
        return x[this.sortBy] < y[this.sortBy] ? 1 : -1;
      }
    });
    const columns = [];
    for (let i = 0; i < 4; i++) {
      columns.push(imageList.filter((_, index) => index % 4 == i));
    }

    return (
      <Host>
        <div class="moods-board">
          <div class="moods-board__sidebar">
            <div class="moods-board__create-board">Export Collection</div>
            <div class="moods-board__sort">
              <div class="moods-board__sort__header">Sort Saved</div>
              <div
                class={'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'asc')}
                onClick={() => this.setSort('postTitle', 'asc')}
              >
                A - Z
              </div>
              <div
                class={'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'desc')}
                onClick={() => this.setSort('postTitle', 'desc')}
              >
                Z - A
              </div>
              <div
                class={'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'asc')}
                onClick={() => this.setSort('timestamp', 'asc')}
              >
                Latest
              </div>
              <div
                class={'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'desc')}
                onClick={() => this.setSort('timestamp', 'desc')}
              >
                Oldest
              </div>
            </div>
          </div>
          <div class="moods-board__contents">
            {columns.map(column => (
              <div>
                {column.map(board => (
                  <div class="moods-board__content">
                    <img class="moods-board__content__image" src={board.imageUrl} alt={board.postTitle} />
                    <div class="moods-board__content__title">{board.postTitle}</div>
                    <div class="moods-board__content__subtitle">{board.postSubtitle}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
