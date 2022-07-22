function addAndRemoveElements(array) {
    let result = [];
    let number = 0;

    for (let command of array) {
        number++;
        if (command === "add") {
            result.push(number)
        } else {
            result.pop()
        }
    }
    if(result.length === 0){
        console.log('Empty')
    }else{
        console.log(result.join('\n'))
    }
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)
