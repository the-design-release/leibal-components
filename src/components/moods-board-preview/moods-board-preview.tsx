import { Component, Host, h, Prop } from '@stencil/core';

export interface MoodsBoardImage {
  postId: string;
  postTitle: string;
  postSubtitle: string;
  imageUrl: string;
  timestamp: string;
}

export interface MoodsBoardData {
  postId: string;
  name: string;
  createdAt: string;
  images: MoodsBoardImage[];
  url: string;
}

@Component({
  tag: 'moods-board-preview',
  styleUrl: 'moods-board-preview.css',
  shadow: true,
})
export class MoodsBoard {
  @Prop() board: MoodsBoardData;

  render() {
    return (
      <Host>
        <div class="moods-board-preview">
          <div class="moods-board-preview__images">
            {this.board.images.length > 0 &&
              this.board.images.slice(0, 4).map(image => (
                <div class="moods-board-preview__image">
                  <img src={image.imageUrl} />
                </div>
              ))}
          </div>
          <div class="moods-board-preview__saved">{this.board.images.length} Saved</div>
          <div class="moods-board-preview__export">Export Collection</div>

          <div class="moods-board-preview__name">{this.board.name}</div>
        </div>
      </Host>
    );
  }
}
