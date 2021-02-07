let fibonacci = {};

fibonacci[Symbol.iterator] = function () {
    const fib = [0, 1];
    let i = 2;
    return {
        next: () => {
            if (i >= 2) {
                fib[i] = fib[i - 1] + fib[i - 2]
            }
            return {
                done: false,
                value: fib[i++ - 2]
            }
        }
    }
}

// const iterator = fibonacci[Symbol.iterator]()
// console.log('value', iterator.next().value);

let i = 0;
for (const fibonacciElement of fibonacci) {
    if (i++ > 10) break;
    console.log(fibonacciElement)
}
