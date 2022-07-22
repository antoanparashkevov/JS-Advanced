function storeCatalog(array) {
    let object = {}
//    { A: {Apricot:20.4, Apple:20.4}}

    for (let line of array) {
        let [fruit, price] = line.split(' : ')
        price = +price
        let letter = fruit[0];
        if (object.hasOwnProperty(letter) === false) {
            object[letter] = {};
        }
        object[letter][fruit] = price
    }
    console.log(object)
    let keys = Object.keys(object).sort((a, b) => a.localeCompare(b))
    let values = Object.values(object).map((obj) => Object.keys(obj).sort((a, b) => a.localeCompare(b)))
    console.log(keys)
    console.log(values)

    for (let [key, value] of Object.entries(object)) {
        console.log(key)
        console.log(`${Object.keys(value).sort((a, b) => a.localeCompare(b)).map(el=>el).join(`\n`)}`)

    }


}

storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
