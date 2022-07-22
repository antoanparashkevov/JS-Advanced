function createExecutor(myFunc, text) {
  const str = myFunc();

  return executor;

  function executor() {
    console.log(str + text);
  }
}

function printText() {
  return "Hello ";
}
//we have one function that calls another nested function

let ex1 = createExecutor(printText, "World");
// createExecutor(printText,"World")//we can't invoke it like that, we must store it into variable
console.log(typeof ex1);
ex1();


//these two type of functions are called higher-order functions
//type one is a function that is executed as an argument of another function
//type two is a function that returns another nested function