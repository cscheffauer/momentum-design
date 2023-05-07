import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import './theme-provider.styles.css';
import { THEMES } from './constants';

const render = (args: Args) => html`
  <md-theme-provider class="themeWrapper" theme="${args.theme}">
    <p>Current theme: ${args.theme}</p>
    <div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
      <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
    </div>
  </md-theme-provider>
`;

const meta: Meta = {
  tags: ['autodocs'],
  component: 'md-theme-provider',
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
