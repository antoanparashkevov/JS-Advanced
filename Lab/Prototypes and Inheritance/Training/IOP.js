//IOP - Internal Object Properties
'use strict';//to throw an errors in the console.

const obj = {
    name:'Antoan',
    age:25
}

Object.defineProperty(obj,'name',{
    enumerable:false//now, 'name' property can't loop
})
//can't iterate 'name' property
console.log(Object.keys(obj))
console.log(obj)


Object.defineProperty(obj,'age',{
    writable:false//now, 'age' property is read-only
})
// obj.age = 26//can't change 'age' property
// console.log(obj)

console.log(Object.getOwnPropertyDescriptors(obj))

//when we define 'configurable' to false, we can't change the enumerable property
//when we set configurable to false, we can't unlock it to true again! The same with writable property
obj.city = 'Pleven'
Object.defineProperty(obj,'city',{
    configurable:false
})

//we can't do this, but we can change the writable property
// Object.defineProperty(obj,'city',{
//     enumerable:false
// })
console.log(obj)

Object.defineProperty(obj,'lastName',{
    value:'Parashkevov',
    //we must define other 3 properties because by default they are falsy
    enumerable:true,
    configurable:true,
    writable:true
})

console.log(obj)

