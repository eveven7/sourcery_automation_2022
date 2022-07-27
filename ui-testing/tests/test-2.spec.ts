import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Click body
  await page.locator('body').click();

});