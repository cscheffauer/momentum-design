import React from 'react';
import type { Cell, Graph } from '@maxgraph/core';
import { ButtonPill } from '@momentum-ui/react-collaboration';

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
    <ButtonPill
      color="cancel"
      size={32}
      onPress={handleClick}
      disabled={disabled}
    >
        Delete
    </ButtonPill>
  );
};

export default DeleteButton;
