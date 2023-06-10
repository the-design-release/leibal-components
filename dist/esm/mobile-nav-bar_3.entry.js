import { r as registerInstance, h, g as getAssetPath, H as Host, a as getElement } from './index-3f06ee34.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{font-weight:300;left:0;position:fixed;right:0;top:0;z-index:100}.mobile-nav-bar__icons{align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:flex;height:50px;justify-content:space-between;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;--tw-bg-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-around;opacity:0;padding:calc(50px + 3.5rem) 1rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:13px;font-weight:300;margin-bottom:.5rem;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:13px;margin-bottom:.25rem;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:13px;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:400;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:12px;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__search{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));bottom:0;color:rgb(0 0 0/var(--tw-text-opacity));display:flex;justify-content:space-between;left:0;position:fixed;right:0}.mobile-nav-bar__search input{all:unset;display:block;padding:1rem;width:100%}.mobile-nav-bar__search button{all:unset;border-left:1px solid #888;display:block;padding:1rem 3rem}";

let MobileNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = false;
    this.platform = 'blog';
    this.isShowingLinks = false;
    this.linksType = 'blog';
    this.searchText = '';
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.windowResizeEl.style.height = `${window.innerHeight}px`;
    });
  }
  showLinks(platform) {
    this.isShowingLinks = true;
    this.linksType = platform;
  }
  hideLinks() {
    this.isShowingLinks = false;
  }
  platformSpecificLink(platform, path) {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    }
    else {
      return new URL(path, platformUrl).toString();
    }
  }
  submitSearch() {
    if (this.platform === 'blog') {
      window.location.href = this.platformSpecificLink('blog', `/?s=${this.searchText}`);
    }
    else {
      window.location.href = this.platformSpecificLink('store', `/search?q=${this.searchText}`);
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "mobile-nav-bar" }, h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), h("div", { style: { display: 'flex' } }, h("a", { href: this.platformSpecificLink(this.platform, '/cart') }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0.5rem' } })), h("a", { href: this.platformSpecificLink(this.platform, '/my-account') }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' } })))), h("div", { ref: () => this.windowResizeEl, class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo", onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } }), h("div", { style: { position: 'relative' } }, h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Stories"), h("div", null, h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/objects') }, "Objects")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))))), this.linksType === 'store' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Store"), h("div", null, h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")))))), h("div", { class: "mobile-nav-bar__menu-items" }, h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('blog');
      } }, "Stories >"), h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('store');
      } }, "Store >")), h("div", { class: "mobile-nav-bar__submenu-items" }, h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/my-account') }, "Account"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart"))), h("div", { class: "mobile-nav-bar__links" }, h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "About"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/faq') }, "FAQ"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/privacy') }, "Privacy"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/terms-and-conditions') }, "Terms & Conditions"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/trades') }, "Trade Program")), h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"), h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"), h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/leibal" }, "TikTok"))), h("div", { class: "mobile-nav-bar__search" }, h("input", { class: "navbar__search__input", onInput: e => {
        this.searchText = e.target.value;
      }, onKeyPress: e => {
        if (e.key === 'Enter') {
          this.submitSearch();
        }
      }, type: "text", placeholder: "Start Typing..." }), h("button", { onClick: () => {
        this.submitSearch();
      } }, "Search"))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get windowResizeEl() { return getElement(this); }
};
MobileNavBar.style = mobileNavBarCss;

