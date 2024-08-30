/*

Phase 2 -> fetch()
By Sakib Rasul

Deliverables
1. Host our restaurant's menu with JSON Server.
2. Render a list of menu items on load, or display an error message.
3. Render a controlled form for adding new dishes to the list *and* in `db.json`.
4. (Bonus) Render some JSX for updating an item's metadata in the list *and* in `db.json`.
5. (Bonus) Render some JSX for removing an item from the list *and* `db.json`.

*/

import Form from './Form';

export default function App() {
  return (
    <main>
      <h1>Chez Flatiron</h1>
      <section>
        <h2>Menu</h2>
        <ul>
          <li>Beef Gyro | $10</li>
          <li>Sweet Potato Fries | $5</li>
        </ul>
      </section>
      <section>
        <h2>[ADMIN AREA] Submit a New Dish!</h2>
        <Form />
      </section>
    </main>
  );
}
