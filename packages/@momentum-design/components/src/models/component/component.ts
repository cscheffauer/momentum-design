import { LitElement } from 'lit';

import CONSTANTS from './component.constants';

import type { RegisterOptions } from './component.types';

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
   * This will be amended to the prefix when registering this extended
   * `Component` Class to the DOM's custom elements registry using the
   * `Component` Class' `register()` method.
   * 
   * @example
   * ```ts
   * class CustomComponent extends Component {
   *   // ...
   *   protected get namespace(): Namespace {
   *     return this.constructor.CONSTANTS.NAMESPACE.NAME;
   *   }
   *   // ...
   * }
   * ```
   */
  protected abstract get namespace(): string

  /**
   * Register `this` extended `Component` Class as a custom element within the
   * DOM's custom elements registry.
   * 
   * @remarks
   * This method must be called in order for this component to be consumable
   * within the DOM.
   *
   * @example
   * ```ts
   * import CustomComponent from './custom-component';
   * 
   * // Standard registration.
   * CustomComponent.register();
   * 
   * // Custom registration.
   * CustomComponent.register({
   *   name: 'custom-component',
   *   prefix: 'prefix',
   * });
   * 
   * export default CustomComponent;
   * ```
   * 
   *
   * @returns - Void.
   */
  public static register(options?: RegisterOptions): void {
    const name = options?.name || this.prototype.namespace;
    const prefix = options?.prefix ?? Component.CONSTANTS.NAMESPACE.PREFIX;
    const namespace = [prefix, name].join(prefix ? Component.CONSTANTS.NAMESPACE.SEPARATOR : '');

    if (customElements.get(namespace)) {
      return;
    }

    customElements.define(namespace, this as any);
  }

  /**
   * Constants associated with this `Component` Class.
   */
  public static get CONSTANTS(): any {
    return CONSTANTS;
  }
}

export default Component;
