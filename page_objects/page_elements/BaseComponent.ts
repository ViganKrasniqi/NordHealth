import {Page, Locator} from '@playwright/test'

export abstract class BaseComponent {


        readonly page: Page;
        readonly homeButton: Locator;
        readonly homeTittle: Locator;
        readonly customerLoginButton: Locator;
        readonly bankManagerLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('button').filter({ hasText: 'Home'});
        this.homeTittle = page.locator('strong.mainHeading');
        this.customerLoginButton = page.locator('button').filter({ hasText: 'Customer Login'});
        this.bankManagerLoginButton = page.locator('button').filter({ hasText: 'Bank Manager Login'});

    }
}