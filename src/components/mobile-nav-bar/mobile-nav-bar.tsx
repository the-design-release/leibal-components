import { Component, Host, Prop, State, getAssetPath, h } from '@stencil/core';
import { BLOG_URL, PlatformType, STORE_URL } from '../../utils/platform';

@Component({
  tag: 'mobile-nav-bar',
  styleUrl: 'mobile-nav-bar.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MobileNavBar {
  @State() isOpen: boolean = false;
  @Prop() platform: PlatformType = 'blog';
  @State() isShowingLinks: boolean = false;
  @State() linksType: PlatformType = 'blog';

  showLinks(platform: PlatformType) {
    this.isShowingLinks = true;
    this.linksType = platform;
  }

  hideLinks() {
    this.isShowingLinks = false;
  }

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
        <div class="mobile-nav-bar">
          <div class={`mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}`}>
            <div>
              {this.isOpen ? (
                <img
                  class="mobile-nav-bar__icon"
                  src={getAssetPath('./assets/close.png')}
                  alt="Close Menu"
                  style={{ width: '0.88rem', height: '0.88rem' }}
                  onClick={() => (this.isOpen = false)}
                />
              ) : (
                <img
                  class="mobile-nav-bar__icon"
                  src={getAssetPath('./assets/hamburger.png')}
                  alt="Open Menu"
                  style={{ width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }}
                  onClick={() => (this.isOpen = true)}
                />
              )}
            </div>
            <div style={{ display: 'flex' }}>
              <img
                class="mobile-nav-bar__icon"
                src={getAssetPath('./assets/shopping-bag.png')}
                alt="Cart"
                style={{ paddingRight: '0.5rem' }}
              />
              <img
                class="mobile-nav-bar__icon"
                src={getAssetPath('./assets/user.png')}
                alt="Account"
                style={{ width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' }}
              />
            </div>
          </div>
          <div class={`mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}`}>
            <img
              class="mobile-nav-bar__logo"
              src={getAssetPath('./assets/leibal-logo.png')}
              alt="Logo"
              onClick={() => {
                window.location.href = this.platformSpecificLink(this.platform, '/');
              }}
            />

            <div style={{ position: 'relative' }}>
              <div
                class={`mobile-nav-bar__menu-links-container ${
                  this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''
                }`}
              >
                {this.linksType === 'blog' && (
                  <div class="mobile-nav-bar__menu-links">
                    <div
                      onClick={() => this.hideLinks()}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: '.5rem' }}
                    >
                      <img
                        src={getAssetPath('./assets/arrow.png')}
                        style={{
                          width: '1rem',
                          filter: 'invert(1)',
                          transform: 'rotate(-180deg)',
                          marginRight: '0.5rem',
                        }}
                      />{' '}
                      Stories
                    </div>
                    <div>
                      <div>
                        <a href="#">Architecture</a>
                      </div>
                      <div>
                        <a href="#">Interiors</a>
                      </div>
                      <div>
                        <a href="#">Furniture</a>
                      </div>
                      <div>
                        <a href="#">Lighting</a>
                      </div>
                      <div>
                        <a href="#">Objects</a>
                      </div>
                      <div>
                        <a href="#">Travel</a>
                      </div>
                    </div>
                  </div>
                )}

                {this.linksType === 'store' && (
                  <div class="mobile-nav-bar__menu-links">
                    <div
                      onClick={() => this.hideLinks()}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}
                    >
                      <img
                        src={getAssetPath('./assets/arrow.png')}
                        style={{
                          width: '1rem',
                          filter: 'invert(1)',
                          transform: 'rotate(-180deg)',
                          marginRight: '0.5rem',
                        }}
                      />{' '}
                      Store
                    </div>
                    <div>
                      {/* TODO: This isn't defined? */}
                      <div>
                        <a href="#">Sofas</a>
                      </div>
                      <div>
                        <a href="#">Lighting</a>
                      </div>
                      <div>
                        <a href="#">Accessories</a>
                      </div>
                      <div>
                        <a href="#">Lighting</a>
                      </div>
                      <div>
                        <a href="#">Objects</a>
                      </div>
                      <div>
                        <a href="#">Trinkets</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div class="mobile-nav-bar__menu-items">
                <div
                  class="mobile-nav-bar__menu-item"
                  onClick={() => {
                    this.showLinks('blog');
                  }}
                >
                  Stories &gt;
                </div>
                <div
                  class="mobile-nav-bar__menu-item"
                  onClick={() => {
                    this.showLinks('store');
                  }}
                >
                  Store &gt;
                </div>
              </div>

              <div class="mobile-nav-bar__submenu-items">
                <div class="mobile-nav-bar__submenu-item">Submit</div>
                <div class="mobile-nav-bar__submenu-item">Subscribe</div>
                <div class="mobile-nav-bar__submenu-item">Account</div>
                <div class="mobile-nav-bar__submenu-item">Cart</div>
              </div>

              {/* <div class="mobile-nav-bar__newsletter">
                <div class="mobile-nav-bar__newsletter__header">Newsletter</div>
                <div class="mobile-nav-bar__newsletter__input">
                  <input type="text" />
                  <button>Send</button>
                </div>
              </div> */}
            </div>

            <div class="mobile-nav-bar__links">
              <div>
                <div class="mobile-nav-bar__link-header">About</div>
                <div class="mobile-nav-bar__link-item">Contact Us</div>
                <div class="mobile-nav-bar__link-item">Submit</div>
                <div class="mobile-nav-bar__link-item">FAQ</div>
                <div class="mobile-nav-bar__link-item">Privacy</div>
                <div class="mobile-nav-bar__link-item">Terms &amp; Conditions</div>
                <div class="mobile-nav-bar__link-item">Trade Program</div>
              </div>
              <div>
                <div class="mobile-nav-bar__link-header">Connect</div>
                <div class="mobile-nav-bar__link-item">Pinterest</div>
                <div class="mobile-nav-bar__link-item">Instagram</div>
                <div class="mobile-nav-bar__link-item">Facebook</div>
                <div class="mobile-nav-bar__link-item">Twitter</div>
                <div class="mobile-nav-bar__link-item">Tumblr</div>
                <div class="mobile-nav-bar__link-item">LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
