function solve() {
    let textArray = document.getElementById('text').value.split(' ')
    let convention = document.getElementById('naming-convention').value
    // console.log(textArray)
    let result = [];
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i].toLowerCase()
        if (convention === "Camel Case") {
            if (i !== 0) {
                textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].substring(1).toLowerCase()
            }
        } else if (convention === "Pascal Case") {
            textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].substring(1).toLowerCase()
            // console.log(textArray[i])
        } else {
           return document.getElementById('result').textContent = "Error!"
        }
        // console.log(textArray[i])
        result.push(textArray[i])

    }
    // console.log(result.join(''))
    let resultInfo = document.getElementById('result')
    resultInfo.textContent = result.join('')

}
