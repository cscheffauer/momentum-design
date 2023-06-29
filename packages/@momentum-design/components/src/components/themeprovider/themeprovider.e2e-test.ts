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
    await test.step('attribute X should be present on component by default', async () => {
      // TODO: add test here
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should fire callback x when clicking on it', async () => {
        // TODO: add test here
      });
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        // TODO: add test here
      });

      // add additional tests here, like tabbing through several parts of the component
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire callback x when pressing y', async () => {
        // TODO: add test here
      });
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
