import DashboardPage from "../../support/pages/dashboardPage";
import loginData from "../../fixtures/loginData.json";
import directoryData from "../../fixtures/directoryData.json";

describe("Dashboard - Directory Feature dengan POM", () => {
  const dashboard = DashboardPage;

  beforeEach(() => {
    dashboard.visit();
    // Login setiap sebelum test case
    dashboard.typeUsername(loginData.validUsername);
    dashboard.typePassword(loginData.validPassword);
    dashboard.clickLogin();
    dashboard.goToDirectory();
    dashboard.interceptDirectory();
  });

  it("TC-001 - Cari karyawan berdasarkan nama valid", () => {
    //sesuaikan nama didatabase terbaru
    dashboard.typeSearch(directoryData.searchName, directoryData.validName);
    dashboard.clickSearch();
    dashboard.verifyintercept();
    dashboard.verifyResult(directoryData.validName);
  });

  it("TC-002 - Cari karyawan berdasarkan nama tidak valid", () => {
    //sesuaikan nama didatabase terbaru
    dashboard.typeSearch(directoryData.invalidName);
    dashboard.clickSearch();
    dashboard.verifyintercept();
    dashboard.verifyNoResult(directoryData.invalidName);
  });

  it("TC-003 - Cari karyawan berdasarkan jabatan valid", () => {
    //sesuaikan nama didatabase terbaru
    dashboard.typeSearch(directoryData.jobTitle);
    dashboard.clickSearch();
    dashboard.verifyintercept();
    dashboard.verifyResultByJob(directoryData.jobTitle);
  });

  it("TC-004 - Cari karyawan berdasarkan lokasi valid", () => {
    //sesuaikan nama didatabase terbaru
    dashboard.typeSearch(directoryData.location);
    dashboard.clickSearch();
    dashboard.verifyintercept();
    dashboard.verifyResultByLocation(directoryData.location);
  });

  it("TC-005 - Reset filter pencarian", () => {
    //sesuaikan nama didatabase terbaru
    dashboard.typeSearch(directoryData.searchName, directoryData.validName);
    dashboard.clickSearch();
    dashboard.clickReset();
    dashboard.verifyReset();
  });

  it("TC-006 - Cari karyawan tanpa input apapun", () => {
    dashboard.clickSearch();
    dashboard.verifyintercept();
    dashboard.verifyAllResultsDisplayed();
  });
});
