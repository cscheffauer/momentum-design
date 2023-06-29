import { html } from 'lit';
import { Component } from '../../models';
import { MdcThemeprovider } from './themeprovider.component';

// subcomponent to be rendered in storybook, to showcase that the
// theme can be consumed as a subcomponent

// TODO: either fix existing provider or switch to use lit context
class SubComponentThemeProvider extends Component {
  protected themeProvider: MdcThemeprovider;

  currentTheme: string;

  public constructor() {
    super();
    this.themeProvider = MdcThemeprovider.get({ component: this });

    this.currentTheme = this.themeProvider.theme;
  }

  override render() {
    return html` <p>${this.currentTheme}</p> `;
  }
}

SubComponentThemeProvider.register('mdc-subcomponent');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent']: SubComponentThemeProvider;
  }
}
