import { r as registerInstance, h, H as Host, a as getElement } from './index-3f06ee34.js';

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

export { StickyScroller as sticky_scroller };
