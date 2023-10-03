import { css } from 'lit';

const styles = css`
  :host {
    --mdc-focusring-outward-offset: -4px;
    --mdc-focusring-box-shadow: 0px 0px 0px 4px var(--mds-color-theme-outline-theme-normal),
      0px 0px 0px 5px rgba(100, 180, 250, 0.35), 0px 0px 0px 2px #000;

    border-radius: inherit;
    pointer-events: none;
    display: none;
    outline: none;
    box-sizing: border-box;
    position: absolute;
    inset: var(--mdc-focusring-outward-offset);
  }

  :host([visible]) {
    display: flex;
    box-shadow: var(--mdc-focusring-box-shadow);
  }
`;

export default styles;
