/// <reference types  = "Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Capitalaccount from "../../../../support/Pageobject/Capitalaccountpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Credential from "../../../../fixtures/Credential.json";
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Common from "../../../Common/Common";
import Datequarter from "../../../../fixtures/Datequarter.json"

const common = new Common()
const loginpage = new Loginpage()
const dashboard = new Dashboard()
const capitalaccount = new Capitalaccount()
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
    cy.contains(Investorandfund.lps).click({ force: true })

})
And('User selects the fund from vehicle drop-down', () => {
    dashboard.getfunddropdown().click().click({ force: true })
    cy.contains(Investorandfund.vehicle).click({ force: true })

})



// IFRS vertical
And("User hits the api request for the capital account overview - IFRS vertical", () => {
    const token = localStorage.getItem("access_token");
    const authorization = `Bearer ${token}`;
    cy.request({
        method: "GET",
        url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'capital-account-overviews/2023/1/b93d2197-e8fc-459a-8bfe-58fef79d3086'),
        headers: {
            authorization,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        resbody = response;
    });

});
When('The user clicks on the Capital Account Page', () => {
    leftpanel.getcapitalaccount().click()
    cy.url().should('include', '/capital-account')

})
And('Choose the year', () => {
    capitalaccount.getyear().wait(2000).click()
    cy.get('span.mat-option-text').contains('2023').click()
})
And('Choose the quarter', () => {
    capitalaccount.getquarter().wait(2000).click()
    cy.get ('span.mat-option-text').contains('Q1').click()


})
When('User select IFRS vertical from the drop down as the file format', () => {
    capitalaccount.getfileformat().wait(2000).click()
    capitalaccount.getifrs().click()

})
Then('Verify if the datas for selected year and quarter are been displayed for IFRS vertical', () => {
    const table = cy.get('table')
    cy.log(table)
})
When('User clicks on the download button on the top right corner of the header', () => {
    capitalaccount.getdownloadbutton().trigger('mouseenter').wait(3000)
    capitalaccount.getdownloadtooltip().contains('Download as Excel file')
   capitalaccount.getdownloadbutton().click()

})
Then('Verify a excel is downloaded successfully', () => {
   cy.verifyDownload(Investorandfund.vehicle && 'Capital account overview', { contains: true })
})



// Overview KFW
And("User hits the api request for the capital account overview - KFW capital account", () => {
    const token = localStorage.getItem("access_token");
    const authorization = `Bearer ${token}`;
    cy.request({
        method: "GET",
        url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'capital-account-overviews/2023/1/12e89c58-2275-4cab-b3cc-891895a0c07d'),
        headers: {
            authorization,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        resbody = response;
    });

});
When('User select KFW capital account from the drop down as the file format', () => {
    capitalaccount.getfileformat().wait(2000).click()
    capitalaccount.getkfw().click()

})
Then('Verify if the datas for selected year and quarter are been displayed for KFW capital account', () => {
    const table = cy.get('table')
    cy.log(table)

})
When('User clicks on the download button on the top right corner of the header', () => {
    capitalaccount.getdownloadbutton().trigger('mouseenter').wait(3000)
    capitalaccount.getdownloadtooltip().contains('Download as Excel file')
   capitalaccount.getdownloadbutton().click()

})
Then('Verify a filtered excel is downloaded successfully', () => {
   cy.verifyDownload(Investorandfund.vehicle && 'Capital account transactions - filtered.xlsx', { contains: true })
})
And('Verify if the download icon is not clickable', () => {
    capitalaccount.getdownloadbutton().should('not.be.enabled')
 })

 



// display format
And('Click on the Download link', () => {
    capitalaccount.getdownloadlink().click()


})
Then('Verify the display format and file format text', () => {
    capitalaccount.gettitle().contains('Display Format:')
    capitalaccount.gettitle().contains('File Format:')
})
When('Clicking on the Display format', () => {
    // capitalaccount.getdisplayformat().click()

})
Then('Verify the display format option from the display format drop-down', () => {
    // capitalaccount.getlistbox().should('have.text', ' IFRS Vertical  IFRS  ')
    // cy.get('div > mat-option').should('have.length', 9)

})

When('Clicking on the file format', () => {
    leftpanel.getcapitalaccount().click()
    capitalaccount.gettransactiontype().click()

})
Then('Verify the file format  option from the file format drop-down', () => {
    cy.get('div > mat-option').should('have.length', 2)
    capitalaccount.getlistbox().should('have.text', ' Excel  PDF ')
})





