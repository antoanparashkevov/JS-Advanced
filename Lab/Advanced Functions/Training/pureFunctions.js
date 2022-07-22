//one example for Pure function is one function that accepts only own arguments, not from outside
//and to be precise, not to console.log the result, but to return it. If all conditions are fulfilled
//the state of this function will be constantly every time

function pureFunc (count,n){
    count+=n;
    return count
}

console.log(pureFunc(1,1))
console.log(pureFunc(1,1))
console.log(pureFunc(1,1))
console.log(pureFunc(1,1))
console.log(pureFunc(1,1))
//no matter how many times invoke globally this function, it will have the same behaviour


//pure function with side effects  (inpure function to be precise)
let counter = 0
function increment(n){
    counter+=n;
    return counter
}

console.log(increment(1))//0+1
console.log(increment(1))//1+1