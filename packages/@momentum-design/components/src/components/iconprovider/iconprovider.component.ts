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

  protected updateContext(): void {
    let shouldUpdateConsumers = false;

    if (this.context.value.fileExtension !== this.fileExtension || this.context.value.url !== this.url) {
      this.context.value.fileExtension = this.fileExtension;
      this.context.value.url = this.url;

      shouldUpdateConsumers = true;
    }

    if (shouldUpdateConsumers) {
      this.context.updateObservers();
    }
  }
}

export { MdcIconprovider };
