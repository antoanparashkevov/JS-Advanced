function cards(face, suit) {
    //S (♠), H (♥), D (♦), C (♣)
    const faces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ]
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if (faces.indexOf(face) === -1) {
        throw new Error('Invalid face: ' + face)
    }
    if (suits[suit] === undefined) {
        throw new Error('Invalid suit: ' + suit)
    }

    const result = {
        face,
        suit: suits[suit],
        toString() {//we are going to override the method
            return this.face + this.suit
        }
    }
    return result
}
console.log(cards('A', 'S').toString())
console.log(cards('10', 'H').toString())
console.log(cards('1', 'H').toString())
