import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html`
  <mdc-iconprovider type="relative" url="/icons/svg">
      <mdc-icon name="${args.name}"></mdc-icon>
  </mdc-iconprovider>
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-icon',
  render,
  argTypes: {
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    name: 'accessibility-regular',
  },
};
