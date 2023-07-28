class Loginpage{
    weblocators={
        username:'#username',
        password:'#password',
        signin:'#kc-login'
    }
    getusername(){
        return cy.get(this.weblocators.username)
    }
    getpassword(){
       return cy.get(this.weblocators.password)
    }
    getsignin(){
          return cy.get(this.weblocators.signin)
    }
    }
    export default Loginpage