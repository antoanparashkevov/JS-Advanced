function sum(a,b){
    return a+b
}

//global is an object from node.js side (back-end)
//windows is an object from browser side (front-end)
//global has various API's (objects)
//one of them is module
//module has a special property named exports
//that allows us to export a function or object of functions
//all export functions (or whatever we want to export), can be accessible from outside the file (the scope

module.exports = sum
