import { MdIcon } from './icon';
import { TAG_NAME } from './constants';

customElements.define(TAG_NAME, MdIcon);

export { MdIcon };

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdIcon
    }
}
