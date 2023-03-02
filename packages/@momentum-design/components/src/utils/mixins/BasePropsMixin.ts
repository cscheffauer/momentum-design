import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface BasePropsMixinInterface {
  class: string;
  disabled: boolean;
}

export const BasePropsMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    @property({ reflect: true, type: String })
    class = '';

    @property({ reflect: true, type: Boolean })
    disabled = false;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<BasePropsMixinInterface> & T;
};
