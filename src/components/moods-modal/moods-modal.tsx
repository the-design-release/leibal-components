import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'moods-modal',
  styleUrl: 'moods-modal.css',
})
export class MoodsModal {
  @State()
  open: boolean = false;

  @State()
  imageUrl: string = '';

  @State()
  postId: number | null = null;

  componentWillLoad() {
    document.addEventListener('openMoodsModal', (event: CustomEvent) => {
      this.open = true;
      this.imageUrl = event.detail.imageUrl;
      this.postId = event.detail.postId;
    });
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
              </div>
            </div>
          </div>
        </tele-portal>
      </Host>
    );
  }
}
