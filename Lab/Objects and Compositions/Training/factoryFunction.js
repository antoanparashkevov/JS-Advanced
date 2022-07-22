//factory functions stands for constructors.
function sayPopulation(){
    console.log(`${this.population} numbers of people`)
}
function solve(name,population,city){
    let result ={
        //here we compose the variables(arguments) to more complex place(an object)
        name,
        population,
        city,
        sayHi(){
            console.log(`${this.name} says Hi!`)
        },
        sayPopulation//we compose the function
    }
    return result
}

//city is parametrized object!!!
let city = solve('Antoan',100000,"Pleven")//this takes the behaviour from the solve function
let city2 = solve('Nadia',99999,"Pleven")//the function sayHi is copied from the original one
console.log(city)
city.sayHi()
city.sayPopulation()
city2.sayHi()
city2.sayPopulation()

console.log(city.sayHi === city2.sayHi)//didn't copy the address

//the factory function regardless to the standard constructions, we don't have need to use 'this' key word

function createRectangle(width,height){

    //here we directly refer to the rectangle object
    const rectangle = {width,height}
    rectangle.area = ()=>rectangle.width * rectangle.height

    return rectangle
}


let bigRectangle = createRectangle(100,100)
let bigRectangle2 = createRectangle(200,100)
console.log(bigRectangle)

console.log(bigRectangle.area())
//here we have the context, because, on the left side, we have the object(bigRectangle) where we can refer with 'this' key word

//like the example, we don't use 'this' keyword, and when we try to execute something and lose the context,
//we don't have an error
let func = bigRectangle.area
console.log(func())

//but if we create the objects like below, every object will make a copy to the functions,
//therefore the function can't be stored into one address
console.log(bigRectangle.area === bigRectangle2.area)


