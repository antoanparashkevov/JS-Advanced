//first type is Partial Application

//we can set some of arguments of one function to be a constant without executing the function directly
//best way to do this is annonymous functions

let f = (x,y)=>{x+y}
let g = (y)=>f(1,y)//i take 'y' var from g and fix it to f. That increments by 1

let sqrt = (x)=>Math.pow(x,2)

console.log(sqrt(2))