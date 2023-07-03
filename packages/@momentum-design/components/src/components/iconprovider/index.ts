import { PropertyValues } from 'lit';
import { MdcIconprovider } from './iconprovider.component';
import { TAG_NAME } from './iconprovider.constants';

MdcIconprovider.register(TAG_NAME);

export { MdcIconprovider };

export interface MdcIconproviderAttributes extends PropertyValues<MdcIconprovider> {}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdcIconprovider
    }
}
