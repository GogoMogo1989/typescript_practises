"use strict";
/* let greet = Function; */
let greet;
greet = (name, greating) => {
    console.log(`${name} says ${greating}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
