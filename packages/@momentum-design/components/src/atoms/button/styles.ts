import { css } from 'lit';

const styles = css`
  :host {
    display: inline-flex;
    width: 100px;
    height: 20px;
    background-color: var(--mds-color-theme-button-primary-normal);
    color: var(--mds-color-theme-button-inverted-normal);
  }
  :host(:hover) {
    background-color: var(--mds-color-theme-button-primary-hover);
  }
`;

export { styles };
