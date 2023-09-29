import Icon from './icon.component';
import { TAG_NAME } from './icon.constants';
import { register } from '../../utils/register';

register(TAG_NAME, Icon);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-icon']: Icon
    }
}

export default Icon;
