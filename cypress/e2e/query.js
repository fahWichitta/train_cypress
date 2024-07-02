describe('Query Mongo DB', () => {
    it('call task find', () => {
        cy.task("find" , {
            query:{firstname: "รัตติกาล" }  ,
            collectionName:"patients" } ).then(result => {
            cy.log(result[0].lastname).wait(1000);
            cy.log(result[0].firstname).wait(1000);
            expect({ lastname: result[0].lastname }).to.eql({ lastname: "สุขเกิด" })
        });
    })
})