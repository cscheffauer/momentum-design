import { MdcBadge } from './badge.component';
import { TAG_NAME } from './badge.constants';

MdcBadge.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-badge']: MdcBadge
    }
}

export default MdcBadge;
