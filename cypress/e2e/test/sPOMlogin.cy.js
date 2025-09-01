import LoginPage from "../../support/pages/loginPage";
import loginData from "../../fixtures/loginData.json";

describe("Login menggunakan POM + Fixtures", () => {
  const loginPage = LoginPage;

  beforeEach(() => {
    loginPage.visit();
  });

  it("TC-001 - Login dengan username & password benar", () => {
    loginPage.typeUsername(loginData.validUsername);
    loginPage.typePassword(loginData.validPassword);
    loginPage.interceptLogin();
    loginPage.clickLogin();
    loginPage.verifyIntercept();
    loginPage.verifyLoginSuccess();
  });

  it("TC-002 - Login gagal (username salah)", () => {
    loginPage.typeUsername(loginData.invalidUsername);
    loginPage.typePassword(loginData.invalidPassword);
    loginPage.clickLogin();
    loginPage.verifyLoginFailed();
  });

  it("TC-003 - Login gagal (password salah)", () => {
    loginPage.typeUsername(loginData.validUsername);
    loginPage.typePassword(loginData.invalidPassword);
    loginPage.clickLogin();
    loginPage.verifyLoginFailed();
  });

   it("TC-004 - Login gagal (username & password salah)", () => {
     loginPage.typeUsername(loginData.invalidUsername);
     loginPage.typePassword(loginData.invalidPassword);
     loginPage.clickLogin();
     loginPage.verifyLoginFailed();
   });

   it("TC-005 - Username kosong, password benar", () => {
     loginPage.typePassword(loginData.validPassword);
     loginPage.clickLogin();
     loginPage.verifyUsernameFailed();
   });

   it("TC-006 - Username benar, password kosong", () => {
     loginPage.typeUsername(loginData.validUsername);
     loginPage.clickLogin();
     loginPage.verifyPasswordFailed();
   });

   it("TC-007 - Kedua field kosong", () => {
     loginPage.clickLogin();
     loginPage.verifyRequiredField();
   });

   it("TC-008 - Login dengan username huruf kecil semua", () => {
     loginPage.typeUsername(loginData.lowercaseUsername);
     loginPage.typePassword(loginData.validPassword);
     loginPage.interceptLogin();
     loginPage.clickLogin();
     loginPage.verifyIntercept();
     loginPage.verifyLoginSuccess();
   });

   it("TC-009 - Password huruf besar semua", () => {
     loginPage.typeUsername(loginData.validUsername);
     loginPage.typePassword(loginData.uppercasePassword);
     loginPage.clickLogin();
     loginPage.verifyLoginFailed();
   });

   it("TC-010 - Login menggunakan tombol Enter", () => {
     loginPage.typeUsername(loginData.validUsername);
     loginPage.typePassword(loginData.validPassword);
     loginPage.interceptLogin();
     loginPage.pressEnterLogin();
     loginPage.verifyIntercept();
     loginPage.verifyLoginSuccess();
   });

   it("TC-011 - Percobaan login salah 5x", () => {
     for (let i = 0; i < 5; i++) {
       loginPage.typeUsername(loginData.validUsername);
       loginPage.typePassword(loginData.invalidPassword);
       loginPage.clickLogin();
       loginPage.verifyLoginFailed();
     }
   });

   it("TC-012 - Periksa placeholder pada field", () => {
     loginPage.verifyPlaceholder();
   });

   it("TC-013 - Uji link 'Forgot your password?'", () => {
     loginPage.clickForgotPassword();
     cy.url().should("include", "requestPasswordResetCode");
   });
});
