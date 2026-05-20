import {  test  } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test('Login with valid credential', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        testData.validUsername,
        testData.validPassword
    );

    await loginPage.verifyLoginSuccess();

});

test('Login with invalid credential', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        testData.invalidUsername,
        testData.validPassword
    );

    await loginPage.verifyLoginError();

});