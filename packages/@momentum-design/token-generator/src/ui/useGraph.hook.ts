/* eslint-disable no-new */
import { useState } from 'react';
import { Graph, InternalEvent, RubberBandHandler } from '@maxgraph/core';

export const useGraph = () => {
  const [graph, setGraph] = useState<Graph | null>(null);

  const initializeGraph = (container: HTMLElement) => {
    // Disables the built-in context menu
    InternalEvent.disableContextMenu(container);

    const graph = new Graph(container);

    graph.setPanning(true); // Use mouse right button for panning
    new RubberBandHandler(graph); // Enables rubber band selection

    setGraph(graph);
  };

  return { graph, initializeGraph };
};
