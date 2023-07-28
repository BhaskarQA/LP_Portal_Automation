class Settings {
    weblocators={
        users:'#mat-tab-label-0-0',
        investor:'#mat-tab-label-0-1',
        companyName:'input[name="company"]',
        streetName:'input[name="street"]',
        vatNum:'input[name="vat-number"]',
        commRegnum:'input[name="commercial-register-number"]',
        tiban:'input[name="iban"]'
    }
    getUsers() {
        return cy.get(this.weblocators.users)
    }
    getinvestor() {
        return cy.get(this.weblocators.investor)
    }
    getcompanyname(){
        return cy.get(this.weblocators.companyName)
    }
    getstreetname(){
        return cy.get(this.weblocators.streetName)
    }
    getvatnum(){
        return cy.get(this.weblocators.vatNum)
    }
    getcommregnum(){
        return cy.get(this.weblocators.commRegnum)
    }
    getiban(){
        return cy.get(this.weblocators.getiban)
    }
}
export default Settings