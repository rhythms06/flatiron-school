# Getting Started with React

**React** is a JavaScript library maintained by Meta, designed for building modern interfaces out of purpose-built components.

A **component** is a JavaScript function that can take input, calculate things, and render interactive HTML. Components can represent any portion of UI, from things as small as buttons to things as large as entire applications!

Once you've built a few components, you can combine them, pass data between them, and modify when, where, and how they appear onscreen.

But before we get into that, let's start a new project in React.

## Building React without a Framework

Starting a new React project without a framework is kind of like cooking pasta without a bowl to serve it in.

A web **framework** is a suite of tools that solves common web development problems - like routing - that you'll probably have to solve sooner or later if you go to production with React. **Vercel** is Meta's preferred partner in solving these challenges, making **Next.js** the most future-proof way to build in React.

That being said, using a library without a framework gives you the most flexibility in how you use that library. In our case, starting in React without a framework offers a great way to learn React's minimum specification.

If you don't kickstart a React project with a framework, you'll need a **package manager** and **build tool** to get started. **Package managers** like `npm`, `yarn`, `pnpm`, and `bun` manage your project's dependencies, which in our case will be `react`, `react-dom`, and our build tool of choice. **Build tools** like `vite`, `parcel`, and `create-react-app` bundle disparate files into projects that you can view in your browser, and that update in real-time as you edit your files.

Below are guides to integrating `npm`, `react`, and `react-dom` with some common build tools. **Create React App** is known for being maintained by Meta, **Vite** for being fast and easy to get started with, and **Parcel** for granting maximum flexbility.

### [Create React App](create-react-app)
_Create React App (CRA)_ is maintained by the developers of React, but is not officially recommended by them due to unaddressed inefficiencies, bloat, and incompatibility. In particular, CRA loads a testing and analytics suite that can be tough to wrangle for a newcomer, and does not play well with `postcss`, a core dependency of the popular styling framework Tailwind CSS.
1. Run `npx create-react-app [project-name]`
2. `cd` into `[project-name]`.
3. Run `npm start`, et voilà!

### [Vite](vite)
_Vite_, which means "quick" in French, is built to be fast and lean.

_Note: Vite requires Node.js v18 or greater. If you have `nvm`, you can run `nvm alias default 18.0.0` to switch to the minimum viable version across your machine._

1. Run `npm create vite@latest [project-name] -- --template react-swc`.
2. Press `y` and `enter` to install `create-vite`.
3. `cd` into `[project-name]`.
4. Run `npm install` and `npm run dev`, et voilà!

### [Parcel](parcel)
_Parcel_ is zero-configuration build tool, which means it offers no opinion on how you build your app. This means that even the most trivial of problems, like what to name and where to place our HTML file, are up to us to solve. 

1. `cd` into an empty project directory.
2. Run `npm init` to create a `package.json` file.
3. Run `npm install react react-dom` to install React.
4. Run `npm install --save-dev parcel` to install Parcel.
5. Create HTML, JS, and JSX entry points:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Parcel + React</title>
        <script defer type="module" src="index.js"></script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```
```js
import { createRoot } from "react-dom/client";
import { App } from "./src/App";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
```
```jsx
export const App = () => {
    return <h1>Parcel + React!</h1>
};
```
6. Add a `start` script to `package.json`:
```json
"scripts": {
    "start": "npx parcel index.html"
  }
```
7. Run `npm start`, et voilà!