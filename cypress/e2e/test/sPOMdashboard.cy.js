import DashboardPage from "../../support/pages/dashboardPage";
import loginData from "../../fixtures/loginData.json";

describe("Dashboard - Directory Feature dengan POM", () => {
  const dashboard = DashboardPage;

  beforeEach(() => {
    dashboard.visit();
  });

  it("Cari employee di Directory", () => {
    dashboard.typeUsername(loginData.validUsername);
    dashboard.typePassword(loginData.validUserPassword);
    dashboard.clickLogin();
    dashboard.goToDirectory();
    dashboard.interceptDirectory();
    dashboard.typeSearch("P", "Peter Mac Anderson"); //sesuaikan nama didatabase terbaru
    dashboard.clickSearch();
    dashboard.verifyintercept();
    dashboard.verifyResult("Peter Mac Anderson"); //sesuaikan nama didatabase terbaru
  });
});