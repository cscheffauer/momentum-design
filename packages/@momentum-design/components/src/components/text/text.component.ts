import { html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import type { FontSize, FontType, FontWeight, FontDecoration } from './text.types';
import { getRole, getAriaLevel } from './text.utils';
import { DEFAULTS } from './text.constants';

/**
 * Text component, which helps creating a text element aligning with
 * styling.
 *
 * The attributes `type`, `size`, `weight` & `decoration` allow changing visual parameters
 * of the text, which correspond to `fontFamily`, `fontSize`, `lineHeight` and more css values.
 *
 * For accessibility the `role` and `aria-level` on the component are going to be set
 * automatically based on the type e.g. headlines will lead to `role="heading"` and `aria-level=1`.
 *
 * @tag mdc-text
 * @tagname mdc-text
 */
class Text extends Component {
  /**
   * Font Type - defines what type of text should be rendered
   *
   * Possible values: `body` | `heading` | `headline`;
   *
   * Default: `body`
   */
  @property({ attribute: 'type', reflect: true, type: String })
  public type?: FontType = DEFAULTS.TYPE;

  /**
   * Font Size - defines what size the text should be rendered in
   *
   * Possible values: `small` | `midsize` | `large`;
   *
   * Default: `small`
   */
  @property({ attribute: 'size', reflect: true, type: String })
  public size?: FontSize = DEFAULTS.SIZE;

  /**
   * Font Weight - defines what weight the text should be rendered with
   *
   * Possible values: `light` | `regular` | `medium` | `bold`;
   *
   * Default: `small`
   */
  @property({ attribute: 'weight', reflect: true, type: String })
  public weight?: FontWeight = DEFAULTS.WEIGHT;

  /**
   * Font Decoration - defines if the text should have decoration like
   * underline for example
   *
   * Possible values: `underline` | undefined;
   *
   * Default: undefined
   */
  @property({ attribute: 'decoration', reflect: true, type: String })
  public decoration?: FontDecoration;

  protected handleTypeOrSizeChanged(): void {
    this.role = getRole(this.type);
    this.ariaLevel = getAriaLevel(this.type, this.size);
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('type') || changedProperties.has('size')) {
      this.handleTypeOrSizeChanged();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles = styles;
}

export default Text;
