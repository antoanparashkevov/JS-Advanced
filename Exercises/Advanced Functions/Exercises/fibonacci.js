function getFibonator() {
    let current = 0;
    let next = 1;
    return () => {
        const afterNext = current + next;//0+1, 1+1, 3, 5
        current = next;//1, 1, 2,
        next = afterNext//1, 2, 3

        return current
    }
}
//because we set a state with Closure, the interpreter reminds where is gone with the numbers and continues from there.
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
