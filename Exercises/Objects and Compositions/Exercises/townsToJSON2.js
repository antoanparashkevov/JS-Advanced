function townsToJSON2(array) {
    let result = [];

    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude)
            this.Longitude = Number(longitude)

        }
    }

    for (let i = 1; i < array.length; i++) {
        //or .filter(x=>x.length!=0)
        let [cityName,lat,long] = array[i].split('|').map(el => el.trim()).filter(x => x)
        // console.log(cityName)
        // console.log(lat)
        // console.log(long)
        lat = Number(lat).toFixed(2)
        long = Number(long).toFixed(2)
        let town = new Town(cityName,lat,long)
        result.push(town)
    }
    return JSON.stringify(result)
}

console.log(townsToJSON2(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))
