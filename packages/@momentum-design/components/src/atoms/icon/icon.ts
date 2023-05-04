import { LitElement, TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { BasePropsMixin } from '../../utils/mixins/BasePropsMixin';
import { dynamicSVGImport } from './utils';
import { styles } from './styles';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdIcon extends BasePropsMixin(LitElement) {
  @state()
  private iconData: TemplateResult = html``;

  @property({ type: String, reflect: true })
  name: string = 'annotate-regular';

  private getIconData() {
    dynamicSVGImport(this.name)
      .then((iconResponse) => {
        const iconHtml = new DOMParser().parseFromString(iconResponse, 'text/html').body.children;
        this.iconData = html`${iconHtml}`;
      });
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      this.getIconData();
    }
  }

  override render() {
    return html`
      <div
        id=${this.id}
        class=${this.class}
      >
        ${this.iconData}
      </div>
    `;
  }

  static override styles = styles;
}

export { MdIcon };
