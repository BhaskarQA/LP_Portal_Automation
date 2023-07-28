class Accountpage
{
  weblocators={
    button:'button > span',
    profilecontainer:'button > span',
    passwordcontainer:'.password-card-container',
    deleteontainer:'.account-delete-card-container'
  }
getbutton(){
   return cy.get(this.weblocators.button)
}
getprofilecontainer(){
   return cy.get(this.weblocators.profilecontainer)
}
getpasswordcontainer(){
   return cy.get(this.weblocators.passwordcontainer)
}
getdeleteontainer(){
   return cy.get(this.weblocators.deleteontainer)
}
}
export default Accountpage
