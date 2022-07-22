function townsToJSON(array) {
    let result = [];
    let [town, latitute, longitude] = array[0].slice(1, -1).split(' | ')
    town = town.trim()
    // console.log(town)
    longitude.trim()
    // console.log(town,latitute,longitude)
    array.shift()
    for (let token of array) {
        let object = {}
        let [city, width, length] = token.split(' | ')
        city = city.slice(1).trim()
        width.trim()
        length = length.slice(1, -1).trim()
        object[town] = city
        object[latitute] = Number(width).toFixed(2);
        object[longitude] = Number(length).toFixed(2)
        result.push(object)
    }
    let end = []
    result.forEach(obj => {
       obj = JSON.stringify(obj)
        end.push(obj)
    })
    console.log(end)

}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)
