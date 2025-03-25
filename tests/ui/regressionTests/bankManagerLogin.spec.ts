import { test, expect } from '@playwright/test';
import { BankLogin } from '../../../page_objects/pages/BankLogin.po';

let bankLogin: BankLogin;

test.describe('Customer dashboard and its features', () => {

    test.beforeEach(async ({page}) => {

        bankLogin = new BankLogin(page);
        bankLogin.goto(); 
    })

test('Check if I can create a bank manager', async ({ page }) => {

    await bankLogin.bankManagerLoginButton.click();
    await bankLogin.elements.addCustomerButton.click();
    await expect(bankLogin.elements.firstName).toBeVisible();
    await bankLogin.elements.firstName.fill("vigan");
    await bankLogin.elements.lastName.fill("krasniqi");
    await bankLogin.elements.postCode.fill("10000");
    await bankLogin.verifyAndAcceptAddCustomerAlert('Customer added successfully');
    await bankLogin.elements.addCustomerSubmit.click();
   
    
});
});