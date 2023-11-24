/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';

export interface Props {
    initializeGraph: (container: HTMLElement) => void;
}

/**
 * The GraphContainer component.
*/
const GraphContainer = ({ initializeGraph }: Props) => {
  const graphContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (graphContainerRef.current) {
      initializeGraph(graphContainerRef.current);
    }
  }, [graphContainerRef]);

  return (<div ref={graphContainerRef} className="graph-container" />);
};

export default React.memo(GraphContainer);