// Transaction details for the selected dates are displayed
let filteredDate;
And("User hits the api request for the capital account transaction", () => {
    const token = localStorage.getItem("access_token");
    const authorization = `Bearer ${token}`;
    cy.request({
        method: "GET",
        url: common.getApi(Investorandfund.lps,Investorandfund.vehicle,'transactions'),
        headers: {
            authorization,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        resbody = response;
    });

});
And('The user clicks on the Transaction tab', () => {
    capitalaccount.gettransaction().click()

})
When('User choose the From Date', () => {
    capitalaccount.getfromdate().click()
    common.setdate(Datequarter.startdate.year, Datequarter.startdate.month, Datequarter.startdate.date)

})
And('User choose the To Date', () => {
    capitalaccount.gettodate().click()
    common.setdate(Datequarter.enddate.year, Datequarter.enddate.month, Datequarter.enddate.date)
})
Then('Verify if the list of transaction are displayed for the selected dates', () => {
    filteredDate = resbody.body.data.filter(item => {
        const sendDate = new Date(item.sendDate);
        const startDate = new Date(Datequarter.startdate.year +'-'+ Datequarter.startdate.month +'-'+ Datequarter.startdate.date);
        const endDate = new Date(Datequarter.enddate.year +'-'+ Datequarter.enddate.month +'-'+ Datequarter.enddate.date);
        return sendDate >= startDate && sendDate <= endDate;
    });
    capitalaccount.gettablerow().should('have.length', filteredDate.length)

})
And('Verify if total no. of transaction are been displayed in the right corner of the header tab', () => {
    capitalaccount.gettransactioncount().contains(filteredDate.length + ' Transactions')
})
When('User clicks on clear filter button', () => {
    capitalaccount.getclearbutton().click()

})
Then('Verify all the transactions are displayed', () => {
    capitalaccount.gettransactioncount().contains(resbody.body.data.length + ' Transactions')

})



// No transaction message is shown for the selected dates
When('User choose the From Date in the date picker', () => {
    capitalaccount.getfromdate().click()
    common.setdate('2023', 'JAN', '10')
})
And('User choose the To Date in the date picker', () => {
    capitalaccount.gettodate().click()
    common.setdate("2023", "MAY", "15")
})
Then('Verify if a no record found message is been displayed', () => {
    capitalaccount.getnorecordfound().contains('No records found').should('be.visible')
})
And('Verify if no transaction for the selected dates are displayed', () => {
    capitalaccount.gettransactioncount().contains('0' + ' Transactions')

})




// transaction are filtered based on capital call
let capitalcall;
And('Choose the transaction type as capital call', () => {
    capitalaccount.gettransactiontype().wait(2000).click()
    capitalaccount.getcapitalcall().click()


})
Then('Verify if only the capital call are filtered and displayed', () => {
    capitalcall = resbody.body.data.filter(item => item.type === "capitalCall");
    capitalaccount.gettablerow().should('have.length', capitalcall.length)

})
And('Verify the no.of transaction for capital call', () => {
    capitalaccount.gettransactioncount().contains(capitalcall.length + ' Transactions')

})



// transaction are filtered based on capital distribution
let cashdistribution;
And('Choose the transaction type as capital distribution', () => {
    capitalaccount.gettransactiontype().wait(2000).click()
    capitalaccount.getcapitaldistribution().click()

})
Then('Verify if only the capital distribution are filtered and displayed', () => {
    cashdistribution = resbody.body.data.filter(item => item.type === "cashDistribution");
    capitalaccount.gettablerow().should('have.length', cashdistribution.length)

})
And('Verify the no.of transaction for capital distribution', () => {
    capitalaccount.gettransactioncount().contains(cashdistribution.length + ' Transactions')

})



// transaction are filtered based on Paid status
let paidstatus;
And('Choose the transaction status as Paid', () => {
    capitalaccount.gettransactionstatus().click()
    capitalaccount.getpaidstatus().click()


})
Then('Verify if only the Paid status transations are filtered and displayed', () => {
    paidstatus = resbody.body.data.filter(item => item.status === "paid");
    capitalaccount.gettablerow().should('have.length', paidstatus.length)

})
And('Verify the no.of transaction for Paid status', () => {
    capitalaccount.gettransactioncount().contains(paidstatus.length + ' Transactions')

})



// transaction are filtered based on Open status
let openstatus;
And('Choose the transaction status as Open', () => {
    capitalaccount.gettransactionstatus().click()
    capitalaccount.getopenstatus().click()

})
Then('Verify if only the Open status transations are filtered and displayed', () => {
    openstatus = resbody.body.data.filter(item => item.status === "open");
    capitalaccount.gettablerow().should('have.length', openstatus.length)


})
And('Verify the no.of transaction for Paid transaction', () => {
    capitalaccount.gettransactioncount().contains(openstatus.length + ' Transactions')

})

