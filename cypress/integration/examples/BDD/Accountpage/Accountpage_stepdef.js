import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Accountpage from "../../../../support/Pageobject/Accountpage";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
const accountpage = new Accountpage()
const dashboard = new Dashboard()
const leftpanel = new Leftpanel()


// Profile Section
Given('The user landed on the Dashboard page', () => {
    cy.visit('/')
})
And('Partner logo is displayed', () => {
    leftpanel.getpatnerlogo().should('be.visible')
})

When('The user clicks the profile icon on the header', () => {
    dashboard.getprofile().click()

})
Then('The user should be navigated to the account page', () => {
    cy.url().should('include', '/account')
    leftpanel.getmenuheading().should('contain', '/ Account ')

})
And('The user verifies the following details in the profile section', () => {
    accountpage.getprofilecontainer().should('include.text',' Profile NameInterface LanguageEnglish Save ')

})
When('The User is able to enter the {string}', (Name) => {
    cy.get('[type="text"]').clear().type(Name);

})
And('User is able to choose the Interface language', () => {
    cy.get('#interface-language').click()
    cy.get('mat-option > span').eq(1).click()
})
And('User clicks on the save button', () => {
    accountpage.getbutton().contains(' Save ').should('not.be.disabled').click()
})
Then('Profile should be successfully updated', () => {
    console.log('Your Profile has been updated successfully')
})



// Password section
And('The user verifies the following details in the password section', () => {
  accountpage.getpasswordcontainer().should('include.text',' Password Current passwordNew passwordConfirm password Change password ')
})
And('User enter the {string},{string},{string} following details in the password sections', (Currentpassword,Newpassword,Confirmpassword) => {
    cy.get('input[name="current-password"]').type(Currentpassword)
    cy.get('input[name="new-password"]').type(Newpassword)
    cy.get('input[name="confirm-password"]').type(Confirmpassword)
})
And('User clicks on the change password button', () => {
    accountpage.getbutton().contains(' Change password ').should('not.be.disabled').click()
})
Then('Password should be successfully updated', () => {
    cy.log('Your Password has been updated successfully')
})



// Delete section
And('The user verifies the following details in the delete section', () => {
    accountpage.getdeleteontainer().should('include.text',' After deleting, you will no longer have access to the portal. ')
})
When('The User clicks on the Delete button', () => {
    accountpage.getbutton().contains(' Delete Account ').click()
})
Then('Account should be successfully deleted', () => {
    cy.log('Your Account has been deleted successfully')
})