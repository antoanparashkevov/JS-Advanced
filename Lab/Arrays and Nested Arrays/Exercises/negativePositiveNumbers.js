function negativePositiveNumbers(array) {
//    let negativeArray = array.filter((x)=>x<0)
//    console.log(negativeArray)
//     let positiveArray = array.filter(x=>x>=0)
//     let result = negativeArray.concat(positiveArray)
//     console.log(result)
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.unshift(array[i])
        } else {
            result.push(array[i])
        }
    }
    console.log(result.join('\n'))
}

negativePositiveNumbers([7, -2, 8, 9])
