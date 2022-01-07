// explicit types
let character: string;
let age: number;
let isLoggenIn: boolean;

age = 30;

isLoggenIn= true;

// arrays
let ninjas: string[] = [];

//ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string, 
    age: number,
    beltColor: string
}
ninjaTwo = {name: 'mario', age: 20, beltColor: 'black'}