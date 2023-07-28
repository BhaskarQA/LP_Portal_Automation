class Reports{
   weblocators={
      quarterly:'#mat-tab-label-0-0',
      annual:'#mat-tab-label-0-1',
      menuTitle:'span > .childMenuItem',
      year:'.folderStructure',
      yearDropDown:'div.year_selector',
      quarterdropdown:'div.quarter_selector',
      reportlist:'.reportsList>mat-list-option'
   }

     getquarterly(){
        return cy.get(this.weblocators.quarterly)
     }
     getannual(){
         return cy.get(this.weblocators.annual)
     }
     getmenutitle(){
         return cy.get(this.weblocators.menuTitle)
     }
     getyear(){
        return cy.get(this.weblocators.year)
     }
     getyeardropdown()
     {
       return cy.get(this.weblocators.yearDropDown)
     }
     getquarterdropdown()
     {
       return cy.get(this.weblocators.quarterdropdown)
     }
     getreportlist(){
       return cy.get(this.weblocators.reportlist)
     }
    
}
export default Reports