//when we use seal(), we lock the object and we can't add more properties
//also, all properties are set to configurable:false and can't be unlocked for changing
const obj = {
    name:'Antoan'
}
Object.seal(obj)
obj.age = 25
console.log(obj)

//when we use freeze(), we do the same, but in addition, it set writable to false
Object.freeze(obj)
console.log(obj)

//when we use preventExtension(), we can read it, change the configurations, but can't add more properties

const obj2 = {
    name:'Antoan'
}

Object.preventExtensions(obj2)
obj2.age = 25;
console.log(obj2)
