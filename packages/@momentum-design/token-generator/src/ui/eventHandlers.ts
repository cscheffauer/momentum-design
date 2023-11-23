import { Cell, Graph, InternalEvent } from '@maxgraph/core';
import { COLOR_CIRCLE_STYLES, EDGE_STYLES } from './defaultStyles';

let selectedNodes: Array<Cell> = [];
let selectedColorNodesWithoutEdges: Array<Cell> = [];

const registerEvents = (graph: Graph) => {
  const addButton = document.getElementById('add') as HTMLButtonElement;
  const connectButton = document.getElementById('connect') as HTMLButtonElement;
  const deleteButton = document.getElementById('delete') as HTMLButtonElement;
  const parent = graph.getDefaultParent();

  // Registers an event handler for selection of cells
  graph.selectionModel.addListener(InternalEvent.CHANGE, (selection: any) => {
    selectedNodes = selection.cells;
    selectedColorNodesWithoutEdges = selection.cells.filter(
      (cell: Cell) => cell.style.shape === 'colorCircle' && cell.edges.length === 0,
    );

    if (selectedColorNodesWithoutEdges.length === 2) {
      connectButton.disabled = false;
    } else {
      connectButton.disabled = true;
    }

    if (selection.cells.length === 0) {
      deleteButton.disabled = true;
    } else {
      deleteButton.disabled = false;
    }
  });

  addButton.addEventListener('click', () => {
    graph.insertVertex({
      parent,
      value: 'New Color',
      position: [20, 10],
      size: [100, 100],
      style: { shape: 'colorCircle', ...COLOR_CIRCLE_STYLES },
    });
  });

  connectButton.addEventListener('click', () => {
    graph.insertEdge({
      parent,
      value: 'new edge',
      source: selectedColorNodesWithoutEdges[0],
      target: selectedColorNodesWithoutEdges[1],
      style: { ...EDGE_STYLES },
    });
  });

  deleteButton.addEventListener('click', () => {
    graph.removeCells(selectedNodes);
  });
};

export default registerEvents;