// Use require here to keep TS happy...
// TS has a confilicting internal type with this module
// const ResizeObserver = require('resize-observer-polyfill');
const getScrollParent = node => {
  let parent = node;
  while ((parent = parent.parentElement)) {
    const overflowYVal = getComputedStyle(parent, null).getPropertyValue('overflow-y');
    if (parent === document.body)
      return window;
    if (overflowYVal === 'auto' || overflowYVal === 'scroll')
      return parent;
  }
  return window;
};
const offsetTill = (node, target) => {
  let current = node;
  let offset = 0;
  // If target is not an offsetParent itself, subtract its offsetTop and set correct target
  if (target.firstChild && target.firstChild.offsetParent !== target) {
    offset += node.offsetTop - target.offsetTop;
    target = node.offsetParent;
    offset += -node.offsetTop;
  }
  do {
    offset += current.offsetTop;
    current = current.offsetParent;
  } while (current && current !== target);
  return offset;
};
const getParentNode = node => {
  let currentParent = node.parentNode;
  while (currentParent) {
    const style = getComputedStyle(currentParent, null);
    if (style.getPropertyValue('display') !== 'contents')
      break;
    currentParent = currentParent.parentNode;
  }
  return currentParent || window;
};
let stickyProp = null;
if (typeof CSS !== 'undefined' && CSS.supports) {
  if (CSS.supports('position', 'sticky'))
    stickyProp = 'sticky';
  else if (CSS.supports('position', '-webkit-sticky'))
    stickyProp = '-webkit-sticky';
}
// Inspired by https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
let passiveArg = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line getter-return
    get() {
      passiveArg = { passive: true };
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
}
catch (e) { }
const registerNode = (node, { offsetTop, offsetBottom, bottom }) => {
  const scrollPane = getScrollParent(node);
  let latestScrollY = scrollPane === window ? window.scrollY : scrollPane.scrollTop;
  const unsubs = [];
  let mode, offset, nodeHeight, naturalTop, parentHeight, scrollPaneOffset, viewPortHeight;
  const getCurrentOffset = () => {
    if (mode === 'relative')
      return offset;
    if (mode === 'stickyTop') {
      return Math.max(0, scrollPaneOffset + latestScrollY - naturalTop + offsetTop);
    }
    if (mode === 'stickyBottom') {
      return Math.max(0, scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom));
    }
  };
  const changeToStickyBottomIfBoxTooLow = scrollY => {
    if (scrollY + scrollPaneOffset + viewPortHeight >= naturalTop + nodeHeight + offset + offsetBottom) {
      changeMode('stickyBottom');
    }
  };
  const changeMode = newMode => {
    mode = newMode;
    if (newMode === 'relative') {
      node.style.position = 'relative';
      if (bottom) {
        const nextBottom = Math.max(0, parentHeight - nodeHeight - offset);
        node.style.bottom = `${nextBottom}px`;
      }
      else {
        node.style.top = `${offset}px`;
      }
    }
    else {
      node.style.position = stickyProp;
      if (newMode === 'stickyBottom') {
        if (bottom) {
          node.style.bottom = `${offsetBottom}px`;
        }
        else {
          node.style.top = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        }
      }
      else {
        // stickyTop
        if (bottom) {
          node.style.bottom = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        }
        else {
          node.style.top = `${offsetTop}px`;
        }
      }
    }
    offset = getCurrentOffset();
  };
  const initial = () => {
    if (bottom) {
      if (mode !== 'stickyBottom')
        changeMode('stickyBottom');
    }
    else {
      if (mode !== 'stickyTop')
        changeMode('stickyTop');
    }
  };
  const addListener = (element, event, handler, passive = undefined) => {
    element.addEventListener(event, handler, passive);
    unsubs.push(() => element.removeEventListener(event, handler));
  };
  const handleScroll = () => {
    const scrollY = scrollPane === window ? window.scrollY : scrollPane.scrollTop;
    if (scrollY === latestScrollY)
      return;
    if (nodeHeight + offsetTop + offsetBottom <= viewPortHeight) {
      // Just make it sticky if node smaller than viewport
      initial();
      latestScrollY = scrollY;
      return;
    }
    const scrollDelta = scrollY - latestScrollY;
    offset = getCurrentOffset();
    if (scrollDelta > 0) {
      // scroll down
      if (mode === 'stickyTop') {
        if (scrollY + scrollPaneOffset + offsetTop > naturalTop) {
          if (scrollY + scrollPaneOffset + viewPortHeight <= naturalTop + nodeHeight + offset + offsetBottom) {
            changeMode('relative');
          }
          else {
            changeMode('stickyBottom');
          }
        }
      }
      else if (mode === 'relative') {
        changeToStickyBottomIfBoxTooLow(scrollY);
      }
    }
    else {
      // scroll up
      if (mode === 'stickyBottom') {
        if (scrollPaneOffset + scrollY + viewPortHeight < naturalTop + parentHeight + offsetBottom) {
          if (scrollPaneOffset + scrollY + offsetTop >= naturalTop + offset) {
            changeMode('relative');
          }
          else {
            changeMode('stickyTop');
          }
        }
      }
      else if (mode === 'relative') {
        if (scrollPaneOffset + scrollY + offsetTop < naturalTop + offset) {
          changeMode('stickyTop');
        }
      }
    }
    latestScrollY = scrollY;
  };
  const handleWindowResize = () => {
    viewPortHeight = window.innerHeight;
    scrollPaneOffset = 0;
    handleScroll();
  };
  const handleScrollPaneResize = () => {
    viewPortHeight = scrollPane.offsetHeight;
    // Only applicable if scrollPane is an offsetParent
    if (scrollPane.firstChild.offsetParent === scrollPane) {
      scrollPaneOffset = scrollPane.getBoundingClientRect().top;
    }
    else {
      scrollPaneOffset = 0;
    }
    handleScroll();
  };
  const handleParentNodeResize = () => {
    const parentNode = getParentNode(node);
    const computedParentStyle = getComputedStyle(parentNode, null);
    const parentPaddingTop = parseInt(computedParentStyle.getPropertyValue('padding-top'), 10);
    const parentPaddingBottom = parseInt(computedParentStyle.getPropertyValue('padding-bottom'), 10);
    const verticalParentPadding = parentPaddingTop + parentPaddingBottom;
    naturalTop = offsetTill(parentNode, scrollPane) + parentPaddingTop + scrollPaneOffset;
    const oldParentHeight = parentHeight;
    parentHeight = parentNode.getBoundingClientRect().height - verticalParentPadding;
    if (mode === 'relative') {
      if (bottom) {
        changeMode('relative');
      }
      else {
        // If parent height decreased...
        if (oldParentHeight > parentHeight) {
          changeToStickyBottomIfBoxTooLow(latestScrollY);
        }
      }
    }
    if (oldParentHeight !== parentHeight && mode === 'relative') {
      latestScrollY = Number.POSITIVE_INFINITY;
      handleScroll();
    }
  };
  const handleNodeResize = ({ initial: initialArg } = { initial: false }) => {
    const prevHeight = nodeHeight;
    nodeHeight = node.getBoundingClientRect().height;
    if (!initialArg && prevHeight !== nodeHeight) {
      if (nodeHeight + offsetTop + offsetBottom <= viewPortHeight) {
        // Just make it sticky if node smaller than viewport
        mode = undefined;
        initial();
        return;
      }
      else {
        const diff = prevHeight - nodeHeight;
        const lowestPossible = parentHeight - nodeHeight;
        const nextOffset = Math.min(lowestPossible, getCurrentOffset() + (bottom ? diff : 0));
        offset = Math.max(0, nextOffset);
        if (!bottom || mode !== 'stickyBottom')
          changeMode('relative');
      }
    }
  };
  const addResizeObserver = (n, handler) => {
    const ro = new ResizeObserver(handler);
    ro.observe(n);
    unsubs.push(() => ro.disconnect());
  };
  addListener(scrollPane, 'scroll', handleScroll, passiveArg);
  addListener(scrollPane, 'mousewheel', handleScroll, passiveArg);
  if (scrollPane === window) {
    addListener(window, 'resize', handleWindowResize);
    handleWindowResize();
  }
  else {
    addResizeObserver(scrollPane, handleScrollPaneResize);
    handleScrollPaneResize();
  }
  addResizeObserver(getParentNode(node), handleParentNodeResize);
  handleParentNodeResize();
  addResizeObserver(node, handleNodeResize);
  handleNodeResize({ initial: true });
  initial();
  return () => unsubs.forEach(fn => fn());
};
let StickyScroller = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.startOffset = 0;
    this.endOffset = 0;
    this.bottom = false;
    this.mode = 'relative';
    this.argsRef = {
      offsetTop: this.startOffset,
      offsetBottom: this.endOffset,
      bottom: this.bottom,
      mode: this.mode,
    };
  }
  componentWillLoad() {
    registerNode(this.el, this.argsRef);
  }
  componentShouldUpdate() {
    this.argsRef = { offsetTop: this.startOffset, offsetBottom: this.endOffset, bottom: this.bottom, mode: this.mode };
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
};

