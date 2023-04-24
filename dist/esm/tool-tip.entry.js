import { r as registerInstance, h, H as Host } from './index-7436abb4.js';

const toolTipCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.tooltip{position:relative;width:100%}.tooltip__content{background-color:var(--color-light);border:1px solid var(--color-dark);left:0;margin-left:auto;margin-right:auto;opacity:0;padding:5rem;position:absolute;right:0;transition:visibility 0s ease-in-out .3s,opacity .3s ease-in-out;visibility:hidden;z-index:1}.tooltip__content--visible{opacity:1;transition-delay:0s;visibility:visible}";

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
