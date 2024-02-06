/*

Phase 2 -> Challenge: Bob's Neighbors

Core Deliverables
1. Fetch and display store names in <StoreList>.
2. Handle new store name submissions.
3. Handle filtering by store name.

Component Tree

    App
    |=> Search
    |=> NewStoreForm
    |=> StoreList
        |=> Store
        |=> Store
        |=> ...

*/

import './App.css';
// To make Component B a child of Component A...
import Search from './components/Search';
// ...import Component B into Component A...
import NewStoreForm from './components/NewStoreForm';
// ...and render Component B in Component A's JSX.
import StoreList from './components/StoreList';
// Remember to import `use[x]`!
import { useEffect, useState } from 'react';

function App() {
  // We use state to hold data that changes over time.
  // Our list of store names will change as the page loads and the user creates new ones.
  // Our search query will change as the user types into the search box.
  // So let's use state for both!
  const [ stores, setStores ] = useState([]);
  const [ query, setQuery ] = useState("");

  // We use an effect with an empty dependency array
  //    when we want some code to run only on mount.
  // Here, we use it to fetch store names on load.
  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then(response => response.json())
    .then(stores => { setStores(stores); });
    // Alternatively, we can write `.then(setStores);`
    // Passing a function name into a callback parameter
    //         means that the function will be called with whatever parameters
    //         are available to that callback!
  }, []);

  // Using state for each input
  /*const [newName, setNewName] = useState("");
  function onNameChange(event) { setNewName(event.target.value); }
  const [newImage, setNewImage] = useState("");
  function onImageChange(event) { setNewImage(event.target.value); }
  const [newSeason, setNewSeason] = useState(0);
  function onSeasonChange(event) { setNewSeason(event.target.value); }
  const [newEpisode, setNewEpisode] = useState(0);
  function onEpisodeChange(event) { setNewEpisode(event.target.value); }*/

  // Using one state for all inputs
  const [newStore, setNewStore] = useState({
    name: "", image: "", season: 0, episode: 0
  });

  function onChangeNewStore(event) {
    setNewStore({ ...newStore, [event.target.name]: event.target.value })
  };

  // NewStoreForm's submit handler.
  // This syntax is equivalent to `function onAddStore(event) {...}`.
  const onAddStore = event => {
    // Remember to prevent a form submission's default behavior!
    event.preventDefault();
    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newStore)
    }).then(response => response.json())
    // ...and once that's succeeded, let's update state with spread syntax!
    .then(newStore => setStores([...stores, newStore]));
  };

  // The function to run when the user types into the search box
  //     (i.e. when the user wants to update the search query state).
  const onUpdateQuery = event => setQuery(event.target.value);

  // Once <App> controls <Search>, we can use `query` to filter store names in a new array.
  // We can pass this new array to <StoreList> so that our list updates as we search!
  const visibleStores =
    // `filter` works by running a function on each element that returns either true or false.
    // The `true` elements are copied to a new array, while the `false` elements are discarded.
    // `a.includes(b)` returns true when `b` is a substring of `a`. 
    // This syntax is equivalent to an if-else statement that depends on `query`.
    stores.filter(store => query ? store.name.toLowerCase().includes(query.toLowerCase()) : true);

  // The function to run when the user wants to update a store name.
  const onUpdateStore = (event, id) => {
    // Remember to prevent a submission's default behavior!
    event.preventDefault();
    // Let's PATCH the selected store in the database.
    // We can get the right store ID by receiving it from where it's called, <Store>.
    fetch(`http://localhost:8085/stores/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // Let's specify the properties we want to update in the database.
      // Remember, `event.target` is the form, and `event.target.[name]`
      //           is <input name=[name] /> or <input id=[name] />,
      //           if one exists as a child of the form.
      body: JSON.stringify({
        "name": event.target.name.value,
        "image": event.target.image.value,
        "season": event.target.season.value,
        "episode": event.target.episode.value
      })
    })
    .then(response => response.json())
    // Once the PATCH has succeeded, let's update state!
    .then(updatedStore => {
      // We can use `map` to call `setStores` with a new array where one store is updated.
      const visibleStores = stores.map(store => {
        // `return store` for all stores except one,
        //         in which case the store's ID matches the one that was selected,
        //         and we `return updatedStore`.
        if (store.id === updatedStore.id) {
          return updatedStore;
        } else {
          return store;
        }
        // Alternatively, `return (store.id === updatedStore.id) ? updatedStore : store`.
      });
      // Finally, call `setStores()`.
      setStores(visibleStores);
      });
  };

  // The function to run when the user wants to remove a store name.
  const onDeleteStore = (id) => {
    // Let's DELETE the selected store from the database.
    // We can get the right identifier from where the function is called, <Store>.
    fetch("http://localhost:8085/stores/" + id, { method: "DELETE" })
    .then(response => {
      // With a DELETE request, we can check `response.ok` for success and failure.
      if (response.ok) {
        // At this point, we know that the store was removed from the database.
        // So let's `filter` it out from state!
        const visibleStores = stores.filter(store => store.id !== id);
        setStores(visibleStores);
      }
    })
  }

  // Now let's render our JSX and pass down some props.
  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search query={query} onUpdateQuery={onUpdateQuery} />
      <NewStoreForm onAddStore={onAddStore}
                    newStore={newStore} onChangeNewStore={onChangeNewStore} />
      <StoreList stores={visibleStores}
                 onUpdateStore={onUpdateStore}
                 onDeleteStore={onDeleteStore} />
    </div>
  );
}

export default App;
