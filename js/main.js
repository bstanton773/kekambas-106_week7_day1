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

// object Data Types

// Object
var myObject = {
    a: 123,
    test: 'Hello World'
};

console.log(myObject);
console.log(typeof myObject);


// Array
var myArr = ['Brian', 'Stanton', 'Chicago'];

console.log(myArr);
console.log(typeof myArr);

// Function
function abc(){};

console.log(abc);
console.log(typeof abc);


// Accessing properties from an object

var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person["first"]}`);
// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

// What accessing properties in an array (aka the indices), use bracket notation
console.log(`My favorite language is ${person.languages[0]}`);

// Arrays have a "length" property 
var myNewArr = ['red', 'white', 'blue'];

console.log(myNewArr, myNewArr.length);

// Clear our console
console.clear();

// var vs let vs const

// let - Allows us to declare a variable similar to var
// * let is block-scope, var is global-scope *
let myCountry = 'United States'

if (true){
   var myState = 'Illinois';
   let myCity = 'Chicago';
   console.log(myCity, myState, myCountry); 
}

console.log(myState);
// console.log(myCity); // ReferenceError: myCity is not defined

{
    let test1 = 123;
    {
        let test2 = 456;
        {
            let test3 = 789;
            console.log(test1, test2, test3)
        }
    }
}

// const - similar to let (block-scoped)
// 2 differences: 1. Needs a value when declared 2. Cannot be reassigned

{
    let myAge = 99;
    console.log(myAge);
    myAge = 100;
    console.log(myAge);

    const myHeight = 10;
    console.log(myHeight);
    // myHeight = 11; // TypeError: Assignment to constant variable.
    // console.log(myHeight);
}


// Be careful when using const with an object!

const cities = ['Chicago', 'New York', 'Boston', 'San Francisco', 'Denver'];

console.log(cities);

cities[1] = 'San Diego';

console.log(cities);

// cities = ['Kansas City', 'Buffalo', 'Cleveland']; //TypeError: Assignment to constant variable.

// console.log(cities);

const president = {
    first: 'Abe',
    last: 'Lincoln'
}

console.log(president);

president.first = 'Abraham';
console.log(president);

// president = {
//     first: 'George',
//     last: 'Washington'
// }


// Clear the console again
console.clear();


// Basic Math Operations

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 // sum = sum + 1
console.log(sum);

// Subtraction
let diff = 20 - 5;
console.log(diff);
diff -= 5; // diff = diff - 5
console.log(diff);
diff--; // diff -= 1 // diff = diff - 1
console.log(diff);

// Multiplication
let prod = 8 * 5;
console.log(prod);
prod *= 5; // prod = prod * 5
console.log(prod)

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2;
console.log(quotient);

// Floor Division - use the .floor method from built-in Math module
let floor = Math.floor(10/3);
console.log(floor);

// Exponents
let square = 5 ** 2
console.log(square);
square **= 2; // square = square ** 2;
console.log(square);

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);


let myString = 'My age is '
let myNewAge = 547

let addedString = myString + myNewAge;
console.log(addedString);
console.log(typeof addedString);

console.log(square);

let popQuiz = square + '4';
// undefined, 629, 6254, 625+4
console.log(popQuiz);

let addSquare = square + Number('4');
console.log(addSquare);


let test = 5 + 10 + 20 + '5'
console.log(test); 

let test2 = 5 + '10' + 5 * 10;
console.log(test2);

let popQuiz2 = square - '4';
// undefined, 621, 6254, 625-4
console.log(popQuiz2);

let subtractStrings = 'word' - 'd';
console.log(subtractStrings); // NaN

// Clear Console
console.clear();

// JavaScript Comparisons

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == check for equality while allowing for type conversion
// === check for equality but does not allow for type conversion

console.log(1 == true);

console.log('10' > 9);

// Be careful with type conversion

console.log('100' > '9') // Both values are already strings, no conversion needed - compare alphabetically


// When JavaScript compares object, it looks for REFERENCE ONLY!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let animals = ['penguin', 'wolf', 'kangaroo'];
let newAnimals = animals;

console.log(animals === newAnimals);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)

console.log(5 != '5');
console.log(5 !== '5');

console.clear();

// Control Flow

// If Condition

// Syntax: if (condition expression){ code to execute if true }

let randomDigit = 34;

console.log('Begin');
if (randomDigit > 20){
    console.log('the condition was true!');
    console.log('Still in {}'); 
    console.log('Hey what is going on?');
};
console.log('End');

// If, Else If, Else

let randomInt = 75;

if (randomInt % 100 === 0){
    console.log('The number is divisble by 100');
} else if (randomInt % 10 === 0){
    console.log('The number is divisble by 10');
} else {
    console.log('The number is not divisible by 100 or 10')
}

// Multiple Conditions
// && - and
// || - or

// T && T = T
// T && F = F
// F && T = F
// F && F = F
// T || T = T
// T || F = T
// F || T = T
// F || F = F

let personAge = 15

if (personAge > 18 && personAge < 40){
    console.log('Young Adult')
}

if (personAge < 18 || personAge > 65){
    console.log('You get a discount')
}
