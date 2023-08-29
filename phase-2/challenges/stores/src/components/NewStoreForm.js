import React from "react"

// We'll have <App> control this form's submission handler, so that <App> can add new stores to <StoreList>.
function NewStoreForm({ onAddStore }) {
    return(
        <form id="newStoreForm" onSubmit={onAddStore}>
            <input type="text" id="name" placeholder="Store Name"/>
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1"/>
            <input type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;