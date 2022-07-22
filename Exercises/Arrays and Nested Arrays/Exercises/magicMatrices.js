function magicMatrices(array) {
    let isMagic = true;
    for (let rowIndex = 0; rowIndex < array.length - 1; rowIndex++) {
        // console.log(array[rowIndex])
        let sumFirstRow = array[rowIndex].reduce((a, b) => a + b, 0);
        let sumSecondRow = array[rowIndex + 1].reduce((a, b) => a + b, 0);
        // console.log(sumFirstRow)
        // console.log(sumSecondRow)
        let sumFirstCol = 0;
        let sumSecondCol = 0;
        for (let colIndex = 0; colIndex < array.length; colIndex++) {
            sumFirstCol+=array[rowIndex][colIndex]//00,01,02,03...
            sumSecondCol+=array[rowIndex+1][colIndex]//10,11,12,13...
        }
        if(sumFirstRow !== sumSecondRow || sumFirstCol !==sumSecondCol){
            isMagic = false;
        }
    }
    return isMagic

}

console.log(magicMatrices([[4, 5, 2],
    [2, 5, 4],
    [5, 5, 1]]
));
