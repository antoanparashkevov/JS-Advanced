function deckOfCards(array) {


    //`Invalid card: ${card}`
    let result = []
    for (let cardAsString of array) {
        const face = cardAsString.slice(0, -1)
        const suit = cardAsString.slice(-1)
        try {
            const card = createCards(face, suit)
            result.push(card)
        } catch (error) {
            result = [`Invalid card: ${cardAsString}`]
        }

        //despite of calling explicitly toString() override method, if we join the result array, we will have the same result
        // result.push(createCards(face,suit).toString())
    }
    console.log(result.join(' '))

    function createCards(face, suit) {
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
}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['AS', '10D', 'KH', '2C', '1A'])
