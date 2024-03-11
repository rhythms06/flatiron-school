/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 8, 2024
Created August 21, 2023

*/

/*

Welcome to **JavaScript**, a language built to add interactivity to webpages!

Like most programming languages, JavaScript employs:
- **variables** to name **values** of different **types**,
- **objects** and **arrays** to consolidate related values,
- **functions** to store and execute sets of instructions,
- **conditional statements** to carry out instructions on a conditional basis,
- **scope** to decide where variables and functions can be invoked, and
- **methods** to carry out tasks associated with a variable of a certain type.

Like HTML, JS also lets you write comments, like this one! Multiline comments
are surrounded by [slash][star] and [star][slash], while single line comments
are simply preceded by [slash][slash].

Let's dive in!

*/

// ~ Variables
console.log("~~~"); // This line prints "~~~" to the console.
console.log("VARIABLES"); // This line prints "VARIABLES" to the console.
// In JavaScript, you can give values (e.g. 5, "hi") names.
// We refer to those names as **variables**.
// To **declare** a variable, prepend its name with either `let` or `const`.
// To **assign** a value to a variable, write [variable name] = [value].
// To do both on the same line, write [let | const] [variable] = [value].
let x = 0;
console.log("x: " + x); // This line prints "x: [x]" to the console.
// A variable declared with the keyword `let` can be re-assigned.
console.log("Mutating `x`..."); // **Mutation** is a synonym for reassigment.
x = 1; // This is OK. `x` was declared with the keyword `let`.
console.log("x: " + x); // This line prints "x: [x]" to the console.
// A variable assigned with the keyword `const` cannot be re-assigned.
// Note that you can't _only_ declare with `const`.
// A constant variable must be declared and assigned on the same line.
// const y; // This is NOT OK, because we aren't stating y's constant value.
const y = 1;
// console.log("Mutating `y`..."); // This and the following line are NOT OK,
// y = 2; // because `y` was declared with the keyword `const`.
console.log("y: " + y);
// It's best practice to declare variables with `const`, unless you're sure
//      you need the variable to be **mutable**, i.e., able to be re-assigned.
// This way, you'll avoid making unwanted changes to values.
// We can remind ourselves and others what our variables represent with **annotations**.
/** The number of apples we have in stock. */
const apples = 5;

// ~ Types
console.log("~~~");
console.log("TYPES");
// There are seven **primitive** (basic) types of values you can assign to variables in JavaScript:
//       undefined, null, boolean, number, string, bigint, and symbol.
// You can use `console.log(typeof(var))` to print the type of `var` to console.
// -> **undefined** and **null** variables have no (useful) value.
// **undefined** is a type automatically assigned to unassigned variables.
// **null** is a type you can manually assign to intentionally skip assigning anything useful.
// Note: Due to an unrepairable bug in JavaScript, `typeof(var)` returns `object` when `var` is `null`!
let b; console.log("b is " + typeof(b) + ""); // undefined
let c = null; console.log("c is a " + c + " " + typeof(c)); // null
// -> A **boolean** can be true or false.
const fact = true; console.log(fact + " is a " + typeof(fact)); // boolean
const lie = false; console.log(lie + " is a " + typeof(lie)); // boolean
// -> A **number** can be any rational number between -2^53 + 1 and 2^53 - 1.
const naturalNumber = 3; // To name a variable with more than one word, use camelCase.
console.log(naturalNumber + " is a " + typeof(naturalNumber)); // number
const integer = -2; console.log(integer + " is a " + typeof(integer)); // number
const decimal = 2.43; console.log(decimal + " is a " + typeof(decimal)); // number
// -> A **string** is one or more characters surrounded by 's, "s, or `s.
// Strings can be **concatenated**, e.g. "Hello" + "!", to form longer strings.
// They can also **interpolate** variables, e.g. `Hello, ${firstName}!`, to incorporate outside values.
const greeting = "Hello, world!"; console.log(`${greeting} is a ${typeof(greeting)}`); // string
// -> **bigint** is meant for numbers too negatively or positively large to be allowed by **number**.
const tinyNumber = BigInt("-9007199254740992"); // -9007199254740992 is one less than -2^53 + 1.
console.log(tinyNumber + " is a " + typeof(tinyNumber)); // bigint
const hugeNumber = BigInt("9007199254740992"); // 9007199254740992 is one more than 2^53 - 1.
console.log(hugeNumber + " is a " + typeof(hugeNumber)); // bigint
// -> A **symbol** is a unique value.
const symbol = Symbol(); console.log(symbol.toString() + " is a " + typeof(symbol));

