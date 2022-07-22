const {library} = require('./library')
const {expect} = require('chai')

describe('Library tests', () => {
    describe('calcPriceOfBook', () => {
        it('happy path', () => {
            expect(library.calcPriceOfBook('Green Way', 1981)).to.equal('Price of Green Way is 20.00')
        })
        it('happy path, 1980\'s', () => {
            expect(library.calcPriceOfBook('Green Way', 1980)).to.equal('Price of Green Way is 10.00')
        })
        it('happy path, under 1980\'s', () => {
            expect(library.calcPriceOfBook('Green Way', 1979)).to.equal('Price of Green Way is 10.00')
        })
        it('invalid input,not a string nameOfBook', () => {
            expect(() => library.calcPriceOfBook(function () {
            }, 1979)).to.throw()
        })
        it('invalid input,not a number year', () => {
            expect(() => library.calcPriceOfBook('Green Way', '1979')).to.throw()
        })
        it('invalid input, both of them', () => {
            expect(() => library.calcPriceOfBook(function () {
            }, '1979')).to.throw()
        })
    })
    describe('findBook', () => {
        it('happy path', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],'Torronto')).to.deep.equal('We found the book you want.')
        })
        it('happy path, the opposite', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],'aa')).to.deep.equal('The book you are looking for is not here!')
        })
        it('no length on booksArr', () => {
            expect(()=>library.findBook([],'aa')).to.throw('No books currently available')
        })
    })
    describe('arrangeBooks', () => {
        it('happy path', () => {
            expect(library.arrangeTheBooks(8)).to.equal('Great job, the books are arranged.')
        })
        it('happy path,edge case', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        })
        it('no space on shelves', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.')
        })
        it('invalid input, not a number', () => {
            expect(()=>library.arrangeTheBooks('41')).to.throw('Invalid input')
        })
        it('invalid input, not an integer', () => {
            expect(()=>library.arrangeTheBooks(-41)).to.throw('Invalid input')
        })
    })

});
