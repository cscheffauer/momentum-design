import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html`
  <mdc-iconprovider />
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-iconprovider',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {},
};
