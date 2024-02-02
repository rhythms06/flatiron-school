/*

Phase 2 -> fetch()
By Sakib Rasul

Core Deliverables
1. Host our restaurant's menu (`public/db.json`) with JSON Server.
2. Render a list of menu items on load.
3. If an error occurs on `fetch()`, display the error in the DOM.
4. Feature one dish by printing its name in an <h2> element.
5. Render a "controlled" form for adding new dishes to the list *and* in db.json.
6. Render a "controlled" form next to each existing dish for updating its metadata both in the list *and* in db.json.

*/

import Form from './Form';

export default function App() {
  return (
    <main>
      <h1>Chez Flatiron</h1>
      <section>
        <h2>Featured Dish: NAME!</h2>
        <div>NAME | $PRICE<br/></div>
        <h3>Submit a New Dish! <Form /></h3>
      </section>
    </main>
  );
}
