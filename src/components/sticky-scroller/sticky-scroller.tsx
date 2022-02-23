import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sticky-scroller',
  styleUrl: 'sticky-scroller.css',
  shadow: true,
})
export class StickyScroller {
  @Prop()
  parent?: string;

  private elem?: HTMLDivElement;
  private elemBounds?: DOMRect;

  private fillerElem?: HTMLDivElement;

  private parentElem?: HTMLElement;
  private parentBounds?: DOMRect;

  private isScrolling: boolean = false;

  componentDidLoad() {
    if (this.parent) {
      this.parentElem = document.querySelector(this.parent);
    } else {
      this.parentElem = this.elem.parentElement;
    }

    this.elemBounds = this.elem.getBoundingClientRect();
    this.parentBounds = this.parentElem.getBoundingClientRect();

    // this.fillerElem.style.height = this.elem.getBoundingClientRect().height + 'px';
    this.parentElem.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  disconnectedCallback() {
    this.parentElem.removeEventListener('scroll', this.scrollHandler.bind(this));
  }

  scrollHandler() {
    // const offsetY = this.parentElem.scrollTop;
    // this.elem.style.top = offsetY + 'px';
    // this.elem.style.marginBottom = '-' + offsetY + 'px';
    // console.log(this.elemBounds, this.parentBounds);
    console.log(this.parentElem.children.item(0));

    console.log(this.parentElem.scrollTop, this.parentElem.offsetTop, this.elem.offsetTop);

    this.isScrolling = this.parentElem.scrollTop >= this.elem.offsetTop && this.parentElem.scrollTop <= this.parentElem.offsetTop + this.elemBounds.height;

    if (this.isScrolling) {
      console.log('I AM ROLLIN');
    }
  }

  render() {
    return (
      <Host>
        <div ref={el => (this.elem = el as HTMLDivElement)} style={{ position: 'absolute' }}>
          <slot></slot>
        </div>
        {/* <div ref={el => (this.fillerElem = el as HTMLDivElement)}></div> */}
      </Host>
    );
  }
}
