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
        <nav class="navbar">
          <div class="navbar__row">
            <a href="#" class="navbar__row__leading">
              Leibal Stories
            </a>
            <div class="navbar__row__links">
              <a href="#">Architecture</a>
              <a href="#">Interiors</a>
              <a href="#">Furniture</a>
              <a href="#">Lighting</a>
              <a href="#">Products</a>
              <a href="#">Travel</a>
            </div>
            <div class="navbar__row__action">
              <a href="#">
                Submit
              </a>
              <a href="#">
                Sign Up
              </a>
            </div>
          </div>
          <div class="navbar__row">
            <a href="#" class="navbar__row__leading">
              Leibal Shop
            </a>
            <div class="navbar__row__links">
              <a href="#">Sofas</a>
              <a href="#">Chairs</a>
              <a href="#">Tables</a>
              <a href="#">Storage</a>
              <a href="#">Lighting</a>
              <a href="#">Accessories</a>
            </div>
            <div class="navbar__row__action">
              <a href="#">
                Trade
              </a>
              <a href="#">
                Login
              </a>
            </div>
          </div>
        </nav>
      </Host>
    );
  }

}
