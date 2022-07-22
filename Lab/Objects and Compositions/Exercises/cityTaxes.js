function cityTaxes(name, population, treasury) {
    let object = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100)
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100)
        }

    }
    return object
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);
city.collectTaxes()//treasury = 85 000
city.applyGrowth(10)
city.applyRecession(10)//93 500
console.log(city.treasury)
console.log(city.population)


cityTaxes()
