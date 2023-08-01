import { html } from 'lit';
import type { AvatarType } from './avatar.types';

type Args = {
  src?: string
  scale?: number;
  type?: AvatarType;
}

const base = (args: Args) => html`
    <mdc-avatar src="${args.src}" scale="${args.scale}" type="${args.type}"></mdc-avatar>
`;

const fixtures = {
  base,
};

export default fixtures;
