// news of ecma script 6

// old style
function newFunction(name, age, country) {
    var name = name || 'pablo';
    var age = age || 37;
    var country = country || 'Chile';

    console.log(name, age, country);
}
// es6 style
function newFunction2(name = 'pablo', age = 37, country = 'Chile') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('patricio', '35', 'Chile');

// literal templates
let hello = "Hello";
let world = "World";
let ephicPhrase = hello + ' ' + world;
console.log(ephicPhrase);
// es6
let ephicPhrase2 = `${hello} ${world}`
console.log(ephicPhrase2);

// str multi line 
let lorem = "Lorem Ipsum is simply dummy text of the printing\n" +
    "and typesetting industry. Lorem Ipsum has been the industry's\n" +
    "standard dummy text ever since the 1500s, when an unknown printer\n" +
    "took a galley of type and scrambled it to make a type specimen book."
console.log(lorem);
// es6
let lorem2 = `
Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a 
type specimen book.`;
console.log(lorem2)

// objects
let person = {
    'name': 'pablo',
    'age': 38,
    'country': 'CL'
}
console.log(person.name, person.age, person.country);
// es6
let { name, age, country } = person
console.log(name, age, country)

let { name, age } = person
console.log(name, age)

// propagation
let team1 = ['pablo', 'patricio', 'andres'];
let team2 = ['fulana', 'yesenia', 'jaqueline']

let crew = ['chrisian', ...team1, ...team2];
console.log(crew)

// memory assignment
{
    var globalVar = "Global Var";
};

{
    let globalLet = 'Global Let';
    console.log(globalLet);
};

console.log(globalVar);
console.log(globalLet); // it is not accessible

// var declaration and initilizing
const c = 'b'; // can't be changed
var a = 'b';
a = 'a';
console.log(a);

// object declaration
let name = 'pablo';
let age = 38;
// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };
console.log(obj2)

// arrow function
const names = [
    { name: 'Pablo', age: 38 },
    { name: 'Christian', age: 20 }
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name))

const listOFNames3 = (name, age, country) => {
    console.log('listOfNames3', name, age, country);
}
listOFNames3('Alejandro', 50, 'Venezuela')

const listOFNames4 = name => {
    console.log('listOfNames4', name);
}
listOFNames4('Pablo')

const square = num => num * num;

// promises 
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('Hola!'));

// classes
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(a, b) {
        this.valueA = a;
        this.valueB = b;
        return this.valueA + this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sum(2, 3));

// import modules
import { hello } from './module'
console.log(hello());

// generators
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// hasta aqui ecmascript6