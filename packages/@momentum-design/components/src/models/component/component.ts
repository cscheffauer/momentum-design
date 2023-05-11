import { LitElement } from 'lit';

import CONSTANTS from './component.constants';
import type { Constants } from './component.types';

class Component extends LitElement {
  protected static validateName(name: string): void {
    if (name.includes(CONSTANTS.COMPONENT_NAME)) {
      throw new Error(`provided name "${name}" is reserved`);
    }

    if (name !== name.toLowerCase()) {
      throw new Error(`provided name "${name}" must be lower case`);
    }
  }

  public static mount(): void {
    const { COMPONENT_NAME } = this.CONSTANTS;
    const name = `${CONSTANTS.COMPONENT_NAME_PREFIX}-${COMPONENT_NAME}`;
    const existing = !!customElements.get(name);

    Component.validateName(name);

    if (existing) {
      return;
    }

    customElements.define(name, this);
  }

  public static get CONSTANTS(): Constants {
    return CONSTANTS;
  }
}

export default Component;
