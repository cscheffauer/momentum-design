import { ContextProvider } from '@lit-labs/context';
import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import ThemeProviderContext from './theme-provider.context';
import CONSTANTS from './theme-provider.constants';

class ThemeProvider extends Provider<typeof ThemeProviderContext.context> {
  protected context = new ContextProvider(this, {
    context: ThemeProviderContext.context,
    initialValue: new ThemeProvider.Context(),
  });

  @property({ attribute: 'theme', reflect: true, type: String })
  public theme?: string;

  protected get shouldUpdateConsumers(): boolean {
    return true;
  }

  protected updateContext(): void {
    this.context.value.theme = this.theme;
  }

  public static get Context() {
    return ThemeProviderContext;
  }

  public static get CONSTANTS() {
    return CONSTANTS;
  }
}

export default ThemeProvider;
