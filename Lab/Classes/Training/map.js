//Map is a collection that is created by class. It is the same like objects, it stores elements in insertion order just like objects
const myMap = new Map()

myMap.set('first',1)
//The key of the Map collection may kept all types of data (reference types, string, number, etc)

console.log(myMap)


//for of works the same like Object.entries on default object

for(let entry of myMap){
    console.log(entry)//returns KVP - Key-Value Pair
}

//the difference between default object and Map collection is that these three methods are invoked on the Instance directly, not on the Object Library
//*ex: Object.entries(myMap)
console.log(myMap.entries())
console.log(myMap.keys())
console.log(myMap.values())
//these three methods returns an iterator. That means we must put it into for loop, not by indexing it directly

//how to get a value from key
console.log(myMap.get('first'))

//just like myMap.hasOwnProperty('first') on default object, we have built-in method
console.log(myMap.has('first'))

//just like remove operator on default object, we have built-in method
myMap.delete('first')
console.log(myMap)

//just like length property on arrays and objects, we have built-in method
console.log(myMap.size)

//we have a special method for empty the whole collection
myMap.clear()

//to sort a Map collection, first we must transform it into an array
//we have two cases

//First Case
myMap.set('first',1)
myMap.set('second',2)
myMap.set('third',3)
let toSort = Array.from(myMap)

//don't change the original Map Collection, only makes a copy
console.log(toSort)
console.log(myMap)

//Second Case
//with spread operator
let toSort2 = [...myMap]
console.log(toSort2)
console.log(myMap)


