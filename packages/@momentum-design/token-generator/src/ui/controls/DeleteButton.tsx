import React from 'react';
import type { Cell, Graph } from '@maxgraph/core';

interface Props {
    graph: Graph;
    selectedNodes: Array<Cell>;
    deleteColorAction: (nodeId: Array<string>) => void;
    disabled?: boolean;
}
/**
 * The DeleteButton component.
*/
const DeleteButton = (props: Props) => {
  const { graph, selectedNodes, disabled = true, deleteColorAction } = props;

  const handleClick = () => {
    deleteColorAction(selectedNodes.map((node) => node.id as string));
    graph.removeCells(selectedNodes);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="delete-button button button-cancel"
    >
        Delete
    </button>
  );
};

export default DeleteButton;
