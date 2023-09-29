import { register } from '../../utils/register';
import Chip from './chip.component';
import { TAG_NAME } from './chip.constants';

register(TAG_NAME, Chip);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-chip']: Chip
    }
}

export default Chip;
