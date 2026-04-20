export class Constants {
  static readonly ENV = process.env.ENV || "production";
  static readonly BASE_URL =
    process.env.BASE_URL || "https://the-internet.herokuapp.com";
  static readonly LOGIN_URL = `${Constants.BASE_URL}/login`;
  static readonly SECURE_URL = `${Constants.BASE_URL}/secure`;
  static readonly USERNAME = process.env.USERNAME || "tomsmith";
  static readonly PASSWORD = process.env.PASSWORD || "SuperSecretPassword!";
  static readonly SUCCESS_MESSAGE = "You logged into a secure area!";
  static readonly ERROR_MESSAGE = "Your username is invalid!";
  static readonly USER_JSON_PATH = "user.json";
}
