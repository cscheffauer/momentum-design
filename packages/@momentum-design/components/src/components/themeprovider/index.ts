import { MdcThemeprovider } from './themeprovider.component';
import { TAG_NAME } from './themeprovider.constants';

MdcThemeprovider.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-themeprovider']: MdcThemeprovider
    }
}

export default MdcThemeprovider;
