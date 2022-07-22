class newClass {
    constructor(name, age, city) {
        if (Number.isInteger(age) === false) {
            throw new TypeError('Age must be an integer')
        }
        // if (typeof age === "number") {
        //     throw new TypeError('Age must be a number')
        // }
        this.name = name;
        this.age = age;
        this.city = city
    }
}

const newInstance = new newClass('Antoan', 22.2, 'Pleven')
console.log(newInstance)
