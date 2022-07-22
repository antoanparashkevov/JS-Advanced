function getFibonator2() {
    return (function() {
        const next = this.previous + this.current;//0+1, 1+1, 3, 5
        this.previous = this.current;//1, 1, 2,
        this.current = next//1, 2, 3

        return this.previous

    }).bind({
        previous:0,
        current:1
    })
    //we change the context for 'this' object
}

let fib = getFibonator2();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
