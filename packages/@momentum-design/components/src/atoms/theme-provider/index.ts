import { MdThemeProvider } from './theme-provider';
import { tagName } from './constants';

customElements.define(tagName, MdThemeProvider);

export { MdThemeProvider };

declare global {
    interface HTMLElementTagNameMap {
        [tagName]: MdThemeProvider
    }
}
