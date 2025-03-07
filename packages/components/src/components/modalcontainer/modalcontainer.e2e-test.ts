/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { ModalContainerColor, ModalContainerElevation } from './modalcontainer.types';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { COLOR, DEFAULTS, ELEVATION } from './modalcontainer.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  color?: ModalContainerColor;
  elevation?: ModalContainerElevation;
  'data-role'?: string;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
       <mdc-modalcontainer
        ${restArgs.color ? `color="${restArgs.color}"` : ''}
        ${restArgs.elevation ? `elevation="${restArgs.elevation}"` : ''}
        ${restArgs['data-role'] ? `data-role="${restArgs['data-role']}"` : ''}
        data-aria-label="modal container"
        data-aria-labelledby="This is aria labelledby text"
        data-aria-describedby="This is aria describedby text"
      >
        ${restArgs.children}
      </mdc-modalcontainer>
    `,
    clearDocument: true,
  });
  const modalcontainer = componentsPage.page.locator('mdc-modalcontainer');
  await modalcontainer.waitFor();
  return modalcontainer;
};

const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const modalcontainer = await setup({ componentsPage });
  await test.step('default attributes for modalcontainer', async () => {
    await expect(modalcontainer).toHaveAttribute('color', DEFAULTS.COLOR);
    await expect(modalcontainer).toHaveAttribute('elevation', DEFAULTS.ELEVATION.toString());
    await expect(modalcontainer).toHaveAttribute('data-role', DEFAULTS.ROLE);
    await expect(modalcontainer).not.toHaveAttribute('data-aria-modal');
  });

  await test.step('ModalContainerAttributes', async () => {
    for (const color of Object.values(COLOR)) {
      await test.step(`attribute color ${color} should be present as expected`, async () => {
        await componentsPage.setAttributes(modalcontainer, { color });
        await expect(modalcontainer).toHaveAttribute('color', color);
      });
    }
    for (const elevation of Object.values(ELEVATION)) {
      await test.step(`attribut elevation ${elevation} should be present as expected`, async () => {
        await componentsPage.setAttributes(modalcontainer, { elevation: elevation.toString() });
        await expect(modalcontainer).toHaveAttribute('elevation', elevation.toString());
      });
    }
  });
};

test.use({ viewport: { width: 800, height: 800 } });

test('mdc-modalcontainer', async ({ componentsPage }) => {
  /**
   * ATTRIBUTES
   */
  await test.step('Attributes for ModalcontainerComponent', async () => {
    await test.step('attributes', async () => {
      await attributeTestCases(componentsPage);
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const modalcontainerStickerSheet = new StickerSheet(componentsPage, 'mdc-modalcontainer');
    const text = 'Lorem ipsum dolor sit amet.';
    await test.step('Elevation and Color', async () => {
      modalcontainerStickerSheet.setChildren(text);
      modalcontainerStickerSheet.setAttributes({ 'data-aria-label': 'modal' });
      await modalcontainerStickerSheet.createMarkupWithCombination({ color: COLOR, elevation: ELEVATION });
      await modalcontainerStickerSheet.mountStickerSheet();
      const container = modalcontainerStickerSheet.getWrapperContainer();

      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-modalcontainer', { element: container });
      });

      /**
      * ACCESSIBILITY
      */
      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations('modalcontainer-default');
      });
    });
  });
});
