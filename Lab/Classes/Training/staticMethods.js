class newClass{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    static printText = 'Pleven'
    static sayHello(){
        console.log("Hello, I don't have access to this object!")
        console.log('Im from ' + this.printText)
    }
}

const myInstance = new newClass('Antoan',22,'Pleven')

// myInstance.printText()
console.log(newClass.printText)
newClass.sayHello()
