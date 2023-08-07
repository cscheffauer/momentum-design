import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import fixtures from './text.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    role: 'heading',
    ariaLevel: '2',
    fontType: 'momentum-h2',
    children: 'This is a test text',
  },
};
