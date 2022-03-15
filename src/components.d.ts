/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlatformType } from "./components/nav-bar/nav-bar";
export namespace Components {
    interface NavBar {
        "authenticated": boolean;
        "platform": PlatformType;
    }
    interface StickyScroller {
        "bottom": boolean;
        "endBottom": number;
        "startTop": number;
    }
}
declare global {
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLStickyScrollerElement extends Components.StickyScroller, HTMLStencilElement {
    }
    var HTMLStickyScrollerElement: {
        prototype: HTMLStickyScrollerElement;
        new (): HTMLStickyScrollerElement;
    };
    interface HTMLElementTagNameMap {
        "nav-bar": HTMLNavBarElement;
        "sticky-scroller": HTMLStickyScrollerElement;
    }
}
declare namespace LocalJSX {
    interface NavBar {
        "authenticated"?: boolean;
        "platform"?: PlatformType;
    }
    interface StickyScroller {
        "bottom"?: boolean;
        "endBottom"?: number;
        "startTop"?: number;
    }
    interface IntrinsicElements {
        "nav-bar": NavBar;
        "sticky-scroller": StickyScroller;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "sticky-scroller": LocalJSX.StickyScroller & JSXBase.HTMLAttributes<HTMLStickyScrollerElement>;
        }
    }
}
