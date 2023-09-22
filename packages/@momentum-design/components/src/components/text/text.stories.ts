import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import fixtures from './text.fixtures';

const render = (args: Args) => fixtures.base(args);

const meta: Meta = {
  tags: ['autodocs'],
  component: 'mdc-text',
  render,
  argTypes: {
    type: {
      control: 'radio',
      options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'heading-7',
        'body-large',
        'body-regular',
        'body-small',
        'image-title',
        'label',
      ],
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
