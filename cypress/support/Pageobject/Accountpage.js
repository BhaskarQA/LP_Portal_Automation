class Accountpage
{
getbutton(){
 return cy.get('button > span')
}
getprofilecontainer(){
    return cy.get('.profile-card-container')
}
getpasswordcontainer(){
    return cy.get('.password-card-container')
}
getdeleteontainer(){
    return cy.get('.account-delete-card-container')
}
}
export default Accountpage