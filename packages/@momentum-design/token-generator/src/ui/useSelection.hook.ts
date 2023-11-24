import { Cell, Graph, InternalEvent } from '@maxgraph/core';
import { useEffect, useState } from 'react';
import { COLOR_CIRCLE_STYLES } from './defaultStyles';

interface UseSelectionProps {
  graph: Graph | null;
}

export const useSelection = ({ graph }: UseSelectionProps) => {
  const [selectedNodes, setSelectedNodes] = useState<Array<Cell>>([]);
  const [selectedColorNodes, setSelectedColorNodes] = useState<Array<Cell>>([]);

  useEffect(() => {
    graph?.selectionModel.addListener(InternalEvent.CHANGE, (selection: any) => {
      setSelectedNodes(selection.cells);
      setSelectedColorNodes(selection.cells.filter((cell: Cell) => cell.style.shape === COLOR_CIRCLE_STYLES.shape));
    });

    return () => {
      graph?.selectionModel.removeListener(InternalEvent.CHANGE);
    };
  }, [graph]);

  return {
    selectedNodes,
    selectedColorNodes,
    firstSelectedNodeId: selectedNodes[0]?.id as string };
};
