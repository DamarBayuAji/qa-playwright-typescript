import {  test  } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


test('Complete checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page); 

    await loginPage.goto();

    await loginPage.login(
        testData.validUsername,
        testData.validPassword
    );

    await inventoryPage.addFirstItem();
    await inventoryPage.addSecondItem();
    await inventoryPage.openCart();

    await cartPage.verifyItems();
    await cartPage.checkout();

    await checkoutPage.fillCustomerInformation(
        testData.firstName,
        testData.lastName,
        testData.postalCode
    );

    await checkoutPage.verifyTotalCalculation();
    await checkoutPage.finishCheckout();
    await checkoutPage.verifyCheckoutSuccess();

});