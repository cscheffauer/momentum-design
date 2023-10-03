import { test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';

test.beforeEach(async ({ componentsPage }) => {
  await componentsPage.mount({
    html: `
    <div style="display: flex; gap: 1rem;">
      <button style="position: relative; outline: none;">
        Focus me!
        <mdc-focusring data-test="focus-ring-1"></mdc-focusring>
      </button>
      <button style="position: relative; outline: none; border-radius: 100px;">
        X
        <mdc-focusring data-test="focus-ring-2"></mdc-focusring>
      </button>
    </div>
      `,
  });
});

test('mdc-focusring', async ({ componentsPage }) => {
  const focusRingFocusMe = componentsPage.page.locator('mdc-focusring[data-test="focus-ring-1"]');
  const focusRingX = componentsPage.page.locator('mdc-focusring[data-test="focus-ring-2"]');

  // initial check for both focusring be hidden on the screen (focus rings are mounted):
  await focusRingFocusMe.waitFor({ state: 'hidden' });
  await focusRingX.waitFor({ state: 'hidden' });

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
    await test.step('matches screenshot of first focus ring', async () => {
      const focusMeButton = componentsPage.page.getByText('Focus me!');
      await focusMeButton.focus();
      await componentsPage.visualRegression.takeScreenshot('mdc-focusring-button', { element: focusMeButton });
    });

    await test.step('matches screenshot of second focus ring', async () => {
      const xButton = componentsPage.page.getByText('X');
      await xButton.focus();
      await componentsPage.visualRegression.takeScreenshot('mdc-focusring-button-round', { element: xButton });
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
});
