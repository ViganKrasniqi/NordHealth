import {Page, Locator} from '@playwright/test'

export class CutomerPageElements {

        readonly page: Page;
        readonly yourName: Locator;
        readonly loginButton: Locator;
        readonly welcomeName: Locator;
        readonly depositTab: Locator;
        readonly withdrawTab: Locator;
        readonly transactioTab: Locator;
        readonly amountInputField: Locator;
        readonly buttonToProccedWithTransaction: Locator;
        
    constructor(page: Page) {
        this.page = page;
        this.yourName  =  page.locator('.form-control.ng-pristine.ng-untouched.ng-valid');
        this.loginButton  =   page.getByRole('button', { name: 'Login' });
        this.welcomeName = page.locator('span.fontBig.ng-binding');
        this.depositTab = page.locator('button[ng-click="deposit()"]');
        this.withdrawTab = page.locator('button[ng-click="withdrawl()"]');
        this.transactioTab = page.locator('button[ng-click="transactions()"]');
        this.amountInputField = page.locator('input[ng-model="amount"]');
        this.buttonToProccedWithTransaction = page.locator('.btn.btn-default');
    
    }

    async chooseYourName(value: string) {
        await this.yourName.selectOption({ label: value });
}}


