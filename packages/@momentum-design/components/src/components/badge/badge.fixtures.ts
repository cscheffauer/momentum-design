import { html } from 'lit';
import type { BadgeType } from './badge.types';

type Args = {
  type?: BadgeType;
  iconName?: string;
  scale?: number;
  lengthUnit?: string;
  text?: string;
};

const base = (args: Args) => html`
  <mdc-badge
    type="${args.type}"
    icon-name="${args.iconName}"
    scale="${args.scale}"
    length-unit="${args.lengthUnit}"
    text="${args.text}"
  ></mdc-badge>
`;

const fixtures = {
  base,
};

export default fixtures;
