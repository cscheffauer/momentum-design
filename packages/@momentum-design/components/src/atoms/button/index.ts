import { MdButton } from './button.component';
import { TAG_NAME } from './constants';

customElements.define(TAG_NAME, MdButton);

export { MdButton };

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdButton
    }
}