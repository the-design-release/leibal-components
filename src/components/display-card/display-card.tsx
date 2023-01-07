import { Component, h, Host, Prop, Watch } from '@stencil/core';
import { Theme } from '../../utils/theme';

export type DisplayCardType = 'normal' | 'featured';

@Component({
  tag: 'display-card',
  styleUrl: 'display-card.css',
  shadow: true,
})
export class DisplayCard {
  @Prop({ mutable: true, reflect: true })
  theme: Theme = 'light';

  @Prop({ mutable: true, reflect: true })
  cardType: DisplayCardType = 'normal';

  @Prop({ mutable: true })
  bottomTitleName: string = '';

  @Prop({ mutable: true })
  bottomSubtitleName: string = '';

  @Prop({ mutable: true })
  images: string = '';

  @Prop({ mutable: true })
  linkTo: string = '#';

  _images: string[];

  @Watch('images')
  watchImages(value) {
    if (typeof value === 'string') {
      this._images = JSON.parse(value);
    } else {
      this._images = value;
    }
  }

  componentWillLoad() {
    this.watchImages(this.images);
  }

  render() {
    return (
      <Host>
        {this.cardType === 'normal' ? (
          <a href={this.linkTo} class="display-card">
            <div class="display-card__image">
              <div style={{ backgroundImage: `url(${this._images[0]})` }}></div>
              <div style={{ backgroundImage: `url(${this._images[1]})` }}></div>
            </div>
            <div class="display-card__top">
              <div class="display-card__top__title">
                <slot name="top-title"></slot>
              </div>
              <div class="display-card__top__subtitle">
                <slot name="top-subtitle"></slot>
              </div>
            </div>
            <div class="display-card__bottom">
              <div class="display-card__bottom__title">
                <slot name="bottom-title"></slot>
              </div>
              <div class="display-card__bottom__subtitle">
                <slot name="bottom-subtitle"></slot>
              </div>
            </div>
          </a>
        ) : (
          <a href={this.linkTo} class="display-card--featured">
            <div class="col-span-4 display-card__image">
              <div style={{ backgroundImage: `url(${this._images[0]})` }}></div>
              <div style={{ backgroundImage: `url(${this._images[1]})` }}></div>
            </div>
            <div class="display-card--featured__right">
              <div class="display-card--featured__top">
                <div class="display-card--featured__top__title">
                  <slot name="top-title"></slot>
                </div>
                <div class="display-card--featured__top__subtitle">
                  <slot name="top-subtitle"></slot>
                </div>
              </div>
              <div class="display-card--featured__bottom">
                <div class="display-card--featured__bottom__title">
                  <div class="display-card--featured__bottom__title__name">{this.bottomTitleName}</div>
                  <slot name="bottom-title"></slot>
                </div>
                <div class="display-card--featured__bottom__subtitle">
                  <div class="display-card--featured__bottom__subtitle__name">{this.bottomSubtitleName}</div>
                  <slot name="bottom-subtitle"></slot>
                </div>
              </div>
            </div>
          </a>
        )}
      </Host>
    );
  }
}
