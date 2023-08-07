import { html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';

class Text extends Component {
  /**
   * Role attribute - supported: `heading`, `paragraph`
   */
  @property({ attribute: 'role', reflect: true, type: String })
  public override role: string | null; // paragraph | heading

  /**
   * Aria-level attribute - should only be set if role = `heading`
   *
   * Used to determine the type of `heading`, like level 1 -> h1, etc.
   */
  @property({ attribute: 'aria-level', reflect: true, type: String })
  public override ariaLevel: string | null; // 1 - 6

  @property({ attribute: 'font-type', reflect: true, type: String })
  public fontType?: string;

  public constructor() {
    super();

    this.ariaLevel = null;
    this.role = null;
  }

  protected handleAriaLevelChanged(): void {
    if (this.role !== 'heading') {
      this.ariaLevel = null;

      return;
    }

    if (!this.ariaLevel) {
      this.ariaLevel = '1';
    }
  }

  protected handleRoleChanged(): void {
    if (this.role !== 'heading') {
      this.ariaLevel = null;
    }
  }

  protected handleFontTypeChanged(): void {
    if (this.fontType) {
      this.style.fontFamily = `"${this.fontType}"`;
    }
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('role')) {
      this.handleRoleChanged();
    }

    if (changedProperties.has('ariaLevel')) {
      this.handleAriaLevelChanged();
    }

    if (changedProperties.has('fontType')) {
      this.handleFontTypeChanged();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles = styles;
}

export default Text;
