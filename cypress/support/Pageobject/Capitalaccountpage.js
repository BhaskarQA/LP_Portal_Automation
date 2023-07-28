class Capitalaccount {

    weblocators={
        year:'.mat-select.dropdown',
        quarter:'.mat-select.dropdown',
        fileformat:'div.select-wrapper',
        ifrs:'span.mat-option-text',
        kfw:'span.mat-option-text',
        overview:'div.mat-tab-label-content',
        transaction:'.mat-tab-label-content',
        fromdate:'[data-mat-calendar="mat-datepicker-0"]>button',
        todate:'[data-mat-calendar="mat-datepicker-1"]>button',
        transactioncount:'.transaction-count>div',
        clearbutton:'.mat-button-wrapper',
        transactiontype:'#type',
        transactionstatus:'#status',
        capitalcall:'span.mat-option-text',
        capitaldistribution:'span.mat-option-text',
        paidstatus:'span.mat-option-text',
        openstatus:'span.mat-option-text',
        datepicker:'.mat-calendar-period-button',
        yearmonthdate:'button.mat-calendar-body-cell',
        norecordfound:'div.noRecord',
        tablerow:'tbody>tr',
        downloadbutton:'div.download-bg',
        downloadtooltip:'div.download-content'
    }

    getyear() {
        return cy.get(this.weblocators.year).eq(0)
    }
    getquarter() {
       return cy.get(this.weblocators.quarter).eq(1)
    }
    getfileformat() {
        return cy.get(this.weblocators.fileformat).eq(0)
    }
    getifrs() {
         return cy.get(this.weblocators.ifrs).eq(0)
    }
    getkfw() {
         return cy.get(this.weblocators.kfw).eq(1)
    }
    getoverview() {
         return cy.get(this.weblocators.overview).contains(' Overview ')
    }
    gettransaction() {
        return cy.get(this.weblocators.transaction).contains('Transactions')
    }
    getfromdate() {
         return cy.get(this.weblocators.fromdate)
    }
    gettodate() {
         return cy.get(this.weblocators.todate)
    }
    gettransactioncount() {
        return cy.get(this.weblocators.transactioncount)
    }
    getclearbutton() {
       return  cy.get(this.weblocators.clearbutton).contains('Clear Filter').eq(0)
    }
    gettransactiontype() {
         return cy.get(this.weblocators.transactiontype).eq(0)
    }
    gettransactionstatus() {
         return cy.get(this.weblocators.transactionstatus)
    }
    getcapitalcall() {
         return cy.get(this.weblocators.capitalcall).contains(' Capital call ')
    }
    getcapitaldistribution() {
         return cy.get(this.weblocators.capitaldistribution).contains(' Capital distribution ')
    }
    getpaidstatus() {
         return cy.get(this.weblocators.paidstatus).contains(' Paid ')
    }
    getopenstatus() {
         return cy.get(this.weblocators.openstatus).contains(' Open ')
    }
    getdatepicker() {
         return cy.get(this.weblocators.datepicker)
    }
    getyearmonthdate() {
         return cy.get(this.weblocators.yearmonthdate)
    }
    getnorecordfound() {
         return cy.get(this.weblocators.norecordfound)
    }
    gettablerow() {
         return cy.get(this.weblocators.tablerow)
    }
    getdownloadbutton(){
         return cy.get(this.weblocators.downloadbutton).eq(0)
    }
    getdownloadtooltip(){
         return cy.get(this.weblocators.downloadtooltip)
    }
}
export default Capitalaccount