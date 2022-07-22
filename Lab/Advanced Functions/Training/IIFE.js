//this is a legacy way of doing
//stands for Immediately-Invoked Function Expressions 
// (stands for anonymous functions, not by default declared functions)

let result = (function (){
    let name = "Peter"
    return name
})();

console.log(result);

