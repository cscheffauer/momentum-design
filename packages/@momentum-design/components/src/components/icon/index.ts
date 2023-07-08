import { MdcIcon } from './icon.component';
import { TAG_NAME } from './icon.constants';

MdcIcon.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-icon']: MdcIcon
    }
}

export default MdcIcon;
