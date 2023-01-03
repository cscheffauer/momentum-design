import { css } from 'lit';

const styles = css`
  :host {
    --md-comp-atoms-button-width: 100px;
    --md-comp-atoms-button-height: 40px;
    --md-comp-atoms-button-background-color: var(--mds-color-theme-button-primary-normal);
    --md-comp-atoms-button-border: none;
  }
  button {
    width: var(--md-comp-atoms-button-width);
    height: var(--md-comp-atoms-button-height);
    background-color: var(--md-comp-atoms-button-background-color);
    border: var(--md-comp-atoms-button-border);
  }
`;

export { styles };
