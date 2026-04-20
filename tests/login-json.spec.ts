import { test } from "../pages/base-page";
import { getEnvUser } from "../data/user.loader";
import { Constants } from "../utilities/constants";

test("valid login with env-specific user", async ({ loginPage }) => {
  const envUser = getEnvUser();
  await loginPage.commonPage.goto(Constants.LOGIN_URL);
  await loginPage.login(envUser);
  await loginPage.assertLoginSuccessful();
});
