import { html } from 'lit';

type Args = {
  children?: any;
  role?: string;
  ariaLevel?: string;
  fontType?: string;
};

const base = (args: Args) => html`
  <mdc-text role="${args.role}" aria-level="${args.ariaLevel}" font-type="${args.fontType}">${args.children}</mdc-text>
`;

const fixtures = {
  base,
};

export default fixtures;
