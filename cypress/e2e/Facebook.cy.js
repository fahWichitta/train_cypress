const patient_info = require(`../fixtures${Cypress.env('run_env')}/patient_info/wichitta.json`)


describe('template spec', () => {
  it('verify all require field', () => {
    cy.visit('/')
    cy.get('#input-9').type(patient_info['first_name'])
    cy.get('#input-11').type(patient_info['last_name'])
    cy.get('#input-7').click()
    cy.get('#input-18').click()
    cy.get('#input-40').type(patient_info['cid'])
    cy.get('#input-40-messages > .v-messages__message').should('contain','หมายเลขบัตรประชาชนไม่ถูกต้อง ตัวอย่าง: 3100700099999')
    // cy.visit('/')
    // cy.get('[type="submit"]').click()
    // cy.get('#radio-group-3-messages > .v-messages__message').should('have.text','กรุณาเลือกประเภทลูกค้า')
    // cy.get('#input-9-messages > .v-messages__message').should('have.text','กรุณากรอกชื่อ')``
    // cy.get('#input-11-messages > .v-messages__message').should('have.text','กรุณากรอกนามสกุล')
    // cy.get('#input-13-messages > .v-messages__message').should('have.text','เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
  })
  //it('passes', () => {
    //cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6')
    //cy.get('[data-testid="royal_email"]').type('fah@gmail.com').wait(5000)
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