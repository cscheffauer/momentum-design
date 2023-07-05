import { TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styles } from './icon.styles';
import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import MdcIconprovider from '../iconprovider';
import { dynamicSVGImport } from './icon.utils';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-icon
 * @tagname mdc-icon
 */
class MdcIcon extends Component {
  @state()
  private iconData: TemplateResult = html``;

  @property({ type: String, reflect: true })
  name: string = 'annotate-regular';

  private iconProviderContext = providerUtils.consume({ host: this, context: MdcIconprovider.Context });

  private async getIconData() {
    if (this.iconProviderContext.value) {
      const { fileExtension, url } = this.iconProviderContext.value;
      if (url && fileExtension) {
        const iconHtml = await dynamicSVGImport(url, this.name, fileExtension)
          .catch((reason) => {
            console.warn('Icon load failed:', reason);
          });
        this.iconData = html`${iconHtml}`;
      }
    }
  }

  override async updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      await this.getIconData();
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

export { MdcIcon };
