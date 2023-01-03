/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { styles } from './styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdButton extends LitElement {
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
