import { Component, Host, h, Prop } from '@stencil/core';
import { Theme } from '../../utils/theme';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.css',
  shadow: true,
})
export class SimpleButton {
  @Prop({ mutable: true, reflect: true })
  theme: Theme = 'light';

  @Prop({ mutable: true })
  fillWidth: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={
            'simple-button ' +
            (this.fillWidth ? 'simple-button--full-width' : '') +
            (this.theme == 'dark' ? 'simple-button--dark' : '')
          }
          role="button"
          aria-pressed="false"
          tabindex="0"
        >
          <div class="simple-button__icon">
            <slot name="icon"></slot>
          </div>
          <div class="simple-button__text">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
