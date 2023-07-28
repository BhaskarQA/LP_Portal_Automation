class Insightpage {
    weblocators={
        widgetcontent:'div > p',
        widgetheading:'span>div.insights-title',
        chartheading:'div.cardHead',
        kpis:'div>p.title',
        expansionindicatior:'span.mat-expansion-indicator'
        
    }
    getwidgetcontent() {
        return cy.get(this.weblocators.widgetcontent)
    }
    getwidgetheading() {
        return cy.get(this.weblocators.widgetheading)
    }
    getchartheading() {
        return cy.get(this.weblocators.chartheading)
    }
    getkpis() {
        return cy.get(this.weblocators.kpis)
    }
    getexpansionindicatior(){
       return cy.get(this.weblocators.expansionindicatior)
    }
}
export default Insightpage