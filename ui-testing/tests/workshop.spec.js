const { test, expect } = require('@playwright/test');

test.describe('search result', () => {
test('test', async ({page}) => {
await page.goto('https://duckduckgo.com/');
await page.pause();
await page.locator('input[name=q]').fill('test');
    });
}); 

