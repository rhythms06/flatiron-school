/*
Phase 2 -> Routing
by Sakib Rasul | Updated February 7, 2024 | Created June 23, 2023

Core Deliverables
1. Install React Router (a project requirement) and Tailwind CSS (an optional approach to styling).
2. Create a root layout and three nested routes.
   a. Add a <nav> to the root and render the other routes in an outlet.
3. (Optional) Handle errors with a custom component.
4. GET resources from your backend, and hold them in state. Optionally formulate your fetch() in a loader.
5. Pass props down to a form with controlled inputs.
   a. On submit, POST to your backend, and update state.
*/

// Create React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Tailwind CSS (along with ../tailwind.config.js)
import "./index.css";
// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Routes & Error Handling
// Note: By convention, routes are named `routes/[slug].jsx`.
import Error from './error';
import Root from "./routes/root";
import Welcome from './welcome';
import Teas from './routes/teas';
import About from './routes/about';

const router = createBrowserRouter([
  {
    // Render <Root> at [URL].
    path: "/",
    element: <Root />,
    // Render <Error> when errors occur.
    errorElement: <Error />,
    // Render these children in the root's outlet when...
    children: [
      {
        // ...the user visits [URL].
        path: "/",
        element: <Welcome />
      },
      {
        // ...the user visits [URL]/teas.
        path: "teas",
        element: <Teas />,
        loader: async () => fetch("http://localhost:3000/teas").then(response => response.json())
      },
      {
        // ...the user visits [URL]/about.
        path: "about",
        element: <About />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
// Replacing <App> with <RouterProvider> injects our routes into index.html.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
