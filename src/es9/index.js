const obj = {
    name: 'pablo',
    age: 32,
    country: 'CL',
};

let { name, ...all } = obj;
console.log(name, all);
console.log(all.constructor.name)

let { country, ...all2 } = obj;
console.log(all2);

// propagate structure
const obj = {
    name: 'Pablo',
    age: 38,
}
const obj1 = {
    ...obj,
    country: 'CL'
}
console.log(obj1)

// Finalize
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World'), 3000):
            reject(new Error('Test Error'))
    })
}
helloWorld().then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalize'))

// 
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);