/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdButton extends LitElement {
  @property()
  type: string;

  constructor() {
    super();
    this.type = 'button';
  }

  override render() {
    return html`
        <button @click=${this._onClick}>
            <slot></slot>
            
        </button>
    `;
  }

  private _onClick() {
    console.log('clicked');
  }

  static override styles = styles;
}

export { MdButton };
