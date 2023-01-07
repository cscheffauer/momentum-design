/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { WithDisabled } from '../../utils/mixins/WithDisabled';
import { styles } from './styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdButton extends WithDisabled(LitElement) {
  override render() {
    console.log(this.disabled);
    return html`
        <button ?disabled=${this.disabled} @click=${this._onClick}>
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
