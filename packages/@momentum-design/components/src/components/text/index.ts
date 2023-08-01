import { MdcText } from './text.component';
import { TAG_NAME } from './text.constants';

MdcText.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-text']: MdcText
    }
}

export default MdcText;
