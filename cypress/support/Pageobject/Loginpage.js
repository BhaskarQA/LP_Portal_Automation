class Loginpage{
    getusername(){
       return  cy.get('#username')
    }
    getpassword(){
        return  cy.get('#password')
    }
    getsignin(){
        return  cy.get('#kc-login')
    }
    }
    export default Loginpage