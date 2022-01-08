"use strict";
//let greet: Function;
//Example1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne = numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Example1
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
