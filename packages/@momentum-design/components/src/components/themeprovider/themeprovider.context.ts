import { createContext } from '@lit-labs/context';

import { TAG_NAME } from './themeprovider.constants';

class ThemeProviderContext {
  public theme?: string;

  // create typed lit context as part of the ThemeProviderContext
  public static context = createContext<ThemeProviderContext>(TAG_NAME);

  // constructor to allow setting the defaultTheme
  constructor(defaultTheme?: string) {
    this.theme = defaultTheme;
  }
}

export default ThemeProviderContext;
