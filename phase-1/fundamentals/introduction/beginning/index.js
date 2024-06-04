/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations

console.log("yo")

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify

/**
 * dog goes woof
 */
const dog = {
    name:"pedro",
    breed:"city"
}

console.log(dog)

// ~ Arrays
// -> definition, access, modification

const prices = [ 30,40,10,60]



// ~ Conditionals
// if, if-else, if-else-if-else, ternary

isItRaining = true;
age = 20;

isItRaining ? console.log("pop out") : console.log("nah")


if(age > 21 && isItRaining){
    console.log("21R")
} else if (age > 21 && !isItRaining){
    console.log("21")
} else if (age < 21 && isItRaining){
    console.log("YR")
} else {
    console.log("Y")
}


// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions


/**
 * @param {string} greeting The Greeting to send
 * @param {string} recipient The person to greet
 * @return the greeting
 * */

// greet "Hello", "Pedro" ==> "Hello, Pedro"
function sayHello(greeting, recipient) {
    console.log(`${greeting}, ${recipient}`)

}

sayHello("Yo", "Pedro")

const words = ["YO", "Hi", "suP"]

words.forEach((word) =>{console.log(word)})
// ~ Scope
// -> global, local, closures, function hoisting
const a = "A" //global

function localFunction() {
    const a = "AA";
    console.log(a)
    const b = "B";
    console.log(b)
}
localFunction()
console.log(a)
// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

//1
numbers = [1,2,3]
const sum = (numbers) =>{
    let aggregate = 0
    numbers.forEach((number) => aggregate+=number)
    console.log(aggregate)
    
}

sum(numbers)

//2

const double = (numbers) =>{
    numbers.forEach((number, index) => numbers[index] = number*2)
    console.log(numbers)
}
double(numbers)

//3

const lowercase = (words) =>{
    words.forEach((word, index) => words[index] = word.toLowerCase())
    console.log(words)
}

lowercase(words)