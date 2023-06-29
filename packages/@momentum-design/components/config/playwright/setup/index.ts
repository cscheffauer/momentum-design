import { test as base } from '@playwright/test';
import ComponentsPage from './Components.page';

type Options = {
  /**
   * Theme to choose
   */
  theme: 'darkWebex' | 'lightWebex'
};

type Fixtures = {
  /**
   * componentsPage fixture - to be used to group momentum e2e utils
   */
  componentsPage: ComponentsPage;
};

// Extend base test by providing our fixtures based on Page Object Models
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<Fixtures & Options>({
  theme: ['darkWebex', { option: true }],

  componentsPage: async ({ page }, use, testInfo) => {
    const componentsPage = new ComponentsPage(page, testInfo);

    // navigate to the baseURL at the beginning
    await componentsPage.setup();

    // Use the fixture value in the test:
    await use(componentsPage);

    // Clean up at the end of the test:
    await componentsPage.tearDown();
  },
});

export { ComponentsPage };
