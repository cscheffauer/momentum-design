import Tablist from './tablist.component';
import { TAG_NAME } from './tablist.constants';
import '../button';

Tablist.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-tablist']: Tablist;
  }
}

export default Tablist;
