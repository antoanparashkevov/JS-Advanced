const matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]
//because our matrix is a rectangle
const rowSize = matrix[0].length;

for (let colIndex = 0; colIndex < rowSize; colIndex++) {//our colIndex starts from 0 to the row size.
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {//we go through the rows.
        console.log(matrix[rowIndex][colIndex])//matrix[0][0],matrix[1][0],matrix[2][0]

    }
    console.log('----')
}
