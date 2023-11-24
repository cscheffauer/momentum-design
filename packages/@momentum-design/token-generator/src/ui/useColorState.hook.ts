import { Cell, Graph } from '@maxgraph/core';
import Color from 'colorjs.io';
import { useState, useEffect } from 'react';
import { ColorType } from '../module/types';
import { COLOR_CIRCLE_STYLES } from './defaultStyles';

export const useColorState = (graph: Graph | null) => {
  const [colors, setColors] = useState<Record<string, ColorType>>({});

  const changeColorValue = (node: Cell, value: string) => {
    const color = new Color(value);
    // get foreground color based on luminance
    const oppositeColor = color.lch.l > 50 ? '#000000' : '#ffffff';

    node.setStyle({
      ...COLOR_CIRCLE_STYLES,
      fillColor: value,
      fontColor: oppositeColor,
    });
  };

  const changeName = (node: Cell, value: string) => {
    node.setValue(value);
  };

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]: [string, ColorType]) => {
      const node = graph?.getDataModel().getCell(key);

      if (node) {
        changeColorValue(node, value.value);
        changeName(node, value.name);
      }
    });
    graph?.refresh();
  }, [colors]);

  const setColorsAction = (nodeId: string, newValues: Partial<ColorType>) => {
    setColors((prevColors) => ({ ...prevColors, [nodeId]: { ...prevColors[nodeId], ...newValues } }));
  };

  const deleteColorAction = (nodeIds: Array<string>) => {
    const newColors = { ...colors };
    nodeIds.forEach((nodeId) => {
      delete newColors[nodeId];
    });
    setColors(newColors);
  };

  return { colors, setColorsAction, deleteColorAction };
};
