function extractIncreasingSubset(array) {
    let result = [];
    let biggest = array[0];//always starts from beginning
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggest) {//if current number is bigger or equal to the current biggest number, replace it and push it into our array
            result.push(array[i])
            biggest = array[i]
        }
    }
    return result
}

console.log(extractIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))
