/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { LitElement, css, html } from 'lit';

class MdThemeProvider extends LitElement {
  override render() {
    return html`<div><slot></slot></div>`;
  }

  static override styles = css`
    :host {
        --md-atoms-button-width: 100px;
        --md-atoms-button-height: 40px;
        --md-atoms-button-background-color: #444;
        --md-atoms-button-border: none;
    }
  `;
}

export { MdThemeProvider };
