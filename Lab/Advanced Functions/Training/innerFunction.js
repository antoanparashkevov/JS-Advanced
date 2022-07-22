function printContext(){
    console.log(this)
}

const obj = {
    counter:1,
    printContext
}

obj.printContext()//'this' object now refers to the left side of dot (object)

//but if we have an inner function inside of other function that we want to compose it into another object
function printContext2(){
    inner();//we invoke it on the global scope

    function inner(){
        console.log(this)
    }
}

const obj2={
    counter:1,
    printContext2
}

obj2.printContext2()
//now we refer to the global scope because in printContext2 we invode 'inner' function
//but this function is invoking on the global scope