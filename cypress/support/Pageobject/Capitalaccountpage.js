class Capitalaccount {

    getyear() {
        return cy.get('.mat-select.dropdown').eq(0)
    }
    getquarter() {
        return cy.get('.mat-select.dropdown').eq(1)
    }
    getfileformat() {
        return cy.get('div.select-wrapper').eq(0)
    }
    getifrs() {
        return cy.get('span.mat-option-text').eq(0)
    }
    getkfw() {
        return cy.get('span.mat-option-text').eq(1)
    }
    getoverview() {
        return cy.get('div.mat-tab-label-content').contains(' Overview ')
    }
    gettransaction() {
        return cy.get('.mat-tab-label-content').contains('Transactions')
    }
    getfromdate() {
        return cy.get('[data-mat-calendar="mat-datepicker-0"]>button')
    }
    gettodate() {
        return cy.get('[data-mat-calendar="mat-datepicker-1"]>button')
    }
    gettransactioncount() {
        return cy.get('.transaction-count>div')
    }
    getclearbutton() {
        return cy.get('.mat-button-wrapper').contains('Clear Filter').eq(0)
    }
    gettransactiontype() {
        return cy.get('#type').eq(0)
    }
    gettransactionstatus() {
        return cy.get('#status')
    }
    getcapitalcall() {
        return cy.get('span.mat-option-text').contains(' Capital call ')
    }
    getcapitaldistribution() {
        return cy.get('span.mat-option-text').contains(' Capital distribution ')
    }
    getpaidstatus() {
        return cy.get('span.mat-option-text').contains(' Paid ')
    }
    getopenstatus() {
        return cy.get('span.mat-option-text').contains(' Open ')
    }
    getdatepicker() {
        return cy.get('.mat-calendar-period-button')
    }
    getyearmonthdate() {
        return cy.get('button.mat-calendar-body-cell')
    }
    getnorecordfound() {
        return cy.get('div.noRecord')
    }
    gettablerow() {
        return cy.get('tbody>tr')
    }
    getdownloadbutton(){
        return cy.get('div.download-bg').eq(0)
    }
    getdownloadtooltip(){
        return cy.get('div.download-content')
    }


}
export default Capitalaccount