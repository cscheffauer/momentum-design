import { ContextProvider } from '@lit-labs/context';
import type { Context } from '@lit-labs/context';
import { CSSResult, html } from 'lit';

import Component from '../component';

import styles from './provider.styles';

/**
 * Provider Component class to ultimately be inherited by all Provider-type Web
 * Components within this package.
 *
 * @public
 */
abstract class Provider<C extends Context<unknown, unknown>> extends Component {
  /**
   * Context associated with this provider.
   * 
   * @remarks
   * Providing a Context type as a generic when creating extended Provider Class
   * definitions will help enforce the property validation.
   */
  protected abstract context: ContextProvider<C>;

  /**
   * Styles associated with this Provider Component.
   */
  public static override styles: CSSResult | Array<CSSResult> = styles;

  /**
   * Whether or not this Provider should update its consuming Components during
   * this render lifecycle.
   * 
   * @remarks
   * This getter is called every time this Component is re-rendered. If the
   * `render()` method is overwritten, this call must be made manually.
   */
  protected abstract get shouldUpdateConsumers(): boolean

  /**
   * Update the context of this Provider.
   * 
   * @remarks
   * This method is called every time this Provider is re-rendered and should
   * be used to update the local Context based on other triggers from this
   * Providers attributes that caused the re-render. If the `render()` method
   * is overwritten, this call must be made manually.
   */
  protected abstract updateContext(): void

  /**
   * Render this Provider.
   * 
   * @remarks
   * This method calls `updateContext()` then validates whether or not to
   * update all consumers based on the results of the `shouldUpdateConsumers`
   * getter.
   *
   * @returns - This Provider as an HTML Element.
   */
  public override render() {
    this.updateContext();

    if (this.shouldUpdateConsumers) {
      this.context.updateObservers();
    }

    return html`<slot></slot>`;
  }
}

export default Provider;
