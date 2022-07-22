function encodeAndDecodeMessages() {
    console.log('TODO...')
    let textArea = document.querySelectorAll('textarea')
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', encode)
    buttons[1].addEventListener('click', decode)

    function encode() {
        let encodedMessage = ''
        let input = textArea[0].value;
        for (let letter of input) {
            encodedMessage += String.fromCharCode(letter.charCodeAt(0) + 1)//from normal to encoded (+1)
        }
        textArea[1].value = encodedMessage
        textArea[0].value = ''
    }

    function decode() {
        let decodedMessage = '';
        let input = textArea[1].value;
        for (let letter of input) {
            decodedMessage += String.fromCharCode(letter.charCodeAt(0) - 1)//from encoded to decoded (-1)
        }
        textArea[1].value = decodedMessage;
    }
}
