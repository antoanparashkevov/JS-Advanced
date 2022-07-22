function processOddPositions(array){
   // const odd = array.filter((x,i)=>i%2!==0)
   //  // console.log(odd)
   //  const doubled = odd.map((x)=>x*2)
   //  // console.log(doubled)
   //  const reverse = doubled.reverse()
   //  console.log(reverse)
   let result = array.filter((x,i)=>i%2!==0).map(x=>x*2).reverse()
    console.log(result.join(' '))

}
processOddPositions([10, 15, 20, 25])

const solve = (array)=> array
    .filter((x,i)=>i%2!==0)
    .map(x=>x*2)
    .reverse()
    .join(' ');

console.log(solve([10, 15, 20, 25]))
