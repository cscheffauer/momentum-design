import React from 'react';
import { Graph } from '@maxgraph/core';
import { ButtonPill } from '@momentum-ui/react-collaboration';
import { COLOR_CIRCLE_STYLES } from '../defaultStyles';
import type { ColorType } from '../../module/types';

const DEFAULT_NAME = 'New Color';

interface Props {
  graph: Graph;
  setColorsAction: (nodeId: string, newValues: Partial<ColorType>) => void;
}
/**
 * The AddButton component.
*/
const AddButton = (props: Props) => {
  const { graph, setColorsAction } = props;
  const handleClick = () => {
    const parent = graph.getDefaultParent();

    const createdNode = graph.insertVertex({
      parent,
      value: DEFAULT_NAME,
      position: [20, 10],
      size: [100, 100],
      style: COLOR_CIRCLE_STYLES,
    });

    setColorsAction(createdNode.id as string, { name: DEFAULT_NAME, value: COLOR_CIRCLE_STYLES.fillColor });
  };

  return <ButtonPill size={32} onPress={handleClick} className="button">Add</ButtonPill>;
};

export default AddButton;
