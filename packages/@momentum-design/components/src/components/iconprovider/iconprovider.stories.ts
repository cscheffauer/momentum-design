import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import './iconprovider.stories.utils';

const render = (args: Args) => html`
  <mdc-iconprovider url="${args.url}" file-extension="${args.fileExtension}">
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-iconprovider',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    url: '/test',
    fileExtension: 'svg',
  },
};
