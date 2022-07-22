//composing by definition is to combine simple structures into more complex ones
function sayHi() {
    console.log(`${this.name} says hi`)
}

let person1 = {
    name: "Antoan",
    age: 17,
    sayHi//here we compose the function

}
//or
let locations = {
    city:"Pleven",
    country:"Bulgaria",
    address:{street:"General Kolev",number:2}//here we compose the subObject (nested object)
}
//or
function solve(name,address,city){
    let location = {
        name,
        address,
        city
        //here, we take variables(arguments) and put it into more complex place (an object)
    }
}
let person2 = {
    name: "Nadia",
    age: 17,
    sayHi

}
person1.sayHi()
person2.sayHi()
console.log(person1.sayHi === person2.sayHi)//we copy the address in the memory because functions are reference type of data.
