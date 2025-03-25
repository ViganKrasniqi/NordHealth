import { test, expect } from '@playwright/test';
import { BasePage } from '../../../page_objects/pages/BasePage.po';

let basePage: BasePage;

test.describe('Check the first view after going to site', () => {

    test.beforeEach(async ({page}) => {
        basePage = new BasePage(page);
        basePage.goto();
        

    })

test('Check if the buttons and tittle are as it should', async ({ page }) => {
  await expect( basePage.homeTittle).toBeVisible();
  await expect(basePage.customerLoginButton).toBeVisible();
  await expect(basePage.bankManagerLoginButton).toBeVisible();
  await expect(basePage.homeButton).toBeVisible();
});

});