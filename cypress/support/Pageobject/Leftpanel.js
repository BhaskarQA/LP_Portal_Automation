class Leftpanel {

    weblocators={
        dashboard:'div>span',
        insight:'div>span',
        capitalaccount:'div>span',
        reports:'div>span',
        documents:'div>span',
        settings:'img[src="../../../../assets/settings_nav.svg"]',
        logout:'div>span',
        patnerlogo:'.mat-toolbar > img',
        menuheading:'span.menuHeading',
        childmenuheading:'.childMenuItem',
        transaction:'#mat-tab-label-0-1',
        annual:'#mat-tab-label-0-1',
        investor:'#mat-tab-label-0-1',
        portfolio:'#mat-tab-label-0-1'
    }

    getdashboard() {
        return cy.get().contains('Dashboard')
        // return cy.get('img[src="../../assets/dashboard.png"]')
    }
    getinsight() {
        return cy.get().contains('Insights')
        // return cy.get('img[src="../../assets/insights.png"]')
    }
    getcapitalaccount() {
        return cy.get().contains('Capital Account')
        // return cy.get('img[src="../../assets/capitalaccount.png]')
    }
    getreports() {
        return cy.get().contains('Reports')
        // return cy.get('img[src="../../assets/reports.png"]')
    }
    getdocuments() {
        return cy.get().contains('Documents')
        // return cy.get('img[src="../../assets/documents.png"]')
    }
    getsettings() {
        // return cy.get('div>span').contains('')
        return cy.get()
    }
    getlogout() {
        return cy.get().contains('Log out')
        // return cy.get('img[src="../../../../assets/logout.png"]')
    }
    getpatnerlogo() {
        return cy.get()
    }
    getmenuheading() {
        return cy.get()
    }
    getchildmenuheading() {
        return cy.get()
    }
    gettransaction() {
        return cy.get()
    }
    getannual() {
        return cy.get()
    }
    getinvestor() {
        return cy.get()
    }
    getportfolio() {
        return cy.get()
    }
}
export default Leftpanel