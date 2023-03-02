import { css } from 'lit';

const styles = css`
  :host {
    --mdc-atoms-button-general-width: unset;
    --mdc-atoms-button-general-height: unset;
    --mdc-atoms-button-general-background-color: buttonface;
    --mdc-atoms-button-general-border: 2px outset buttonborder;

    --mdc-atoms-button-hover-width: var(--mdc-atoms-button-general-width);
    --mdc-atoms-button-hover-height: var(--mdc-atoms-button-general-height);
    --mdc-atoms-button-hover-background-color: var(--mdc-atoms-button-general-background-color);
    --mdc-atoms-button-hover-border: var(--mdc-atoms-button-general-border);

    --mdc-atoms-button-active-width: var(--mdc-atoms-button-general-width);
    --mdc-atoms-button-active-height: var(--mdc-atoms-button-general-height);
    --mdc-atoms-button-active-background-color: var(--mdc-atoms-button-general-background-color);
    --mdc-atoms-button-active-border: 2px inset buttonborder;
    display: inline-flex;
  }
  button {
    width: var(--mdc-atoms-button-general-width);
    height: var(--mdc-atoms-button-general-height);
    background-color: var(--mdc-atoms-button-general-background-color);
    border: var(--mdc-atoms-button-general-border);
  }

  button:hover {
    width: var(--mdc-atoms-button-hover-width);
    height: var(--mdc-atoms-button-hover-height);
    background-color: var(--mdc-atoms-button-hover-background-color);
    border: var(--mdc-atoms-button-hover-border);
  }

  button:active {
    width: var(--mdc-atoms-button-active-width);
    height: var(--mdc-atoms-button-active-height);
    background-color: var(--mdc-atoms-button-active-background-color);
    border: var(--mdc-atoms-button-active-border);
  }
`;

export { styles };
