import { PropertyValues } from 'lit';
import { MdcAvatar } from './avatar.component';
import { TAG_NAME } from './avatar.constants';

MdcAvatar.register(TAG_NAME);

export { MdcAvatar };

export interface MdcAvatarAttributes extends PropertyValues<MdcAvatar> {}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdcAvatar
    }
}
