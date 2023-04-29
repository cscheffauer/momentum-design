/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { MdButton } from '../button';
import { styles } from './styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdButtonPill extends MdButton {
  static override styles = styles;
}

export { MdButtonPill };
