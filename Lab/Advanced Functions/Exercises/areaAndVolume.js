function solve(areaIn, volIn, input) {
  let arrayOfObjects = JSON.parse(input);
  //   console.log(arrayOfObjects);

  //to transform this object to be cube object
  //   const cube = arrayOfObjects[0];

//   const result = [];
//   for (const cube of arrayOfObjects) {
//     const currentCube = {
//       area: areaIn.call(cube),
//       volume: volIn.call(cube),
//     };
//     result.push(currentCube);
//   }
//or with mapping operation
// const result = arrayOfObjects.map(cube=>{
//     const currentCube = {
//         area: areaIn.call(cube),
//         volume: volIn.call(cube)
//     }
//     return currentCube;
// })
//or with shortcut operation
const result = arrayOfObjects.map(cube=>({
    area: areaIn.call(cube),
    volume: volIn.call(cube)
}))
//because interpretator will think that these curly braces are our body of the arrow function,
//we must wrap it into ()

  //   console.log(cube)
  //   areaIn.call(cube);
  //   console.log(areaIn.call(cube));
  //   volIn.apply(cube);

  return result;
}

console.log(solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));

function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
