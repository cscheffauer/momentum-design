import { TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { styles } from './icon.styles';
import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import MdcIconprovider from '../iconprovider';
import { dynamicSVGImport } from './icon.utils';
import { DEFAULTS } from './icon.constants';
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

  @state()
  private lengthUnitFromContext?: string;

  // Name of the icon.
  @property({ type: String, reflect: true })
  name?: string = DEFAULTS.NAME;

  // Scale of the icon.
  @property({ type: Number })
  scale?: number = DEFAULTS.SCALE;

  @property({ type: String, attribute: 'length-unit' })
  lengthUnit?: string;

  private iconProviderContext = providerUtils.consume({ host: this, context: MdcIconprovider.Context });

  private async getIconData() {
    if (this.iconProviderContext.value) {
      const { fileExtension, url } = this.iconProviderContext.value;
      if (url && fileExtension && this.name) {
        const iconHtml = await dynamicSVGImport(url, this.name, fileExtension);
        if (iconHtml) {
          this.iconData = html`${iconHtml}`;
        }
      }
    }
  }

  private updateSize() {
    if (this.scale && (this.lengthUnit || this.lengthUnitFromContext)) {
      const value = `${this.scale}${this.lengthUnit || this.lengthUnitFromContext}`;
      this.style.width = value;
      this.style.height = value;
    }
  }

  override async updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      await this.getIconData();
    }

    if (changedProperties.has('scale') || changedProperties.has('length-unit')) {
      this.updateSize();
    }

    if (this.lengthUnitFromContext !== this.iconProviderContext.value?.lengthUnit) {
      this.lengthUnitFromContext = this.iconProviderContext.value?.lengthUnit;

      this.updateSize();
    }
  }

  override render() {
    return html` ${this.iconData} `;
  }

  static override styles = styles;
}

export { MdcIcon };
