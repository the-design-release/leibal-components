import { Event, Element, Component, Host, h, Prop, EventEmitter } from '@stencil/core';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

const INPUT_TYPES = ['text', 'password', 'email', 'number', 'tel', 'url'];
@Component({
  tag: 'simple-input',
  styleUrl: 'simple-input.css',
  shadow: true,
})
export class SimpleInput {
  @Element() el!: HTMLElement;

  @Prop() type: InputType;
  @Prop() placeholder: string = 'Text here...';
  @Prop() required: boolean = false;
  @Prop() name: string;
  @Prop({ mutable: true, reflect: true }) value: string;
  @Event() valueChanged: EventEmitter<string>;

  onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  }

  input = () => {
    let placeholder = this.placeholder;
    if (this.required) {
      placeholder += ' *';
    }
    return (
      <input
        class="simple-input--text"
        name={this.name}
        onInput={this.onInputChangeValue.bind(this)}
        value={this.value}
        type={this.type}
        placeholder={placeholder}
        required={this.required}
      />
    );
  };

  renderInputOutsideShadowRoot(container: HTMLElement, name: string, value: string | null) {
    let input = container.querySelector('input.hidden-input') as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }

  render() {
    const { el, value, name } = this;

    this.renderInputOutsideShadowRoot(el, name, value);

    return (
      <Host>
        <div class="simple-input">{INPUT_TYPES.includes(this.type) && this.input()}</div>
      </Host>
    );
  }
}