// ~ Objects
console.log("~~~");
console.log("OBJECTS");
// An **object** is a collection of related **properties**, or **keys**, each with their own value.
// They are denoted with surrounding { curly braces } and comma-separated key: value pairs.
// For example, when setting out to define a recipe, we might realize that a single value of a single type
// does not suffice. To create a recipe consisting of many related values, we create an object!
const recipe = {
    name: "tacos", // Here, the value "Tacos" is bound to the key "name".
    "author": "Sakib Rasul", // Keys can be surrounded by "s...
    'easy': true, // ...or 's, but not `s!
    servings: 4 // Values can be of any type.
};
console.log(recipe); // We can print an object's properties with `console.log()`.
// We can use **d.t** or **["bracket"] notation** to access a property.
console.log("This recipe for " + recipe.name + " serves " + recipe["servings"] + " people.");
recipe.time = 15; // We can modify an object's existing properties...
recipe["easy"] = true; // ...or add new ones, even if the object was declared with `const`!
// Remember, `const` prevents value reassignment, and reassignment only.
console.log(JSON.stringify(recipe)); // We can convert an object into a string, too!

// ~ Arrays
console.log("~~~");
console.log("ARRAYS");
// An **array** is a **list** of values, or **items**.
// Arrays are surrounded by [ square brackets ] and items are separated, by, commas.
// Items can be of any primitive type, or even an object or array.
const array = [0, 0]; // an array of numbers
console.log(array); // We can print an array's items with `console.log()`.
// We say that the first item is held in **index** 0, the second in index 1, and so on.
// To access an item at a certain index, we write `array[index]`.
console.log("Modifying array...");
array[1] = 1; // We can modify an array's existing indices...
array[2] = 2; // ...or add new ones, even if it was declared with `const`!
// Remember, `const` prevents value reassignment, and reassignment only.
console.log(JSON.stringify(array)); // We can convert an array to a string, too!

// ~ Conditionals
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

// ~ Functions
// We can name a code **block** and **run** it later by declaring a **function**.
// You've already seen one lots of times in this file: `console.log()`!
// `console.log()` is a function that takes in one **parameter**, a string,
//                 and prints that string to the console.
// `console` is a built-in **object** that represents your browser's console.
// We say that `log()` is a **method** of `console`.
console.log(farewell);
// We can also write our own functions! A function has three main components:
//    a name, **parameters**, and a **body**.
// The function below is _named_ `logDivider`,
//                     - takes one _parameter_ `section`, and
//                     - logs both "~~~" and `section` in its _body_.
// Above and below its declaration, `section` is not defined.
// In other words, `section` is not available in the **global scope**.
// console.log(section); // This line would break the program!
// We can remind ourselves and other developers how functions work with **annotations**.
/**
 * Prints a new section's heading to console.
 * @param {string} section The new section's name.
 */
function logDivider(section) {
    console.log("~~~");
    // Inside the function's **local scope**, `section` is whatever was passed into the function!
    console.log(section);
};
// console.log(section); // This line would break the program!
// To **call** a function (as in, run its body), write its name, and then any parameters in parentheses.
logDivider("FUNCTIONS"); // This line calls `logDivider`, and assigns "FUNCTIONS" to its one parameter.
// Some functions have **output**, like `typeof(variable)`.
// We can specify a function's output with the keyword `return`.
// Note that any lines following a `return` statement are ignored during a function call.
/**
 * Returns the double of a given number.
 * @param {number} operand The number to double.
 * @returns The operand's double.
 */
function double(operand) {
    console.log("Doubling " + operand + "..."); // This is the first line of the body.
    return operand * 2; // This is the last line of the body that will run.
    // console.log("Where am I?") // This line would not run.
}
console.log("The double of 128 is " + double(128) + ".");
// Since functions with output have a value assigned to them, we can pass
//       their calls as parameters to other functions!
console.log("Computing the octuple of 5...");
console.log("The octuple of 5 is " + double(double(double(5))) + ".");
// Some functions have no parameters.
/**
 * Greets the world.
 */
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
// What `map` does is take the array it was called on,
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
// We'll most often use callback functions to transform arrays and handle **events** (more on that soon).

// ~ Scope
logDivider("SCOPE"); // Hint: [Ctrl | ⌘]+[Hover | Click] on `logDivider` to learn more.
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
// A **closure** is the combination of a function and a global scope.
// In JavaScript, functions are **hoisted** to the top of their scope.
// That means we can call them before they're declared!
sum(3, 2); // Invocation
function sum(a, b) { console.log(a + b) }; // Declaration

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
