import { MdButtonPill } from './button-pill';
import { TAG_NAME } from './constants';

customElements.define(TAG_NAME, MdButtonPill);

export { MdButtonPill };

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdButtonPill
    }
}
