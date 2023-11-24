import React from 'react';
import type { Cell, Graph } from '@maxgraph/core';
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

  return <button onClick={handleClick} disabled={disabled} className="button">Connect nodes</button>;
};

export default ConnectButton;
