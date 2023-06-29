/**
 * Accessibility constants
 *
 * WCAG_TAGS_TO_CHECK which should be checked,
 * see full list here (Axe-core Tags): https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
 *
 * RULES_TO_DISABLE which should not be checked,
 * see full list here: https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
 */
const ACCESSIBILITY = {
  WCAG_TAGS_TO_CHECK: ['wcag2a', 'wcag2aa'],
  RULES_TO_DISABLE: [],
};

const VISUAL_REGRESSION = {
  THRESHOLD: 0,
  MAX_DIFF_PIXELS_RATIO: 0.03,
  FILE_EXTENSION: 'png',
};

const CONSTANTS = {
  ACCESSIBILITY,
  VISUAL_REGRESSION,
};
export default CONSTANTS;
