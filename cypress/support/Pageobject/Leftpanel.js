class Leftpanel {
    getdashboard() {
        return cy.get('div>span').contains('Dashboard')
        // return cy.get('img[src="../../assets/dashboard.png"]')
    }
    getinsight() {
        return cy.get('div>span').contains('Insights')
        // return cy.get('img[src="../../assets/insights.png"]')
    }
    getcapitalaccount() {
        return cy.get('div>span').contains('Capital Account')
        // return cy.get('img[src="../../assets/capitalaccount.png]')
    }
    getreports() {
        return cy.get('div>span').contains('Reports')
        // return cy.get('img[src="../../assets/reports.png"]')
    }
    getdocuments() {
        return cy.get('div>span').contains('Documents')
        // return cy.get('img[src="../../assets/documents.png"]')
    }
    getsettings() {
        // return cy.get('div>span').contains('')
        return cy.get('img[src="../../../../assets/settings_nav.svg"]')
    }
    getlogout() {
        return cy.get('div>span').contains('Log out')
        // return cy.get('img[src="../../../../assets/logout.png"]')
    }
    getpatnerlogo() {
        return cy.get('.mat-toolbar > img')
    }
    getmenuheading() {
        return cy.get('span.menuHeading')
    }
    getchildmenuheading() {
        return cy.get('.childMenuItem')
    }
    gettransaction() {
        return cy.get('#mat-tab-label-0-1')
    }
    getannual() {
        return cy.get('#mat-tab-label-0-1')
    }
    getinvestor() {
        return cy.get('#mat-tab-label-0-1')
    }
    getportfolio() {
        return cy.get('#mat-tab-label-0-1')
    }
}
export default Leftpanel