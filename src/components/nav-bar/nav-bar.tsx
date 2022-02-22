import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
