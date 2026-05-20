import { Page, expect } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    async addFirstItem () {

        await this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    }

    async addSecondItem () {

        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    }

    async openCart() {

        await this.page.locator('[data-test="shopping-cart-link"]').click();

    }
}