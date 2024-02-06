/*

1. Make NewStoreForm a controlled form (either one state for each input, or one for all)
2. Make an onSubmit handler that adds to the list of stores (i.e. set state to add to the array).

*/

// We'll have <App> control this form's submission handler, so that <App> can add new stores to <StoreList>.
function NewStoreForm({ onAddStore, newStore, onChangeNewStore }) {
    return(
        <form id="newStoreForm" onSubmit={event => onAddStore(event)}>
            <input type="text" id="name" placeholder="Store Name"
                   name="name" value={newStore.name} onChange={onChangeNewStore}/>
            <input type="text" id="image" placeholder="Image URL"
                   name="image" value={newStore.image} onChange={onChangeNewStore}/>
            <input type="number" id="season" placeholder="Season" step="1"
                   name="season" value={newStore.season} onChange={onChangeNewStore}/>
            <input type="number" id="episode" placeholder="Episode" step="1"
                   name="episode" value={newStore.episode} onChange={onChangeNewStore}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;