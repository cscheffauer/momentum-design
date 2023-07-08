import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html` <mdc-icon name="${args.name}" scale="${args.scale}"></mdc-icon> `;

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
  args: {
    name: 'accessibility-regular',
    scale: 1,
  },
};
