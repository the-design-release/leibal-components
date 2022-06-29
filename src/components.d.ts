/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Theme } from "./utils/theme";
import { DisplayCardType } from "./components/display-card/display-card";
import { PlatformType } from "./utils/platform";
export namespace Components {
    interface DisplayCard {
        "bottomSubtitleName": string;
        "bottomTitleName": string;
        "cardType": DisplayCardType;
        "images": string;
        "linkTo": string;
        "theme": Theme;
    }
    interface NavBar {
        "authenticated": boolean;
        "platform": PlatformType;
        "showMultiplier": number;
    }
    interface SimpleButton {
        "fillWidth": boolean;
        "theme": Theme;
    }
    interface StickyScroller {
        "bottom": boolean;
        "endOffset": number;
        "startOffset": number;
    }
}
declare global {
    interface HTMLDisplayCardElement extends Components.DisplayCard, HTMLStencilElement {
    }
    var HTMLDisplayCardElement: {
        prototype: HTMLDisplayCardElement;
        new (): HTMLDisplayCardElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLSimpleButtonElement extends Components.SimpleButton, HTMLStencilElement {
    }
    var HTMLSimpleButtonElement: {
        prototype: HTMLSimpleButtonElement;
        new (): HTMLSimpleButtonElement;
    };
    interface HTMLStickyScrollerElement extends Components.StickyScroller, HTMLStencilElement {
    }
    var HTMLStickyScrollerElement: {
        prototype: HTMLStickyScrollerElement;
        new (): HTMLStickyScrollerElement;
    };
    interface HTMLElementTagNameMap {
        "display-card": HTMLDisplayCardElement;
        "nav-bar": HTMLNavBarElement;
        "simple-button": HTMLSimpleButtonElement;
        "sticky-scroller": HTMLStickyScrollerElement;
    }
}
declare namespace LocalJSX {
    interface DisplayCard {
        "bottomSubtitleName"?: string;
        "bottomTitleName"?: string;
        "cardType"?: DisplayCardType;
        "images"?: string;
        "linkTo"?: string;
        "theme"?: Theme;
    }
    interface NavBar {
        "authenticated"?: boolean;
        "platform"?: PlatformType;
        "showMultiplier"?: number;
    }
    interface SimpleButton {
        "fillWidth"?: boolean;
        "theme"?: Theme;
    }
    interface StickyScroller {
        "bottom"?: boolean;
        "endOffset"?: number;
        "startOffset"?: number;
    }
    interface IntrinsicElements {
        "display-card": DisplayCard;
        "nav-bar": NavBar;
        "simple-button": SimpleButton;
        "sticky-scroller": StickyScroller;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "display-card": LocalJSX.DisplayCard & JSXBase.HTMLAttributes<HTMLDisplayCardElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "simple-button": LocalJSX.SimpleButton & JSXBase.HTMLAttributes<HTMLSimpleButtonElement>;
            "sticky-scroller": LocalJSX.StickyScroller & JSXBase.HTMLAttributes<HTMLStickyScrollerElement>;
        }
    }
}
