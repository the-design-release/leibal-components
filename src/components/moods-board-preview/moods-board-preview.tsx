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
  images: MoodsBoardImage[];
  timestamp: string;
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
            {this.board.images.length === 0 &&
              [0, 1, 2, 3].map(() => (
                <div class="moods-board-preview__image">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXT09PZ2dlvb29kZGRYWFhNTU1DQ0M4ODhCQkJLS0siIiLg4OB0dHQGBgYlJSUoKCgtLS1fX19UVFQ8PDxP1g+TAAABX0lEQVR4nO3dOVLDAAAEQcm3LHHY/P+vKCChCKDIRur+weRbtcPL69v79Xq9XW7TeXX68jh+c/i/468epz94nv9guvxwH6Z53LJ5Gc7jsGXjYQeFz80XnhS2KexT2KewT2Gfwr618LH5wqPCNoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2HfLgoPCtsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYt4vFkMI4hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9u3iZ0ZhnMI+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CvrXwrLBNYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2HfWjhtvvCisE1hn8I+hX0K+xT2KexT2LePwnncsnkZ7sthy5aPT3rrDlIBlNiKAAAAAElFTkSuQmCC" />
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
