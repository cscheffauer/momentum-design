import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';

test.beforeEach(async ({ componentsPage, theme }) => {
  await componentsPage.mount({
    html: `
    <mdc-themeprovider class="themeWrapper" theme="${theme}">
      <p>Current theme: ${theme}</p>
      <div>
        <div class="colorBox" style="background: var(--mds-color-theme-text-accent-normal);"></div>
        <div class="colorBox" style="background: var(--mds-color-theme-text-warning-normal);"></div>
        <div class="colorBox" style="background: var(--mds-color-theme-background-alert-success-normal);"></div>
      </div>
    </mdc-themeprovider>
      `,
  });
});

const testToRun = async (componentsPage: ComponentsPage, theme: string) => {
  const themeprovider = componentsPage.page.locator('mdc-themeprovider');
  const oppositeTheme = theme === 'darkWebex' ? 'lightWebex' : 'darkWebex';

  // initial check for the themeprovider be visible on the screen:
  await themeprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await steps.automaticA11yCheckStep(componentsPage);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-themeprovider-${theme}`, { element: themeprovider });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute theme should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('theme')).toBe(theme);
    });

    await test.step('corresponding theme class should be present on component by default', async () => {
      expect(await themeprovider.getAttribute('class')).toContain(`mds-theme-stable-${theme}`);
      expect(await themeprovider.getAttribute('class')).not.toContain(`mds-theme-stable-${oppositeTheme}`);
    });
  });

  /**
   * METHODS
   */
  await test.step('methods', async () => {
    await test.step('toggles theme when firing switchTheme method', async () => {
      await themeprovider.evaluate((node: any) => node.switchTheme());
      expect(await themeprovider.getAttribute('theme')).toBe(oppositeTheme);
    });
  });
};

test.describe('mdc-themeprovider', () => {
  test.use({
    theme: 'darkWebex',
  });

  test('dark', async ({ componentsPage, theme }) => {
    await testToRun(componentsPage, theme);
  });
});

test.describe('mdc-themeprovider', () => {
  test.use({
    theme: 'lightWebex',
  });

  test('light', async ({ componentsPage, theme }) => {
    await testToRun(componentsPage, theme);
  });
});
