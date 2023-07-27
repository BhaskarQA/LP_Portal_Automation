import Capitalaccount from "../../support/Pageobject/Capitalaccountpage"
import Loginpage from "../../support/Pageobject/Loginpage";
import Investorandfund from "../../fixtures/Investorandfund.json";



const capitalaccount = new Capitalaccount
const loginpage = new Loginpage();


class Common {

  setdate(year, month, date) {
    capitalaccount.getdatepicker().click()
    capitalaccount.getyearmonthdate().contains(year).click()
    capitalaccount.getyearmonthdate().contains(month).click()
    capitalaccount.getyearmonthdate().contains(date).click()
  }

  login(url, username, password) {
    cy.visit(Cypress.env(url));
    loginpage.getusername().type(username);
    loginpage.getpassword().type(password);
    loginpage.getsignin().click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    })
  }

  getApi(lpsUuid, vehicleUuid, page) {
    let lpsUuidValue;
    let vehicleUuidValue;

    if (Investorandfund.lps === "Test LP") {
      lpsUuidValue = '0409c59e-e368-497d-8c7e-e3084c996c07';
    } else if (Investorandfund.lps === "Demo LP") {
      lpsUuidValue = '1346a661-b30b-4c46-a4e3-952ef6e765e2';
    } else {
      lpsUuidValue = 'de227e1c-d729-4486-a547-f6e84c13e0e7';
    }

    if (Investorandfund.vehicle === " Join Fund 2 ") {
      vehicleUuidValue = '2801c07a-9b8e-4f17-aaae-cb50cf21c728';
    } else if (Investorandfund.vehicle === " Join Fund 1 ") {
      vehicleUuidValue = 'e782dafc-4fea-4365-b07c-12c2e7b05a61';
    } else if (Investorandfund.vehicle === " 2bX Fund ") {
      vehicleUuidValue = 'c442bcd8-eb36-4c5a-869b-e9a5d62e3214';
    } else if (Investorandfund.vehicle === " Blockchain Founders Fund ") {
      vehicleUuidValue = 'cddee0af-6759-44cd-a186-55a4b2baac33';
    } else if (Investorandfund.vehicle === " Interface Fund ") {
      vehicleUuidValue = '44f8d051-3379-46b8-8a10-4b26d459c09f';
    } else if (Investorandfund.vehicle === " Redstone Fund ") {
      vehicleUuidValue = '2ccb8516-2487-4372-9bcf-f609b9b11920';
    } else {
      vehicleUuidValue = 'bfe3ab72-4b05-48f8-b60b-7edc3ed4ee55';
    }

    const url = Cypress.env('baseurl') + "/lps/" + lpsUuidValue + "/vehicles/" + vehicleUuidValue + "/" + page;
    return url;
  }
 

}

export default Common