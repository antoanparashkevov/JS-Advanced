const sum = require('./myModule')

//require is embedded functionality of node.js

console.log(sum(5,6))


//a so called concept anonymous export is not recommended because we don't know the idea of the export stuff


//we put all stuff into an object so we can destructure the object but
// THE NAMES MUST BE EQUAL EVERY TIME WHEN DESTRUCTURE THE OBJECT

// const {sum2} = require('./destructuringExports')
// const {product} = require('./destructuringExports')
//or
const anotherSum = require('./destructuringExports').sum2()
const anotherProduct = require('./destructuringExports').product()
