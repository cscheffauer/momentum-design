import { html } from 'lit';
import '../../src/components/themeprovider';
import '@momentum-design/tokens/dist/css/core/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';

import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../../data/custom-elements.json';
import { themes } from './themes';

setCustomElementsManifest(customElements);

const setBodyStyle = (backgroundColor) => {
  const body = document.querySelector('body.sb-show-main');
  if (body) {
    body.style.backgroundColor = backgroundColor;
    body.style.height = '100vh';
    body.style.backgroundImage = 'url(\'/background-graphic.png\')';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'top right';
  }
};

const withThemeProvider = (story, context) => {
  const currentTheme = context.globals.theme;
  const themeObject = themes.find((theme) => theme.displayName === currentTheme);
  setBodyStyle(themeObject?.backgroundColor);

  return html`<mdc-themeprovider
    id="theme-provider"
    theme="${themeObject.name}"
    themes="mds-theme-stable-darkWebex mds-theme-stable-lightWebex"
  >
    ${story()}
  </mdc-themeprovider>`;
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      controls: { expanded: true },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: themes[0].displayName,
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'globe',
        // Array of plain string values or MenuItem shape (see below)
        items: themes.map((theme) => theme.displayName),
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
