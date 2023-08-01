import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './text.styles';
import { Component } from '../../models';
import { DEFAULTS } from './text.constants';
import type { TextType } from './text.types';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-text
 * @tagname mdc-text
 */
class MdcText extends Component {
  /**
   * Type of the text
   *
   * Default: `body-regular`
   */
  @property({ type: String, reflect: true })
  type?: TextType = DEFAULTS.TYPE;

  public override render() {
    let content;

    switch (this.type) {
      case 'h1':
        content = html`<h1 class="mdc-text-h1"><slot></slot></h1>`;
        break;
      case 'h2':
        content = html`<h2 class="mdc-text-h2"><slot></slot></h2>`;
        break;
      case 'h3':
        content = html`<h3 class="mdc-text-h3"><slot></slot></h3>`;
        break;
      case 'h4':
        content = html`<h4 class="mdc-text-h4"><slot></slot></h4>`;
        break;
      case 'h5':
        content = html`<h5 class="mdc-text-h5"><slot></slot></h5>`;
        break;
      case 'h6':
        content = html`<h6 class="mdc-text-h6"><slot></slot></h6>`;
        break;
      case 'h7':
        content = html`<span class="mdc-text-h7"><slot></slot></span>`;
        break;

      // TODO: add more variants
      default:
        content = html``;
        break;
    }

    return html`${content}`;
  }

  public static override styles = styles;
}

export { MdcText };
