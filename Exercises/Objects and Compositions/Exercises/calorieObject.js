function calorieObject(array){
    let object = {}
    for(let i = 0;i<array.length;i+=2){
        object[array[i]] = Number(array[i+1])
    }
    while(array.length !==0){
        let product = array.shift();
        let calories = array.shift()
        object[product] = Number(calories)
    }
    console.log(object)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
