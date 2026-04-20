import { Locator, Page } from "@playwright/test";

export class CommonLocators {
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.initializeLocators();
  }

  setPage(newPage: Page) {
    this.page = newPage;
    this.initializeLocators();
  }

  getPage() {
    return this.page;
  }

  submitButton!: Locator;
  saveButton!: Locator;
  successMessage!: Locator;
  errorMessage!: Locator;
  clickButton!: Locator;

  initializeLocators() {
    this.submitButton = this.page.locator('button[type="submit"]');
    this.saveButton = this.page.locator('button[type="save"]');
    this.successMessage = this.page.locator(".flash.success");
    this.errorMessage = this.page.locator(".flash.error");
    this.clickButton = this.page.locator("button");
  }
}
