import { Component, Host, h, Prop } from '@stencil/core';

export interface MoodsBoardImage {
  postId: string;
  postTitle: string;
  postSubtitle: string;
  photographer?: string;
  imageUrl: string;
  timestamp: string;
}

export interface MoodsBoardData {
  id: string;
  postId: string;
  name: string;
  images: MoodsBoardImage[];
  timestamp: string;
  url: string;
}

const FILLER_IMAGE_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAQAAACWCLlpAAAA4ElEQVR42u3QMREAAAgEIL9/Xmet4OxBBNJTHEWWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZP20NjklnrS/uTwAAAAASUVORK5CYII=';

@Component({
  tag: 'moods-board-preview',
  styleUrl: 'moods-board-preview.css',
  shadow: true,
})
export class MoodsBoard {
  @Prop() board: MoodsBoardData;

  render() {
    let thumbnails = this.board.images.map(image => image.imageUrl);

    if (this.board.images.length <= 4) {
      thumbnails = this.board.images.map(image => image.imageUrl);
      for (let i = 0; i < 4 - this.board.images.length; i++) {
        thumbnails.push(FILLER_IMAGE_URL);
      }
    }

    return (
      <Host>
        <div class="moods-board-preview">
          <div class="moods-board-preview__images">
            {thumbnails.slice(0, 4).map(image => (
              <div class="moods-board-preview__image">
                <img src={image} />
              </div>
            ))}
            <remove-overlay name="Board" payload={JSON.stringify(this.board)} />
          </div>
          <div class="moods-board-preview__saved">{this.board.images.length} Saved</div>
          <div class="moods-board-preview__export">Export Collection</div>

          <div class="moods-board-preview__name">{this.board.name}</div>
        </div>
      </Host>
    );
  }
}
