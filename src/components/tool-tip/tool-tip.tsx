import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'tool-tip',
  styleUrl: 'tool-tip.css',
  shadow: true,
})
export class ToolTip {
  wrapperEl: HTMLElement;

  @State() bottomOffset: number = 0;
  @State() show: boolean = false;

  @Listen('mouseenter')
  handleMouseEnter() {
    this.show = true;
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    this.show = false;
  }

  @Listen('resize')
  handleResize() {
    this.calculateWrapperHeight();
  }

  componentDidLoad() {
    this.calculateWrapperHeight();
  }

  calculateWrapperHeight() {
    const { height } = this.wrapperEl.getBoundingClientRect();
    this.bottomOffset = height;
  }

  render() {
    return (
      <Host>
        <div class="tooltip">
          <div
            style={{ bottom: this.bottomOffset - 1 + 'px' }}
            class={'tooltip__content ' + (this.show ? 'tooltip__content--visible' : '')}
          >
            <slot name="content"></slot>
          </div>
          <div ref={el => (this.wrapperEl = el)}>
            <slot name="wrapper"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
