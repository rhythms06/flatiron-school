/*

Phase 2 -> Forms
By Sakib Rasul

Core Deliverables
1. Refactor <Form> into a "controlled" form.
2. Add "Your lucky number is X!" after the two fields, where X is dependent on the two fields.

*/

import Form from './Form';

function App() {
  return (
    <div>
      <header>
        <h1>Luck of the Screen</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
