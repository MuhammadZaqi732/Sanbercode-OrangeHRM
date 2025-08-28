class loginPage {
  visit() {
    cy.visit('/auth/login')
  }
  typeUsername(username) {
    cy.get('input[name="username"]').type(username);
  }
  typePassword(password) {
    cy.get('input[name="password"]').type(password);
  }
  interceptLogin(){
  cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');
  }
  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
  verifyintercept() {
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
  }
  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
  }
  verifyLoginFailed() {
    cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
  }
  verifyUsernameFailed() {
    cy.xpath(".oxd-alert-content").should("contain.text", "Username is required");
  }
  verifyPasswordFailed() {
    cy.xpath(".oxd-alert-content").should("contain.text", "Password is required");
  }
}
export default new loginPage();