import type { CellStyle } from '@maxgraph/core';

export const COLOR_CIRCLE_STYLES: CellStyle = {
  shape: 'rectangle',
  fillColor: '#4285F4',
  fontColor: '#FFFFFF',
  fontSize: 16,
  fontFamily: 'Inter, Arial, sans-serif',
  rounded: true,
  strokeColor: '#FFFFFF',
};

export const EDGE_STYLES: CellStyle = {
  fontColor: '#FFFFFF',
  strokeColor: '#FFFFFF',
  endArrow: 'block',
};
