// utils over arrays
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(-2));

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '                    hello world!';
console.log(hello)
console.log(hello.trimStart())

let hello = 'hello world!                     `';
console.log(hello)
console.log(hello.trimEnd())

// new error availiable in try catch
try {

} catch {
    error
}

// build and object from array 
let entries = [
    ['name', 'pablo'],
    ['age', 37]
]
console.log(Object.fromEntries(entries))

// symbols
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);