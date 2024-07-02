it('passes', () => {
    cy.visit('www.facebook.com')
    cy.get('[data-testid="flightSearch-ต้นทาง-input"]').click()
    cy.get('#headlessui-combobox-option-44').click()

    // cy.get('.v-list-item-title').contains('EN').click()
    // cy.get('#main-form > .v-row > :nth-child(1) > .v-input > .v-input__control > .v-selection-control-group > :nth-child(2) > .v-label').click()  
    // cy.get('#input-9').type('wichitta')
    // cy.get('#input-11').type('kulnapum')
    // cy.get('#input-18').click() 
    // cy.get('#input-42').type('11111111111')
    // cy.get('#input-42-messages').should('have.text','Please fill in your citizen id.')
})