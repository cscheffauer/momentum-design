import { html } from 'lit';

interface Args {
  [name: string]: any;
}

const base = (args: Args) => html`
  <mdc-themeprovider class="themeWrapper" theme="${args.theme}">
    <p>Current theme:</p>
    <mdc-subcomponent></mdc-subcomponent>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
    </div>
  </mdc-themeprovider>
`;

const fixtures = {
  base,
};

export default fixtures;
