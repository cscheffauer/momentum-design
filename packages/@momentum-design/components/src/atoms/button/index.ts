import { MdButton } from './button';
import { tagName } from './constants';

customElements.define(tagName, MdButton);

export { MdButton };

declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MdButton
    }
}
