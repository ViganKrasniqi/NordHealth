import {Page, Locator} from '@playwright/test'

export class BankManagerPageElements {

        readonly page: Page;
        readonly addCustomerButton: Locator;
        readonly openAccountButton: Locator;
        readonly customerButton: Locator;
        readonly firstName: Locator;
        readonly lastName: Locator;
        readonly postCode: Locator;
        readonly addCustomerSubmit: Locator;
        readonly buttonToProccedWithTransaction: Locator;
        readonly cutomerSelection: Locator;
        readonly currency: Locator;
        readonly process: Locator;
        
    constructor(page: Page) {
        this.page = page;
        this.addCustomerButton  = page.locator('button[ng-click="addCust()"]');
        this.openAccountButton  = page.locator('button[ng-click="openAccount()"]');
        this.customerButton = page.locator('button[ng-click="showCust()"]');
        this.firstName = page.locator('input[ng-model="fName"]');
        this.lastName = page.locator('input[ng-model="lName"]');
        this.postCode = page.locator('input[ng-model="postCd"]');
        this.currency = page.locator('select[ng-model="currency"]');
        this.cutomerSelection = page.locator('select[ng-model="custId"]');
        this.addCustomerSubmit = page.locator('.btn.btn-default');
        this.process = page.getByRole('button', { name: 'Process' });
    }
}
 

