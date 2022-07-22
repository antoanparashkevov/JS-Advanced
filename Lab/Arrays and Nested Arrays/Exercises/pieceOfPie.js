function pieceOfPie(array, start, end) {
    let startIndex = array.indexOf(start)
    let endIndex = array.indexOf(end)
    console.log(startIndex, endIndex)
    let result = array.slice(startIndex, endIndex + 1)//because endIndex is not included, we add one
    return result
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
