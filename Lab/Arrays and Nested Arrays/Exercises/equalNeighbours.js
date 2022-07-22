function equalNeighbours(array) {

    let counter = 0

//check columns
//     console.log('==== Checking Columns ====')
    let rowSize = array[0].length
    for (let colIndex = 0; colIndex < rowSize; colIndex++) {
        for (let rowIndex = 0; rowIndex < array.length - 1; rowIndex++) {
            // console.log(array[rowIndex][colIndex], array[rowIndex + 1][colIndex])
            if(array[rowIndex][colIndex] === array[rowIndex + 1][colIndex]){
                counter++
            }
        }
        // console.log('====')
    }
    // console.log('==== Checking Rows ====')
//check rows
    for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
        for (let colIndex = 0; colIndex < array[rowIndex].length - 1; colIndex++) {
            // console.log(array[rowIndex][colIndex], array[rowIndex][colIndex + 1])
            if(array[rowIndex][colIndex] === array[rowIndex][colIndex + 1]){
                counter++
            }
        }
        // console.log('====')
    }
    console.log(counter)
}

equalNeighbours([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
)
