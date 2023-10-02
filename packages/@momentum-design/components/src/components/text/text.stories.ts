import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { VALUES } from './text.constants';
import fixtures from './text.fixtures';
import { joinAndFilter } from './text.stories.utils';

const firstObject = VALUES[0];
const render = ({ textObject, ...restArgs }: Args) => {
  const [type, size, weight, decoration] = textObject.split('-');
  return fixtures.base({ type, size, weight, decoration, ...restArgs });
};

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  argTypes: {
    textObject: {
      control: 'radio',
      options: VALUES.map((obj) => joinAndFilter(obj)),
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    textObject: [firstObject.type, firstObject.size, firstObject.weight, firstObject.decoration]
      .filter((item) => item)
      .join('-'),
    children: 'This is a test text',
  },
};
