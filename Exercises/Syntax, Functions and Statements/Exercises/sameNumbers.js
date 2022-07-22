function sameNumbers(number) {
    let numberAsString = number.toString()
    let firstDigit = numberAsString[0]
    // console.log(firstDigit)
    let isSame = true;
    let sum = 0;
    for (let i = 1; i < numberAsString.length; i++) {
        if (firstDigit !== numberAsString[i]) {
            isSame = false
        }
    }
    numberAsString.split('').forEach(x=>{
        x = +x;
        sum+=x})
    console.log(isSame)
    console.log(sum)
    // console.log(numberAsString.split(''))
}

sameNumbers(2222222)
sameNumbers(1234)
