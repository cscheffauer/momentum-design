import { html } from 'lit';
import { themes } from '../themes';

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

export const withThemeProvider = (story, context) => {
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
