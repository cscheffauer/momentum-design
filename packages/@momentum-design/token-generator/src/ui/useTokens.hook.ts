import { useState } from 'react';

export const useTokens = () => {
  const [tokens, setTokens] = useState<Record<string, any>>({});

  const getColorValueOfToken = (tokenName: string) => {
    if (!tokens) {
      return undefined;
    }
    const parts = tokenName.split('-');

    // start with 1 (=color), since first part of token string is always 'mds'
    let currentLevel = 1;
    let currentObject = tokens;
    while (tokens[parts[currentLevel]]?.name !== tokenName && currentLevel < parts.length) {
      currentObject = currentObject[parts[currentLevel]];
      currentLevel += 1;
    }

    return currentObject.value;
  };

  return { tokens, setTokens, getColorValueOfToken };
};
