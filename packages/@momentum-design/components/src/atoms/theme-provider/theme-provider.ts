/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { DEFAULTS, THEMES, THEME_CLASS_PREFIX, THEME_CLASS_SEPARATOR } from './constants';
import { constructThemeClass, getNextTheme } from './utils';

class MdThemeProvider extends LitElement {
  @property({ type: String })
  themes: string = THEMES.join(' ');

  @property({ type: String, attribute: 'class-prefix' })
  classPrefix: string = THEME_CLASS_PREFIX;

  @property({ type: String, attribute: 'class-separator' })
  classSeparator: string = THEME_CLASS_SEPARATOR;

  @property({ type: String, reflect: true })
  theme: string = DEFAULTS.THEME;

  /**
   * Allows to programmatically switch the theme on the theme provider
   *
   * If no `theme` arg is passed in, it will pick the next available one
   * in the themes string
   * @param theme - theme to switch to, if not provided pick next available
   */
  public switchTheme(theme: string) {
    if (theme) {
      this.theme = theme;
    } else {
      this.theme = getNextTheme(this.themes, this.theme);
    }
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('theme')) {
      this._updateActiveThemeClass();
    }
  }

  /**
   * Function to update the active theme classname to update the theme tokens
   * as CSS variables on the web component.
   */
  private _updateActiveThemeClass() {
    // remove all existing theme classes from the classList:
    this.classList.remove(
      ...this.themes.split(' ').map((theme) => constructThemeClass(theme, this.classPrefix, this.classSeparator)),
    );
    // add current theme class to classList:
    this.classList.add(constructThemeClass(this.theme, this.classPrefix, this.classSeparator));
  }

  override render() {
    return html`<slot></slot>`;
  }
}

export { MdThemeProvider };
