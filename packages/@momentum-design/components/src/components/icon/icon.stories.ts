import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import fixtures from './icon.fixtures';

const render = (args: Args) => fixtures.base(args);
const renderAccessibility = (args: Args) => fixtures.accessibility(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-icon',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    name: 'accessibility-regular',
    scale: 1,
  },
};

export const Accessibility: StoryObj = {
  render: renderAccessibility,
  args: {
    name: 'accessibility-regular',
    scale: 1,
    role: 'graphics-document',
    'aria-label': 'This is the accessibility icon',
  },
};
