import { MdThemeProvider } from './theme-provider';
import { TAG_NAME } from './constants';

customElements.define(TAG_NAME, MdThemeProvider);

export { MdThemeProvider };

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MdThemeProvider
    }
}
