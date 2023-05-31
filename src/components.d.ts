/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Theme } from "./utils/theme";
import { MoodsModalEvent } from "./components/add-to-moods-button/add-to-moods-button";
import { DisplayCardType } from "./components/display-card/display-card";
import { PlatformType } from "./utils/platform";
import { MoodsBoardImage } from "./components/moods-board-preview/moods-board-preview";
import { MoodBoard, MoodsBoardPickedEvent } from "./components/moods-board-picker/moods-board-picker";
import { MoodsBoardData } from "./components/moods-board-preview/moods-board-preview";
import { RemoveOverlayEvent } from "./components/remove-overlay/remove-overlay";
import { InputType } from "./components/simple-input/simple-input";
export namespace Components {
    interface AddToMoodsButton {
        "contentLocation": 'left' | 'right';
        "disabled": boolean;
        "imageUrl": string;
        "postId": number | null;
        "showOnHover": boolean;
        "theme": Theme;
    }
    interface DisplayCard {
        "bottomSubtitleName": string;
        "bottomTitleName": string;
        "cardType": DisplayCardType;
        "images": string;
        "linkTo": string;
        "theme": Theme;
    }
    interface EnquireModal {
        "postTitle": string;
        "previewImage": string;
    }
    interface FooterNav {
        "platform": PlatformType;
    }
    interface ImageGallery {
        "canEnquire": boolean;
        "designDetail": string | null;
        "images": string;
        "photographer": string;
        "postExcerpt": string;
        "postId": number;
        "postTitle": string;
        "previewImage": string;
    }
    interface ImageGalleryLink {
        "imageIndex": number;
    }
    interface MobileNavBar {
        "platform": PlatformType;
    }
    interface MoodsBoard {
        "boardId": string;
        "images": string;
        "wpNonce": string;
    }
    interface MoodsBoardPicker {
        "boards": string;
        "selectedMoodBoard": MoodBoard;
    }
    interface MoodsBoardPreview {
        "board": MoodsBoardData;
    }
    interface MoodsBoards {
        "apiUrl": string;
        "boards": string;
        "wpNonce": string;
    }
    interface MoodsGallery {
        "images": string;
    }
    interface MoodsModal {
        "boards": string;
        "isAuthenticated": boolean;
        "moodsApiUrl": string;
        "wpApiNonce": string;
    }
    interface NavBar {
        "authenticated": boolean;
        "platform": PlatformType;
        "showMultiplier": number;
    }
    interface RemoveOverlay {
        "name": string;
        "payload": any;
    }
    interface SimpleButton {
        "disabled": boolean;
        "fillWidth": boolean;
        "theme": Theme;
    }
    interface SimpleInput {
        "name": string;
        "placeholder": string;
        "required": boolean;
        "type": InputType;
        "value": string;
    }
    interface StickyScroller {
        "bottom": boolean;
        "endOffset": number;
        "mode": 'relative' | 'stickyTop' | 'stickyBottom';
        "startOffset": number;
    }
    interface TelePortal {
    }
    interface TermsOfService {
    }
    interface ToolTip {
    }
}
declare global {
    interface HTMLAddToMoodsButtonElement extends Components.AddToMoodsButton, HTMLStencilElement {
    }
    var HTMLAddToMoodsButtonElement: {
        prototype: HTMLAddToMoodsButtonElement;
        new (): HTMLAddToMoodsButtonElement;
    };
    interface HTMLDisplayCardElement extends Components.DisplayCard, HTMLStencilElement {
    }
    var HTMLDisplayCardElement: {
        prototype: HTMLDisplayCardElement;
        new (): HTMLDisplayCardElement;
    };
    interface HTMLEnquireModalElement extends Components.EnquireModal, HTMLStencilElement {
    }
    var HTMLEnquireModalElement: {
        prototype: HTMLEnquireModalElement;
        new (): HTMLEnquireModalElement;
    };
    interface HTMLFooterNavElement extends Components.FooterNav, HTMLStencilElement {
    }
    var HTMLFooterNavElement: {
        prototype: HTMLFooterNavElement;
        new (): HTMLFooterNavElement;
    };
    interface HTMLImageGalleryElement extends Components.ImageGallery, HTMLStencilElement {
    }
    var HTMLImageGalleryElement: {
        prototype: HTMLImageGalleryElement;
        new (): HTMLImageGalleryElement;
    };
    interface HTMLImageGalleryLinkElement extends Components.ImageGalleryLink, HTMLStencilElement {
    }
    var HTMLImageGalleryLinkElement: {
        prototype: HTMLImageGalleryLinkElement;
        new (): HTMLImageGalleryLinkElement;
    };
    interface HTMLMobileNavBarElement extends Components.MobileNavBar, HTMLStencilElement {
    }
    var HTMLMobileNavBarElement: {
        prototype: HTMLMobileNavBarElement;
        new (): HTMLMobileNavBarElement;
    };
    interface HTMLMoodsBoardElement extends Components.MoodsBoard, HTMLStencilElement {
    }
    var HTMLMoodsBoardElement: {
        prototype: HTMLMoodsBoardElement;
        new (): HTMLMoodsBoardElement;
    };
    interface HTMLMoodsBoardPickerElement extends Components.MoodsBoardPicker, HTMLStencilElement {
    }
    var HTMLMoodsBoardPickerElement: {
        prototype: HTMLMoodsBoardPickerElement;
        new (): HTMLMoodsBoardPickerElement;
    };
    interface HTMLMoodsBoardPreviewElement extends Components.MoodsBoardPreview, HTMLStencilElement {
    }
    var HTMLMoodsBoardPreviewElement: {
        prototype: HTMLMoodsBoardPreviewElement;
        new (): HTMLMoodsBoardPreviewElement;
    };
    interface HTMLMoodsBoardsElement extends Components.MoodsBoards, HTMLStencilElement {
    }
    var HTMLMoodsBoardsElement: {
        prototype: HTMLMoodsBoardsElement;
        new (): HTMLMoodsBoardsElement;
    };
    interface HTMLMoodsGalleryElement extends Components.MoodsGallery, HTMLStencilElement {
    }
    var HTMLMoodsGalleryElement: {
        prototype: HTMLMoodsGalleryElement;
        new (): HTMLMoodsGalleryElement;
    };
    interface HTMLMoodsModalElement extends Components.MoodsModal, HTMLStencilElement {
    }
    var HTMLMoodsModalElement: {
        prototype: HTMLMoodsModalElement;
        new (): HTMLMoodsModalElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLRemoveOverlayElement extends Components.RemoveOverlay, HTMLStencilElement {
    }
    var HTMLRemoveOverlayElement: {
        prototype: HTMLRemoveOverlayElement;
        new (): HTMLRemoveOverlayElement;
    };
    interface HTMLSimpleButtonElement extends Components.SimpleButton, HTMLStencilElement {
    }
    var HTMLSimpleButtonElement: {
        prototype: HTMLSimpleButtonElement;
        new (): HTMLSimpleButtonElement;
    };
    interface HTMLSimpleInputElement extends Components.SimpleInput, HTMLStencilElement {
    }
    var HTMLSimpleInputElement: {
        prototype: HTMLSimpleInputElement;
        new (): HTMLSimpleInputElement;
    };
    interface HTMLStickyScrollerElement extends Components.StickyScroller, HTMLStencilElement {
    }
    var HTMLStickyScrollerElement: {
        prototype: HTMLStickyScrollerElement;
        new (): HTMLStickyScrollerElement;
    };
    interface HTMLTelePortalElement extends Components.TelePortal, HTMLStencilElement {
    }
    var HTMLTelePortalElement: {
        prototype: HTMLTelePortalElement;
        new (): HTMLTelePortalElement;
    };
    interface HTMLTermsOfServiceElement extends Components.TermsOfService, HTMLStencilElement {
    }
    var HTMLTermsOfServiceElement: {
        prototype: HTMLTermsOfServiceElement;
        new (): HTMLTermsOfServiceElement;
    };
    interface HTMLToolTipElement extends Components.ToolTip, HTMLStencilElement {
    }
    var HTMLToolTipElement: {
        prototype: HTMLToolTipElement;
        new (): HTMLToolTipElement;
    };
    interface HTMLElementTagNameMap {
        "add-to-moods-button": HTMLAddToMoodsButtonElement;
        "display-card": HTMLDisplayCardElement;
        "enquire-modal": HTMLEnquireModalElement;
        "footer-nav": HTMLFooterNavElement;
        "image-gallery": HTMLImageGalleryElement;
        "image-gallery-link": HTMLImageGalleryLinkElement;
        "mobile-nav-bar": HTMLMobileNavBarElement;
        "moods-board": HTMLMoodsBoardElement;
        "moods-board-picker": HTMLMoodsBoardPickerElement;
        "moods-board-preview": HTMLMoodsBoardPreviewElement;
        "moods-boards": HTMLMoodsBoardsElement;
        "moods-gallery": HTMLMoodsGalleryElement;
        "moods-modal": HTMLMoodsModalElement;
        "nav-bar": HTMLNavBarElement;
        "remove-overlay": HTMLRemoveOverlayElement;
        "simple-button": HTMLSimpleButtonElement;
        "simple-input": HTMLSimpleInputElement;
        "sticky-scroller": HTMLStickyScrollerElement;
        "tele-portal": HTMLTelePortalElement;
        "terms-of-service": HTMLTermsOfServiceElement;
        "tool-tip": HTMLToolTipElement;
    }
}
declare namespace LocalJSX {
    interface AddToMoodsButton {
        "contentLocation"?: 'left' | 'right';
        "disabled"?: boolean;
        "imageUrl"?: string;
        "onOpenMoodsModal"?: (event: CustomEvent<MoodsModalEvent>) => void;
        "postId"?: number | null;
        "showOnHover"?: boolean;
        "theme"?: Theme;
    }
    interface DisplayCard {
        "bottomSubtitleName"?: string;
        "bottomTitleName"?: string;
        "cardType"?: DisplayCardType;
        "images"?: string;
        "linkTo"?: string;
        "theme"?: Theme;
    }
    interface EnquireModal {
        "postTitle"?: string;
        "previewImage"?: string;
    }
    interface FooterNav {
        "platform"?: PlatformType;
    }
    interface ImageGallery {
        "canEnquire"?: boolean;
        "designDetail"?: string | null;
        "images"?: string;
        "photographer"?: string;
        "postExcerpt"?: string;
        "postId"?: number;
        "postTitle"?: string;
        "previewImage"?: string;
    }
    interface ImageGalleryLink {
        "imageIndex"?: number;
        "onOpenImageGallery"?: (event: CustomEvent<number>) => void;
    }
    interface MobileNavBar {
        "platform"?: PlatformType;
    }
    interface MoodsBoard {
        "boardId"?: string;
        "images"?: string;
        "onOpenMoodsGallery"?: (event: CustomEvent<MoodsBoardImage>) => void;
        "wpNonce"?: string;
    }
    interface MoodsBoardPicker {
        "boards"?: string;
        "onMoodsBoardPicked"?: (event: CustomEvent<MoodsBoardPickedEvent>) => void;
        "selectedMoodBoard"?: MoodBoard;
    }
    interface MoodsBoardPreview {
        "board"?: MoodsBoardData;
    }
    interface MoodsBoards {
        "apiUrl"?: string;
        "boards"?: string;
        "wpNonce"?: string;
    }
    interface MoodsGallery {
        "images"?: string;
    }
    interface MoodsModal {
        "boards"?: string;
        "isAuthenticated"?: boolean;
        "moodsApiUrl"?: string;
        "wpApiNonce"?: string;
    }
    interface NavBar {
        "authenticated"?: boolean;
        "platform"?: PlatformType;
        "showMultiplier"?: number;
    }
    interface RemoveOverlay {
        "name"?: string;
        "onRemoveOverlayEvent"?: (event: CustomEvent<RemoveOverlayEvent>) => void;
        "payload"?: any;
    }
    interface SimpleButton {
        "disabled"?: boolean;
        "fillWidth"?: boolean;
        "theme"?: Theme;
    }
    interface SimpleInput {
        "name"?: string;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "type"?: InputType;
        "value"?: string;
    }
    interface StickyScroller {
        "bottom"?: boolean;
        "endOffset"?: number;
        "mode"?: 'relative' | 'stickyTop' | 'stickyBottom';
        "startOffset"?: number;
    }
    interface TelePortal {
    }
    interface TermsOfService {
    }
    interface ToolTip {
    }
    interface IntrinsicElements {
        "add-to-moods-button": AddToMoodsButton;
        "display-card": DisplayCard;
        "enquire-modal": EnquireModal;
        "footer-nav": FooterNav;
        "image-gallery": ImageGallery;
        "image-gallery-link": ImageGalleryLink;
        "mobile-nav-bar": MobileNavBar;
        "moods-board": MoodsBoard;
        "moods-board-picker": MoodsBoardPicker;
        "moods-board-preview": MoodsBoardPreview;
        "moods-boards": MoodsBoards;
        "moods-gallery": MoodsGallery;
        "moods-modal": MoodsModal;
        "nav-bar": NavBar;
        "remove-overlay": RemoveOverlay;
        "simple-button": SimpleButton;
        "simple-input": SimpleInput;
        "sticky-scroller": StickyScroller;
        "tele-portal": TelePortal;
        "terms-of-service": TermsOfService;
        "tool-tip": ToolTip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "add-to-moods-button": LocalJSX.AddToMoodsButton & JSXBase.HTMLAttributes<HTMLAddToMoodsButtonElement>;
            "display-card": LocalJSX.DisplayCard & JSXBase.HTMLAttributes<HTMLDisplayCardElement>;
            "enquire-modal": LocalJSX.EnquireModal & JSXBase.HTMLAttributes<HTMLEnquireModalElement>;
            "footer-nav": LocalJSX.FooterNav & JSXBase.HTMLAttributes<HTMLFooterNavElement>;
            "image-gallery": LocalJSX.ImageGallery & JSXBase.HTMLAttributes<HTMLImageGalleryElement>;
            "image-gallery-link": LocalJSX.ImageGalleryLink & JSXBase.HTMLAttributes<HTMLImageGalleryLinkElement>;
            "mobile-nav-bar": LocalJSX.MobileNavBar & JSXBase.HTMLAttributes<HTMLMobileNavBarElement>;
            "moods-board": LocalJSX.MoodsBoard & JSXBase.HTMLAttributes<HTMLMoodsBoardElement>;
            "moods-board-picker": LocalJSX.MoodsBoardPicker & JSXBase.HTMLAttributes<HTMLMoodsBoardPickerElement>;
            "moods-board-preview": LocalJSX.MoodsBoardPreview & JSXBase.HTMLAttributes<HTMLMoodsBoardPreviewElement>;
            "moods-boards": LocalJSX.MoodsBoards & JSXBase.HTMLAttributes<HTMLMoodsBoardsElement>;
            "moods-gallery": LocalJSX.MoodsGallery & JSXBase.HTMLAttributes<HTMLMoodsGalleryElement>;
            "moods-modal": LocalJSX.MoodsModal & JSXBase.HTMLAttributes<HTMLMoodsModalElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "remove-overlay": LocalJSX.RemoveOverlay & JSXBase.HTMLAttributes<HTMLRemoveOverlayElement>;
            "simple-button": LocalJSX.SimpleButton & JSXBase.HTMLAttributes<HTMLSimpleButtonElement>;
            "simple-input": LocalJSX.SimpleInput & JSXBase.HTMLAttributes<HTMLSimpleInputElement>;
            "sticky-scroller": LocalJSX.StickyScroller & JSXBase.HTMLAttributes<HTMLStickyScrollerElement>;
            "tele-portal": LocalJSX.TelePortal & JSXBase.HTMLAttributes<HTMLTelePortalElement>;
            "terms-of-service": LocalJSX.TermsOfService & JSXBase.HTMLAttributes<HTMLTermsOfServiceElement>;
            "tool-tip": LocalJSX.ToolTip & JSXBase.HTMLAttributes<HTMLToolTipElement>;
        }
    }
}
