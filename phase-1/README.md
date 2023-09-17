# Phase 1

Welcome to the first phase of your coding journey! In this series, you'll learn about **the fundamentals of JavaScript**, **DOM manipulation**, **DOM events**, and **databases**. 

## The Code Challenge
*This section can serve as a guide if you're a prospective or current student at Flatiron School. Otherwise, it won't make much sense.*

### Core Deliverables
* **Fundamentals**: linking JavaScript to HTML, deferring scripts, variables, types, functions, arrays, objects, conditional statements, and local and global scope.
* **DOM Manipulation**: the `document` interface, selecting existing elements, creating new elements, appending elements to the DOM, modifying elements, and removing elements from the DOM.
* **DOM Events**: event listeners and handlers, preventing default handlers, manipulating the DOM when events occur
* **`GET`**: retrieving data with `fetch(URL)`, parsing JSON with `response.json()`, and handling received objects and arrays.
* **JSON Server**: creating a local API with `json-server` and running `fetch(URL)` requests on your own data.

### Advanced Deliverables
* **Best Practices**: readability, conciseness, proper naming, and documentation.
* **JSON Server**: creating, updating, and deleting data hosted by `json-server`.

### Tips & Tricks
* JavaScript uses `camelCase` to name variables. Hyphens (`-`) are not allowed, but underscores (`_`) are.
* `function [name]([parameters]) { [code] }` is equivalent to `const [name] = ([parameters]) => { [code] }`.
* To iterate over an array, use `[array].forEach([callback function])`.
* To map an array's values to a new array, use `[array].map([callback function])`.
* To access an object's values, use `object.propertyName` or `object["propertyName"]`. This also works for accessing a form's input elements with `event.target`.
* A function's parameters and body constitute one local scope.
* Variables initialized in a local scope are not accessible in other local scopes, nor in the global scope.
* Variables initialized in the global scope are accessible in all local scopes.
* `querySelector()` takes as input a CSS selector, e.g. `"#[id]"`, `".[class]"`, and `"[tag]"`. 
* Pass `event` into an event handler when you want to overwrite default handling.
* Always follow a `fetch("[URL]")` with one or more `.then([callback function])` statements. The first callback function for a `GET` request should convert `response` to a usable data type or structure.
* If you're ever unsure what data type or structure a `fetch([URL])` will return, try visiting `[URL]` in your browser.

### Grading

We won't use programmatic tests to determine your score. Instead, we'll open up your website and see if we can complete the **user stories** outlined in the challenge's instructions. <ins>You must pass all of a challenge's core deliverables in order to pass the challenge as a whole.</ins> In other words, you can't make up for a core deliverable by partially or wholly passing an advanced deliverable.

That being said, you may have a chance of passing even if you don't quite complete every core deliverable. If I judge you to be near a working solution, I'll have a chat with you where I guide you through the user story or stories that didn't quite work, and you'll get a chance to show that with a little bit of extra direction and time that you do know how to get your code into shape. If that does the trick, you pass!

### Format

The exam is 90 minutes long, with about 15 minutes scheduled before and after to ensure a smooth start and end to the process. We'll schedule a **mock challenge** the day before to go over all exam conditions, and the days leading up to that will be filled with exam-specific review. 

You are only allowed to use your laptop. Do not bring any handwritten notes into the room. You may reference search engines like DuckDuckGo, forums like Stack Overflow, and documentation like Mozilla Developer Network.

Proctors will be visiting desks to ensure that you:

* **do not** reference any materials on or copied from Canvas
* **do not** reference any tutorials or walkthroughs
* **do not** reference any code you've written before
* **do not** reference any notes you've written or typed before
* **do not** use any artificial intelligence tools, like GitHub Copilot, ChatGPT, Bing, Bard, etc.

Engaging in any of the above or related activities will constitute cheating and/or plaigirism, and will be taken seriously. The code challenge does not just act as a barrier between phases; <ins>it helps us determine whether or not you'll feel comfortable with the increase in difficulty that comes with entering the next phase</ins>.

### Retaking

If you do fail the code challenge, don't fret. You can attempt the exam one more time the following week, i.e. Project Week. Yes, this means that you'll need to study alongside contributing to a project and writing a blog article. However, it doesn't mean you won't find enough time to prepare for a retake. I'll work with you to determine how best to prepare, and how you may be able to lighten your other commitments.

