https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6
before(() => {
  // root-level hook
  // runs once before all tests
  var first_name = "wichitta"
})
beforeEach(() => {
  // root-level hook
  // runs before every test block
  cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6')
  cy.get('[type="submit"]').click()
  // Login function
})
afterEach(() => {
  // runs after each test block
})
after(() => {
  // runs once all tests are done
  // Log Out function
})
describe('Hooks 1', () => {
    it('add case 1 กรุณาเลือกประเภทลูกค้า', () => {
        cy.get('#radio-group-3-messages > .v-messages__message').should('have.text','กรุณาเลือกประเภทลูกค้า')
    })
    it('add case 2 กรุณากรอกชื่อ กรุณากรอกนามสกุล', () => {
        cy.get('#input-9-messages > .v-messages__message').should('have.text','กรุณากรอกชื่อ')
        cy.get('#input-11-messages > .v-messages__message').should('have.text','กรุณากรอกนามสกุล')
    })
    it('add case 3 เบอร์โทรศัพท์มือถือ', () => {
        cy.get('#input-13-messages > .v-messages__message').should('have.text','เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
    })
  })