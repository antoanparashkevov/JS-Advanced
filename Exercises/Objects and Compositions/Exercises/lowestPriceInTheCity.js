function lowestPriceInTheCity(arrays){

    let products = {}
    for(let cities of arrays){
        let [city,product,price] = cities.split(' | ')
        price = +price;
        //if(products[product]) --> if we don't have this property, it will return undefined, therefore falsy value
        if(products.hasOwnProperty(product)){
            if(products[product].price > price){
                products[product].price = price
                products[product].city = city
            }
        }else{
            products[product] = {city,price}
        }
    }
    // console.log(products)
    //{productName} -> {productLowestPrice} ({townName})
    // for(let product in products){
    //     console.log(`${product} -> ${products[product].price} (${products[product].city})`)
    // }
    let productKeys = Object.keys(products)
    console.log(productKeys)
    for(let i = 0;i<productKeys.length;i++){
        // console.log(productKeys[i])
        console.log(`${productKeys[i]} -> ${products[productKeys[i]].price} (${products[productKeys[i]].city})`)
    }
    // console.log(products)
}
lowestPriceInTheCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'Varna | Orange | 1',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)
