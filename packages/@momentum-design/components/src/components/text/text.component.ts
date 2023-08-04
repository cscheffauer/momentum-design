import { html } from 'lit';
import { property } from 'lit/decorators';

import { Component } from '../../models';

class Text extends Component {
  @property({ attribute: 'aria-level', reflect: true, type: String })
  public override ariaLevel: string | null; // 1 - 6

  @property({ attribute: 'role', reflect: true, type: String })
  public override role: string | null; // paragraph | heading

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

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('role')) {
      this.handleRoleChanged();
    }

    if (changedProperties.has('aria-level')) {
      this.handleAriaLevelChanged();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }
}

export default Text;
