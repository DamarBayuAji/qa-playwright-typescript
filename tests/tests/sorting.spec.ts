import {  test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { testData } from '../../utils/testData';

test('Verify sorting high to low', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        testData.validUsername,
        testData.validPassword
    );

    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

    const prices = await page.locator('[data-test="inventory-item-price"]').allTextContents();

    const convertedPrices = prices.map(price =>
        Number(price.replace('$', ''))
    );

    expect(convertedPrices[0]).toBe(Math.max(...convertedPrices));

});