import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { DEFAULTS } from './badge.constants';
import fixtures from './badge.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-badge',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'accessibility-regular',
  },
};
