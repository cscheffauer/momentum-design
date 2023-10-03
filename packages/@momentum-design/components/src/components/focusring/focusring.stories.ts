import type { Meta, StoryObj } from '@storybook/web-components';
import '.';
import fixtures from './focusring.fixtures';

const render = () => fixtures.base();

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-focusring',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {},
};
