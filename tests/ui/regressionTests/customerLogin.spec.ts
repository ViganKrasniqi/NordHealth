import { test, expect } from '@playwright/test';
import { CustomerLogin } from '../../../page_objects/pages/CustomerLogin.po';

let customerLogin: CustomerLogin;

test.describe('Customer dashboard and its features', () => {

    test.beforeEach(async ({page}) => {

        customerLogin = new CustomerLogin(page);
        customerLogin.goto(); 
    })

test('Check if I can deposit and withdraw an amount', async ({ page }) => {

    await expect(customerLogin.customerLoginButton).toBeVisible();
    await customerLogin.customerLoginButton.click();
    await expect(customerLogin.elements.yourName).toBeVisible();
    await customerLogin.elements.chooseYourName('Harry Potter');
    await customerLogin.elements.loginButton.click();
    await expect(customerLogin.elements.welcomeName).toBeVisible();
    expect(await customerLogin.userNameInDashboard()).toBe('Harry Potter');
    await expect(customerLogin.elements.depositTab).toBeVisible();
    await customerLogin.elements.depositTab.click()
    await customerLogin.ammountToBeDeposited('223');
    await customerLogin.elements.buttonToProccedWithTransaction.click();
    await customerLogin.elements.withdrawTab.click()
    await customerLogin.ammountToBeDeposited('223');
    await customerLogin.elements.buttonToProccedWithTransaction.click();

});





});