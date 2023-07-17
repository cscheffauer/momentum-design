import { html } from 'lit';

type Args = {
  src?: string
  scale?: number;
}

const base = (args: Args) => html`
    <mdc-avatar src="${args.src}" scale="${args.scale}"></mdc-avatar>
`;

const fixtures = {
  base,
};

export default fixtures;
