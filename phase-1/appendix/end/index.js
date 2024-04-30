/*

Phase 1 -> Appendix
Created March 17, 2024
by Sakib Rasul

Objectives
1. Learn about the following advanced programming concepts:
   - First-class citizens
   - Compilation and execution
   - Algorithmic complexity

2. Learn about the following advanced JavaScript concepts:
   - Immediate invocation
   - Context
   - Array methods
   
Takeaways
- When faced with a problem, (a) understand its objectives and edge cases, (b) write some solution,
       and then (c) work towards case coverage and optimal time and space complexity.
- Hold onto `map` and `filter` for Phase 2!

*/

// ~ First-Class Citizens
// A **first-class** object or **citizen** is one that has every capability a language has to offer.
// In JavaScript, functions are first-class citizens.

// ~ Compilation and Execution
// During **compilation**, JavaScript allocates memory for your code, and understands its scope(s).
// During **execution**, JavaScript runs your code line-by-line, stores values in variables, and executes functions.

// ~ Algorithms in Time and Space
// An **algorithm** is a set of instructions that, when run, accomplish some task.
// **Big O notation** is a way of quantifying how "good" an algorithm is.
// By "good", we mean fast (no. of small operations) and/or small (amount of memory taken up by operations).
// Big O describes this "goodness" as a factor of n, the algorithm's input size.
// Common big O descriptions include:
// - O(1): **constant** speed or memory
// - O(log n): **logarithmic** speed or memory
// - O(n): **linear** speed or memory
// - O(n^2): **quadratic** speed or memory
// - O(n^2), O(n^3), etc.: **exponential** speed or memory

// ~ Immediate Invocation
console.log("~~IMMEDIATE INVOCATION~~");
// We can immediately invoke functions upon declaration with (definition)(arguments).
((a, b) => console.log(a - b))(10, 3);
// i.e. subtract(10, 3); if we had defined `subtract`

// ~ Context
console.log("~~CONTEXT~~");
// -> A function's **context** is an object it can access with the keyword `this`.
function greet(end) { console.log("Hi, " + this.name + end); }
// -> We can use the function methods `apply`, `call`, and `bind` to define a function's context.
// -> function.apply(this, [arguments]);
//    executes `function` with an object reference and array of arguments.
greet.apply({ name: "Sakib" }, [ "!" ]); // Hi, Sakib!
// -> function.call(this, ...arguments);
//    executes `function` with an object reference and list of arguments.
greet.call({ name: "Vinny" }, "?"); // Hi, Vinny?
// -> function.bind(this, ...arguments);
//    returns a function with an object reference and array of arguments.
const greetTiffany = greet.bind({ name: "Tiffany" }, [ "." ]);
greetTiffany(); // Hi, Tiffany.


// ~ Advanced Array Methods
console.log("~~ADVANCED ARRAY METHODS~~");
// `forEach` isn't the only array method out there. Let's learn about a few more!
// Hint: For the purposes of Phase 2, `filter` and `map` are most relevant.
const prices = [ 100, 30, 200 ];
// -> array.find() returns the first element that satisfies some condition.
// The line below runs something like the following:
// 1. Run `price => price > 50` where `price` is the first element of `prices`, 100.
// 2. Since Step 1 returns `true`, the function stops and returns the associated price, 100.
console.log(prices.find(price => price > 50)); // 100
// -> array.reduce() accumulates a value by applying a function to each element in an array.
// For example, here we find the sum of `prices` by remembering the sum so far (the **accumulator**),
//     and for each element, we add that new element to the accumulator.
// To the left of the arrow are the accumulator and the current, singular element,
//    and to the right we return the new value of the accumulator.
// The line below runs something like the following:
// 1. (, 100) => 100. sumSoFar is now 100.
// 2. (100, 30) => 100 + 30 = 130. sumSoFar is now 130.
// 3. (130, 200) => 130 + 200 = 330. sumSoFar is now 330.
// 4. Return the last value of sumSoFar, i.e. 330.
console.log(prices.reduce((sumSoFar, current) => sumSoFar + current)); // 330
// -> array.filter() returns an array with only the elements that satisfy some condition.
// The line below runs something like the following:
// 1. Create an empty array [].
// 2. Run `price => price > 50` where `price` is the first element of `prices`, 100.
// 3. Since Step 2 returns `true`, push the associated price, 100, to the array [100].
// 4. Run Steps 2 and 3 where `price` is the second element, resulting in [100].
// 5. Run Steps 2 and 3 where `price` is the third element, resulting in [100, 200].
// 6. Since there are no elements, return the array [100, 200].
console.log(prices.filter(price => price > 50)); // [100, 200]
// -> array.map() returns an array where each element has been transformed in some specified way.
// The line below runs something like the following:
// 1. Create an empty array [].
// 2. Run `price => price * 2` where `price` is the first element of `prices`, 100.
// 3. Push the result of Step 2, 200, to the array [200].
// 4. Run Steps 2 and 3 where `price` is the second element, resulting in [200, 60].
// 5. Run Steps 2 and 3 where `price` is the third element, resulting in [200, 60, 400].
// 6. Since there are no elements, return the array [200, 60, 400].
console.log(prices.map(price => price * 2)); // [200, 60, 400]


// ~ Challenges
// 1. Write a function that takes an array of sentences and returns only those that are questions.
// 2. Write a function that takes an array of lowercased sentences and returns them capitalized.
const phrases = ["hello, there!", "how are you?", "It's me!"]; // example array for #1 and #2