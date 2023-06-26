import Component from '../component/component';

/**
 * `Provider` Class' static `get()` method options.
 *
 * @public
 */
export interface GetOptions {
  /**
   * `Component` Class Object to get the localized `Provider` DOM Element of.
   */
  component: Component;

  /**
   * Root DOM Element within the tree to check for the localized `Provider` DOM
   * Element for the provided `Component` Class Object.
   */
  root?: typeof HTMLElement;
}
