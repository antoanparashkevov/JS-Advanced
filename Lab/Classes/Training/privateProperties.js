class newClass {
    //all private properties must be declared before constructor
    #age
    constructor(name,age,city){
        this.name = name;
        this.#age = age;
        this.city = city;

    }
    toString(){
        return `${this.name} is ${this.#age} years old`
    }
}

const newInstance = new newClass('Peter',24,'Pleven')
console.log(newInstance)

//not permitted for private properties
// console.log(newInstance.#age)

//but if we define a method inside of object, we can use a private properties and display it
console.log(newInstance.toString())
