import React from "react"

// We'll have <App> control <Search>, so that <App> can filter <StoreList>.
function Search({ query, onUpdateQuery }) {
    return(
        <div className="search-container">
            {/* To control an <input>, pass down its `value` and `onChange` handler as props from its parent. */}
            <input type="text" placeholder="Search names..." value={query} onChange={onUpdateQuery} />
        </div>
    );
}

export default Search;