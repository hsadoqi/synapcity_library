import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.locator('div').filter({ hasText: 'Welcome' }).click({
        button: 'right',
    })
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible()
})
