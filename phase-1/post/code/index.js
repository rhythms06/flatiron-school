/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// JSON Server is an `npm` package that lets us host JSON datasets
// on `localhost`, so that we can make CRUD requests to them.
// To get started with JSON Server:
// 1. Run `npm install -g json-server` to install JSON Server globally.
// 2. Create a file called `db.json` that contains some JSON, i.e.
//           an object whose property names are encased in "";
//           whose property values are arrays;
//           where those arrays consist of objects;
//           where those objects have property names encased in "";
//           where each object has one unique string "id".
//    See `./db.json` for an example representing dogs, cats, humans,
//    robots, cities, and colors!
// 3. Run `json-server [path to db.json]` to host `db.json`.
// ...and we're ready to go!

// Let's try making a GET request to display the existing `colors` on the page.
fetch("http://localhost:3000/colors")
.then(response => response.json())
.then(colors => {
    // Select the element that we'll append to!
    const colorList = document.querySelector("#colors");
    colors.forEach(color => {
        // Create, modify, and append to the DOM
        // 1. Create an empty <li> in the ether
        const colorLi = document.createElement("li");
        // 2. Modify the <li> with some text, e.g. <li>1. green (forest)</li>, via...
        //    a. ...concatenation...
        // colorLi.textContent = color.name + " (" + color.shade + ")";
        //    b. ...or interpolation...
        colorLi.textContent = `${color.name} (${color.shade})`;
        // 3. Append the <li> as a child to some existing element in the DOM
        //    i.e., `[parent].append([child])`.
        colorList.append(colorLi);
    });
})
.catch(error => console.log(error));

// Now, let's trigger a POST request when the user submits the form,
// so that they can add a color!
// Let's plan out our event listener:
// The event's target: "#newColorForm"
// The event: "submit"
// What we want to do when the event fires: POST a color to `db.json`.
// ...in sum, when the form fires the event "submit", make a POST request!
document.querySelector("#newColorForm").addEventListener("submit", event => {
    // Let's use `event` to prevent its default handler.
    event.preventDefault();
    // Note: In order for this call to work as expected,
    //       JSON Server will have to be up and running on port 3000.
    //       If it isn't running, our `.catch()` will run!
    fetch("http://localhost:3000/colors", {
        // If you don't specify a method, this defaults to "GET".
        // Removing this parameter and keeping the rest of our options intact will produce an error ;)
        method: "POST",
        // Headers are optional metadata about your request.
        headers: {
            "Content-Type": "application/json", // The kind of data (JSON) that you want to send.
            "Accept": "application/json" // The kind of data (JSON) that you want to receive.
        },
        // You can't send data without the data itself! That's where `body` comes in.
        // In this example, the "data" is an object with color properties name and shade.
        // Remember that we're sending JSON, so we'll need to convert our JS with JSON.stringify().
        // Note: Removing this parameter won't result in an error, because our database doesn't
        //       know what a color should look like. We'll just "successfully" add an empty object to /colors.
        body: JSON.stringify({
            // Let's use `event` to get the information that was inputted into the form!
            name: event.target.name.value,
            shade: document.querySelector("#shade").value
        })
    })
    // At this point, we've added a new color to our database!
    // But we'll often want to do additional things in two cases: (a) success and (b) failure.
    // To start handling case (a), we convert the response back from JSON to JS.
    .then(response => response.json())
    // Then, we do whatever we want with that JS object, which is the color we just added!
    // Here, we'll create a new <li> for the color and append it to #colors.
    .then(newColor => {
        const colorList = document.querySelector("#colors");
        const colorLi = document.createElement("li");
        colorLi.textContent = `${newColor.name} (${newColor.shade})`;
        colorList.append(colorLi);
    })
    // To handle case (b), use the error object given at the start of a `.catch()` clause.
    // Here, we'll create a new <sub> for the error message and append it right after the <form>.
    .catch(error => {
        // A <sub> is just a small text tag.
        const message = document.createElement("sub");
        // `error.message` is a string explaining what went wrong.
        message.textContent = error.message;
        // `[element].after()` lets us display an element right **after** another element.
        document.querySelector("#newColorForm").after(message);
    });
});

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!