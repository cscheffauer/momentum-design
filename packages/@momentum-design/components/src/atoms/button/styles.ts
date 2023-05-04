import { css } from 'lit';

const styles = css`
  :host {
    display: inline-flex;
    width: 100px;
    height: 20px;
    background-color: var(--mds-color-theme-common-button-primary-normal);
  }
  :host(:hover) {
    background-color: var(--mds-color-theme-common-button-primary-hover);
  }
`;

export { styles };
