function sumOfNumbers(a,b){
    let result = 0;
    a = +a;
    b = +b;
    for(let i = a;i<=b;i++){
        result+=i
    }
    return result
}
console.log(sumOfNumbers('1', '5' ))