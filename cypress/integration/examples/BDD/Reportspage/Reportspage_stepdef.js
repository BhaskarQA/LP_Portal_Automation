import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Reports from "../../../../support/Pageobject/Reportspage";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Common from "../../../Common/Common";
const common = new Common;
const loginpage = new Loginpage()
const dashboard = new Dashboard()
const reports = new Reports()
const leftpanel = new Leftpanel()
let resbody = "";




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
When('User selects the Investor from LPS drop-down', () => {
    dashboard.getinvestordropdown().click()
    cy.contains(Investorandfund.lps).dblclick({ force: true })

})

And('User selects the fund from vehicle drop-down', () => {
    dashboard.getfunddropdown().click().click({ force: true })
    cy.contains(Investorandfund.vehicle).click({ force: true })

})




// Reports page 
When('The user hits the api request for the reports', () => {
    const token = localStorage.getItem('access_token')
    const authorization = `Bearer ${token}`
    cy.request({
        method: 'GET',
        url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'quarterly-reports'),
        headers: {
            authorization
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        resbody = response;
    })
})
When('The user clicks on the Reports Page', () => {
    leftpanel.getreports().click()

})
Then('User should sucessfully navigated to the report page', () => {
    cy.url().should('include', '/reports')
    leftpanel.getmenuheading().should('contain', '/ Reports')

})
When('User selects the year from dropdown', () => {
    reports.getyeardropdown().click()
    cy.get('mat-option').contains(JSON.parse(resbody.body.data[0].year)).click()

})
And('User selects the quarter from the dropdown', () => {
    reports.getquarterdropdown().click()
    cy.get('mat-option').contains(JSON.parse(resbody.body.data[0].quarter)).click()

})

Then('The user should get the following reports for the selected quarter', () => {
    reports.getreportlist().should('have.length', resbody.body.data[0].toc.length)
    for (let i = 0; i < resbody.body.data[0].toc.length; i++) {
       cy.log(reports.getreportlist().eq(i).should('have.text', resbody.body.data[0].toc[i].index + ' ' + resbody.body.data[0].toc[i].title))
        
    }
})
When('User clicks on any of the reports', () => {
    cy.wait(6000)
    reports.getreportlist().eq(0).click()

})
Then('User should able to see the pdf for the selected report', () => {
    cy.log("able to view the pdf")

})

// When('User click on the maximize button on the PDF header', () => {
//     cy.get('#webviewer-3').click()
//     // cy.get('iframe').click()

//     // cy.get('.StatefulButton').click()

// })
// Then('The Pdf should maximize to the full viewport of the application', () => {
//     cy.get('your-pdf-viewer-selector').then(($pdfViewer) => {
//         $pdfViewer.should('be.visible')
//       });
   
// })
// When('User clicks on the minimize button on the PDF header', () => {
    

// })
// Then('The Pdf should minimize back to its previews view', () => {
    

// })





// Annually tab
And('The user clicks on the Annually tab', () => {
    leftpanel.getannual().click()

})
And('Select the year folder', () => {
    reports.getyear().click()

})
And('Choose the pdf', () => {
    cy.log("able to view the pdf")

})
Then('The user should get the following documents in annually tab', () => {
    reports.getredocumentlist().should('include.text', ' JCF1-0061_Tax_Report_2021 ')

})



