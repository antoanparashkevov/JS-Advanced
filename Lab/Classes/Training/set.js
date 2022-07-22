// Set is a collection only with keys, a unique, not repeatable keys.
//We have only 3 methods and 1 property
//add, has, clear
//size
const mySet = new Set([1,2,2,3,4,5])
console.log(mySet)
mySet.add(8)
console.log(mySet)
console.log(mySet.has(1))
mySet.clear()
console.log(mySet)
console.log(mySet.size)
