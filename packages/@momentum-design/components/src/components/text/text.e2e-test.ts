/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';
import { VALUES } from './text.constants';
import { joinAndFilter } from './text.stories.utils';
import { FontDecoration, FontSize, FontType, FontWeight } from './text.types';
import { getAriaLevel } from './text.utils';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type: FontType;
  size: FontSize;
  weight: FontWeight;
  decoration?: FontDecoration;
  children: any;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-text 
      type="${restArgs.type}" 
      size="${restArgs.size}" 
      weight="${restArgs.weight}" 
      ${restArgs.decoration ? `decoration="${restArgs.decoration}"` : ''}
    >
      ${restArgs.children}
    </mdc-text>
      `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('mdc-text');
  await text.waitFor();
  return text;
};

test.describe('mdc-text', () => {
  for (const textObject of VALUES) {
    const uniqueName = joinAndFilter(textObject);

    test(uniqueName, async ({ componentsPage }) => {
      const textContent = 'abcdefghijklmnopqrstuvwxyz1234567890';
      const text = await setup({ componentsPage, ...textObject, children: textContent });

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
          await componentsPage.visualRegression.takeScreenshot(`mdc-text-${uniqueName}`, { element: text });
        });
      });

      /**
       * ATTRIBUTES
       */
      await test.step('attributes', async () => {
        if (['headline', 'heading'].includes(textObject.type)) {
          await test.step('attribute role=heading should be present if type is heading or headline', async () => {
            expect(await text.getAttribute('role')).toBe('heading');
          });

          await test.step('attribute aria-level should be present if type is heading or headline', async () => {
            const expectedLevel = getAriaLevel(textObject.type, textObject.size);
            expect(await text.getAttribute('aria-level')).toBe(expectedLevel);
          });
        } else {
          await test.step('attribute role=paragraph should be present if type is not heading or headline', async () => {
            expect(await text.getAttribute('role')).toBe('paragraph');
            expect(await text.getAttribute('aria-level')).toBe(null);
          });
        }
      });
    });
  }
});
