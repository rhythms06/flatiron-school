/*
Phase 2 -> Routing
by Sakib Rasul | Updated February 7, 2024 | Created June 23, 2023

Deliverables
1. Install React Router (a project requirement) and Tailwind CSS (an optional approach to styling).
2. Create a root layout and three nested routes.
   a. Add a <nav> to the root and render the other routes in an outlet.
3. `GET` resources from your backend, and hold them in state.
4. Pass props to a controlled form.
   a. `onSubmit`, `POST` to your backend and update state.
5. (Bonus) Handle routing errors with a custom component.
6. (Bonus) Reformulate your `GET` request with `loader` and `useLoaderData()`.
*/

// Create React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Tailwind CSS (along with ../tailwind.config.js)
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='text-2xl hover:italic font-semibold'>
      Sakib's Tea House
    </h1>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
