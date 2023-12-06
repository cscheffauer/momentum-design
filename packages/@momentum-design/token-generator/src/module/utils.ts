import Color from 'colorjs.io';

export const getAverageLValue = (referenceColors: Array<string>) => {
  const colorArray = referenceColors.map((colorString) => new Color(colorString));
  const averageLValue = colorArray.reduce((acc, color) => acc + color.lch.l, 0) / colorArray.length;
  return averageLValue;
};

export const getAverageCValue = (referenceColors: Array<string>) => {
  const colorArray = referenceColors.map((colorString) => new Color(colorString));
  const averageCValue = colorArray.reduce((acc, color) => acc + color.lch.c, 0) / colorArray.length;
  return averageCValue;
};

export const parseGradient = (gradient: string) => {
  const foundColors = gradient.split('#');

  return {
    start: `#${foundColors[1].split(' ')[0]}`,
    end: `#${foundColors[2].split(' ')[0]}`,
  };
};
