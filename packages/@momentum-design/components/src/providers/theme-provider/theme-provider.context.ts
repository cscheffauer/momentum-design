import { createContext } from "@lit-labs/context";

import CONSTANTS from './theme-provider.constants';

class ThemeProviderContext {
  public theme?: string;

  public static context = createContext<ThemeProviderContext>(CONSTANTS.TAG_NAME);
}

export default ThemeProviderContext;
