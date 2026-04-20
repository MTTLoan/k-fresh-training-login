import { test } from "../pages/base-page";
import { user } from "../data/login.data";
import { Constants } from "../utilities/constants";

test("valid login", async ({ loginPage }) => {
  await loginPage.commonPage.goto(Constants.LOGIN_URL);
  await loginPage.login(user);
  await loginPage.assertLoginSuccessful();
});
