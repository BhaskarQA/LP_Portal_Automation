/// <reference types  = "Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Documents from "../../../../support/Pageobject/Documents";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Common from "../../../Common/Common";
const common = new Common;
const loginpage = new Loginpage()
const documentspage = new Documents()
const leftpanel = new Leftpanel()
const dashboard = new Dashboard()


let resbody = "";

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

Then('User should successfully be navigated to the home page', () => {
    cy.url().should('include', '/dashboard')

})


//Documents page
When('User selects the Investor from lps drop-down', () => {
    dashboard.getinvestordropdown().click()
    cy.contains(Investorandfund.lps).dblclick({ force: true })

})

And('Selects the fund from vehicle drop-down', () => {
    dashboard.getfunddropdown().click().click({ force: true })
    cy.contains(Investorandfund.vehicle).click({ force: true })

})


And('Hits the api request for the documents page', () => {
    const token = localStorage.getItem('access_token')
    const authorization = `Bearer ${token}`
    cy.request({
        method: 'GET',
        url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'documents'),
        headers: {
            authorization
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        resbody = response;
    })

})
When('User clicks on the Documents Page', () => {
    leftpanel.getdocuments().click()

})
Then('User should be sucessfully navigated to the documents page', () => {
    cy.url().should('include', '/documents')

})
And('Should contain list of folder', () => {
    documentspage.getsubfolderlist().should('have.length', resbody.body.data.length)

})
When('User click on the folder', () => {
    documentspage.getfolder().eq(1).click()

})
Then('User should successfully navigate to the subfolder page', () => {
    // capitalaccount.getchidlmenu().should('have.text', resbody.body.data[1].name) 
    leftpanel.getmenuheading().should('contain', resbody.body.data[1].name)

})
When('User clicks on the sub folder', () => {
    documentspage.getfolder().eq(0).click()

})
And('Clicks on the pdf file for preview', () => {
    documentspage.getdocumentlist().click()

})
When('User clicks on the download button on the pdf view', () => {
    cy.wait(6000)
    cy.get('iframe').click()

})
Then('The pdf must be downloaded sucessfully', () => {
    // cy.readFile('cypress/downloads/').should('exist')
    cy.get('#webviewer-1')
})