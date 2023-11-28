import type { Cell, Graph } from '@maxgraph/core';
import { ButtonGroupNext, ButtonPill, Overlay, ModalContainer } from '@momentum-ui/react-collaboration';
import React, { useEffect, useState } from 'react';
import { ColorType } from '../../module/types';
import AddButton from './AddButton';
import ConnectButton from './ConnectButton';
import DeleteButton from './DeleteButton';
import TokensModal from './TokensModal';
import { DEFAULTS } from './constants';

interface Props {
  graph: Graph;
  selectedNodes: Array<Cell>;
  selectedColorNodes: Array<Cell>;
  setColorsAction: (nodeId: string, newValues: Partial<ColorType>) => void;
  deleteColorAction: (nodeId: Array<string>) => void;
  tokens: Record<string, any>;
  setTokensAction: (tokens: Record<string, any>) => void;
}

/**
 * The ControlsSection component.
*/
const ControlsSection = (props: Props) => {
  const {
    graph,
    selectedNodes,
    selectedColorNodes,
    setColorsAction,
    deleteColorAction,
    tokens,
    setTokensAction } = props;
  const [connectButtonDisabled, setConnectButtonDisabled] = useState(true);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);
  const [tokenStatus, setTokenStatus] = useState<string>(DEFAULTS.TOKENS_LABELS.UNSET);
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleState = () => {
    setOverlayOpen(!overlayOpen);
  };

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

  const buttonGroupChildren: Array<any> = [
    <AddButton key="0" graph={graph} setColorsAction={setColorsAction} {...ButtonGroupNext.CHILD_PROPS} />,
    <ConnectButton
      key="1"
      graph={graph}
      selectedNodes={selectedColorNodes}
      disabled={connectButtonDisabled}
      {...ButtonGroupNext.CHILD_PROPS} />,
    <DeleteButton
      key="2"
      graph={graph}
      selectedNodes={selectedNodes}
      disabled={deleteButtonDisabled}
      deleteColorAction={deleteColorAction}
      {...ButtonGroupNext.CHILD_PROPS}
    />,
  ];

  console.log(overlayOpen);

  return (
    <section className="controls-section">
      <ButtonGroupNext children={buttonGroupChildren} />
      <div className="upload-tokens-area">
        {tokenStatus}
        <ButtonPill className="setTokensButton" size={32} onPress={toggleState}>Set</ButtonPill>
        {overlayOpen && (
          <Overlay fullscreen>
            <ModalContainer
              color="tertiary"
              elevation={2}
              isPadded
              round={50}
              className="tokens-modal"
            >
              <TokensModal tokens={tokens} toggleState={toggleState} setTokensAction={setTokensAction}/>
            </ModalContainer>
          </Overlay>
        )}
      </div>
    </section>
  );
};

export default ControlsSection;
