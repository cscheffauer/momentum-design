import { register } from '../../../utils/register';
import InputChip from './input-chip.component';
import { TAG_NAME } from './input-chip.constants';

register(TAG_NAME, InputChip);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-input-chip']: InputChip
    }
}

export default InputChip;
