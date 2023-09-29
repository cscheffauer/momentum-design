import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import fixtures from './chip.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-chip',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {},
};
