/* eslint-disable max-len */
const constructThemeClass = (theme: string, prefix: string, separator: string): string => [prefix, theme].join(separator);

const getNextTheme = (themes: string, currentTheme: string) => {
  const themesArray = themes.split(' ');
  const currentThemeIndex = themesArray.findIndex((theme) => theme === currentTheme);
  const newThemeIndex = currentThemeIndex + 1 > themesArray.length - 1 ? 0 : currentThemeIndex + 1;
  return themesArray[newThemeIndex];
};

export { constructThemeClass, getNextTheme };
