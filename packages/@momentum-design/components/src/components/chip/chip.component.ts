import { html, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Chip as MaterialChip } from '@material/web/chips/internal/chip';
import type { ARIAMixinStrict } from '@material/web/internal/aria/aria';
import styles from './chip.styles';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-chip
 * @tagname mdc-chip
 */
class Chip extends MaterialChip {
  @property({ type: Boolean }) elevated = false;

  @property() href = '';

  @property() target: '_blank' | '_parent' | '_self' | '_top' | '' = '';

  get primaryId() {
    return this.href ? 'link' : 'button';
  }

  protected override renderPrimaryAction(content: unknown) {
    const { ariaLabel } = this as ARIAMixinStrict;
    if (this.href) {
      return html`
        <a class="primary action"
          id="link"
          aria-label=${ariaLabel || nothing}
          href=${this.href}
          target=${this.target || nothing}
        >${content}</a>
      `;
    }

    return html`
      <button class="primary action"
        id="button"
        aria-label=${ariaLabel || nothing}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        type="button"
      >${content}</button>
    `;
  }

  protected renderSomething() {
    return html`
    <span class="leading icon" aria-hidden="true">
      ${this.renderLeadingIcon()}
    </span>
    <span class="label">${this.label}</span>
    <span class="touch"></span>
  `;
  }

  protected override renderContainerContent() {
    return html`
    ${this.renderOutline()}
    <mdc-focus-ring part="focus-ring"
        for=${this.primaryId}></md-focus-ring>
    ${this.renderPrimaryAction(this.renderSomething())}
  `;
  }

  public static override styles = styles;
}

export default Chip;
