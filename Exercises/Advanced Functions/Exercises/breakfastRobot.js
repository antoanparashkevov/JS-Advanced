function solution() {
    /*
•	apple - made with 1 carbohydrate and 2 flavour
•	lemonade - made with 10 carbohydrate and 20 flavour
•	burger - made with 5 carbohydrate, 7 fat and 3 flavour
•	eggs - made with 5 protein, 1 fat and 1 flavour
•	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
*/
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }


    let macros = {
        carbohydrate: 0,
        fat: 0,
        protein: 0,
        flavour: 0,

    }
    const commands = {
        restock,
        prepare,
        report
    }
    return manager

    function manager(line) {
        let [command, p1, qty] = line.split(' ');
        return commands[command](p1, qty)

    }

    function restock(type, qty) {
        macros[type] += Number(qty)
        return 'Success'
    }
    function prepare(recipe,qty){
        qty = Number(qty)

        const currRecipe = Object.entries(recipes[recipe])
        // console.log(currRecipe)
        currRecipe.map(array=>array[1]*=qty)
        // console.log(currRecipe)

        for(let [ingredient,required] of currRecipe){
            if(macros[ingredient] <required){
                return `Error: not enough ${ingredient} in stock`
            }
        }

        currRecipe.forEach(([ingredient,required])=> macros[ingredient]-=required
        )
        return 'Success'
    }
    function report(){
        return `protein=${macros["protein"]} carbohydrate=${macros["carbohydrate"]} fat=${macros["fat"]} flavour=${macros["flavour"]}`
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));



