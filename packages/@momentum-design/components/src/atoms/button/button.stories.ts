import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html`
  <md-button .disabled=${args.disabled} .class=${args.class || undefined}> ${args.children} </md-button>
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'md-button',
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
  },
};
