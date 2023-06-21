import { LitElement } from 'lit';

import CONSTANTS from './component.constants';

import type { Constants, Namespace } from './component.types';

/**
 * Core Component class to ultimately be inherited by all Web Components within
 * this package.
 * 
 * @public
 */
abstract class Component extends LitElement {
  /**
   * Namespace of this Web Component.
   * 
   * @remarks
   * This property represents the 
   * This will be amended to the prefix when registering this extended
   * `Component` Class to the DOM's custom elements registry using the
   * `Component` Class' `register()` method.
   * 
   * @example
   * These values should be associated with the extending Class' `CONSTANTS`
   * static property.
   * 
   * ```ts
   * class CustomComponent extends Component {
   *   // ...
   *   protected get namespace(): Namespace {
   *     return {
   *       name: this.CONSTANTS.NAMESPACE.NAME,
   *       prefix: Component.CONSTANTS.NAMESPACE.PREFIX, // Optional
   *     };
   *   }
   *   // ...
   * }
   * ```
   */
  protected abstract get namespace(): Namespace

  /**
   * Get this Class' namespace as a registerable string.
   * 
   * @remarks
   * This property automatically determines whether or not to ammend a prefix
   * to the generated String based on this Class' prototype `namespace`
   * property.
   */
  protected static get namespace(): string {
    const { name, prefix } = this.prototype.namespace;

    return `${prefix ? `${prefix}-` : ''}${name}`;
  }

  /**
   * Register `this` extended `Component` Class as a custom element within the
   * DOM's custom elements registry.
   * 
   * @example
   * This method must be called in order for this component to be consumable
   * within the DOM.
   * 
   * ```ts
   * import CustomComponent from './custom-component';
   * 
   * CustomComponent.register();
   * 
   * export default CustomComponent;
   * ```
   *
   * @returns - Void.
   */
  public static register(): void {
    const { namespace } = this;

    if (customElements.get(namespace)) {
      return;
    }

    customElements.define(namespace, this as any);
  }

  /**
   * Constants associated with this `Component` Class.
   */
  public static get CONSTANTS(): Constants {
    return CONSTANTS;
  }
}

export default Component;
