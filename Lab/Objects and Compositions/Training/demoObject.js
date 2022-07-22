const person = {
    name:'Antoan',
    age:22,
    city:"Pleven",
    university:'Sofia University',
    work:'Web Developer'
//for escaping the control symbol on the key name, use ''
}


//with dot notation
console.log(person.name)
console.log(person)
person.secondJob = 'DevOps';
console.log(person)

//with index operator
console.log(person['name'])
console.log(person)
person['secondName'] = "Parashkevov"
console.log(person)

//for destructuring the object, we must use the same name variables like key names
//the sequence of typing the variables is not important
const {name,age} = person
console.log(name,age)


//the object is the collection of properties that describe one thing, like one person
//the Associative Array is like Dictionary and the structure is the same like the default Objects

