# Playwright Test Automation Project

## 📁 Project Structure
```
root/
│   ├─ page_objects/
│   │   ├─ page_elements/
│   │   │   ├─ BankManagerPageElements.ts
│   │   │   ├─ BaseComponent.ts
│   │   │   ├─ CustomerPageElements.ts
│   │   ├─ pages/
│   │       ├─ BankLogin.po.ts
│   │       ├─ CustomerLogin.po.ts
│   │       ├─ BasePage.po.ts
│   ├─ tests/
│   ├─ .env
│   ├─ playwright.config.ts
│   ├─ package.json
```

## ✅ Project Layers Explained:

### ➡️ `page_objects/page_elements`
- **BankManagerPageElements.ts** — Contains selectors/locators for the Bank Manager page.
- **BaseComponent.ts** — Common components and reusable locators.
- **CustomerPageElements.ts** — All element locators for the customer pages.

### ➡️ `page_objects/pages`
- **BasePage.po.ts** — Base class with common actions (goto, assertUrlContains, waitForElement, etc.).
- **BankLogin.po.ts** — Page Object containing actions for bank manager login.
- **CustomerLogin.po.ts** — Page Object containing actions and flows for customer login.

### ➡️ `tests/`
- Contains all test files (organized by feature or smoke/regression).

### ➡️ `.env`
- Stores environment variables like `BASE_URL`, `USERNAME`, `PASSWORD`, etc.

## ⚙️ How to set up
1. Clone the repo
2. Install dependencies:
```
npm install
```
3. Install Playwright browsers:
```
npx playwright install
```
4. Set up your `.env` file:
```
BASE_URL=https://your-site-url.com
```

## 🚀 How to run tests
- To run all tests:
```
npx playwright test
```
- To run a specific test:
```
npx playwright test tests/your-test-file.spec.ts
```
- To open Playwright Test UI:
```
npx playwright test --ui
```

## ✅ Recommendations:
- Keep all locators in `page_elements` for clean maintenance.
- Keep business logic inside `pages`.
- Write short, scenario-focused tests that use the business layer.

## 🛠️ Tech stack
- Playwright
- TypeScript
- dotenv for environment variables

## 📖 Author / Maintainer
- Vigan Krasniqi

