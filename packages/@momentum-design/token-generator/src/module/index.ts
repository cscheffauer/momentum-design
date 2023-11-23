const tokens = require('@momentum-design/tokens/dist/js/theme/webex/dark-stable');

const tokensToChange = [
  'mds-color-theme-background-gradient-primary',
  'mds-color-theme-background-gradient-secondary',
];

const tokensToChangeValues = tokensToChange.map((token) => {
  const parts = token.split('-');
  let currentLevel = 1;
  let currentObject = tokens;
  while (tokens[parts[currentLevel]]?.name !== token && currentLevel < parts.length) {
    currentObject = currentObject[parts[currentLevel]];
    currentLevel += 1;
  }
  return currentObject.value;
});

console.log(tokensToChangeValues);

const ColorObj = require('colorjs.io');

const Color = ColorObj.default;

const getContrastRatio = (colorString1, colorString2) => {
  const color1 = new Color(colorString1);
  const color2 = new Color(colorString2);
  return color1.contrast(color2, 'APCA');
};

const getAverageLValue = (referenceColors) => {
  const colorArray = referenceColors.map((colorString) => new Color(colorString));
  const averageLValue = colorArray.reduce((acc, color) => acc + color.lch.l, 0) / colorArray.length;
  return averageLValue;
};

const getCorrespondingColorForHue = (colors, hue) => {
  const referenceColor = new Color(colors[0]);
  const averageLValue = getAverageLValue(colors);

  referenceColor.lch.h = hue;
  referenceColor.lch.l = averageLValue;

  return referenceColor.toString({ format: 'hex', collapse: false });
};

const referenceColors = ['#ff0000'];
const referenceColors2 = ['#ebeffc', '#e6f2f1', '#f4ebff', '#fcebf5', '#f5efe4'];

const contrastRatios = [];

for (let hue = 0; hue < 360; hue += 5) {
  const color = getCorrespondingColorForHue(referenceColors, hue);
  console.log(color);
  contrastRatios.push(getContrastRatio(color, '#fff'));
}

console.log(Math.max(...contrastRatios) - Math.min(...contrastRatios));
