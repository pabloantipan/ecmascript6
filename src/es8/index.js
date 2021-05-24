const data = {
    frontend: 'Andres',
    backend: 'Pablo',
    design: 'Patricio',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));

// aync and await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World'), 3000):
            reject(new Error('Test Error'));
    });
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello)
}
helloAsync();


const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }

}
anotherFunction();

// promise example from post
// for next about async
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    // console.log('This is the number:', number)
    setTimeout(
        () => number > 5 ?
        resolve(number) :
        reject(new Error('Menor a 5')),
        1000
    );
});
promise
    .then(number => console.log(number))
    .catch(error => console.error(error));