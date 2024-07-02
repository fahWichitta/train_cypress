Cypress.Commands.add("parabank_login", (user , pass) => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get(':nth-child(2) > .input').type(user).wait(1000)
    cy.get(':nth-child(4) > .input').type(pass).wait(1000)
  })

  // Cypress.Commands.add("parabank_regis", () => {
  //   cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  //   // cy.get(':nth-child(2) > .input').type(user).wait(1000)
  //   // cy.get(':nth-child(4) > .input').type(pass).wait(1000)
  // })