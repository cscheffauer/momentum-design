import { MdIcon } from './icon';
import { TAG_NAME } from './constants';

MdIcon.register(TAG_NAME);

export { MdIcon };

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdIcon
    }
}
