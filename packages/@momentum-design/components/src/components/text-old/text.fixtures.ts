import { html } from 'lit';
import { TextType } from './text.types';

type Args = {
  children?: any;
  type?: TextType;
}

const base = (args: Args) => html`
    <mdc-text type="${args.type}">${args.children}</mdc-text>
`;

const fixtures = {
  base,
};

export default fixtures;
