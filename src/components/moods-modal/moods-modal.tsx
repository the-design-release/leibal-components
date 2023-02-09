import { Component, Host, h, State, Watch, Prop, Element } from '@stencil/core';

@Component({
  tag: 'moods-modal',
  styleUrl: 'moods-modal.css',
})
export class MoodsModal {
  @Element()
  el: HTMLElement;

  @State()
  open: boolean = false;

  @State()
  imageUrl: string = '';

  @State()
  postId: number | null = null;

  @Prop({ reflect: true, mutable: true })
  boards: string = '';

  @Prop({ reflect: true, mutable: true })
  moodsApiUrl: string = '';

  @Prop({ reflect: true, mutable: true })
  wpApiNonce: string = '';

  componentWillLoad() {
    document.addEventListener('openMoodsModal', (event: CustomEvent) => {
      this.open = true;
      this.imageUrl = event.detail.imageUrl;
      this.postId = event.detail.postId;
    });

    document.addEventListener('moodsBoardPicked', (event: CustomEvent) => {
      if (this.moodsApiUrl === '') {
        console.error('moodsApiUrl prop is not set.');
        return;
      }

      if (this.wpApiNonce === '') {
        console.error('wpApiNonce prop is not set.');
        return;
      }

      const board = event.detail.board;
      const data = new FormData();

      data.append('id', board.id || null);
      data.append('post_id', this.postId.toString());
      data.append('name', board.name);
      data.append('image_url', this.imageUrl);

      fetch(this.moodsApiUrl, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': this.wpApiNonce,
        },
        body: data,
      })
        .then(response => {
          if (response.status === 200) {
            // Awful hack but it works.
            let boards = JSON.parse(this.boards);
            boards.push(board);
            this.boards = JSON.stringify(boards);

            // TODO: Trigger a success message animation.
          }
        })
        .catch(error => {
          console.error(error);
        });

      this.open = false;
    });
  }

  stopBodyScroll() {
    if (this.open === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }

  @Watch('open')
  clampBodyWhenOpen(open, oldOpen) {
    if (open === oldOpen) return;
    this.stopBodyScroll();
  }

  render() {
    return (
      <Host>
        <tele-portal>
          <div class={'moods-modal ' + (this.open ? 'moods-modal--visible' : '')}>
            <div class="moods-modal__content">
              <div class="moods-modal__left">
                <img src={this.imageUrl} />
              </div>
              <div class="moods-modal__right">
                <div class="moods-modal__close" onClick={() => (this.open = false)}>
                  Close
                </div>
                <div class="moods-modal__picker">
                  <div>
                    <div class="moods-modal__text">Choose A Board</div>
                    <moods-board-picker boards={this.boards} />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </tele-portal>
      </Host>
    );
  }
}
