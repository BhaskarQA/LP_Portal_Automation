class Dashboard {

    gettimeline() {
        return cy.get('.card-container').contains(' Timeline ')
    }
    gettimelinedot(){
        return cy.get('.timeline-body').find('.event-dot')
        
    }
    getinvetsmentstartdate(){
        return cy.get('.progressDate.start')
    }
    getliquidationenddate(){
        return cy.get('.progressDate.end')
    }
    gettooltip(){
        return cy.get('.tooltip')
    }
    getperformance() {
        return cy.get('.card-container').contains(' Performance ')
    }
    getseedetails(){
        return cy.get("a").contains(" See details ")
    }
    getcapitalinusd() {
        return cy.get('.card-container').contains(' Capital in EUR ')
    }
    getupcommingevents() {
        return cy.get('.card-container').contains(' Upcoming events ')
    }
    getnews() {
        return cy.get('.card-container').contains(' News ')
    }
    getupdates() {
        return cy.get('.card-container').contains(' Updates ')
    }
    getbanner() {
        return cy.get('.dashboard-card > a')
    }
    getinvestmentkpis(){
        return cy.get('.realized-unrealized')
    }
    getprofile() {
        return cy.get('.profile')
    }
    getoptions() {
        return cy.get('div > mat-option')
    }
    getmenuheading() {
        return cy.get('span.menuHeading')
    }
    getinvestordropdown() {
        return cy.get('div.investorDropdown')
    }
    getfunddropdown() {
        return cy.get('.fundDropdown>div')
    }
    getinvestmentheader() {
        return cy.get('.cardHeadLeft.ng-star-inserted')
    }
    getupdateslist(){
        return cy.get('.updatesContainer').find('.eventTile')
    }
    getnewslist(){
        return cy.get('.newsContainer').find('.newsTile')
    }
    geteventslist(){
        return cy.get('div.eventsContainer').find('eventsTile')
    }
    getperformancekpis(){
        return  cy.get('div[class="performance"]')
    }
    getcapitalkpis(){
        return cy.get('div[class="capital"]')
    }
    getnorecordfound(){
        return cy.get('div.noRecordFound')
    }
    getinfoicon(){
        return cy.get('div>.info-icon')
    }
    getpopupcontainer(){
        return cy.get('div.popup-container')
    }

   
}
export default Dashboard