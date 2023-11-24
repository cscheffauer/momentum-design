import React from 'react';
import type { Cell, Graph } from '@maxgraph/core';
import { ButtonPill } from '@momentum-ui/react-collaboration';
import { EDGE_STYLES } from '../defaultStyles';

interface Props {
    graph: Graph;
    selectedNodes: Array<Cell>;
    disabled?: boolean;
}
/**
 * The ConnectButton component.
*/
const ConnectButton = (props: Props) => {
  const { graph, selectedNodes, disabled = true } = props;

  const handleClick = () => {
    const parent = graph.getDefaultParent();

    graph.insertEdge({
      parent,
      value: 'new edge',
      source: selectedNodes[0],
      target: selectedNodes[1],
      style: { ...EDGE_STYLES },
    });
  };

  return <ButtonPill size={32} onPress={handleClick} disabled={disabled}>Connect</ButtonPill>;
};

export default ConnectButton;
