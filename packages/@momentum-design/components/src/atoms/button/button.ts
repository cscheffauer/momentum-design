/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { BasePropsMixin } from '../../utils/mixins/BasePropsMixin';
import { styles } from './styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdButton extends BasePropsMixin(LitElement) {
  override render() {
    // TODO: fix style passing in
    return html`
      <button
        id=${this.id}
        class=${this.class}
        .style=${this.style}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }

  static override styles = styles;
}

export { MdButton };
