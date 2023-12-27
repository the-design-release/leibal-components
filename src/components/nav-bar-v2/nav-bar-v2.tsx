import { Component, Host, h, getAssetPath, State, Prop, Fragment } from '@stencil/core';
import { PlatformType, STORE_URL, BLOG_URL } from '../../utils/platform';

@Component({
  tag: 'nav-bar-v2',
  styleUrl: 'nav-bar-v2.css',
  shadow: true,
})
export class NavBarV2 {
  searchInput?: HTMLInputElement;

  @Prop() authenticated: boolean = false;
  @Prop() platform: PlatformType = 'blog';
  @State() isSearchOpen: boolean = false;
  @State() currentMenu: 'read' | 'shop' | null = null;
  @State() searchText = '';

  platformSpecificLink(platform: PlatformType, path: string): string {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    } else {
      return new URL(path, platformUrl).toString();
    }
  }

  render() {
    return (
      <Host>
        <div class="container">
          <div class="menu">
            <div class="logo">
              <img
                src={getAssetPath('./assets/leibal-logo.png')}
                alt="logo"
                onClick={() => {
                  window.location.href = this.platformSpecificLink(this.platform, '/');
                }}
              />
            </div>
            <div
              class={`master-link ${this.currentMenu == 'read' && 'master-link--active'}`}
              onClick={() => {
                this.currentMenu = this.currentMenu == 'read' ? null : 'read';
              }}
            >
              Read
            </div>
            <div
              class={`master-link ${this.currentMenu == 'shop' && 'master-link--active'}`}
              onClick={() => {
                this.currentMenu = this.currentMenu == 'shop' ? null : 'shop';
              }}
            >
              Shop
            </div>
            <div class="empty-space"></div>
            {this.platform == 'blog' && (
              <Fragment>
                <div class="master-link">
                  <a href="/submissions-form">Submit</a>
                </div>
                <div class="master-link">
                  {this.authenticated ? (
                    <a href={this.platformSpecificLink('blog', '/moods')}>MOODS</a>
                  ) : (
                    <a href={this.platformSpecificLink('blog', '/subscription/subscribe')}>Sign Up</a>
                  )}
                </div>
              </Fragment>
            )}
            {this.platform == 'store' && (
              <Fragment>
                <div class="master-link">Trade</div>
                <div class="master-link">Cart</div>
              </Fragment>
            )}

            <div
              class="master-link search"
              onClick={() => {
                if (this.currentMenu != null) this.currentMenu = null;
                this.isSearchOpen = !this.isSearchOpen;
              }}
            >
              Search
            </div>
            <div class={`menu search-bar ${this.isSearchOpen && 'search-bar--open'}`}>
              <div class="search-bar-container">
                <input
                  ref={el => (this.searchInput = el as HTMLInputElement)}
                  class="navbar__search__input"
                  onInput={e => {
                    this.searchText = (e.target as HTMLInputElement).value;
                  }}
                  onKeyPress={e => {
                    if (e.key === 'Enter') {
                      this.searchInput.blur();
                      this.isSearchOpen = false;

                      if (this.platform === 'blog') {
                        window.location.href = this.platformSpecificLink('blog', `/?s=${this.searchText}`);
                      } else {
                        window.location.href = this.platformSpecificLink('store', `/search?q=${this.searchText}`);
                      }
                    }
                  }}
                  type="text"
                  placeholder="Start Typing..."
                />
              </div>
            </div>
          </div>
          <div class={`menu submenu ${this.currentMenu == 'read' && 'submenu--open'}`}>
            <div></div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/')}>Read All</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/category/architecture')}>Architecture</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/category/interiors')}>Interiors</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/category/furniture')}>Furniture</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/category/lighting')}>Lighting</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/category/objects')}>Objects</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('blog', '/category/travel')}>Travel</a>
            </div>
            <div class="sub-link inactive">
              <a href="#">City Guides</a>
            </div>
            <div></div>
          </div>

          <div class={`menu submenu ${this.currentMenu == 'shop' && 'submenu--open'}`}>
            <div></div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/')}>Shop All</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/seating')}>Seating</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/tables')}>Tables</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/lighting')}>Lighting</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/storage')}>Storage</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/outdoor')}>Outdoor</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/accessories')}>Accessories</a>
            </div>
            <div class="sub-link">
              <a href={this.platformSpecificLink('store', '/collections/brands')}>Brands</a>
            </div>
            <div></div>
          </div>
        </div>
      </Host>
    );
  }
}
