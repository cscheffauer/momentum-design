import { FontType } from './text.types';

const getTypeParts = (type: FontType) => {
  const parts = type.split('-');
  return { firstPart: parts[0], secondPart: parts[1] };
};
const isHeading = (type: FontType) => {
  const { firstPart, secondPart } = getTypeParts(type);
  return firstPart === 'heading' && (+secondPart > 0 && +secondPart < 7);
};

const isBody = (type: FontType) => {
  const { firstPart, secondPart } = getTypeParts(type);
  return firstPart === 'body' && (['regular', 'small'].includes(secondPart));
};

const getRole = (type?: FontType) => {
  if (type) {
    if (isHeading(type)) {
      return 'heading';
    }
    if (isBody(type)) {
      return 'paragraph';
    }
  }
  return null;
};

const getAriaLevel = (type?: FontType) => {
  if (type) {
    if (isHeading(type)) {
      const { secondPart } = getTypeParts(type);
      return secondPart;
    }
  }
  return null;
};

export { isHeading, getAriaLevel, getRole };
