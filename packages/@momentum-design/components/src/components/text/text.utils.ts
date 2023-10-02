import { FontSize, FontType } from './text.types';

/**
 * Get corresponding aria-role to type
 * @param type - type to find corresponding role for
 * @returns role
 */
const getRole = (type?: FontType) => {
  if (type) {
    if (['headline', 'heading'].includes(type)) {
      // if type is headline or heading, role is set as heading
      return 'heading';
    }
    // otherwise paragraph
    return 'paragraph';
  }
  return null;
};

/**
 * Get corresponding aria-level to type & size
 * @param type - type to find corresponding level for
 * @param size - type to find corresponding level for
 * @returns aria-level as string
 */
const getAriaLevel = (type?: FontType, size?: FontSize) => {
  if (type) {
    if (type === 'headline') {
      return '1';
    }
    if (type === 'heading') {
      switch (size) {
        case 'xlarge':
          return '2';
        case 'large':
          return '3';
        case 'midsize':
          return '4';
        case 'small':
          return '5';
        default:
          return null;
      }
    }
  }
  return null;
};

export { getAriaLevel, getRole };
