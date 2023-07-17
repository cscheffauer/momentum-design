import { MdcAvatar } from './avatar.component';
import { TAG_NAME } from './avatar.constants';

MdcAvatar.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-avatar']: MdcAvatar
    }
}

export default MdcAvatar;
