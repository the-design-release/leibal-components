import { EventEmitter } from '../../stencil-public-runtime';
export interface RemoveOverlayEvent {
  payload: any;
}
export declare class RemoveOverlay {
  el: HTMLElement;
  confirming: boolean;
  showIcon: boolean;
  payload: any;
  name: string;
  payloadJson: any;
  payloadChangedHandler(): void;
  removeOverlayEvent: EventEmitter<RemoveOverlayEvent>;
  componentDidLoad(): void;
  hideOverlay(): void;
  showOverlay(): void;
  toggleOverlay(): void;
  handleRemoveClick(): void;
  handleCancelClick(): void;
  handleConfirmClick(): void;
  render(): any;
}
