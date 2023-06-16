/*

Phase 1 -> APIs -> Fetch
May 25, 2023 | Sakib Rasul

OBJECTIVES
1. Call fetch() on the GoT API inside fetchBooks().
2. Parse the result from JSON into a JS array.
3. Pass the JS array to renderBooks(). 

*/

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
         .then(response => response.json())
         // OPTION 1: Invoke renderBooks with an arrow function and an explicit parameter.
         .then(gotBooks => renderBooks(gotBooks));
         // OPTION 2: Invoke renderBooks by its name and an implicit parameter.
         // .then(renderBooks);
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
