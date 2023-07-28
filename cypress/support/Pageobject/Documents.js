
class Documents{
    weblocators={
        documentlist:'mat-selection-list',
        subfolderlist:'.folderList > div ',
        folder:'div>.folderStructure'
    }
getdocumentlist(){
   return cy.get(this.weblocators.documentlist)
}
getsubfolderlist(){
    return cy.get(this.weblocators.subfolderlist)
}
getfolder(){
    return cy.get(this.weblocators.folder)
}
}
export default Documents