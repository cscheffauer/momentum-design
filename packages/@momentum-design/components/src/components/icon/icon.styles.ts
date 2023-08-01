import { css } from 'lit';
import { matchChildrenSizeStyles } from '../../utils/styles';

const styles = [
  matchChildrenSizeStyles,
  css`
    svg {
      height: 100%;
      width: 100%;
      fill: currentColor;
    }
  `,
];

export { styles };
