import { PropertyValues } from 'lit';
import ThemeProvider from './theme-provider.component';

ThemeProvider.register(ThemeProvider.CONSTANTS.TAG_NAME);

export interface MDThemeProviderAttributes extends PropertyValues<ThemeProvider> {}

declare global {
  interface HTMLElementTagNameMap {
    [ThemeProvider.CONSTANTS.TAG_NAME]: ThemeProvider
  }
}

export default ThemeProvider;
