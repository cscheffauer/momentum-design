import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { DEFAULTS } from './avatar.constants';
import fixtures from './avatar.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-avatar',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    // eslint-disable-next-line max-len
    src: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80',
    scale: DEFAULTS.SCALE,
    type: DEFAULTS.TYPE,
  },
};
