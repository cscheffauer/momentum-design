import { getCorrespondingColorBasedOnHue } from './index';
import { parseGradient } from './utils';
import type { ColorType, TokenSchema } from './types';

const getGradient = (schemaEntry: Required<ColorType>, hue: number) => {
  const start = getCorrespondingColorBasedOnHue([schemaEntry.startValue], hue);
  const end = getCorrespondingColorBasedOnHue([schemaEntry.endValue], hue);

  const originalGradient = parseGradient(schemaEntry.originalGradientValue);
  const [firstPartOriginalGradient, tempPart] = schemaEntry.originalGradientValue.split(originalGradient.start);
  const [middlePartOriginalGradient, endPartOriginalGradient] = tempPart.split(originalGradient.end);

  let gradient = '';
  gradient += firstPartOriginalGradient;
  start.replace('#', '');
  gradient += start;
  gradient += middlePartOriginalGradient;
  end.replace('#', '');
  gradient += end;
  gradient += endPartOriginalGradient;

  return gradient;
};

export const getCSSVariableOverrides = (tokenSchema: TokenSchema, hue: number) => {
  const overrides = {};
  tokenSchema.dynamicTokens.forEach((entry) => {
    if (entry.isGradient) {
      overrides[`--${entry.name}`] = getGradient(entry as Required<ColorType>, hue);
    } else {
      overrides[`--${entry.name}`] = entry.value;
    }
  });
  return overrides;
};
