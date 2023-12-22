describe('template spec', () => {
  beforeEach(()=> {
    cy.visit('https://amazon.in')

  });
  it('C13 Todays deal page', () => {
    cy.contains("Today's Deals",{force: true}).click();
    cy.get("div[data-testid='grid-deals-container']>div:nth-child(3)").click()
    cy.url().should('include','www.amazon.in/deal/')
  })

  it.only("C14 Mobiles page",()=>{
      cy.get("#twotabsearchtextbox").type("Mobiles{enter}")
      

  })
})