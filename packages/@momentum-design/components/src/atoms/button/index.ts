import { MdButton } from './button.component';
import { TAG_NAME } from './constants';

MdButton.register(TAG_NAME);

export { MdButton };

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdButton
    }
}
