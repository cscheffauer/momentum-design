import tokens from '@momentum-design/tokens/dist/js/theme/webex/dark-stable';

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
