/*

Phase 1 -> The JavaScript Playground
by Sakib Rasul
Updated September 12, 2023
Created August 21, 2023

*/

// VARIABLES
console.log("~~~"); // This line prints "~~~" to the console.
console.log("VARIABLES"); // This line prints "VARIABLES" to the console.
// In JavaScript, you can give values (e.g. 5, "hi") names.
// We refer to those names as **variables**.
// To **declare** a variable, prepend its name with either `let` or `const`.
// To **assign** a variable to a value, write [variable name] = [value].
// A variable declared with the keyword `let` can be re-assigned.
let x = 0;
console.log("x: " + x); // This line prints "x: [x]" to the console.
console.log("Mutating `x`..."); // **Mutation** is a synonym for reassigment.
x = 1; // This is OK. `a` was declared with the keyword `let`.
console.log("x: " + x); // This line prints the value of `x` to the console.
// A variable assigned with the keyword `const` cannot be re-assigned.
// Note that you can't only declare a variable with `const`.
// A constant variable must be declared and assigned on the same line.
// const y; // This is NOT OK. `y` is a constant with no value.
const y = 1;
// console.log("Mutating `y`..."); // This and the following line are NOT OK,
// y = 2; // because `y` was declared with the keyword `const`.
console.log("y: " + y);
// It's best practice to declare variables with `const`, unless you're sure
//      you need the variable to be **mutable**, or able to be re-assigned.
// This way, you'll avoid making unnecessary or dangerous changes to values.
// For example, you'll avoid treating a number as a string!
let a = 2; // Let's say we want `a` to be a number.
a = "Hello!"; // This is OK, because `a` is mutable (even though it's not what we want).
a = a + 1; // This results in `a` being "Hello!1", instead of 3!
console.log("a: " + a);

// TYPES
console.log("~~~");
console.log("TYPES");
// There are seven types of values you can assign in JavaScript:
//       undefined, null, boolean, number, bigint, string, and symbol.
// The ones to know well for our purposes are undefined, boolean, number, and string.
let b; console.log("b: " + b); // undefined
let c = null; console.log("c: " + c) // null
const fact = true; console.log("fact: " + fact); // boolean
const lie = false; console.log("lie: " + lie); // boolean
const naturalNumber = 3; // To name a variable with more than one word, use camelCase.
console.log("naturalNumber: " + naturalNumber); // number
const integer = -2; console.log("integer: " + integer); // number
const decimal = 2.43; console.log("decimal: " + decimal); // number
const greeting = "Hello, world!"; console.log("greeting: " + greeting); // string

// OBJECTS
console.log("~~~");
console.log("OBJECTS");
// An object is a set of **properties** surrounded by { curly braces }.
const recipe = {
    name: "tacos",
    steps: 4,
    time: 10
};
console.log(recipe); // We can print an object's properties with `console.log()`.
// We can use dot or bracket notation to access a property.
console.log("It takes " + recipe.time + " minutes to make " + recipe["name"] + ".");
recipe.time = 15; // We can modify an object's existing properties...
recipe["easy"] = true; // ...or add new ones, even if it was declared with `const`!
// Remember, `const` prevents value reassignment, and reassignment only.
console.log(JSON.stringify(recipe)); // We can convert an object into a string, too!

// ARRAYS
console.log("~~~");
console.log("ARRAYS");
// An array is a list of items separated, by, commas and surrounded by [ square brackets ].
// An item can be of any type, or be an object.
const array = [0, 0]; // an array of numbers
console.log(array); // We can print an array's indices with `console.log()`.
// We say that the first item is in index 0, the second in index 1, and so on.
// To access an item at a certain index, we write `array[index]`.
console.log("Modifying array...");
array[1] = 1; // We can modify an array's existing indices...
array[2] = 2; // ...or add new ones, even if it was declared with `const`!
// Remember, `const` prevents value reassignment, and reassignment only.
console.log(JSON.stringify(array)); // We can convert an array to a string, too!

// CONDITIONALS
console.log("~~~");
console.log("CONDITIONALS");
// We can use an **if** or an **if-else** statement to conditionally run blocks of code.
// An if statement lets us run some code only if a boolean is true.
const fullName = "Sakib Abrar Rasul";
console.log("Name: " + fullName);
if (fullName.length > 10) {
    // This line will only run if `fullName` is 11 or more characters long.
    console.log("Whoa, your name is long!");
}
// A one-line if statement can be written without curly braces.
if (fullName[0] === "S") console.log("Have a scintillating day, " + fullName + ".");
// An if-else statement lets us run one code block if a boolean is true,
//    and a different code block if that boolean is false.
if (fullName.split(" ").length <= 2) {
    // This line will only run if there are two or fewer spaces in `fullName`.
    console.log("Hm, two or fewer names? Why not add a few?");
} else {
    // This line will only run if there are three or more spaces in `fullName`.
    console.log("That's an exciting number of names!");
}
// We can also chain if-else statements to validate booleans in order.
if (fullName[0] === "A") {
    // This line will only run if the first character of `fullName` is "A".
    console.log("Have an amazing day, " + fullName + ".");
} else if (fullName[0] === "S") {
    // This line will only run if the first character of `fullName` is "S".
    console.log("Have a slick day, " + fullName + ".");
} else {
    // This line will only run if the first character of `fullName` is neither "A" nor "S".
    console.log("Have an indeterminate day, " + fullName + ".");
}
// If we want to conditionally assign a value to a variable, a **ternary operator** saves us a few keystrokes.
const farewell = fullName === "Sakib Abrar Rasul" ? "See ya, professor!" : "Goodbye.";

