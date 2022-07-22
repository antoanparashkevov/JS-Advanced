function sortingAnArray(arr, type) {
    //sort is higher-order function in our case and it modify the current array, not to make a copy of it
    // if (type === "asc") {
    //     arr.sort((a, b) => a - b)
    // } else {
    //     arr.sort((a, b) => b - a)
    // }
    // return arr
    const methods ={
        asc:(a, b) => a - b,
        desc:(a, b) => b - a
    }

    return arr.sort(methods[type])
}

console.log(sortingAnArray([14, 7, 17, 6, 8], 'asc'));
