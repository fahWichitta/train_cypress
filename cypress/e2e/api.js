let token

before( () => {
    cy.POST_auth().then((res_token) => {
        //let token
        token = res_token
        cy.log(token).wait(1000)
    });
})

describe('API', () => {
    it.skip('Get User', () => {
        cy.GET_User().then((response) =>{
                expect(response.status).to.eq(200);
                var data = response.body
                cy.log(data).wait(1000)
                cy.log(data[0].fname).wait(1000)
                cy.log(data[1].fname).wait(1000)
                cy.log(data[2].fname).wait(1000)
                assert.equal(data[0].fname,'Karn')
                assert.equal(data[1].fname,'Ivy')
                assert.equal(data[2].fname,'Walter')
        })
    })


    it('POST Attraction', () => {
        cy.POST_Attraction(token).then((response) => {
            expect(response.status).to.eq(200);
            var data = response.body
            cy.log(data.attraction.name).wait(2000)
            assert.equal(data.attraction.name,'Fah KK University')
        });
    })
})
