function biggerHalf(array) {
    array.sort((a, b) => a - b);
    // console.log(array)
    let result = []
    for (let i = Math.floor(array.length / 2); i < array.length; i++) {//if 3.5 is the middle, with Math.floor now is 3.
        result.push(array[i])
    }
    return result
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))
