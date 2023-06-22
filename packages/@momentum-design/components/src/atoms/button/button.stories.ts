import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html`
  <mdc-button disabled=${args.disabled} .class=${args.class || undefined}> ${args.children} </mdc-button>
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-button',
  render,
  argTypes: {
    role: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    children: 'test',
    disabled: true,
  },
};
