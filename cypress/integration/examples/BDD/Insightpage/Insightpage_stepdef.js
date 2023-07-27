/// <reference types  = "Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Insightpage from "../../../../support/Pageobject/Insightpage";
import Leftpanel from "../../../../support/Pageobject/Leftpanel";
import Dashboard from "../../../../support/Pageobject/Dashboardpage";
import Investorandfund from "../../../../fixtures/Investorandfund.json";
import Credential from "../../../../fixtures/Credential.json"
import Loginpage from "../../../../support/Pageobject/Loginpage";
import Common from "../../../Common/Common";
const common = new Common;
const loginpage = new Loginpage()
const dashboard = new Dashboard()
const leftpanel = new Leftpanel()
const insightpage = new Insightpage()
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
And('The user hits the api request for insights - Fund Metrics', () => {
    const token = localStorage.getItem('access_token')
    const authorization = `Bearer ${token}`
    cy.request({
        method: 'GET',
        url: common.getApi(Investorandfund.lps, Investorandfund.vehicle, 'insights/fund-metrics'),
        headers: {
            authorization
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        resbody = response;
    })

})

// Fund Metrics - Net performance
When('The user clicks on the Insights Page', () => {
    leftpanel.getinsight().click()
    cy.url().should('include', '/insights')
})

Then('Details on the TVPI widget are verified', () => {
    // const str = resbody.body.data[0].labelKey;
    // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    // const str3 = str2.split(str2.charAt(2)).join(' ');
    // cy.log((str2))
    // cy.log((str3))

    // insightpage.getwidgetheading().should('include.text', resbody.body.data[0].labelKey)

    insightpage.getwidgetheading().should('contain', 'Net Performance')
    insightpage.getchartheading().should('contain', resbody.body.data[0].boxes[0].labelKey)

    insightpage.getkpis().should('contain', resbody.body.data[0].boxes[0].views[0].kpis[0].labelKey)
    insightpage.getkpis().should('contain', resbody.body.data[0].boxes[0].views[0].kpis[1].labelKey)
    insightpage.getkpis().should('contain', resbody.body.data[0].boxes[0].views[0].kpis[2].labelKey)
    insightpage.getkpis().should('contain', resbody.body.data[0].boxes[0].views[0].kpis[3].labelKey)

})

And('Details on the Capital deployed widget are verified', () => {
    insightpage.getchartheading().should('contain', resbody.body.data[0].boxes[1].labelKey)

    insightpage.getkpis().should('contain', 'Total Deployed')
    insightpage.getkpis().should('contain', 'Exit proceeds')
    insightpage.getkpis().should('contain', 'Remaining')
})

And('Details on the Portfolio Value widget are verified', () => {
    insightpage.getchartheading().should('contain', 'Portfolio value')

    insightpage.getkpis().should('contain', 'Total')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')
})

And('Details on the Net IRR widget are verified', () => {
    insightpage.getchartheading().contains('Net IRR').should('be.visible')

    insightpage.getkpis().should('contain', 'Combined')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')
})

And('Details on the Cumulative net cash flow widget are verified', () => {
    insightpage.getchartheading().contains('Cumulative net cash flow (J Curve Analysis)').scrollIntoView().should('be.visible')
    insightpage.getkpis().should('contain', 'Actual')

})
When('User clicks on the right side arrow of the Net perfromance sub heading', () => {
    insightpage.getexpansionindicatior().eq(0).click()

})
Then('Verify if all the charts are collapsed under Net performance', () => {
    insightpage.getchartheading().should('contain', 'tvpi').should('be.hidden')
    insightpage.getchartheading().should('contain', 'capitalDeployed').should('be.hidden')
    insightpage.getchartheading().should('contain', 'Portfolio value').should('be.hidden')
    insightpage.getchartheading().contains('Net IRR').should('be.hidden')
    insightpage.getchartheading().contains('Cumulative net cash flow (J Curve Analysis)').should('be.hidden')


})


// Fund Metrics - Gross performance
And('Scrolls to Gross performance section', () => {
    insightpage.getwidgetheading().contains('Gross Performance').scrollIntoView().should('be.visible')
})

Then('Details on the MOIC widget are verified', () => {
    insightpage.getchartheading().contains(' MOIC ')
    insightpage.getkpis().should('contain', 'Combined')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')

})
And('Details on the Capital deployed widget in Gross performance section are verified', () => {
    insightpage.getchartheading().contains('Capital deployed')
    insightpage.getkpis().should('contain', 'Total Deployed')
    insightpage.getkpis().should('contain', 'Exit proceeds')
    insightpage.getkpis().should('contain', 'Remaining')
})
And('Details on the Portfolio Value widget in Gross performance section are verified', () => {
    insightpage.getchartheading().contains('Portfolio value')
    insightpage.getkpis().should('contain', 'Total')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')
})
And('Details on the Gross IRR widget are verified', () => {
    insightpage.getchartheading().contains('Gross IRR')
    insightpage.getkpis().should('contain', 'Combined')
    insightpage.getkpis().should('contain', 'Realized')
    insightpage.getkpis().should('contain', 'Unrealized')

})
When('User clicks on the right side arrow of the Gross perfromance sub heading', () => {
    insightpage.getexpansionindicatior().eq(1).click()

})
Then('Verify if all the charts are collapsed under Gross performance', () => {
    insightpage.getchartheading().contains(' MOIC ').should('be.hidden')
    insightpage.getchartheading().contains('Capital deployed').should('be.hidden')
    insightpage.getchartheading().contains(' Portfolio value ').should('be.hidden')
    insightpage.getchartheading().contains('Gross IRR').should('be.hidden')
})



// Fund Metrics - LP details
And('Scrolls to LP details section', () => {
    insightpage.getwidgetheading().contains('LP Details').scrollIntoView().should('be.visible')

})

Then('Details on the Net LP proceeds widget are verified', () => {
    insightpage.getchartheading().contains('Net LP proceeds')


})
And('Details on the Net LP proceeds over time widget are verified', () => {
    insightpage.getchartheading().contains(' Net LP proceeds over time')
    insightpage.getkpis().should('contain', 'Actual')
})
And('Details on the LP called capital widget are verified', () => {
    insightpage.getchartheading().contains('LP called capital')
    insightpage.getkpis().should('contain', 'Actual')
})
And('Details on the LP return of contributed capital widget are verified', () => {
    insightpage.getchartheading().contains('LP return of contributed capital').scrollIntoView()
    insightpage.getkpis().should('contain', 'Actual')

})
And('Details on the Proceeds to LPs - Hurdle rate widget are verified', () => {
    insightpage.getchartheading().contains(' Proceeds to LPs – Hurdle rate ')
    insightpage.getkpis().should('contain', 'Actual')

})
And('Details on the Proceeds to LPs - after catch-up and carried interest are verified', () => {
    insightpage.getchartheading().contains(' Proceeds to LPs – after catch-up and carried interest ')
    insightpage.getkpis().should('contain', 'Actual')

})
When('User clicks on the right side arrow of the LP details sub heading', () => {
    insightpage.getexpansionindicatior().eq(2).click()
})
Then('Verify if all the charts are collapsed under LP details', () => {
    insightpage.getchartheading().contains(' Net LP proceeds over time').should('be.hidden')
    insightpage.getchartheading().contains('LP called capital').should('be.hidden')
    insightpage.getchartheading().contains('LP return of contributed capital').should('be.hidden')
    insightpage.getchartheading().contains(' Proceeds to LPs – Hurdle rate ').should('be.hidden')
    insightpage.getchartheading().contains(' Proceeds to LPs – after catch-up and carried interest ').should('be.hidden')

})


// Fund MEtrics - GP Details
And('Scrolls to GP details section', () => {
    insightpage.getwidgetheading().contains('GP Details').scrollIntoView().should('be.visible')

})
Then('Details on the GP proceeds widget are verified', () => {
    insightpage.getchartheading().contains(' GP proceeds ')

})
And('Details on the GP contributed capital widget in Gross performance section are verified', () => {
    insightpage.getchartheading().contains(' GP contributed capital ')

})
And('Details on the Proceeds to GP widget in Gross performance section are verified', () => {
    insightpage.getchartheading().contains(' Proceeds to GP ')

})
And('Details on the GP Catch-up widget are verified', () => {
    insightpage.getchartheading().contains(' GP Catch-up ')

})
And('Details on the Carried interest widget are verified', () => {
    insightpage.getchartheading().contains(' Carried interest ')

})
And('Details on the Net GP proceeds widget are verified', () => {
    insightpage.getchartheading().contains(' Net GP proceeds ')

})
And('Details on the Management fees widget are verified', () => {
    insightpage.getchartheading().contains(' Management fees ')

})
When('User clicks on the right side arrow of the GP details sub heading', () => {
    insightpage.getexpansionindicatior().eq(3).click()

})
Then('Verify if all the charts are collapsed under LP details', () => {
    insightpage.getchartheading().contains(' GP proceeds ').should('be.hidden')
    insightpage.getchartheading().contains(' GP contributed capital ').should('be.hidden')
    insightpage.getchartheading().contains(' Proceeds to GP ').should('be.hidden')
    insightpage.getchartheading().contains(' GP Catch-up ').should('be.hidden')
    insightpage.getchartheading().contains(' Carried interest ').should('be.hidden')
    insightpage.getchartheading().contains(' Net GP proceeds ').should('be.hidden')
    insightpage.getchartheading().contains(' Management fees ').should('be.hidden')


})



// Portfolios investment - Capital deployment
And('The user hits the api request for insights - Portfolio Investment', () => {
    const token = localStorage.getItem('access_token')
    const authorization = `Bearer ${token}`
    cy.request({
        method: 'GET',
        url: common.getApi(Investorandfund.lps, Investorandfund.vehicle, 'insights/portfolio-investments'),
        headers: {
            authorization
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        resbody = response;
    })

})
And('User selects the portfolio investment tab', () => {
    leftpanel.getportfolio().click()
    leftpanel.getchildmenuheading().should('contain', ' Portfolio Investments ')

})
Then('Details on the Initial investments vs. follow-on investments widget under the capital deployment are verified', () => {
    insightpage.getwidgetheading().contains('Capital Deployment')
    insightpage.getchartheading().contains(' Initial investments vs. follow-on investments ')

})
And('Details on the No. of initial investments by entry round widget are verified', () => {
    insightpage.getchartheading().contains(' No. of inital investments by entry round ')

})
And('Details on the Capital deployment pacing widget are verified', () => {
    insightpage.getchartheading().contains(' Capital deployment pacing ')

})
And('Details on the Initial investment pacing widget are verified', () => {
    insightpage.getchartheading().contains(' Inital investment pacing (No. of deals) ')

})
And('Details on the Follow-on investment pacing widget are verified', () => {
    insightpage.getchartheading().contains(' Follow-on investment pacing (No. of deals) ')

})
When('User clicks on the right side arrow of the Capital deployment sub heading', () => {
    insightpage.getexpansionindicatior().eq(0).click()

})
Then('Verify if all the charts are collapsed under Capital deployment', () => {
    insightpage.getchartheading().contains(' Initial investments vs. follow-on investments ').should('be.hidden')
    insightpage.getchartheading().contains(' No. of inital investments by entry round ').should('be.hidden')
    insightpage.getchartheading().contains(' Capital deployment pacing ').should('be.hidden')
    insightpage.getchartheading().contains(' Inital investment pacing (No. of deals) ').should('be.hidden')
    insightpage.getchartheading().contains(' Follow-on investment pacing (No. of deals) ').should('be.hidden')
})



// Portfolio Investment - Exits
And('Scrolls to Exits section', () => {
    insightpage.getwidgetheading().contains('Exits').scrollIntoView().should('be.visible')

})
Then('Details on the Distribution of exit multiples widget are verified', () => {
    insightpage.getchartheading().contains(' Distribution of exit multiples ')

})
And('Details on the Deals by sector widget are verified', () => {
    insightpage.getchartheading().contains(' Deals by sector ')

})
And('Details on the Average MOIC at exit by sector widget are verified', () => {
    insightpage.getchartheading().contains(' Average MOIC at exit by sector ')

})
And('Details on the Average holding period per month widget are verified', () => {
    insightpage.getchartheading().contains(' Average holding period per month ')

})
When('User clicks on the right side arrow of the Exits sub heading', () => {
    insightpage.getexpansionindicatior().eq(1).click()

})
Then('Verify if all the charts are collapsed under Exits', () => {
    insightpage.getchartheading().contains(' Distribution of exit multiples ').should('be.hidden')
    insightpage.getchartheading().contains(' Deals by sector ').should('be.hidden')
    insightpage.getchartheading().contains(' Average MOIC at exit by sector ').should('be.hidden')
    insightpage.getchartheading().contains(' Average holding period per month ').should('be.hidden')

})



