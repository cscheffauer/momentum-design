import { html } from 'lit';
import { MdButton } from '../button';
import { styles } from './styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdButtonPill extends MdButton {
  override render() {
    return html`
      <slot name="i"></slot>
      `;
  }

  static override styles = styles;
}

export { MdButtonPill };
