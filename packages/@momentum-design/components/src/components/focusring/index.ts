import { register } from '../../utils/register';
import FocusRing from './focusring.component';
import { TAG_NAME } from './focusring.constants';

register(TAG_NAME, FocusRing);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-focusring']: FocusRing;
  }
}

export default FocusRing;
