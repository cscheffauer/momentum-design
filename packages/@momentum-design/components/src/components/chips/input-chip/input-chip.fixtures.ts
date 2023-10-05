import { html } from 'lit';

type Args = {}

const base = (args: Args) => html`
    <mdc-chip label="test" leadingIcon=""></mdc-chip>
`;

const fixtures = {
  base,
};

export default fixtures;
