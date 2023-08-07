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

/**
 *
  .mdc-text-h1 {
    font-size: 7.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 9.375rem */
//   text-transform: capitalize;
// }

// .mdc-text-h2 {
//   font-size: 6rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 125%; /* 7.5rem */
//   text-transform: capitalize;
// }

// .mdc-text-h3 {
//   font-size: 3rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 125%; /* 3.75rem */
// }

// .mdc-text-h4 {
//   font-size: 2.5rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 125%; /* 3.125rem */
// }

// .mdc-text-h5 {
//   font-size: 2rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 125%; /* 2.5rem */
//   letter-spacing: 0.5rem;
//   text-transform: uppercase;
// }

// .mdc-text-h6 {
//   font-size: 1.75rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 3rem; /* 171.429% */
// }

// .mdc-text-h7 {
//   font-size: 1.5rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 140%; /* 2.1rem */
// }
