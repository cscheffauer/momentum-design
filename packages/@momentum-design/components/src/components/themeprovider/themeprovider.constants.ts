import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('themeprovider');

const THEME_CLASS_PREFIX = 'mds-theme-stable';

const THEME_CLASS_SEPARATOR = '-';

// Some themes are disabled until tokens are properly imported.
const THEME_NAMES = {
  // DARK_BRONZE: 'darkBronze' as const,
  // DARK_INDIGO: 'darkIndigo' as const,
  // DARK_JADE: 'darkJade' as const,
  // DARK_LAVENDER: 'darkLavender' as const,
  // DARK_ROSE: 'darkRose' as const,
  DARK_WEBEX: 'darkWebex' as const,
  // LIGHT_BRONZE: 'lightBronze' as const,
  // LIGHT_INDIGO: 'lightIndigo' as const,
  // LIGHT_JADE: 'lightJade' as const,
  // LIGHT_LAVENDER: 'lightLavender' as const,
  // LIGHT_ROSE: 'lightRose' as const,
  LIGHT_WEBEX: 'lightWebex' as const,
};

const THEMES = Object.values(THEME_NAMES);

const DEFAULTS = {
  THEME: THEME_NAMES.DARK_WEBEX,
};

export {
  DEFAULTS,
  THEME_CLASS_PREFIX,
  THEME_CLASS_SEPARATOR,
  THEME_NAMES,
  THEMES,
  TAG_NAME,
};
