import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Problem';

// To turn off Strict Mode for your entire app, just stop wrapping
//    your <App /> in <React.StrictMode> tags, i.e. remove
//    <React.StrictMode> and </React.StrictMode> from the input of `root.render()`.
// To re-enable Strict Mode only for certain parts of your app,
//    import StrictMode from "react" and wrap components in <StrictMode> tags wherever
//    you wish.
// In any case, it's recommended that you keep Strict Mode on in development, for three reasons:
//    (a) it'll help you identify impure components,
//    (b) it'll help you identify effects that need cleanup, and
//    (c) it'll let you know if any of your components use deprecated React APIs.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
