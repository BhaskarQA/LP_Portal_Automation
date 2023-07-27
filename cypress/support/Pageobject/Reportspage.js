class Reports{

     getquarterly(){
       return cy.get('#mat-tab-label-0-0')
     }
     getannual(){
        return cy.get('#mat-tab-label-0-1')
     }
     getmenutitle(){
        return cy.get('span > .childMenuItem')
     }
     getyear(){
        return cy.get('.folderStructure')
     }
     getyeardropdown()
     {
      return cy.get('div.year_selector')
     }
     getquarterdropdown()
     {
      return cy.get('div.quarter_selector')
     }
     getreportlist(){
      return cy.get('.reportsList>mat-list-option')
     }
    
}
export default Reports