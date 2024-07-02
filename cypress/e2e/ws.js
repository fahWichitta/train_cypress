const patient_info = require(`../fixtures/ws/regis.json`);

//Regis_Normally
describe('Regis', () => {
  it.only('verify all Regis_Normally', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get('input[id="customer.firstName"]').type(patient_info['firstName'])
    cy.get('input[id="customer.lastName"]').type(patient_info['lastName'])
    cy.get('input[id="customer.address.street"]').type(patient_info['Address'])
    cy.get('input[id="customer.address.city"]').type(patient_info['City'])
    cy.get('input[id="customer.address.state"]').type(patient_info['State'])
    cy.get('input[id="customer.address.zipCode"]').type(patient_info['ZipCode'])
    cy.get('input[id="customer.phoneNumber"]').type(patient_info['Phone'])
    cy.get('input[id="customer.ssn"]').type(patient_info['SSN'])
    cy.get('input[id="customer.username"]').type(patient_info['Username'])
    cy.get('input[id="customer.password"]').type(patient_info['Password'])
    cy.get('input[id="repeatedPassword"]').type(patient_info['Confirm'])
    cy.get('[colspan="2"] > .button').click()
    cy.get('a[href="logout.htm"]').click()
  })//Regis_username_already
})

// //Regis_username_already
// describe('Regis_username_already', () => {
//   it('verify all require field', () => {
//     cy.visit('https://parabank.parasoft.com/parabank/index.htm')
//     cy.get('#loginPanel > :nth-child(3) > a').click()
//     cy.get('input[id="customer.firstName"]').type(patient_info['firstName'])
//     cy.get('input[id="customer.lastName"]').type(patient_info['lastName'])
//     cy.get('input[id="customer.address.street"]').type(patient_info['Address'])
//     cy.get('input[id="customer.address.city"]').type(patient_info['City'])
//     cy.get('input[id="customer.address.state"]').type(patient_info['State'])
//     cy.get('input[id="customer.address.zipCode"]').type(patient_info['ZipCode'])
//     cy.get('input[id="customer.phoneNumber"]').type(patient_info['Phone'])
//     cy.get('input[id="customer.ssn"]').type(patient_info['SSN'])
//     cy.get('input[id="customer.username"]').type(patient_info['Username'])
//     cy.get('input[id="customer.password"]').type(patient_info['Password'])
//     cy.get('input[id="repeatedPassword"]').type(patient_info['Confirm'])
//     cy.get('[colspan="2"] > .button').click()
//   })
// })

//Login
// describe('Login', () => {
//   it.skip('verify all require field', () => {
//     cy.parabank_login('kiki','08606666666')
//     cy.get(':nth-child(5) > .button').click();
//   })
// })