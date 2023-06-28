import { TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { dynamicSVGImport } from './utils';
import { styles } from './styles';
import { Component } from '../../models';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

class MdIcon extends Component {
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
      >
        ${this.iconData}
      </div>
    `;
  }

  static override styles = styles;
}

export { MdIcon };
