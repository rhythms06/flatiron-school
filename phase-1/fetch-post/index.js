/*

Phase 1 -> APIs -> Sending Data
May 26, 2023 | Sakib Rasul

OBJECTIVES
1. Write a function called submitData that takes in a name and email.
2. Inside submitData, return a call to fetch().
3. Inside fetch(), POST the inputted name and email to http://localhost:3000/users.
4. Upon successful requests, append the newly created user ID to the DOM.
5. Upon unsuccessful requests, append the generated error message to the DOM.

*/

// Write a function that lets us create users via the browser's console.
// Note: Much of this code can be used to create dogs, cats, and robots, as well.
//       Try rewriting the parameters and body of submitData so that it's able to POST any of the four!
// Note: Before you call submitData, make sure you've got json-server and localhost:3000 up and running!
function submitData(name, email) {
    // Remember, writing `return` isn't what makes our fetch() run. Calling fetch() does that.
    // What `return` does do is make the return value of fetch() be the return value of submitData.
    // Note: Try shutting down json-server to produce an error and invoke .catch() :)
    return fetch("http://localhost:3000/users", {
        // To send data to the given URL, we'll need to populate this optional configuration object with...
        // ...the type of request we want to make...
        // Note: Try removing this line to produce an error and invoke .catch()!
        method: "POST",
        // ...metadata about the data - here, what form the data takes, and what form of response we expect...
        // Note that a POST request doesn't inherently require us to specify headers, but many servers do.
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        // ...and the data itself, in JSON format.
        // Note: Removing the body won't result in a failed POST request.
        // It'll just create a user without a name or an email.
        body: JSON.stringify({
            name: name,
            email: email
        })
        // Then, let's parse the resulting JSON (the new user OR an error) into a JavaScript object.
    }).then(response => response.json())
    // Then, let's handle both cases.
    // First, the successful case: response.json() provides us with the new user.
    .then(newUser => {
        // Get ID of newly created user.
        const id = newUser.id;
        // Append the user ID to the DOM.
        const heading = document.createElement("h2");
        heading.textContent = "Just created User #" + id + "!";
        document.body.append(heading);
    // Next, the unsuccessful case: response.json() provides us with an error.
    }).catch(error => {
        // Get the human-readable message from the error object.
        const message = error.message;
        // Append the error message to the DOM.
        // Note that we can make a second constant `heading` because we're in a different scope.
        // Also note that these three lines are very similar to the ones in the last .then().
        // Try abstracting both blocks into a function that appends a new <h2> element to the DOM!
        const heading = document.createElement("h2");
        heading.textContent = message;
        document.body.append(heading);
    });
}

