// function printContext(){
    // console.log(this)
// }
// printContext()//global invoke and 
//it will print the global object on the node.js space
//it will print the windows object on the browser space


//this two ways for typing the functions are the same
//that's why 'this' object points to the global object

//if we want to see the window object, type window.(function name)
//if we want to see the global object, type object.(function name)
window.printContext = function(){
    console.log(this)
}
// printContext()
//or
// global.printContext()
//or if we want to see the window object
window.printContext()