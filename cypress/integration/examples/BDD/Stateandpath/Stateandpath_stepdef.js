/// <reference types  = "Cypress" />
import { Given, When, And, Then, But } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";
const loginpage = new Loginpage()
const dashboard = new Dashboard()
let resbody;



//Login
Given('The user lands on the authentication page', () => {
    cy.visit('/')

})

When('User enter the user name or mailid and password', () => {
    loginpage.getusername().type(Credential.Test.username)
    loginpage.getpassword().type(Credential.Test.password)
})

And('Clicks on the sign in button', () => {
    loginpage.getsignin().click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

And("User hits the api request for base data", () => {
    const token = localStorage.getItem("access_token");
    const authorization = `Bearer ${token}`;
    cy.request({
        method: "GET",
        url: Cypress.env("baseurl") + "/base-data",
        headers: {
            authorization,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        resbody = response;
    });
  
});

// (empty) or / 
When('The user hits the url with {string} as empty path or /', (path) => {
    cy.visit('/' + path)

})

Then('User should navigate to the first lp, first vechile, first accessible menu', () => {
    const a = resbody.body.data.lps.sort((a, b) => a.name.localeCompare(b.name));
    const firstLpId = a[0].id;
    const b = resbody.body.data.vehicles.sort((a, b) => a.name.localeCompare(b.name));
    const firstVehicleId = b[0].id;
   
    cy.url().should('include', firstLpId).and('include', firstVehicleId) .and('include', 'dashboard');
})

// & /lp or /lp/
When('The user hits the url with {string} as /lp or /lp/', (path) => {
    cy.visit('/' + path)

})


// /something invalid
When('The user hits the url with {string} as /something invalid', (path) => {
    cy.visit('/' + path)

})
Then('User should able to see the pop up', () => {
    cy.get('div.dialog-container').invoke('text').should('include', 'The requested page is invalid or inaccessible.')
    .then(() => {
        cy.get('div.dialog-container').find('button').click();
      });

})

// /lp/invalid LP ID
When('The user hits the url with {string} as /lp with invalid LP ID', (path) => {
    cy.visit('/' + path)

})


//  /lp/valid LP ID
When('The user hits url with {string} as /lp with valid LP ID', (path) => {
    cy.visit('/' + path)

})


Then('User should navigate to the requested lp, first vechile of request lp, first accessible menu', () => {
    cy.url().should('include', '0409c59e-e368-497d-8c7e-e3084c996c07').and('include','e782dafc-4fea-4365-b07c-12c2e7b05a61').and('include','dashboard')

})

//  /lp/valid LP ID/vehicle
When('The user hits the url with {string} as /lp with valid LP ID with vehicle', (path) => {
    cy.visit('/' + path)

})

//  /lp/valid LP ID/something invalid
When('The user hits the url with {string} as /lp with valid LP ID with something invalid', (path) => {
    cy.visit('/' + path)

})

// /lp/valid LP ID/vehicle/invalid vehicle ID
When('The user hits the url with {string} as /lp with valid LP ID with vehicle with invalid vehicle ID', (path) => {
    cy.visit('/' + path)

})

// /lp/{valid LP ID}/vehicle/{valid vehicle ID}
When('The user hits the url with {string} as /lp with valid LP ID with vehicle with valid vehicle ID', (path) => {
    cy.visit('/' + path)

})
Then('User should navigate to the requested lp, requested vechile, first accessible menu', () => {
    cy.url().should('include', '0409c59e-e368-497d-8c7e-e3084c996c07').and('include','2801c07a-9b8e-4f17-aaae-cb50cf21c728').and('include','dashboard')

})

//  /lp/{valid LP ID}/vehicle/{valid vehicle ID}/{valid menu item}
When('The user hits the url with {string} as /lp with valid LP ID with vehicle with valid vehicle ID with valid menu item', (path) => {
    cy.visit('/' + path)

})

Then('User should navigate to the requested lp, requested vechile, requested menu', () => {
    cy.url().should('include', '0409c59e-e368-497d-8c7e-e3084c996c07').and('include','2801c07a-9b8e-4f17-aaae-cb50cf21c728').and('include','documents')

})


//  /lp/{valid LP ID}/vehicle/{valid vehicle ID}/{invalid menu item}
When('The user hits the url with {string} as /lp with valid LP ID with vehicle with valid vehicle ID with invalid menu item', (path) => {
    cy.visit('/' + path)

})

//  /lp/{valid LP ID}/vehicle/{valid vehicle ID}/{invalid menu item}
When('The user hits the url with {string} as /lp with valid LP ID with vehicle with valid vehicle ID with valid menu item and invalid parameters', (path) => {
    cy.visit('/' + path)

})

Then('User should navigate to the requested lp, requested vechile, requested menu, default parameters', () => {
    cy.url().should('include', '0409c59e-e368-497d-8c7e-e3084c996c07').and('include','2801c07a-9b8e-4f17-aaae-cb50cf21c728').and('include','capital-account/overview')

})
