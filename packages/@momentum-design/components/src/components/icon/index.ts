import { PropertyValues } from 'lit';
import { MdcIcon } from './icon.component';
import { TAG_NAME } from './icon.constants';

MdcIcon.register(TAG_NAME);

export { MdcIcon };

export interface MdcIconAttributes extends PropertyValues<MdcIcon> {}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdcIcon
    }
}
