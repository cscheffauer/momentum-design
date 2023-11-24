import Color from 'colorjs.io';

export const getAverageLValue = (referenceColors: Array<string>) => {
  const colorArray = referenceColors.map((colorString) => new Color(colorString));
  const averageLValue = colorArray.reduce((acc, color) => acc + color.lch.l, 0) / colorArray.length;
  return averageLValue;
};
