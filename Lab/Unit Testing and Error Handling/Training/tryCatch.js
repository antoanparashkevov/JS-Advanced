//try statement tests for errors some block of code
function solve2() {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    //we create a constructor
    try {

        throw new Error('stop')
    } catch (error) {

        console.log('i caught the error')
        console.log(error)
    }
    //unreachable code
    console.log(5)
    console.log(6)
    console.log(7)
}


function demo1() {
    console.log('a')
    console.log('b')
    console.log('c')
    solve2()

    //unreachable code
    console.log('d')
    console.log('e')

}

demo1()

