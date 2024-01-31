import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// This is the entry point of our React application.
// It locates `<div id="root"></div>` in `../public/index.html`...
const root = ReactDOM.createRoot(document.getElementById('root'));
// ...and renders inside it...
root.render(
  // ...in strict mode...
  <React.StrictMode>
    {/* ...the application defined in <App>. */}
    <App />
  </React.StrictMode>
);
