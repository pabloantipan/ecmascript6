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
const a = 'b';