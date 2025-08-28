import loginData from "../../fixtures/loginData.json";
import ForgotPasswordPage from "../../support/pages/forgotPasswordPage";

describe("Forgot Password intercept dan POM", () => {
  const forgotPage = ForgotPasswordPage;

  beforeEach(() => {
    forgotPage.visit();
    forgotPage.clickForgotPassword();
  });

  it("Berhasil reset password dengan username valid", () => {
   forgotPage.typeUsername(loginData.validUsername);
   forgotPage.interceptForgot();
   forgotPage.clickReset();
   forgotPage.verifyintercept();
   forgotPage.verifyResetSuccess();
  });

  it("Gagal reset password dengan username salah", () => {
   forgotPage.typeUsername('salah');
   forgotPage.clickReset();
     cy.contains("Reset Password link sent successfully").should("not.exist");
  });
});
