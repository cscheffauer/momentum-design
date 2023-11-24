import type { Cell, Graph } from '@maxgraph/core';
import { ButtonGroupNext } from '@momentum-ui/react-collaboration';
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
  setTokensAction: (tokens: Record<string, any>) => void;
}

/**
 * The ControlsSection component.
*/
const ControlsSection = (props: Props) => {
  const { graph, selectedNodes, selectedColorNodes, setColorsAction, deleteColorAction, setTokensAction } = props;
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

  const handleUploadTokens = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const resultObject = JSON.parse(result);
      setTokensAction(resultObject);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
    reader.readAsText(file);
  };

  const buttonGroupChildren: Array<any> = [
    <AddButton key="0" graph={graph} setColorsAction={setColorsAction} {...ButtonGroupNext.CHILD_PROPS}/>,
    <ConnectButton
      key="1"
      graph={graph}
      selectedNodes={selectedColorNodes}
      disabled={connectButtonDisabled}
      {...ButtonGroupNext.CHILD_PROPS}/>,
    <DeleteButton
      key="2"
      graph={graph}
      selectedNodes={selectedNodes}
      disabled={deleteButtonDisabled}
      deleteColorAction={deleteColorAction}
      {...ButtonGroupNext.CHILD_PROPS}
    />,
  ];

  return (
    <section className="controls-section">
      <ButtonGroupNext children={buttonGroupChildren} />
      <div className="upload-tokens-area">
        <p>Tokens:</p>
        <input
          className="upload-tokens-input"
          placeholder="Upload tokens"
          type="file"
          onChange={handleUploadTokens} />
      </div>
    </section>
  );
};

export default ControlsSection;
