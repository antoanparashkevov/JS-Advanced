function townPopulation(array) {
    let result = {}
    for (let command of array) {
        let town = command.split(' <-> ')
        // console.log(town)
        result[town[0]] = town[1]
    }
    // console.log(result)
    for (let key in result) {
        console.log(`${key} : ${result[key]}`)
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
