function diagonalSums(array) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
        mainDiagonal += array[rowIndex][rowIndex];//array[0][0],array[1][1]
        secondaryDiagonal += array[rowIndex][array.length - 1 - rowIndex];//array[0][2],//array[1][1]
    }
    console.log(mainDiagonal, secondaryDiagonal);

}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)
