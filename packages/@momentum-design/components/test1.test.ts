import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:5173/index.html');

  // create a locator
  const getStarted = page.getByRole('button', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});