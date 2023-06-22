import { PropertyValues } from 'lit';
import { MdButton } from './button.component';
import { TAG_NAME } from './button.constants';

MdButton.register(TAG_NAME);

export { MdButton };

export interface MdButtonAttributes extends PropertyValues<MdButton> {}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdButton
    }
}
