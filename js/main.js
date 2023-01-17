console.log('Hello from the main.js file!');

// Basics of JavaScript
// Comments using the //

/*
    Multline Comments in JavaScript

    -- Variable Declaration in JavaScript --
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Object Types: Objects, Array, Function
*/


// Variable Declaration -- use camelCase to name variables
// var myName;

// console.log(myName);

// String Declaration
var myName = 'Brian';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``. The tick marks (``) have a special behavior
// to format the string
// Tick Marks + ${} is equiv to f"{}"
console.log("My name is ${myName}")
console.log('My name is ${myName}')
console.log(`My name is ${myName}`);


// Integer
var myAge = 99;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;
console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// Undefined
var something;

console.log(something);
console.log(typeof something);


// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A Bug in the code!


