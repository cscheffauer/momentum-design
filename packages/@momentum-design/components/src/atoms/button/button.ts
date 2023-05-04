import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { BasePropsMixin } from '../../utils/mixins/BasePropsMixin';
import { styles } from './styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

class MdButton extends BasePropsMixin(DisabledMixin(LitElement)) {
  @property({ type: String, reflect: true })
  public override role: string = 'button';

  override render() {
    return html`
      <slot></slot>
      `;
  }

  static override styles = styles;
}

export { MdButton };
