import { Page, expect } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {


        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
        await this.page.locator('[data-test="continue"]').click();
    }

    async verifyTotalCalculation() {

        const itemTotalText = await this.page.locator('[data-test="subtotal-label"]').textContent();
        const taxText = await this.page.locator('[data-test="tax-label"]').textContent();
        const totalText = await this.page.locator('[data-test="total-label"]').textContent();

        const itemTotal = Number(
            itemTotalText?.replace(/[^0-9.]/g, '')
        );

        const tax = Number(
            taxText?.replace(/[^0-9.]/g, '')
        );

        const total = Number(
            totalText?.replace(/[^0-9.]/g, '')
        );

        expect(itemTotal + tax).toBeCloseTo(total,2);
    }

    async finishCheckout() {
        
        await this.page.locator('[data-test="finish"]').click();

    }

    async verifyCheckoutSuccess() {

        await expect(this.page.locator('[data-test="checkout-complete-container"]'))
        .toContainText(
            'Thank you for your order!'
        );
    }
}