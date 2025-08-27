describe("Fitur Login OrangeHRM", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("TC-001 - Login dengan username & password benar", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');

    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary");
    cy.url().should("include", "/dashboard");
  });

  it("TC-002 - Login gagal (username salah)", () => {
    cy.get('[name="username"]').type("salah");
    cy.get('[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
  });

  it("TC-003 - Login gagal (password salah)", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("salah");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
  });

  it("TC-004 - Login gagal (username & password salah)", () => {
    cy.get('[name="username"]').type("salah");
    cy.get('[name="password"]').type("salah");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
  });

  it("TC-005 - Username kosong, password benar", () => {
    cy.get('[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-field-error-message").should("contain.text", "Required");
  });

  it("TC-006 - Username benar, password kosong", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-field-error-message").should("contain.text", "Required");
  });

  it("TC-007 - Kedua field kosong", () => {
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-field-error-message").should("have.length", 2);
  });

  it("TC-008 - Login dengan username huruf kecil semua", () => {
    cy.get('[name="username"]').type("admin");
    cy.get('[name="password"]').type("admin123");

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('shortcuts');

    cy.get('button[type="submit"]').click();
    cy.wait("@shortcuts");
    cy.url().should("include", "/dashboard");
  });

  it("TC-009 - Password huruf besar semua", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("ADMIN123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
  });

  it("TC-010 - Login menggunakan tombol Enter", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123{enter}");

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit');

    cy.wait("@subunit");
    cy.url().should("include", "/dashboard");
  });

  it("TC-011 - Percobaan login salah 5x", () => {
    for (let i = 0; i < 5; i++) {
      cy.get('[name="username"]').clear().type("Admin");
      cy.get('[name="password"]').clear().type("salah");
      cy.get('button[type="submit"]').click();
      cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
    }
  });

  it("TC-012 - Periksa placeholder pada field", () => {
    cy.get('[name="username"]').should("have.attr", "placeholder", "Username");
    cy.get('[name="password"]').should("have.attr", "placeholder", "Password");
  });

  it("TC-013 - Uji link 'Forgot your password?'", () => {
    cy.contains("Forgot your password?").click();
    cy.url().should("include", "requestPasswordResetCode");
  });

  it("TC-014 - Kompatibilitas browser (browser berbeda)", () => {
    // lebih cocok test manual
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
