/* eslint-disable no-new */

import '@maxgraph/core/css/common.css';
import '@momentum-design/tokens/dist/css/core/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
import '@momentum-design/fonts/src/css/fonts.css';

import './style.css';

import { Graph, InternalEvent, RubberBandHandler } from '@maxgraph/core';
import { registerCustomShapes } from './customShapes';
import { COLOR_CIRCLE_STYLES, EDGE_STYLES } from './defaultStyles';
import registerEvents from './eventHandlers';

const setupBody = (body: HTMLBodyElement) => {
  body.classList.add('mds-theme-stable-darkWebex');
};

const initializeGraph = (container: HTMLElement) => {
  // Disables the built-in context menu
  InternalEvent.disableContextMenu(container);

  const graph = new Graph(container);
  graph.setPanning(true); // Use mouse right button for panning
  new RubberBandHandler(graph); // Enables rubber band selection

  registerEvents(graph);
  // shapes and styles
  registerCustomShapes();

  // Gets the default parent for inserting new cells. This
  // is normally the first child of the root (ie. layer 0).
  const parent = graph.getDefaultParent();

  // Adds cells to the model in a single step
  graph.batchUpdate(() => {
    // insert vertex using custom shapes using the new insertVertex method
    const color1 = graph.insertVertex({
      parent,
      value: 'Color 1',
      position: [20, 10],
      size: [100, 100],
      style: { shape: 'colorCircle', ...COLOR_CIRCLE_STYLES },
    });
    // use the new insertVertex method using position and size parameters
    const color2 = graph.insertVertex({
      parent,
      value: 'Color 2',
      position: [220, 10],
      size: [100, 100],
      style: { shape: 'colorCircle', ...COLOR_CIRCLE_STYLES },
    });

    // use the new insertEdge method
    graph.insertEdge({
      parent,
      value: 'another edge',
      source: color1,
      target: color2,
      style: { ...EDGE_STYLES },
    });
  });
};

// Sets up the body
setupBody(<HTMLBodyElement>document.querySelector('body'));

// Creates the graph inside the given container
initializeGraph(<HTMLElement>document.querySelector('#graph-container'));
