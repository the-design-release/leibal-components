import { EventEmitter } from '../../stencil-public-runtime';
export declare type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
export declare class SimpleInput {
  el: HTMLElement;
  type: InputType;
  placeholder: string;
  required: boolean;
  name: string;
  value: string;
  valueChanged: EventEmitter<string>;
  onInputChangeValue(event: Event): void;
  input: () => any;
  renderInputOutsideShadowRoot(container: HTMLElement, name: string, value: string | null): void;
  render(): any;
}
