function solve(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    //we create a constructor
    throw new Error('stop')
    //unreachable code
    console.log(5)
    console.log(6)
    console.log(7)
}


function demo(){
    console.log('a')
    console.log('b')
    console.log('c')
    solve()

    //unreachable code
    console.log('d')
    console.log('e')

}
demo()

//stack trace will say the line that finds the error
///Users/tonkata1505/Documents/Programming/Web Development/Software University/JS Advanced Module/JS Advanced/15.Unit Testing and Error Handling/Training/throwingAnError.js:7
