import { html } from 'lit';

import Component from '../component';

import CONSTANTS from './provider.constants';
import type { GetOptions } from './provider.types';

/**
 * Provider Component class to ultimately be inherited by all Provider-type Web
 * Components within this package.
 *
 * @public
 */
class Provider extends Component {
  /**
   * Render this Provider.
   *
   * @returns - This Provider.
   */
  public override render() {
    return html`<slot></slot>`;
  }

  /**
   * Get the Provider of this type as a parent of the provided Component.
   *
   * @remarks
   * This method can optionally accept a `root` key-value pair to identify which
   * DOM Element to stop climbing at when located.
   *
   * @example
   * ```ts
   * import CustomProvider from './custom-provider';
   *
   * class CustomComponent extends Component {
   *   protected customProvider: CustomProvider;
   *
   *   public constructor() {
   *     this.customProvider = CustomProvider.get({ component: this });
   *
   *     const data = this.customProvider.getAttribute('data-example');
   *   }
   * }
   * ```
   *
   * @param options - Options to use when locating this Provider.
   * @returns - This Provider when located.
   */
  public static get<P extends Provider>(options: GetOptions): P {
    const { component, root = HTMLBodyElement } = options;
    let provider!: P;
    let current: HTMLElement = component;

    while (!provider && current instanceof root !== true) {
      current = current.parentElement as HTMLElement;

      if (current instanceof this) {
        provider = current as P;
      }
    }

    if (!provider) {
      throw new Error(Provider.CONSTANTS.ERRORS.PROVIDER_NOT_FOUND);
    }

    return provider;
  }

  /**
   * Constants associated with this Provider.
   */
  public static get CONSTANTS(): any {
    return CONSTANTS;
  }
}

export default Provider;
