import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html`
  <mdc-avatar />
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-avatar',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {},
};
