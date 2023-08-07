import { css } from 'lit';

const styles = css`
  :host {
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
    color: var(--mdc-themeprovider-color-default);

    --font-family-url: url("../../fonts/Inter.var.woff2") format("woff2");

    @font-face {
      font-family: "momentum-h1";
      src: local("Helvetica Neue Bold"), var(--font-family-url);
      font-size: 7.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 125%; /* 9.375rem */
      text-transform: capitalize;
    }

    @font-face {
      font-family: "momentum-h2";
      src: var(--font-family-url);
      font-size: 6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 125%; /* 7.5rem */
      text-transform: capitalize;
    }
  }
`;

export default styles;
