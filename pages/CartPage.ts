import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async verifyItems() {
        
        await expect(
            this.page.locator('[data-test="inventory-item-name"]')).toContainText([
                'Sauce Labs Bolt T-Shirt',
                'Sauce Labs Bike Light'
            ]);
        }
    async checkout(){

        await this.page.locator('[data-test="checkout"]').click();
    
    }

}    