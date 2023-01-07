/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import type { ThemeName } from './types';
import { DEFAULTS, THEME_NAMES } from './constants';
import { constructThemeClass } from './utils';

class MdThemeProvider extends LitElement {
  _theme: ThemeName = DEFAULTS.THEME;

  @property()
  themeNames: Array<ThemeName> = Object.values(THEME_NAMES);

  @property()
  get theme(): ThemeName {
    return this._theme;
  }

  set theme(newTheme) {
    this._theme = newTheme;
    this._updateActiveThemeClass();
  }

  override connectedCallback() {
    super.connectedCallback();
    this._updateActiveThemeClass();
  }

  /**
   * Function to update the active theme classname to update the theme tokens
   * as CSS variables on the web component.
   */
  private async _updateActiveThemeClass() {
    // remove all existing theme classes from the classList:
    this.classList.remove(...this.themeNames.map((themeName) => constructThemeClass(themeName)));
    // add current theme class to classList:
    this.classList.add(constructThemeClass(this.theme));
  }

  override render() {
    return html`<slot></slot>`;
  }
}

export { MdThemeProvider };
