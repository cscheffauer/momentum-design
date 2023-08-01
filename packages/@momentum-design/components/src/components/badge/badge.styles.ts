import { css } from 'lit';
import { matchChildrenSizeStyles } from '../../utils/styles';

const styles = [
  matchChildrenSizeStyles,
  css`
    :host {
      /* Variables: */
      --mdc-badge-icon-background-color: var(--mds-color-theme-background-accent);

      /* State: */
      height: 1rem;
      width: 1rem;
    }

    .mdc-badge-icon {
      background-color: var(--mdc-badge-icon-background-color);
    }
  `,
];

export { styles };
