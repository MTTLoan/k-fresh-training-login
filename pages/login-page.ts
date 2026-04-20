import test, { Page, expect } from "@playwright/test";
import { LoginLocators } from "../locators/login-locators";
import { Constants } from "../utilities/constants";
import { User } from "../models/User";
import { CommonPage } from "./common-page";
import { step } from "../utilities/logging";

export class LoginPage extends LoginLocators {
  commonPage: CommonPage;
  constructor(page: Page) {
    super(page);
    this.commonPage = new CommonPage(page);
  }
  /**
   *  Logs in using the provided user credentials.
   * @param user
   */
  @step("Logging in with user credentials")
  async login(user: User) {
    await test.step(`Logging in with username: ${user.username}`, async () => {
      await this.usernameInput.fill(user.username);
      await this.passwordInput.fill(user.password);
      await this.submitButton.click();
    });
  }

  /**
   * Asserts that the login was successful by checking the URL and the success message.
   */
  @step("Asserting login was successful by checking URL and success message")
  async assertLoginSuccessful() {
    await test.step("Asserting login was successful", async () => {
      await expect(this.page).toHaveURL(Constants.SECURE_URL);
      await expect(this.getSuccessMessage()).toContainText(
        "You logged into a secure area!",
      );
    });
  }

  getSuccessMessage() {
    return this.successMessage;
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}
