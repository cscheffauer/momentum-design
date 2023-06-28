import { css } from 'lit';

const styles = css`
  :host {
    /* Variables: */
    --mdc-button-background-color-normal: var(--mds-color-theme-button-primary-normal);
    --mdc-button-background-color-hover: var(--mds-color-theme-button-primary-hover);

    /* State: */
    display: inline-flex;
    width: 100px;
    height: 20px;
    color: var(--mds-color-theme-button-inverted-normal);
    background-color: var(--mdc-button-background-color);
  }
  :host(:hover) {
    background-color: var(--mdc-button-background-color-hover);
  }
`;

export { styles };
