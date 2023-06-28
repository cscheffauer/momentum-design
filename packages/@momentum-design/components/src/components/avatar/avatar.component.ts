import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './avatar.styles';
import { Component } from '../../models';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-avatar
 * @tagname mdc-avatar
 */
class MdcAvatar extends Component {
  override render() {
    return html`<p>hello</p><slot></slot> `;
  }

  static override styles = styles;
}

export { MdcAvatar };
