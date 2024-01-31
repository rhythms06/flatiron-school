/*

Phase 2 -> Forms
By Sakib Rasul

Core Deliverables
1. Refactor <Form> into a "controlled" form, i.e. a form that controls its input values and states.
2. Prevent users from including the number 8 as a part of their name.
3. (Bonus) Prevent users from including any number in their name.
4. Add "Your lucky number is X!" after the two fields, where X is dependent on the two fields.
5. Handle form submissions by appending the new user to a local array.
6. Render the array as a list of members in `Form`.
7. (Bonus) Render the list of members in `App` instead of `Form`.

*/

import Form from './Form';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <header>
        <h1>Luck of the Screen</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
