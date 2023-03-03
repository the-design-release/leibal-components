import { Component, Host, h, Prop, State, Element, Listen } from '@stencil/core';
import { MoodsBoardImage } from '../moods-board-preview/moods-board-preview';
import { RemoveOverlayEvent } from '../remove-overlay/remove-overlay';

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
  @Prop({ reflect: true, mutable: true }) boardId: string = '';
  @Prop({ reflect: true, mutable: true }) wpNonce: string = null;
  @Prop() images: string;

  @State()
  imageList: MoodsBoardImage[] = [];

  // Sorting
  @State() sortBy: SortBy = 'timestamp';
  @State() sortOrder: SortOrder = 'desc';
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

  // Listen for remove-overlay event
  @Listen('removeOverlayEvent')
  removeOverlayHandler(event: CustomEvent<RemoveOverlayEvent>) {
    const payload = event.detail.payload;

    const data = new FormData();
    data.append('id', this.boardId);
    data.append('image_url', payload.imageUrl);

    fetch('/wp-json/moods/v1/remove-from-board', {
      method: 'POST',
      headers: {
        'X-WP-Nonce': this.wpNonce,
      },
      body: data,
    })
      .then(response => response.json())
      .then(_ => {
        this.imageList = this.imageList.filter(image => image.imageUrl != payload.imageUrl);
      });
  }

  render() {
    let images = this.imageList.map((image, index) => ({ index, ...image })) as any;

    images = this.imageList.sort((x, y) => {
      if (this.sortOrder == 'asc') {
        return x[this.sortBy] > y[this.sortBy] ? 1 : -1;
      } else {
        return x[this.sortBy] < y[this.sortBy] ? 1 : -1;
      }
    });
    const columns = [];
    for (let i = 0; i < 4; i++) {
      columns.push(images.filter((_, index) => index % 4 == i));
    }

    return (
      <Host>
        <div class="moods-board">
          <div class="moods-board__sidebar">
            <sticky-scroller startOffset={130}>
              <div>
                <div class="moods-board__create-board">Export Collection</div>
                <div class="moods-board__sort">
                  <div class="moods-board__sort__header">Sort Saved</div>
                  <div
                    class={'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'desc')}
                    onClick={() => this.setSort('timestamp', 'desc')}
                  >
                    Latest
                  </div>
                  <div
                    class={'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'asc')}
                    onClick={() => this.setSort('timestamp', 'asc')}
                  >
                    Oldest
                  </div>
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
                </div>
              </div>
            </sticky-scroller>
          </div>
          <div class="moods-board__contents">
            {columns.map(column => (
              <div>
                {column.map(board => (
                  <div class="moods-board__content">
                    <div style={{ position: 'relative', lineHeight: '0' }}>
                      <img class="moods-board__content__image" src={board.imageUrl} alt={board.postTitle} />
                      <remove-overlay payload={JSON.stringify(board)} name="Image" />
                    </div>
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
