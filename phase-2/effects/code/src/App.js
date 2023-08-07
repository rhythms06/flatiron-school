/*

  Phase 2 -> Effects
  Created August 7, 2023
  By Sakib Rasul

  Core Deliverables
  1. Fetch data from an external resource on a component's first render.

*/

// To locally manage our data, we'll import useState().
// To fetch our data on mount, we'll import useEffect().
// Note: Our data is stored in `code/db.json`.
// Note: "Fetching data on mount" is an *effect*
//       because we're *synchronizing a component's render(s)* (its first render)
//       to *an external system* (JSON Server).
import { useState, useEffect } from 'react';

export default function App() {
  // We're hosting our articles with JSON Server, so we'll need to load them into our component.
  // That means that our component's articles are *independent, dynamic data*.
  // Initially, our component renders no articles. On load, we hope that'll change.
  // So...let's use state to locally manage our articles!
  const [articles, setArticles] = useState([]);

  // To run `fetch()` on load, we simply:
  // (a) wrap our GET request in an effect, and
  // (b) include an empty dependency array.
  // Note: You might notice that "loading..." gets logged twice,
  //       and that, more importantly, `fetch()` runs twice.
  //       That's because Strict Mode (on by default in development)
  //       runs every effect twice. React does this to help you notice
  //       effects that go on longer than you might like them to.
  //       If you're worried about calling an API one too many times, you have three options:
  //   (a) use an API that isn't as stingy (one extra API call usually isn't an issue),
  //   (b) implement a cleanup function (I've included an example after this effect), or
  //   (c) turn off Strict Mode (I've explained how to do that in `src/index.js`).
  //       All of these options work, but I think that (a) is a lot better than (b),
  //       and that (b) is a lot better than (c). Strict Mode exists to help you identify bugs
  //       in development, and it's safest to keep it on. 
  useEffect(() => {
    console.log("loading...")
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(articles => setArticles(articles))
  }, []);

  // Here's an example of an effect with a cleanup function.
  // To specify cleanup, just return a second function from the effect's function.
  // Notice here that "loading..." is only logged once!
  // First, a boolean we'll use to keep track of whether or not this effect has run yet:
  // let loaded = false;
  // // Next, the effect:
  // useEffect(() => {
  //   // Let's only fetch data on the effect's first run, i.e. when `loaded` is `false`:
  //   if (!loaded) {
  //     console.log("loading...");
  //     fetch("http://localhost:3000/articles")
  //     .then(response => response.json())
  //     .then(articles => setArticles(articles));
  //   }
  //   // And once the effect's run its course, let's set `loaded` to `true`.
  //   // Now, when the effect runs a second time, our log and fetch won't run again!
  //   return () => loaded = true;
  // }, []);

  // Here's an example of an effect that runs on every render.
  // Notice that the effect itself triggers a re-render by invoking `setArticles()`.
  // Before you try uncommenting this code, think carefully about what'll happen :P
  // useEffect(() => {
  //   console.log("loading...")
  //   fetch("http://localhost:3000/articles")
  //   .then(response => response.json())
  //   .then(articles => setArticles(articles))
  // });

  // In the examples above, our effects don't depend on any state or props.
  // In other words, we don't reference any state or props in our functions.
  // This component only has one state (`articles`) and zero props,
  //      so the only way an effect in this component could have dependencies
  //      is if an effect referenced `articles` (or other state or props, if we added any).
  // Here's an example of just that, an effect that depends on `articles`.
  useEffect(() => {
    if (articles.length > 1) console.log("yay, we have more than one article!");
  }, [articles]);

  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>The Flatiron Archives</h1>
      { articles.map(article => <div key={article.id}>
          <em>{article.title}</em> by {article.author}
        </div>) }
    </div>
  );
}
