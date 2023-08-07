import { html } from 'lit';
import type { FontType } from './text.types';

type Args = {
  children?: any;
  type?: FontType;
};

const base = (args: Args) => html`
  <mdc-text type="${args.type}">${args.children}</mdc-text>
`;

const fixtures = {
  base,
};

export default fixtures;
