import { test, expect } from '@playwright/test';
import { CustomerLogin } from '../../../page_objects/pages/CustomerLogin.po';
import { BankLogin } from '../../../page_objects/pages/BankLogin.po';

let customerLogin: CustomerLogin;
let bankLogin: BankLogin;

test.describe('Add a user and Login to it and add and withdraw amount from it', () => {

    test.beforeEach(async ({page}) => {

        customerLogin = new CustomerLogin(page);
        bankLogin = new BankLogin(page);
        customerLogin.goto(); 
    })

test('Check if I can deposit and withdraw an amount', async ({ page }) => {

    await expect(bankLogin.bankManagerLoginButton).toBeVisible();
    await bankLogin.bankManagerLoginButton.click();
    await expect(bankLogin.elements.addCustomerButton).toBeVisible();
    await bankLogin.elements.addCustomerButton.click();
    await bankLogin.elements.firstName.fill("vigan");
    await bankLogin.elements.lastName.fill("krasniqi");
    await bankLogin.elements.postCode.fill("10000");
    await bankLogin.verifyAndAcceptAddCustomerAlert('Customer added successfully');
    await bankLogin.elements.addCustomerSubmit.click();

    await bankLogin.elements.openAccountButton.click();
    await expect(bankLogin.elements.cutomerSelection).toBeVisible();

    await bankLogin.elements.cutomerSelection.selectOption({label: "vigan krasniqi"});
    await bankLogin.elements.currency.selectOption({label: 'Dollar'});
    await bankLogin.elements.process.click();
    await bankLogin.verifyAndAcceptAddCustomerAlert('Account created successfully');

    await customerLogin.homeButton.click();
    await expect(customerLogin.customerLoginButton).toBeVisible();
    await customerLogin.customerLoginButton.click();
    await expect(customerLogin.elements.yourName).toBeVisible();
    await customerLogin.elements.chooseYourName('vigan krasniqi');
    await customerLogin.elements.loginButton.click();
    await expect(customerLogin.elements.welcomeName).toBeVisible();
    expect(await customerLogin.userNameInDashboard()).toBe('vigan krasniqi');
    await expect(customerLogin.elements.depositTab).toBeVisible();
    await customerLogin.elements.depositTab.click()
    await customerLogin.ammountToBeDeposited('223');
    await customerLogin.elements.buttonToProccedWithTransaction.click();
    await customerLogin.elements.withdrawTab.click()
    await customerLogin.ammountToBeDeposited('223');
    await customerLogin.elements.buttonToProccedWithTransaction.click();
});





});