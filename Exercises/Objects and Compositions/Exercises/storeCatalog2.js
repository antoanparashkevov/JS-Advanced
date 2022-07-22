function storeCatalog2(array) {
    let object = {}
    for (let line of array) {
        let [fruit, price] = line.split(' : ');//[apricot,20.4], but we destructure the array
        let letter = fruit[0];
        price = +price
        if (object.hasOwnProperty(letter) === false) {
            object[letter] = {};
        }
        object[letter][fruit] = price
    }
    let keys = Object.keys(object).sort((a, b) => a.localeCompare(b))
    for(let key of keys){
        console.log(key)
        let sortedProducts = Object.keys(object[key]).sort((a,b)=>a.localeCompare(b))
       for(let product of sortedProducts){
           console.log('  '+product+": "+object[key][product])
       }
    }
}

storeCatalog2(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])
