import { MdcIconprovider } from './iconprovider.component';
import { TAG_NAME } from './iconprovider.constants';

MdcIconprovider.register(TAG_NAME);

export default MdcIconprovider;

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-iconprovider']: MdcIconprovider
    }
}
