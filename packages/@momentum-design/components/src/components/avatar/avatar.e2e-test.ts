import { test } from "../../../config/playwright/setup";

test.describe("mdc-avatar", () => {
  test.beforeEach(async ({ componentsPage }) => {
    await componentsPage.mount({
      html: `
        <mdc-avatar/>
      `,
    });
  });

  /**
   * ACCESSIBILITY
   */
  test.describe("accessibility", () => {
    test("passes automatic accessibility check without violations", async ({ componentsPage }) => {
      await test.step("checkForA11yViolations", async () => {
        await componentsPage.accessibility.checkForA11yViolations();
      });
    });
  });

  /**
   * VISUAL REGRESSION
   */
  test.describe("visual-regression", () => {
    test("matches basic snapshot", async ({ componentsPage }) => {
      // TODO: add visual regression here
      await componentsPage.page.pause();
    });
  });

  /**
   * ATTRIBUTES
   */
  test.describe("attributes", () => {
    test("attribute X should be present on component by default", async ({ componentsPage }) => {
      // TODO: add test here
      await componentsPage.page.pause();
    });
  });

  /**
   * ATTRIBUTES
   */
  test.describe("interactions", () => {
    test.describe("mouse/pointer", () => {
      test("component should fire callback x when clicking on it", async ({ componentsPage }) => {
        // TODO: add test here
        await componentsPage.page.pause();
      });
    });

    test.describe("focus", () => {
      test("component should be focusable with tab", async ({ componentsPage }) => {
        // TODO: add test here
        await componentsPage.page.pause();
      });

      // add additional tests here, like tabbing through several parts of the component
    });

    test.describe("keyboard", () => {
      test("component should fire callback x when pressing", async ({ componentsPage }) => {
        // TODO: add test here
        await componentsPage.page.pause();
      });
    });
  });
});
