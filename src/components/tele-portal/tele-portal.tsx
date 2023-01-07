import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'tele-portal',
  shadow: true,
})
export class TelePortal {
  @Element() el: HTMLElement;

  portal: HTMLDivElement;

  createPortal() {
    this.portal = document.createElement('div');
    document.body.prepend(this.portal);
  }

  moveElementToPortal() {
    this.portal.appendChild(this.el);
  }

  componentWillLoad() {
    this.createPortal();
  }

  componentDidLoad() {
    this.moveElementToPortal();
  }

  disconnectCallback() {
    this.portal.remove();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
