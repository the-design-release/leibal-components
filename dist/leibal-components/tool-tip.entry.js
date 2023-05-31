import { r as registerInstance, h, e as Host } from './index-24a60cbb.js';

const toolTipCss = ":host{--font-family:var(--leibal-components-font-family, sans-serif);--color-light:#fff;--color-dark:#222;font-family:var(--font-family);display:block}.tooltip{position:relative;width:100%}.tooltip__content{position:absolute;left:0px;right:0px;margin-left:auto;margin-right:auto;padding:5rem;z-index:1;border:1px solid var(--color-dark);background-color:var(--color-light);visibility:hidden;opacity:0;transition:visibility 0s ease-in-out 0.3s, opacity 0.3s ease-in-out}.tooltip__content--visible{visibility:visible;opacity:1;transition-delay:0s}";

let ToolTip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bottomOffset = 0;
    this.show = false;
  }
  handleMouseEnter() {
    this.show = true;
  }
  handleMouseLeave() {
    this.show = false;
  }
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
    return (h(Host, null, h("div", { class: "tooltip" }, h("div", { style: { bottom: this.bottomOffset - 1 + 'px' }, class: 'tooltip__content ' + (this.show ? 'tooltip__content--visible' : '') }, h("slot", { name: "content" })), h("div", { ref: el => (this.wrapperEl = el) }, h("slot", { name: "wrapper" })))));
  }
};
ToolTip.style = toolTipCss;

export { ToolTip as tool_tip };
