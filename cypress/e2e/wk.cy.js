// it('passes', () => {
//     cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6')
//     cy.get('[role="combobox"]').click()
//     cy.get('.v-list-item-title').contains('EN').click()
//     cy.get('#main-form > .v-row > :nth-child(1) > .v-input > .v-input__control > .v-selection-control-group > :nth-child(2) > .v-label').click()  
//     cy.get('#input-9').type('wichitta')
//     cy.get('#input-11').type('kulnapum')
//     cy.get('#input-18').click() 
//     cy.get('#input-42').type('11111111111')
//     cy.get('#input-42-messages').should('have.text','Please fill in your citizen id.')
//     //cy.get('[data-testid="royal_email"]').clear()
//     //cy.get('#pass').type('11111111')
//     //cy.get('#login').click()
//     //cy.get('[class="mdi-radiobox-blank mdi v-icon notranslate v-theme--light v-icon--size-default"][type="checkbox"]').check('#checkbox-20');
//     //cy.get('#input-18').click()  
//     //cy.get('#checkbox-20').click()
//     //cy.get('[role="combobox"]').click()
//     //cy.get('.v-list-item-title').contains('EN').click()
//   //})
// })


it('passes', () => {
  cy.visit('https://parabank.parasoft.com/parabank/register.htm')
 // cy.get('#loginPanel > :nth-child(3) > a').click()
  cy.get('input[id="customer.firstName"]').type('kiki')
  //cy.get('[data-testid="royal_email"]').clear()
  //cy.get('#pass').type('11111111')
  //cy.get('#login').click()
  //cy.get('[class="mdi-radiobox-blank mdi v-icon notranslate v-theme--light v-icon--size-default"][type="checkbox"]').check('#checkbox-20');
  //cy.get('#input-18').click()  
  //cy.get('#checkbox-20').click()
  //cy.get('[role="combobox"]').click()
  //cy.get('.v-list-item-title').contains('EN').click()
//})
})