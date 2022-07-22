// function arguments(...rest) {
//     console.log(rest)
// }
//
// arguments(1, 2, 3)
//or
function arguments() {
    // console.log(arguments)//a special object with arguments
    const args = Array.from(arguments)

    let types = {};
    for (let arg of args) {
        let typeOfArg = typeof arg;
        console.log(`${typeOfArg}: ${arg}`)
        if (!types.hasOwnProperty(typeOfArg)) {
            types[typeOfArg] = 0
        }
        types[typeOfArg]++
    }
    // console.log(types)
   const result = Object.entries(types).sort((a, b) => b[1] - a[1]
    )

    for(let [type,value] of result){
        console.log(`${type} = ${value}`)
    }

}

// arguments(1, 2, 3)
arguments(1, 2, 3, 'antoan', function () {
    console.log('test')
}, {a: 1}, [1, 2, 3])
