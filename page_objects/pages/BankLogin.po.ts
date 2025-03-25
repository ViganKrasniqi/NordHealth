import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage.po';
import { BankManagerPageElements } from '../page_elements/BankManagerPageElements';


export class BankLogin extends BasePage {
  
  readonly elements = new BankManagerPageElements(this.page);

  async verifyAndAcceptAddCustomerAlert(expectedMessage: string) {
    this.page.once('dialog', async (dialog) => {
      const message = dialog.message();
      expect(message).toContain(expectedMessage);
      await dialog.accept();
    });
  }
    
  
}
