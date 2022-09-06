import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'tool-tip',
  styleUrl: 'tool-tip.css',
  shadow: true,
})
export class ToolTip {
  @State() show: boolean = false;

  @Listen('mouseenter')
  handleMouseEnter() {
    this.show = true;
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    this.show = false;
  }

  render() {
    return (
      <Host>
        <div class="tooltip">
          <div class={'tooltip__content ' + (this.show ? 'tooltip__content--visible' : '')}>
            <slot name="content"></slot>
          </div>
          <slot name="wrapper"></slot>
        </div>
      </Host>
    );
  }
}
