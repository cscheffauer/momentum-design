/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, css, html } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class MdButton extends LitElement {
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

  static override styles = css`
    button {
      width: var(--md-atoms-button-width);
      height: var(--md-atoms-button-height);
      background-color: var(--md-atoms-button-background-color);
      border: var(--md-atoms-button-border);
    }
  `;
}
