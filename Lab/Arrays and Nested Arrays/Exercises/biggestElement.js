function biggestElement(array) {
    let result = []
    for (let row of array) {
        let element = row.sort((a, b) => a - b).pop()
        result.push(element)
    }
    let number = result.sort((a, b) => a - b).pop()
    console.log(number)
    // console.log(result)
}

biggestElement(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
)
