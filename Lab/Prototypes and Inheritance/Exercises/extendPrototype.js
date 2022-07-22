//this will extend Person prototype
function extendPrototype(classDef){
    classDef.prototype.species = 'Human';
    classDef.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`
    }
}
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.toString = function (){
    return `To string method from prototype of ${this.name}`
}
extendPrototype(Person)

const person1 = new Person('Peter',34)
console.log(person1.toSpeciesString())
console.log(person1.species)
console.log(person1.toString())
