import { THEME_CLASS_PREFIX_STABLE, THEME_CLASS_SEPARATOR } from './constants';

const constructThemeClass = (theme: string): string => [THEME_CLASS_PREFIX_STABLE, theme].join(THEME_CLASS_SEPARATOR);

export { constructThemeClass };
