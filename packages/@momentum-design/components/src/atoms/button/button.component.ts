import { html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles';
import { Component } from '../../models';
import { BasePropsMixin } from '../../utils/mixins/BasePropsMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
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
class MdButton extends BasePropsMixin(Component) {
  @property({ type: String, reflect: true })
  public override role: string = 'button';

  override render() {
    return html` <slot></slot> `;
  }

  static override styles = styles;
}

export interface MdButtonProps extends PropertyValues<MdButton> {}
export { MdButton };
