import { useState, useCallback } from 'react';

export const useTokens = () => {
  const [tokens, setTokens] = useState<Record<string, any>>({});
  const [currentTheme, setCurrentTheme] = useState<string>('');

  console.log('tokens', tokens);
  console.log('currentTheme', currentTheme);
  const getColorValueOfToken = useCallback((tokenName: string) => {
    if (!tokens) {
      return undefined;
    }
    const parts = tokenName.split('-');

    // start with 1 (=color), since first part of token string is always 'mds'
    let currentLevel = 1;
    let currentObject = tokens[currentTheme];
    while (tokens[parts[currentLevel]]?.name !== tokenName && currentLevel < parts.length) {
      currentObject = currentObject[parts[currentLevel]];
      currentLevel += 1;
    }

    return currentObject.value;
  }, [tokens, currentTheme]);

  return { tokens, setTokens, setCurrentTheme, getColorValueOfToken };
};
