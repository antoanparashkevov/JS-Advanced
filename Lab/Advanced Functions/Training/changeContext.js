function changeContext(a, b) {
  console.log(a + b);
  console.log(this);
}

const obj = {
  counter: 7,
};

console.log("-=-=Apply method-=-=");
changeContext.apply(obj, [5, 10]);
console.log("-=-=Call method-=-=");
//this not only change the 'this' context, but also we invode the function and execute it
//but others arguments must be on the array
//and it implicitly will spread the arguments from array to individual values.
changeContext.call(obj, 5, 10);
//in call method, we don't have to explicitly put the arguments into the array

//the third method is 'bind' that makes a wrapper arround the function
//this is useful when we want to reuse many times one function with different 'this' context
console.log("-=-=-=-=-=-=-=-=-=");
console.log("Bind method");

const obj2 = {
  name: "Antoan",
};
const obj3 = {
  name: "Nadezhda",
};

const firstBoundFunction = changeContext.bind(obj2);
const secondBoundFunction = changeContext.bind(obj3);

console.log(typeof firstBoundFunction);
console.log(typeof secondBoundFunction);

firstBoundFunction(10, 5);
secondBoundFunction(10, 5);
