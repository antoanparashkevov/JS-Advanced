//when we execute this as an object method with (this.someKey), the context is a reference to a parent object
let obj = {
    name:"Nadia",
    age:18,
    sayHi(){
        console.log(`${this.name}, says Hi to you!`)
    }
}

obj.sayHi()


let obj2 = {
    name:"Antoan",
    age:18,

}

obj2.sayHi = obj.sayHi

console.log(obj2.sayHi === obj.sayHi)
//same functions, same addresses in the memory, but key word 'this' refer to different object
//(the object on the left side)

obj2.sayHi()


const newFunc = obj.sayHi//here we don't have context and that's why will print 'undefined'

console.log(typeof newFunc)
newFunc()
//execution context can be changes at any time

let obj3 = {
    name:"Pavel"
}

obj3.sayHi = newFunc

obj3.sayHi()
