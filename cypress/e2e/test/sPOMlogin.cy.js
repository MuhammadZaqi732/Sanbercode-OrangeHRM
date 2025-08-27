import LoginPage from "../../support/pages/loginPage";
import loginData from "../../fixtures/loginData.json";

describe("Login menggunakan POM + Fixtures", () => {
  const loginPage = LoginPage;

  beforeEach(() => {
    loginPage.visit();
  });

  it("Login berhasil dengan data valid", () => {
    loginPage.typeUsername(loginData.validUsername);
    loginPage.typePassword(loginData.validUserPassword);
    loginPage.clickLogin();
    loginPage.verifyLoginSuccess();
  });

  it("Login gagal dengan password salah", () => {
    loginPage.typeUsername(loginData.invalidUsername);
    loginPage.typePassword(loginData.invalidPassword);
    loginPage.clickLogin();
    loginPage.verifyLoginFailed();
  });
});
