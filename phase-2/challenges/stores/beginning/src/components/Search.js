import React from "react"

function Search() {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={() => console.log("Searching...")} />
        </div>
    );
}

export default Search;