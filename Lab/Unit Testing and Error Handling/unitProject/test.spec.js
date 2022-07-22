const {sum} = require('./lib/myModule')
const {expect} = require('chai')

// console.log('here')
//describe is a group of testing
describe('Test Suite', ()=>{
    it('works with positive integers',()=>{
        expect(sum(5,3)).to.equal(8,"Didn't work with positive integers")
        // if(sum(5,3) !== 8){
        //     throw  new Error("Didn't work with positive integers")
        // }
    })
    it('works with floating point numbers',()=>{
        expect(sum(3.14,2.71)).to.equal(5.85,"Didn't work with floating point numbers")
        // if(sum(3.14,2.71) !==5.85){
        //     throw  new Error("Didn't work with floating point numbers")
        // }
    })
})
