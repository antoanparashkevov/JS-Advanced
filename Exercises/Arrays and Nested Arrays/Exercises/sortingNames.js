function sortingNames(array) {
    let result = []
    array.sort((a, b) => b - a)
    console.log(array)
    // for (let i = 0; i < array.length; i++) {
    //     result.push(array.pop())
    //     result.push(array[i])
    // }
    while(array.length !==0){
        result.push(array.pop())//from end
        result.push(array.shift())//from beginning
    }
    return result
}

console.log(sortingNames([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
