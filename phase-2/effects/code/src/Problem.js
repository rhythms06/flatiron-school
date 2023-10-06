/*

  Phase 2 -> Effects
  Created August 7, 2023
  By Sakib Rasul

  Core Deliverables
  1. Fetch data from an external resource on a component's first render.

*/

export default function App() {
  const articles = [ { id: 0, title: "Why I Fetch Data", author: "Max the Beagle" } ];

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
