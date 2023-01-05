/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { styles } from './styles';
import type { ThemeName } from './types';
import { DEFAULTS, THEME_NAMES } from './constants';
import { constructThemeClass } from './utils';

class MdThemeProvider extends LitElement {
  @property()
  themeNames: Array<ThemeName> = Object.values(THEME_NAMES);

  @property()
  theme: ThemeName = DEFAULTS.THEME;

  private async _toggleTheme() {
    // remove all existing theme classes from the classList:
    this.classList.remove(...this.themeNames.map((themeName) => constructThemeClass(themeName)));
    // add current theme class to classList:
    this.classList.add(constructThemeClass(this.theme));
  }

  override render() {
    this._toggleTheme();

    return html`<div><slot></slot></div>`;
  }

  static override styles = styles;
}

export { MdThemeProvider };
