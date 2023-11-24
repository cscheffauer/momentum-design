import { Cell } from '@maxgraph/core';
import { useState, useEffect } from 'react';

interface UseDetailsSectionProps {
    selectedColorNodes: Array<Cell>;
}

export const useDetailsSection = ({ selectedColorNodes }: UseDetailsSectionProps) => {
  const [detailsCollapsed, setDetailsCollapsed] = useState(true);

  useEffect(() => {
    if (selectedColorNodes.length === 1) {
      setDetailsCollapsed(false);
    } else {
      setDetailsCollapsed(true);
    }
  }, [selectedColorNodes.length]);

  return { detailsCollapsed, setDetailsCollapsed };
};
