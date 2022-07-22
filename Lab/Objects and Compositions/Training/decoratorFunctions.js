//instead of having a functions that later to compose in our object (factory functions),
//the decorator function accept that we previously create our object somewhere and pass this object as an argument to the function,
//and the function will give to the object some behaviour

function solve() {
    let object = {
        name: "Antoan",
    }

    function printName(person) {//decorator function
        person.print = () => console.log(`My name is ${person.name}`)
    }
    console.log(object)
    printName(object)//it creates a behaviour, therefore it creates a property with name print and as a key our function
    console.log(object)
    object.print()//it prints 'My name is Antoan'
    const fn=  object.print
    fn()
    console.log(object.print === fn)


}

solve()

