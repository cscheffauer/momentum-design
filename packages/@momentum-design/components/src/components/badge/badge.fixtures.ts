import { html } from 'lit';
import type { BadgeType } from './badge.types';

type Args = {
  type?: BadgeType
  iconName?: string;
}

const base = (args: Args) => html`
    <mdc-badge type="${args.type}" icon-name="${args.iconName}"></mdc-badge>
`;

const fixtures = {
  base,
};

export default fixtures;
