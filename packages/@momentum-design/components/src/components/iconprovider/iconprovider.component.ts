import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { Provider } from '../../models';
import IconProviderContext from './iconprovider.context';
import { DEFAULTS } from './iconprovider.constants';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-iconprovider
 * @tagname mdc-iconprovider
 */
class MdcIconprovider extends Provider<IconProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: IconProviderContext.context,
      initialValue: new IconProviderContext(),
    });
  }

  public static get Context() {
    return IconProviderContext.context;
  }

  @property({ type: String, attribute: 'file-extension' })
  fileExtension: string = DEFAULTS.FILE_EXTENSION;

  @property({ type: String })
  url?: string;

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('fileExtension') || changedProperties.has('url')) {
      // update the contexts value and update all observers
      this.context.value.fileExtension = this.fileExtension;
      this.context.value.url = this.url;
      this.context.updateObservers();
    }
  }

  override render() {
    return html`<slot></slot>`;
  }
}

export { MdcIconprovider };
