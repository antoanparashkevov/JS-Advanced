function autoCompany(arrayOfCars){
    const factory = new Map()
    while(arrayOfCars.length > 0){
        let [brand,model,quantity] = arrayOfCars.shift().split(' | ');
        quantity = +quantity
        if(!factory.has(brand)){
            // const models = new Map();
            // models.set(model,quantity)
            factory.set(brand, new Map())
        }
       if(!factory.get(brand).has(model)){
           factory.get(brand).set(model,0)
       }

           factory.get(brand).set(model,factory.get(brand).get(model) + quantity)




    }
    // console.log(factory)
    for(let brand of factory){
        console.log(brand[0])
        for(let model of brand[1]){
            console.log('###'+model[0]+' -> '+model[1])
        }
    }
}
autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
