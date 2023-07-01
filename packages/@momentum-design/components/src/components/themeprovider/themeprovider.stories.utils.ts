import { html } from 'lit';
import { Component } from '../../models';
import { MdcThemeprovider } from './themeprovider.component';
import providerUtils from '../../utils/provider';
// subcomponent to be rendered in storybook, to showcase that the
// theme can be consumed as a subcomponent

// TODO: either fix existing provider or switch to use lit context
class SubComponentThemeProvider extends Component {
  currentTheme?: string;

  private themeProviderContext = providerUtils.consume(this, MdcThemeprovider.Context);

  override render() {
    return html` <p>${this.themeProviderContext.value?.theme}</p> `;
  }
}

SubComponentThemeProvider.register('mdc-subcomponent');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent']: SubComponentThemeProvider;
  }
}
