import type { Preview, StoryContext } from "@storybook/web-components";
import { html } from "lit";
import "../src/atoms/theme-provider";
import "./themes/dark-stable.css";
import "./themes/light-stable.css";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../data/custom-elements.json";
import { themes } from "./themes";

setCustomElementsManifest(customElements);

const setBodyBackground = (background: string) => {
  const body = document.querySelector("body.sb-show-main") as HTMLElement;
  if (body) {
    body.style.background = background;
  }
};

const withThemeProvider = (story, context: StoryContext) => {
  const currentTheme = context.globals.theme;
  const themeObject = themes.find((theme) => theme.name === currentTheme);
  setBodyBackground(themeObject?.value!);

  return html`<md-theme-provider
    id="theme-provider"
    theme="${currentTheme}"
    themes="darkWebex lightWebex"
    class-prefix="mds-theme-stable"
    class-separator="-"
  >
    ${story()}
  </md-theme-provider>`;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
      description: "Global theme for components",
      defaultValue: themes[0].name,
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "globe",
        // Array of plain string values or MenuItem shape (see below)
        items: themes.map((theme) => theme.name),
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