const termsOfServiceCss = ":host{display:block}.terms-of-service{display:block;font-size:13px;font-weight:300}@media (min-width:768px){.terms-of-service{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr))}}.terms-of-service * button{all:unset;cursor:pointer;display:block}.terms-of-service__sections{margin-bottom:4rem}@media (min-width:768px){.terms-of-service__sections{grid-column:span 2/span 2}}.terms-of-service__sections>*{margin-bottom:.5rem!important}.terms-of-service__section--active,.terms-of-service__subsection-select--active{font-weight:600!important}.terms-of-service__subsections{margin-bottom:4rem}@media (min-width:768px){.terms-of-service__subsections{grid-column:span 3/span 3;margin-bottom:6rem}}.terms-of-service__subsections>*{margin-bottom:.5rem!important}.terms-of-service__subheaders{margin-bottom:4rem}.terms-of-service__subheaders>*{margin-bottom:.5rem!important}.terms-of-service__subheaders>:hover{font-weight:600!important}@media (min-width:768px){.terms-of-service__content{grid-column:span 5/span 5}}.terms-of-service__subsection__title{font-size:1.875rem;line-height:2.25rem;margin-bottom:1rem}.terms-of-service__subsection__content{padding-top:4rem}.terms-of-service__subsection__content__title{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:2rem}";

