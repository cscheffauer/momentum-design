import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { VALUES } from './text.constants';
import fixtures from './text.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  argTypes: {
    type: {
      control: 'radio',
      options: VALUES.TYPE,
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: 'heading-1',
    children: 'This is a test text',
  },
};
