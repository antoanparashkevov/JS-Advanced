//the convention for initializing a class is naming with a PascalCase

//this is absolute valid class definition
class MyClass {

}

//every instance knows from where it becomes. From what class name. When we console.log it, we can see it
const myInstance = new MyClass();//this is how to instance a new object from Class
console.log(myInstance)

class newClass {
    //constructor is a special method for classes. Just like when we create an empty object and put inside of if some methods
    constructor() {
        //we can create a properties for future object instances
        this.name = "Peter";//like that, or with parametrizing, not hard coding
    }
}

const newInstance = new newClass()
console.log(newInstance)

class newClass2{
    constructor(name) {
        this.name = name;
    }
    //every class may have multiple methods. The so-called behavior
    sayHello(){
        console.log('Hello, ' + this.name)
    }
    sayHello2(){
       return 'Hello, ' + this.name
    }
}

const newInstance2 = new newClass2('Peter')
const newInstance4 = new newClass2('Peter')
console.log(newInstance2)
newInstance2.sayHello()
console.log(newInstance2.sayHello2())

//when we take out the context from the instance
//'this' keyword will not be responsible for the class context.
// const myFunc = newInstance2.sayHello
// myFunc()

const newInstance3 = {
    name:"Antoan",
    age:20,
    sayHello(){
        console.log('Say hi!')
    }
}
console.log(newInstance2)
console.log(newInstance3)

//when we create an object without using a class and console.log it, we will see all methods inside of it,
//when we create an object instance using a class and console.log it,
//we will see only the properties that was created inside of the constructor


//all methods inside of class are stored on central spot. And every object instance makes address copy from class methods,
//not separate reference
console.log(newInstance4.sayHello() === newInstance3.sayHello())
