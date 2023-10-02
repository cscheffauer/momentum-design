import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { FontObject } from './text.types';

type Args = {
  children?: any;
} & FontObject;

const base = (args: Args) =>
  html`
    <mdc-text type="${args.type}" size="${args.size}" weight="${args.weight}" decoration="${ifDefined(args.decoration)}"
      >${args.children}</mdc-text
    >
  `;

const fixtures = {
  base,
};

export default fixtures;
