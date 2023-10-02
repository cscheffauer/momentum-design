import { css } from 'lit';

// todo: change definition to tokens once available

export const fontsStyles = css`
  /* Weights apply the same across body & heading type */
  :host(:is([type="body"], [type="heading"])[weight="regular"]) {
    font-weight: 400;
  }

  :host(:is([type="body"], [type="heading"])[weight="medium"]) {
    font-weight: 500;
  }

  :host(:is([type="body"], [type="heading"])[weight="bold"]) {
    font-weight: 700;
  }

  /* Text decoration is only available for type body at the moment */
  :host([type="body"][decoration="underline"]) {
    text-decoration-line: underline;
  }

  /* BODY SMALL */
  :host([type="body"][size="small"]) {
    font-size: 0.75rem;
    font-style: normal;
    line-height: 1rem; /* 133.333% */
  }

  /* BODY MIDSIZE */
  :host([type="body"][size="midsize"]) {
    font-size: 0.875rem;
    font-style: normal;
    line-height: 1.25rem; /* 142.857% */
  }

  /* BODY LARGE */
  :host([type="body"][size="large"]) {
    font-size: 1rem;
    font-style: normal;
    line-height: 1.5rem; /* 150% */
  }

  /* HEADING SMALL */
  :host([type="heading"][size="small"]) {
    font-size: 1.25rem;
    font-style: normal;
    line-height: 1.75rem; /* 140% */
  }

  /* HEADING MIDSIZE */
  :host([type="heading"][size="midsize"]) {
    font-size: 1.5rem;
    font-style: normal;
    line-height: 2rem; /* 133.333% */
  }

  /* HEADING LARGE */
  :host([type="heading"][size="large"]) {
    font-size: 2rem;
    font-style: normal;
    line-height: 2.5rem; /* 125% */
  }

  /* HEADING XLARGE */
  :host([type="heading"][size="xlarge"]) {
    font-size: 2.5rem;
    font-style: normal;
    line-height: 3.25rem; /* 130% */
  }

  /* HEADLINE SMALL LIGHT */
  :host([type="headline"][size="small"][weight="light"]) {
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 4rem; /* 123.077% */
  }

  /* HEADLINE SMALL REGULAR */
  :host([type="headline"][size="small"][weight="regular"]) {
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4rem; /* 123.077% */
  }
`;
