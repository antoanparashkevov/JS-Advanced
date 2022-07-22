function solve() {
    const arr = [1, 2, 3, 4, 5, 6]

    console.log(arr.reduce(reducer, 0))
    //0 is our accumulator, that is the value from where we are going to start with the first iteration
    //on the first iteration, the zero will go into the accumulator function
    //if we don't accept the second argument (0), it automatically will shift the first element from the array and use it at starting point
    //BUT only with numbers

    function reducer(accumulator, currValue) {
        console.log('accumulator: '+accumulator+" currValue "+ currValue)
        return accumulator + currValue
    }
}

solve()
