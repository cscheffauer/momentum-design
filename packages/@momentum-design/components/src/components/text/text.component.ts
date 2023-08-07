import { html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import type { FontType } from './text.types';
import { getRole, getAriaLevel } from './text.utils';

class Text extends Component {
  @property({ attribute: 'type', reflect: true, type: String })
  public type?: FontType;

  protected handleTypeChanged(): void {
    this.role = getRole(this.type);
    this.ariaLevel = getAriaLevel(this.type);
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('type')) {
      this.handleTypeChanged();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles = styles;
}

export default Text;
