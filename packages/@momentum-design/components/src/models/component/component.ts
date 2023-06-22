import { LitElement } from 'lit';

import CONSTANTS from './component.constants';

/**
 * Core Component class to ultimately be inherited by all Web Components within
 * this package.
 *
 * @public
 */
class Component extends LitElement {
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
  public static register(namespace: string): void {
    if (!(namespace?.length > 0)) {
      throw new Error(`Namespace has not been defined properly for component ${this.name}`);
    }
    if (customElements.get(namespace)) {
      return;
    }

    customElements.define(namespace, this as any);
  }

  /**
   * Constants associated with this `Component` Class.
   */
  public static get CONSTANTS() {
    return CONSTANTS;
  }
}

export default Component;
