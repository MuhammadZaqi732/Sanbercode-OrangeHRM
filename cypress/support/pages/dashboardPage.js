class DashboardPage {
  visit() {
    cy.visit("/auth/login");
  }
  typeUsername(username) {
    cy.get('input[name="username"]').type(username);
  }
  typePassword(password) {
    cy.get('input[name="password"]').type(password);
  }
  clickLogin() {
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  }
  goToDirectory() {
    cy.get("aside").contains("Directory").click({ force: true });
  }
  interceptDirectory() {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0').as('viewDirectory');
  }
  typeSearch() {
    cy.get("input[placeholder='Type for hints...']").type("p");
    cy.get("div.oxd-autocomplete-dropdown").should("be.visible");
    cy.contains("div.oxd-autocomplete-option", "Peter Mac Anderson").should("be.visible").click(); //sesuaikan nama didatabase terbaru
  }
  clickSearch() {
    cy.get("button[type='submit']").click();
  }
  verifyintercept() {
    cy.wait("@viewDirectory").its("response.statusCode").should("eq", 200);
  }
  verifyResult() {
    cy.get("button[type='submit']").click();
    cy.get(".oxd-grid-item").should("be.visible");
    cy.contains(".orangehrm-directory-card-header", "Peter Mac Anderson").should("be.visible"); //sesuaikan nama didatabase terbaru
  }
}

export default new DashboardPage();