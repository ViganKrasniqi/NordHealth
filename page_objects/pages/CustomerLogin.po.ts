import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage.po';
import { CutomerPageElements } from '../page_elements/CutomerPageElements';


export class CustomerLogin extends BasePage {
  
  readonly elements = new CutomerPageElements(this.page);

  async userNameInDashboard() {
    return this.elements.welcomeName.textContent();
  }

  async ammountToBeDeposited(value: string) {
    this.elements.amountInputField.fill(value);
  }
  
}
