import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";

const dashboard = new Dashboard();
const loginpage = new Loginpage()
const leftpanel = new Leftpanel()




// Login
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

Then('Verify user should be successfully navigated to home page', () => {
    cy.url().should('include', '/dashboard')
   
})

When("User selects the Investor from LPS drop-down", () => {
    dashboard.getinvestordropdown().click()
    cy.contains(Investorandfund.lps).click({ force: true });
});

And("User selects the fund from vehicle drop-down", () => {
    dashboard.getfunddropdown().click()
    cy.contains(Investorandfund.vehicle).click({ force: true });
});


// Dashboard page
Then('Verify Breadcrumbs - / Dashboard', () => {
    cy.title().should('include', 'Dashboard -' + Investorandfund.vehicle + '- Join Capital LP Portal')
    leftpanel.getmenuheading().should('contain', '/ Dashboard ')


})


// Insight page 
When('The user clicks on the insights Page', () => {
    leftpanel.getinsight().click()
    cy.title().should('include', 'Insights -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumbs - / Insights / Fund Metrics', () => {
    leftpanel.getmenuheading().should('contain', '/ Insights')
    leftpanel.getchildmenuheading().should('contain', ' Fund Metrics ')

})
And('The user clicks on the Portfolio Investments tab', () => {
    leftpanel.getportfolio().click()
    cy.title().should('include', 'Insights -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumbs - / Insights / Portfolio Investments', () => {
    leftpanel.getchildmenuheading().should('contain', ' Portfolio Investments ')

})




// Capital Account page
When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()
    cy.title().should('include', 'Capital account -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumbs - / Capital Account / Overview', () => {
    leftpanel.getmenuheading().should('contain', '/ Capital Account')
    leftpanel.getchildmenuheading().should('contain', ' Overview ')

})
And('The user clicks on the Transaction tab', () => {
    leftpanel.gettransaction().click()
    cy.title().should('include', 'Capital account -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumbs - / Capital Account / Transactions', () => {
    leftpanel.getchildmenuheading().should('contain', ' Transactions ')

})

// Reports page
When('The user clicks on the Reports Page', () => {
    leftpanel.getreports().click()
    cy.title().should('include', 'Reports -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumb - Reports / year / quarter', () => {
    leftpanel.getmenuheading().should('contain', '/ Reports')
    cy.get('.year_selector>mat-select').invoke('text').then(($year) => {
        leftpanel.getchildmenuheading().should('contain', $year)
    })

    cy.get('.quarter_selector>mat-select').invoke('text').then(($quarter) => {
        leftpanel.getchildmenuheading().should('contain', $quarter)
    })

})


Then('Verify Breadcrumbs - / Reports/ Quarterly / 2022 / Q4', () => {
    leftpanel.getmenuheading().should('contain', '/ Reports / Quarterly / 2022 / Q4')
})

And('The user clicks on the Annually tab', () => {
    leftpanel.getannually().click()
})
Then('Verify Breadcrumbs - / Reports / Annually /', () => {
    leftpanel.getmenuheading().should('contain', '/ Reports / Annually')
})



// Documnets page
When('The user clicks on the Documents Page', () => {
    leftpanel.getdocuments().click()
    cy.title().should('include', 'Documents -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumbs - / Documents', () => {
    leftpanel.getmenuheading().should('contain', '/ Documents ')
})


//Settings page
When('The user clicks on the Settings Page', () => {
    leftpanel.getsettings().click()
    cy.title().should('include', 'Settings -' + Investorandfund.vehicle + '- Join Capital LP Portal')

})
Then('Verify Breadcrumbs - / Settings / User', () => {
    leftpanel.getmenuheading().should('contain', '/ Settings / Users')
})
And('The user clicks on the Investor tab', () => {
    leftpanel.getinvestor().click()
})
Then('Verify Breadcrumbs - / Settings / Investor', () => {
    leftpanel.getmenuheading().should('contain', '/ Settings / Investor')
})