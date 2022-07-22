let word = 'antoan'

let letter1 = word.charAt(0)
let letter2 = word.charCodeAt(0)

console.log(letter1)//take first letter
console.log(letter2)//take a code of the letter corresponding in ASCII table
console.log(String.fromCharCode(letter2))//from ASCII code to letter again
console.log(String.fromCharCode(letter2 +1))//from ASCII code to letter again
console.log(letter2)//ASCII code corresponding to 'a'
let letter3 = word.charCodeAt(0) + 1
console.log(letter3)//ASCII code corresponding to 'b'


//charAt(index) => works on arrays and strings and output the element of the given index
//charCodeAt(index) => works on arrays and strings and output the ASCII code of the element of the given index
//fromCharCode(ASCII_code) => from ascii number to a corresponding letter/digit


let ascii_code = 48;
console.log(String.fromCharCode(ascii_code))
