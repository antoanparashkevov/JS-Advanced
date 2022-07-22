// describe("Book Selection", () => {
//   describe("Test for isGenreSuitable", () => {
//     it("Check for invalid parameters", () => {
//       expect(() =>
//         bookSelection
//           .isGenreSuitable("Crime", "number")
//           .to.throw("Invalid input!")
//       );
//       expect(() =>
//         bookSelection.isGenreSuitable(11, 12).to.throw("Invalid input!")
//       );
//       expect(() =>
//         bookSelection.isGenreSuitable(3, "Horror").to.throw("Invalid input!")
//       );
//     });
//
//     it("Check valid parameters", () => {
//       expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(
//         `Books with Horror genre are not suitable for kids at 12 age`
//       );
//       expect(bookSelection.isGenreSuitable("Horror", 20)).to.equal(
//         `Those books are suitable`
//       );
//     });
//   });
//
//   describe("Test for isItAffordable", () => {
//     it("Check valid parameters", () => {
//       expect(bookSelection.isItAffordable(20, 21)).to.equal(
//         `Book bought. You have 1$ left`
//       );
//       expect(bookSelection.isItAffordable(15, 10)).to.equal(
//         `You don't have enough money`
//       );
//     });
//   });
//
//   describe("Test for suitableTitles", () => {
//     it("Check for invalid parameters", () => {
//       expect(() =>
//         bookSelection
//           .suitableTitles("array", "genre")
//           .to.throw("Invalid input!")
//       );
//       expect(() =>
//         bookSelection
//           .suitableTitles("genre", ["Horror", "Adventure", "Crime"])
//           .to.throw("Invalid input!")
//       );
//       expect(() =>
//         bookSelection
//           .suitableTitles(["Horror", "Adventure", "Crime"], 2)
//           .to.throw("Invalid input!")
//       );
//     });
//
//     it("Check for valid parameters", () => {
//       expect(
//         bookSelection.suitableTitles(
//           [
//             { title: "The Da Vinci Code", genre: "Crime" },
//             { title: "Presumed Innocent", genre: "Crime" },
//           ],
//           "Crime"
//         )
//       ).to.deep.equal(["The Da Vinci Code", "Presumed Innocent"]);
//       expect(
//         bookSelection.suitableTitles(
//           [{ title: "The Guest List", genre: "Thriller" }],
//           "Thriller"
//         )
//       ).to.deep.equal(["The Guest List"]);
//       expect(
//         bookSelection.suitableTitles(
//           [{ title: "The Da Vinci Code", genre: "Crime" }],
//           "none"
//         )
//       ).to.deep.equal([]);
//     });
//   });
// });
const {expect} = require('chai')
const {bookSelection} = require('./solution')

describe('Test', () => {
    describe('isGenreSuitable', () => {
        it('happy path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Comedy', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Comedy', 10)).to.equal('Those books are suitable');
        })
        it('inappropriate genre for ages', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
        })
        it('inappropriate genre for ages, edge case', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        })
    })
    describe('isItAffordable', () => {
        it('happy path', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
        })
        it('happy path,edge case', () => {
            expect(bookSelection.isItAffordable(1, 1)).to.equal(`Book bought. You have 0$ left`);
        })
        it('not enough money', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal(`You don\'t have enough money`);
        })
        it('invalid inputs', () => {
            expect(() => bookSelection.isItAffordable('1', 1)).to.throw();
        })
        it('invalid inputs', () => {
            expect(() => bookSelection.isItAffordable(1, '1')).to.throw();
        })
        it('invalid inputs', () => {
            expect(() => bookSelection.isItAffordable('1', '1')).to.throw();
        })
    })
    describe('suitableTitles', () => {
        it('happy path, single match', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            }], 'a')).to.deep.equal(['aa']);
        })

        it('happy path, two matches', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            },
                {
                    title: 'ab',
                    genre: 'a'
                },
                {
                    title: 'abc',
                    genre: 'b'
                }], 'a')).to.deep.equal(['aa', 'ab']);
        })
        it('no matches', () => {
            expect(bookSelection.suitableTitles([
                {
                    title: 'bb',
                    genre: 'b'
                }], 'a')).to.deep.equal([]);
        })
    })

})
