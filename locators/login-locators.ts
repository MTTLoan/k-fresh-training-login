import { Locator, Page } from "@playwright/test";
import { CommonLocators } from "./common-locators";

export class LoginLocators extends CommonLocators {
  constructor(page: Page) {
    super(page);
    this.initializeLocators();
  }

  usernameInput!: Locator;
  passwordInput!: Locator;

  initializeLocators() {
    super.initializeLocators();
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.locator("#password");
  }
}
