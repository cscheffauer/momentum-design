import { css } from 'lit';

const styles = css`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    --mdc-themeprovider-font-family: Inter;

    font-family: var(--mdc-themeprovider-font-family); 
    color: var(--mdc-themeprovider-color-default);
  }
`;

export default styles;
