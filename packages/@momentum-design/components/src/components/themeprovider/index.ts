import { PropertyValues } from 'lit';
import { MdcThemeprovider } from './themeprovider.component';
import { TAG_NAME } from './themeprovider.constants';

MdcThemeprovider.register(TAG_NAME);

export interface MdcThemeproviderAttributes extends PropertyValues<MdcThemeprovider> {}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdcThemeprovider
    }
}

export default MdcThemeprovider;
