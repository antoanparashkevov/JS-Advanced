function cookingByNumbers(number, op1, op2, op3, op4, op5) {
    let chop = (x) => x / 2;
    let dice = (x) => Math.sqrt(x)
// let dice = (x)=>Math.sqrt(x)
    let spice = (x) => ++x;
    let bake = (x) => x * 3;
    let fillet = (x) => x - x * 0.2
    // let fillet = (x)=> x*0.8

    let operations = [op1, op2, op3, op4, op5]
    for (let operation of operations) {
        // console.log(operation(number))
        switch (operation) {
            case "chop":
                number = chop(number)
                console.log(number)
                break;
            case "dice":
                number = dice(number)
                console.log(number)
                break;
            case "spice":
                number = spice(number)
                console.log(number)
                break;
            case "bake":
                number = bake(number)
                console.log(number)
                break;
            case "fillet":
                number = fillet(number)
                console.log(number)
                break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
