class Settings {
    getUsers() {
        return cy.get('#mat-tab-label-0-0')
    }
    getinvestor() {
        return cy.get('#mat-tab-label-0-1')
    }
    getcompanyname(){
        return cy.get('input[name="company"]')
    }
    getstreetname(){
        return cy.get('input[name="street"]')
    }
    getvatnum(){
        return cy.get('input[name="vat-number"]')
    }
    getcommregnum(){
        return cy.get('input[name="commercial-register-number"]')
    }
    getiban(){
        return cy.get('input[name="iban"]')
    }
}
export default Settings