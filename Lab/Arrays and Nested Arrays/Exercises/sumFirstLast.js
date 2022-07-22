function sumFirstLast(array){
    let first = +array.shift()
    let last = +array.pop()
    let sum = first+last;
    console.log(sum)
}
sumFirstLast(['20', '30', '40'])
