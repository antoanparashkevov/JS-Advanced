function solve3(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    //we create a constructor
    throw new Error('stop now!')
    //unreachable code
    console.log(5)
    console.log(6)
    console.log(7)
}


function demo3(){
    console.log('a')
    console.log('b')
    console.log('c')
    try{
        solve3()
    }
    catch (error){
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)//stack trace
    }



    //unreachable code
    console.log('d')
    console.log('e')

}
demo3()

//stack trace will say the line that finds the error
///Users/tonkata1505/Documents/Programming/Web Development/Software University/JS Advanced Module/JS Advanced/15.Unit Testing and Error Handling/Training/throwingAnError.js:7
