import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './button.styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { Component } from '../../models';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @property {boolean} disabled - whether button should be disabled
 * @property {string} class - classNames to be passed in
 *
 * @tag md-button
 * @tagname md-button
 */
class MdButton extends TabIndexMixin(DisabledMixin(Component)) {
  @property({ type: String, reflect: true })
  public override role: string = 'button';

  override render() {
    return html` <slot></slot> `;
  }

  static override styles = styles;
}
export { MdButton };
