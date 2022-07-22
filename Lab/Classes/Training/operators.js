class newClass{
    constructor(name) {
        this.name = name
    }
}

const newInstance = new newClass('Antoan')
//we have a special operator that returns boolean exp for checking one instance from what class was defined.
console.log(newInstance instanceof newClass)

console.log(newInstance instanceof Object)
