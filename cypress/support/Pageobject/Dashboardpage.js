class Dashboard {

    weblocators={
        timeline:'.card-container',
        timelineDot:'.timeline-body',
        investmentStartDate:'.progressDate.start',
        liquidationEndDate:'.progressDate.end',
        tooltip:'.tooltip',
        performance:'.card-container',
        seedDetails:'a',
        capitalInUsd:'.card-container',
        upcommingEvents:'.card-container',
        news:'.card-container',
        updates:'.card-container',
        banner:'.dashboard-card > a',
        investmentKpis:'.realized-unrealized',
        profile:'.profile',
        options:'div > mat-option',
        menuHeading:'span.menuHeading',
        investorDropDown:'div.investorDropdown',
        fundDropDown:'.fundDropdown>div',
        investmentHeader:'.cardHeadLeft.ng-star-inserted',
        updatesList:'.updatesContainer',
        newList:'.newsContainer',
        eventList:'div.eventsContainer',
        performanceKpis:'div[class="performance"]',
        capitalKpis:'div[class="capital"]',
        noRecordFound:'div.noRecordFound',
        infoIcon:'div>.info-icon',
        popupContainer:'div.popup-container'
    }
    gettimeline() {
        return cy.get(this.weblocators.timeline).contains(' Timeline ')
    }
    gettimelinedot(){
        return cy.get(this.weblocators.timelineDot).find('.event-dot')
        
    }
    getinvetsmentstartdate(){
        return cy.get(this.weblocators.investmentStartDate)
    }
    getliquidationenddate(){
        return cy.get(this.weblocators.liquidationEndDate)
    }
    gettooltip(){
        return cy.get(this.weblocators.tooltip)
    }
    getperformance() {
        return cy.get(this.weblocators.performance).contains(' Performance ')
    }
    getseedetails(){
        return cy.get(this.weblocators.seedDetails).contains(" See details ")
    }
    getcapitalinusd() {
        return cy.get(this.weblocators.capitalInUsd).contains(' Capital in EUR ')
    }
    getupcommingevents() {
        return cy.get(this.weblocators.upcommingEvents).contains(' Upcoming events ')
    }
    getnews() {
        return cy.get(this.weblocators.news).contains(' News ')
    }
    getupdates() {
        return cy.get(this.weblocators.updates).contains(' Updates ')
    }
    getbanner() {
        return cy.get(this.weblocators.banner)
    }
    getinvestmentkpis(){
        return cy.get(this.weblocators.investmentKpis)
    }
    getprofile() {
        return cy.get(this.weblocators.profile)
    }
    getoptions() {
        return cy.get(this.weblocators.options)
    }
    getmenuheading() {
        return cy.get(this.weblocators.menuHeading)
    }
    getinvestordropdown() {
        return cy.get(this.weblocators.investorDropDown)
    }
    getfunddropdown() {
        return cy.get(this.weblocators.fundDropDown)
    }
    getinvestmentheader() {
        return cy.get(this.weblocators.investmentHeader)
    }
    getupdateslist(){
        return cy.get().find(this.weblocators.updatesList)
    }
    getnewslist(){
        return cy.get().find(this.weblocators.newList)
    }
    geteventslist(){
        return cy.get().find(this.weblocators.eventList)
    }
    getperformancekpis(){
        return  cy.get(this.weblocators.performanceKpis)
    }
    getcapitalkpis(){
        return cy.get(this.weblocators.capitalKpis)
    }
    getnorecordfound(){
        return cy.get(this.weblocators.noRecordFound)
    }
    getinfoicon(){
        return cy.get(this.weblocators.infoIcon)
    }
    getpopupcontainer(){
        return cy.get(this.weblocators.popupContainer)
    }

   
}
export default Dashboard