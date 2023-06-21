/**
 * Returned interface for a `Component` Class Object's `namespace` getter.
 *
 * @public
 */
export interface Namespace {
  /**
   * Name for this `Component` Class Object's namespace.
   */
  name: string;

  /**
   * Prefix for this `Component` Class Object's namespace.
   */
  prefix?: string;
}

/**
 * Interface for a `Component` Class Object's static `CONSTANTS` getter.
 * 
 * @public
 */
export interface Constants {
  /**
   * TODO
   */
  NAMESPACE: {
    /**
     * TODO
     */
    NAME?: string;

    /**
     * TODO
     */
    PREFIX?: string;
  }
}
