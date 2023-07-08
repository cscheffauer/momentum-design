import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './themeprovider.stories.styles.css';
import { THEMES } from './themeprovider.constants';
import './themeprovider.stories.utils';
import fixtures from './themeprovider.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-themeprovider',
  render,
  argTypes: {
    theme: {
      options: THEMES,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    theme: THEMES[0],
  },
};
