var value = new Array();
value[0] = {"patient_fullname" : "Test AAAAAAA" , "age" : 34};
value[1] = {"patient_fullname" : "Test BBBBBBB" , "age" : 14};
value[2] = {"patient_fullname" : "Test CCCCCCC" , "age" : 20};
value[3] = {"patient_fullname" : "Test DDDDDDD" , "age" : 9};
value[4] = {"patient_fullname" : "Test EEEEEEE" , "age" : 67};

describe('template spec', () => {
  it('for loop in array', () => {
    for (let i = 0; i < value.length ;i++){
      cy.log(`patient_name : ${value[i]["patient_fullname"]} และ อายุ  ${value[i]["age"]} ปี`)
    }
  })
})