import { html } from 'lit';

const base = () => html`
  <div style="display: flex; gap: 1rem;">
    <button style="position: relative; outline: none;">
      Focus me!
      <mdc-focusring></mdc-focusring>
    </button>
    <button style="position: relative; outline: none; border-radius: 100px;">
      X
      <mdc-focusring></mdc-focusring>
    </button>
  </div>
`;

const fixtures = {
  base,
};

export default fixtures;
