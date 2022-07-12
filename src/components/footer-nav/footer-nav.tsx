import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'footer-nav',
  styleUrl: 'footer-nav.css',
  shadow: true,
})
export class FooterNav {
  render() {
    return (
      <Host>
        <div class="footer-nav">
          {/* Stories */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Stories</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Architecture
              </a>
              <a class="footer-nav__link" href="#">
                Interiors
              </a>
              <a class="footer-nav__link" href="#">
                Furniture
              </a>
              <a class="footer-nav__link" href="#">
                Lighting
              </a>
              <a class="footer-nav__link" href="#">
                Products
              </a>
              <a class="footer-nav__link" href="#">
                Travel
              </a>
            </div>
          </div>
          {/* End Stories */}

          {/* Store */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Store</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Sofas
              </a>
              <a class="footer-nav__link" href="#">
                Chairs
              </a>
              <a class="footer-nav__link" href="#">
                Tables
              </a>
              <a class="footer-nav__link" href="#">
                Storage
              </a>
              <a class="footer-nav__link" href="#">
                Lighting
              </a>
              <a class="footer-nav__link" href="#">
                Accessories
              </a>
            </div>
          </div>
          {/* End Store */}

          {/* About */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">About</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Contact Us
              </a>
              <a class="footer-nav__link" href="#">
                Submit
              </a>
              <a class="footer-nav__link" href="#">
                FAQ
              </a>
              <a class="footer-nav__link" href="#">
                Privacy
              </a>
              <a class="footer-nav__link" href="#">
                Terms &amp; Conditions
              </a>
              <a class="footer-nav__link" href="#">
                Trade Program
              </a>
            </div>
          </div>
          {/* End About */}

          {/* Connect */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Connect</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Pinterest
              </a>
              <a class="footer-nav__link" href="#">
                Instagram
              </a>
              <a class="footer-nav__link" href="#">
                Facebook
              </a>
              <a class="footer-nav__link" href="#">
                Twitter
              </a>
              <a class="footer-nav__link" href="#">
                Tumblr
              </a>
              <a class="footer-nav__link" href="#">
                LinkedIn
              </a>
            </div>
          </div>
          {/* End Connect */}

          {/* Subscribe */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Subscribe</div>
            <div class="footer-nav__email-form">{/* TODO: Create an input component and add the email form. */}</div>
            <div class="footer-nav__trademark">
              &copy; {new Date().getUTCFullYear()} LEIBAL LLC. ALL RIGHTS RESERVED
            </div>
          </div>
          {/* End Subscribe */}
        </div>
      </Host>
    );
  }
}
