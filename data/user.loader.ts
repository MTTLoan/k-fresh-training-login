import { resolve } from "path";
import { readJsonFile } from "../utilities/jsonHandling";
import { User } from "../models/User";
import { Constants } from "../utilities/constants";
import { ENV } from "../models/index";

const userJsonPath = resolve(__dirname, Constants.USER_JSON_PATH);
const usersByEnv: Record<string, User> = readJsonFile(userJsonPath);

/**
 *  Retrieves the user object for the specified environment from the JSON file.
 * @param env
 * @returns The user object for the specified environment
 */
export function getEnvUser(
  env: string = (process.env.ENV as ENV) || "production",
): User {
  return usersByEnv[env] ?? usersByEnv.production;
}
