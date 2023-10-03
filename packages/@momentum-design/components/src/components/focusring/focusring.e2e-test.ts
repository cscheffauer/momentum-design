import { expect } from '@playwright/test';
import { test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';

test.beforeEach(async ({ componentsPage }) => {
  await componentsPage.mount({
    html: `
    <div style="display: flex; gap: 1rem; padding: 50px;">
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

  const focusMeButton = componentsPage.page.getByText('Focus me!');
  const xButton = componentsPage.page.getByText('X');

  // initial check for both focusring be hidden on the screen (focus rings are mounted):
  await focusRingFocusMe.waitFor({ state: 'hidden' });
  await focusRingX.waitFor({ state: 'hidden' });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility unfocused', async () => {
    await steps.automaticA11yCheckStep(componentsPage);
  });

  await test.step('accessibility focused', async () => {
    await focusMeButton.focus();
    await steps.automaticA11yCheckStep(componentsPage);
    await focusMeButton.blur();
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot with no element focused', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-focusring-button-not-focused');
    });

    await test.step('matches screenshot of first focus ring', async () => {
      await focusMeButton.focus();
      await componentsPage.visualRegression.takeScreenshot('mdc-focusring-button');
    });

    await test.step('matches screenshot of second focus ring', async () => {
      await xButton.focus();
      await componentsPage.visualRegression.takeScreenshot('mdc-focusring-button-round');
    });

    await test.step('matches screenshot with no element focused', async () => {
      // to make sure blur works as expected
      await xButton.blur();
      await componentsPage.visualRegression.takeScreenshot('mdc-focusring-button-not-focused');
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component if unfocused', async () => {
      expect(await focusRingFocusMe.getAttribute('aria-hidden')).toBe('true');
      expect(await focusRingFocusMe.getAttribute('visible')).toBe(null);
    });

    await test.step('attributes should be present on component if focused', async () => {
      await focusMeButton.focus();
      expect(await focusRingFocusMe.getAttribute('aria-hidden')).toBe('true');
      // to be '' makes sure the boolean attribute visible is set (this is due to how getAttribute works)
      expect(await focusRingFocusMe.getAttribute('visible')).toBe('');
    });
  });
});
