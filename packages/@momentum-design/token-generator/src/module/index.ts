import Color from 'colorjs.io';
import { getAverageLValue } from './utils';

export const getContrastRatio = (colorString1: string, colorString2: string) => {
  const color1 = new Color(colorString1);
  const color2 = new Color(colorString2);
  return color1.contrast(color2, 'APCA');
};

export const getCorrespondingColorBasedOnHue = (referenceColors: Array<string>, hue: number) => {
  const referenceColor = new Color(referenceColors[0]);
  const averageLValue = getAverageLValue(referenceColors);

  referenceColor.lch.h = hue;
  referenceColor.lch.l = averageLValue;

  return referenceColor.toString({ format: 'hex', collapse: false });
};
