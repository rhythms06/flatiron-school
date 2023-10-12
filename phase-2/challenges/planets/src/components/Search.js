import React from "react"

function Search({ query, onChangeQuery }) {
    return (
        <div>
            <input type="text" value={query} onChange={onChangeQuery} placeholder="Search..."/>
        </div>
    );
}

export default Search;