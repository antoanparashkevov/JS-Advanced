const {carService} = require('./03.carService')
const {expect} = require('chai')

describe('Car Service Testing', ()=>{
    describe('isItExpensive',()=>{
        it('happy path 1',()=>{
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`)
        })
        it('happy path 2',()=>{
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`)
        })
        it('invalid issue',()=>{
            expect(carService.isItExpensive('a')).to.equal(`The overall price will be a bit cheaper`)
        })
    })
    describe('discount',()=>{
        it('happy path, 15%',()=>{
            expect(carService.discount(3,10)).to.equal(`Discount applied! You saved 1.5$`)
        })
        it('happy path, 15%',()=>{
            expect(carService.discount(7,10)).to.equal(`Discount applied! You saved 1.5$`)
        })
        it('happy path, 30%',()=>{
            expect(carService.discount(8,10)).to.equal(`Discount applied! You saved 3$`)
        })
        it('happy path, small number of parts, edge case',()=>{
            expect(carService.discount(2,10)).to.equal("You cannot apply a discount")
        })
        it('happy path, small number of parts',()=>{
            expect(carService.discount(1,10)).to.equal("You cannot apply a discount")
        })
        it('invalid type, first arg',()=>{
            expect(()=>carService.discount('1',10)).to.throw("Invalid input")
        })
        it('invalid type, second arg',()=>{
            expect(()=>carService.discount(1,'10')).to.throw("Invalid input")
        })
        it('invalid type, both of them',()=>{
            expect(()=>carService.discount('1','10')).to.throw("Invalid input")
        })
    })
    describe('partsToBuy',()=>{
        it('empty catalog',()=>{
            expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equal(0)
        })
        it('total price of one product',()=>{
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145)
        })
        it('total price of two products',()=>{
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "coil springs"])).to.equal(375)
        })
        it('Invalid input for first arg',()=>{
            expect(()=>carService.partsToBuy(function(){},["blowoff valve", "coil springs"])).to.throw('Invalid input')
        })
        it('Invalid input for second arg',()=>{
            expect(()=>carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],function(){})).to.throw('Invalid input')
        })
        it('Invalid input for both arg',()=>{
            expect(()=>carService.partsToBuy(function(){},function(){})).to.throw('Invalid input')
        })
    })
})
