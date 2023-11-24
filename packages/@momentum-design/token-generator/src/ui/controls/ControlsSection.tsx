import type { Cell, Graph } from '@maxgraph/core';
import React, { useEffect, useState } from 'react';
import { ColorType } from '../../module/types';
import AddButton from './AddButton';
import ConnectButton from './ConnectButton';
import DeleteButton from './DeleteButton';

interface Props {
  graph: Graph;
  selectedNodes: Array<Cell>;
  selectedColorNodes: Array<Cell>;
  setColorsAction: (nodeId: string, newValues: Partial<ColorType>) => void;
  deleteColorAction: (nodeId: Array<string>) => void;
}

/**
 * The ControlsSection component.
*/
const ControlsSection = (props: Props) => {
  const { graph, selectedNodes, selectedColorNodes, setColorsAction, deleteColorAction } = props;
  const [connectButtonDisabled, setConnectButtonDisabled] = useState(true);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

  useEffect(() => {
    if (selectedColorNodes.length === 2) {
      setConnectButtonDisabled(false);
    } else {
      setConnectButtonDisabled(true);
    }
  }, [selectedColorNodes.length]);

  useEffect(() => {
    if (selectedNodes.length === 0) {
      setDeleteButtonDisabled(true);
    } else {
      setDeleteButtonDisabled(false);
    }
  }, [selectedNodes.length]);

  return (
    <section className="controls-section">
      <AddButton graph={graph} setColorsAction={setColorsAction} />
      <ConnectButton graph={graph} selectedNodes={selectedColorNodes} disabled={connectButtonDisabled} />
      <DeleteButton
        graph={graph}
        selectedNodes={selectedNodes}
        disabled={deleteButtonDisabled}
        deleteColorAction={deleteColorAction} />
    </section>
  );
};

export default ControlsSection;
