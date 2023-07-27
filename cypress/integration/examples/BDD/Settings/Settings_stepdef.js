import { Given, And } from "cypress-cucumber-preprocessor/steps";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Settings from "../../../../support/Pageobject/Settings";
const leftpanel =new Leftpanel()
const settings = new Settings()

Given('User lands on the Dashboard', () => {
   cy.visit(Cypress.env('qaurl'))
   cy.url().should('include', '/dashboard')
   cy.clearCookies()
   cy.clearLocalStorage()
})
And('Partners logo verified', () => {
   leftpanel.getpatnerlogo().should('be.visible')

})
Then('Page redirects successfully on Settings menu click', () => {
   leftpanel.getsettings().click()
   cy.url().should('include', '/settings')

})
When('User clicks on Users in the toggle button', () => {
   settings.getUsers().click()

})
Then('Should successfully navigate to User page', () => {
   //  cy.contains('/ Users').should('be.visible')
   

})
When('User clicks on the Username', () => {
   cy.get('.usersList > :nth-child(1)').click()

})

And('Click on fund permit checkbox', () => {
   cy.get('th > span > button > span > mat-icon').click()
   cy.get('button > span').contains('Select none').click()
 
   cy.get('[type="checkbox"]').should('not.be.checked').check({ force: true
   }).should('be.checked')
   
})
And('Should click on save button', () => {
   cy.get('.slider').click()
   cy.get('.save-button').click()

})
Then('Should successfully navigate to Investor page', () => {
   cy.contains('/ Investor').should('be.visible')

})
When('User enters {string} and {string} in the Address widget', (Company, Street) => {
   settings.getcompanyname().type(Company)
   settings.getstreetname().type(Street)

})
When('User on clicks Investor in the toggle button', () => {
   settings.getinvestor().click()

})
And('Should enter {string},{string},{string} in More widget', (VATnumber, CommercialRegisterNumber, IBAN) => {
   settings.getvatnum().type(VATnumber)
   settings.getcommregnum().type(CommercialRegisterNumber)
   settings.getiban().type(IBAN)

})
