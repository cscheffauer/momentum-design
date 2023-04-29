/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { BasePropsMixin } from '../../utils/mixins/BasePropsMixin';
import { styles } from './styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

class MdButton extends BasePropsMixin(DisabledMixin(LitElement)) {
  override render() {
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
