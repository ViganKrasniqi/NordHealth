import { Page, expect } from '@playwright/test';
import { BaseComponent } from '../page_elements/BaseComponent';

export class BasePage extends BaseComponent{
  
  


  async goto(path = '') {
    await this.page.goto(`${process.env.BASE_URL}${path}`);
  }

  async getTitle() {
    return this.homeTittle.textContent;
  }

  async waitForElement(locator: string) {
    await this.page.waitForSelector(locator, { state: 'visible' });
  }

  async assertUrlContains(text: string) {
    await expect(this.page.url()).toContain(text);
  }
}