const CONTENT = {
  faq: {
    sections: [
      {
        title: { short: 'Stories FAQ', long: 'Stories Frequently Asked Questions' },
        subsections: [{ title: 'What is Stories?', content: 'Sotries???' }],
      },
    ],
  },
  terms: {
    sections: [
      {
        title: { short: 'Stories T&C', long: 'Stories Terms & Conditions' },
        subsections: [
          { title: 'Terms', content: 'Some sick shit...' },
          { title: 'Shipping', content: 'Some sick shit...' },
          { title: 'Returns', content: 'Some sick shit...' },
          { title: 'Order Cancellation', content: 'Some sick shit...' },
          { title: 'User Warranties', content: 'Some sick shit...' },
          { title: 'Privacy Policy', content: 'Some sick shit...' },
        ],
      },
    ],
  },
  privacy: {
    sections: [
      {
        title: { short: 'Stories Privacy', long: 'Stories Privacy Policy' },
        subsections: [],
      },
    ],
  },
};
let TermsOfService = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visibleSection = 'terms';
    this.subsectionIndex = 0;
  }
  sectionProps(section) {
    return {
      class: {
        'terms-of-service__section': true,
        'terms-of-service__section--active': this.visibleSection === section,
      },
      onClick: () => (this.visibleSection = section),
    };
  }
  subsectionProps(index) {
    return {
      class: {
        'terms-of-service__subsection-select': true,
        'terms-of-service__subsection-select--active': this.subsectionIndex === index,
      },
      onClick: () => (this.subsectionIndex = index),
    };
  }
  renderSections() {
    return (h("div", { class: "terms-of-service__sections" }, h("sticky-scroller", { startOffset: 130 }, h("button", Object.assign({}, this.sectionProps('faq')), "FAQ"), h("button", Object.assign({}, this.sectionProps('terms')), "Terms"), h("button", Object.assign({}, this.sectionProps('privacy')), "Privacy"))));
  }
  renderSubsectionContent() {
    const { sections } = CONTENT[this.visibleSection];
    const section = sections[this.subsectionIndex];
    return (h("div", { class: "terms-of-service__content" }, h("div", { class: "terms-of-service__content__subsection" }, h("div", { class: "terms-of-service__subsection__title" }, section.title.long), h("div", null, section.subsections.map(({ title, content }, index) => (h("div", { class: "terms-of-service__subsection__content", id: `subsection-${index}` }, h("div", { class: "terms-of-service__subsection__content__title" }, title), h("div", { class: "terms-of-service__subsection__content__body" }, content))))))));
  }
  renderSubsections() {
    const { sections } = CONTENT[this.visibleSection];
    return (h("div", { style: { 'grid-column': 'span 3 / span 3' } }, h("sticky-scroller", { startOffset: 130 }, h("div", { class: "terms-of-service__subsections" }, sections.map(({ title }, index) => (h("button", Object.assign({}, this.subsectionProps(index)), title.short)))), h("div", { class: "terms-of-service__subheaders" }, sections[this.subsectionIndex].subsections.map(({ title }, index) => (h("button", { onClick: () => {
        const element = this.el.shadowRoot.querySelector(`#subsection-${index}`);
        const { top } = element.getBoundingClientRect();
        const offset = 60;
        window.scrollTo({ top: top + window.scrollY - offset, behavior: 'smooth' });
      } }, title)))))));
  }
  render() {
    return (h(Host, null, h("div", { class: "terms-of-service" }, this.renderSections(), this.renderSubsections(), this.renderSubsectionContent())));
  }
  get el() { return getElement(this); }
};
TermsOfService.style = termsOfServiceCss;

export { MobileNavBar as mobile_nav_bar, StickyScroller as sticky_scroller, TermsOfService as terms_of_service };
