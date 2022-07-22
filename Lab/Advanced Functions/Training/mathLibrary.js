const arr = [1,2,3,4,5,11]

console.log(Math.max(arr))
console.log(Math.max(...arr))
//with spread operator behind the scenes it will spread the whole array into alone values
console.log(Math.max.apply(null,arr))
console.log(Math.max.apply(undefined,arr))
//if we don't want to change the context for this object, type 'null' or 'undefined' on the first arg
//behind the scenes, apply method will spread the array into the individual values
console.log(Math.max.call(null,...arr))
//this is the only difference between 'apply' and 'call'.
//'call' doesn't spread the array implicitly, so we need to spread it on hand
