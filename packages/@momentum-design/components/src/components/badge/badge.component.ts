import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './badge.styles';
import { Component } from '../../models';
import { DEFAULTS, WARNING_ICON_NAME } from './badge.constants';
import type { BadgeType } from './badge.types';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-badge
 * @tagname mdc-badge
 */
class MdcBadge extends Component {
  @property({ type: String, reflect: true })
  type?: BadgeType = DEFAULTS.TYPE;

  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  regularTemplate() {
    return html` <div class="badge-regular"></div> `;
  }

  warningTemplate() {
    return html` <mdc-icon name="${WARNING_ICON_NAME}" class="mdc-badge-warning"></mdc-icon> `;
  }

  iconTemplate() {
    return html` <mdc-icon name="${this.iconName}" class="mdc-badge-icon"></mdc-icon> `;
  }

  public override render() {
    let content;

    switch (this.type) {
      case 'regular':
        content = this.regularTemplate();
        break;
      case 'icon':
        content = this.iconTemplate();
        break;
      case 'text':
        content = this.regularTemplate();
        break;
      case 'warning':
        content = this.warningTemplate();
        break;
      default:
        content = html``;
        break;
    }
    return html`${content}`;
  }

  public static override styles = styles;
}

export { MdcBadge };
