import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './iconprovider.stories.utils';
import fixtures from './iconprovider.fixtures';

const render = (args: Args) => fixtures.base(args);

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
    lengthUnit: 'em',
  },
};
