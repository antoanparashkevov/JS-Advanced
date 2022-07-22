function printEveryNthElement(arr, step) {
    return arr.filter((x, i) => i % step === 0)
}

console.log(printEveryNthElement(['5',
        '20',
        '31',
        '4',
        '20'],
    2
))
