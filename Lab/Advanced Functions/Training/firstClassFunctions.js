//that means we can treat functions like primitives (variable for ex)

function execute(myFunc, text) {
  let str = myFunc();
  console.log(str + text);
}

// function printText() {
//   return "Hello ";
// }
const printText = ()=>"Hello "
const printText2 = ()=>"Antoan "

execute(printText2, "World");