// FUNCTIONS
// We can name a code block and run it later by declaring a **function**.
// You've already seen one lots of times in this file: `console.log()`!
// `console.log()` is a function that takes in one parameter
//                 and prints that parameter to the console.
// `console` is a built-in **object** that represents your browser's console.
// We say that `log()` is a **method** of `console`.
console.log(farewell);
// We can also write our own functions! When declaring one,
//    a function has three customizable components: a name, **parameters**, and a **body**.
// The function below is named `logDivider`,
//                       takes one parameter `section`,
//                       and logs both "~~~" and sectionName in its body.
// Above and below its declaration, `section` is not defined.
// In other words, `section` is not available in the **global scope**.
// console.log(section); // This line would break the program!
function logDivider(section) {
    console.log("~~~");
    // Inside the function's **local scope**, `section` is whatever was passed into the function!
    console.log(section);
}
// console.log(section); // This line would break the program!
// To **call** a function (as in, run its body), write its name, and any parameters in parentheses.
logDivider("FUNCTIONS");
// Some functions have **output**. We can specify an output with the keyword `return`.
// Note that if a function has a `return` statement, nothing after it in its body will run.
function double(operand) {
    console.log("Doubling " + operand + "..."); // This is the first line of the body.
    return operand * 2; // This is the last line of the body that will run.
    // console.log("Where am I?") // This line will not run.
}
console.log("The double of 128 is " + double(128) + ".");
// Since functions with output have a value assigned to them, we can pass
//       function calls as parameters to other functions!
console.log("Computing the octuple of 5...");
console.log("The octuple of 5 is " + double(double(double(5))) + ".");
// Some functions have no parameters.
function sayHello() {
    console.log("Hello, world!");
}
// To call a function that has no parameters, write its name, alongside an empty set of parentheses.
sayHello();
// Some functions take functions as parameters, like `map()`, `forEach()`, and `reduce()`.
// When a function is a parameter, it's referred to as a **callback function**.
// `map()` is a function that can be run on **arrays**, or lists of data.
// When a function can be called on a data type, that function is called a **method**.
// In other words, `map` is an array method.
// What it does is take the array it was called on,
//      and construct a copy of it by transforming each **element** via its callback.
// For example, let's take an array of numbers and make a new array where
//     each element is twice its value in the original array.
const numbers = [1, 2, 3, 4, 5];
console.log("Before doubling: " + numbers);
// To pass a function as a parameter, just write its name.
// Note that `map()` only works when its callback has a `return` value.
const doubled = numbers.map(double);
console.log("After doubling: " + doubled);
// Often, we know we won't need to run a callback function outside of its place as a parameter.
// When we do, we can write out an **anonymous** callback directly in a function's parameters.
// To write an anonoymous function:
//    (a) specify its parameters (if only one, you don't need parentheses),
//    (b) write an arrow (to "map" the input(s) to output), and
//    (c) write out its body (if only one statement, you don't need curly braces).
// Let's say we only want to add " City" to the end of "New York".
const cities = ["Chicago", "New York", "Toronto", "Los Angeles", "Detroit"];
console.log("Cities: " + cities);
// We can do that with `map()` and a conditional return!
const newYorkCities = cities.map(city => city === "New York" ? city + " City" : city);
console.log("Cities (Go NYC!): " + newYorkCities);
// Sometimes a callback function doesn't need a return value.
// `forEach()` is an array method that runs a code block for each element in that array.
newYorkCities.forEach(city => console.log("Good morning, " + city + "!"));

// A more interesting callback function.
// form.addEventListener("submit", event => {
//     console.log(event.target.name);
// })

// The function below is named `sum`,
//                       takes one parameter `numbers`,
//                       and returns the sum of `numbers`.
function sum(numbers) {
    let sum = 0; // We'll 
    numbers.forEach(number => sum += number);
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sum([1,2,3]));

if (sum([1,2,3,4,5]) > 0) {
    console.log("The sum of the numbers is positive.");
}

// Write a function that takes an array and returns an array of indices.

// map(), forEach()
const uppercaseAnimals = ["Dog", "Cat", "Frog", "Horse"];

// array.forEach() takes array, and does something for each
//                 element in that array
uppercaseAnimals.forEach(oneAnimal => {
    console.log("Hi, " + oneAnimal + "!");
})

// array.map() takes array, and creates a copy of that array
//             by applying some change to each element of that array
const lowercaseAnimals = uppercaseAnimals.map(oneUppercaseAnimal => {
    // manipulate uppercaseAnimal (i.e. go from uppercase to lowercase)
    const lowercaseAnimal = oneUppercaseAnimal.toLowerCase();
    // and then return a modified version of uppercaseAnimal
    return lowercaseAnimal;
    // or manipulate and return in one line!
    // return uppercaseAnimal.toLowerCase();
});
console.log(lowercaseAnimals);

// Scope
logDivider("SCOPE"); // Ctrl+Click or ⌘+Click on `logDivider` to find out what it does.
// A **global** variable is one that is declared outside of any function.
let global = 2; // `global` can be accessed anywhere!
// A **local** variable is one that is declared inside a function.
function layer2(local) {
    console.log("global: " + global); // `global` is global, so this works!
    console.log("local: " + local); // `local` is local to `layer2`, so this works!
    function layer3() { console.log("inception"); }
    layer3(); // `layer3` is local to `layer2`, so this works!
}
// console.log(local); // `local` is not global, so this is NOT OK.
layer2(5); // `layer2` is global, so this works!
// layer3(); // `layer3` is not global, so this is NOT OK.