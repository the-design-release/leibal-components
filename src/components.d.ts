/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NavBar {
    }
}
declare global {
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLElementTagNameMap {
        "nav-bar": HTMLNavBarElement;
    }
}
declare namespace LocalJSX {
    interface NavBar {
    }
    interface IntrinsicElements {
        "nav-bar": NavBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
        }
    }
}
