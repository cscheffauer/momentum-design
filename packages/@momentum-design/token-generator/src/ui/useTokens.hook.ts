import { useState, useCallback } from 'react';
import { parseGradient } from '../module/utils';
import type { ColorType } from '../module/types';

interface UseTokensArgs {
  colors: Record<string, ColorType>;
  setColorsAction: (nodeId: string, newValues: Partial<ColorType>) => void;
}

export const useTokens = ({ colors, setColorsAction }: UseTokensArgs) => {
  const [tokens, setTokens] = useState<Record<string, any>>({});
  const [currentTheme, setCurrentTheme] = useState<string>('');

  console.log('currentTheme', currentTheme);
  const getColorValueOfToken = useCallback(
    (tokenName: string) => {
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
    },
    [tokens, currentTheme],
  );

  const applyTokenColorToNode = useCallback((color: ColorType, nodeId: string) => {
    const colorValueFromToken = getColorValueOfToken(color.name);
    if (colorValueFromToken) {
      if (colorValueFromToken.includes('gradient')) {
        const { start, end } = parseGradient(colorValueFromToken);
        setColorsAction(nodeId, {
          isGradient: true,
          startValue: start,
          endValue: end,
          value: start,
          originalGradientValue: colorValueFromToken,
        });
      } else {
        setColorsAction(nodeId, { isGradient: false, value: colorValueFromToken });
      }
    }
  }, [tokens, currentTheme]);

  const applyAllTokenColorsToNodes = useCallback(() => {
    Object.entries(colors).forEach(([nodeId, color]: any) => {
      applyTokenColorToNode(color, nodeId);
    });
  }, [tokens, currentTheme]);

  return { tokens, setTokens, setCurrentTheme, applyTokenColorToNode, applyAllTokenColorsToNodes };
};
