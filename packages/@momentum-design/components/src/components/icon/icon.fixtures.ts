import { html } from 'lit';

interface Args {
  [name: string]: any;
}

const base = (args: Args) => html` <mdc-icon name="${args.name}" scale="${args.scale}"></mdc-icon> `;

const accessibility = (args: Args) => html`
  <mdc-icon name="${args.name}" scale="${args.scale}" role="${args.role}" aria-label="${args['aria-label']}"></mdc-icon>
`;

const fixtures = {
  base,
  accessibility,
};

export default fixtures;
