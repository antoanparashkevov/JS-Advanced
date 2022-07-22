// Any functions that returns a boolean value
// predicates are often found in the callback forms
let array  = [1,2,3,4,5,6,7,8,9,10];

let found = array.find(isFound);
//find function returns the element that observe the condition

function isFound(element){
    return element > 5
}

console.log(found)