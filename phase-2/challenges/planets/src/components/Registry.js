import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([]);
    const [newPlanet, setNewPlanet] = useState({
        name: "", climate: "", terrain: "", population: ""
    });
    const [query, setQuery] = useState("");
    const URL = "http://localhost:8085/planets"
    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(planetArray => setPlanets(planetArray));
    })
    const onChangeNewPlanet = (event) => {
        setNewPlanet({ ...newPlanet, [event.target.name]: event.target.value })
    }
    const onSubmitNewPlanet = (event) => {
        event.preventDefault();
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlanet)
        })
        .then(response => response.json())
        .then(newlyAddedPlanet => setPlanets([ ...planets, newlyAddedPlanet ]));
    }
    const onChangeQuery = event => setQuery(event.target.value);
    // An array of planets where each planet has at least one property value that includes `query`.
    const filteredPlanets =
        // We can use `Object.values(object)` and `array.some(function)` to test every property value of an object. 
        planets.filter(planet =>
            // 1. Make an array out of planet's property values (e.g. 1, "Tatooine", "23", etc.)
            Object.values(planet)
            // 2. Check if any of the strings in the resulting array (e.g. "Tatooine", "23", etc.) match `query`.
            .some(value => typeof(value) === "string" && value.toLowerCase().includes(query.toLowerCase()))
        )
    ;
    return(
        <div className="registry">
            <Search query={query} onChangeQuery={onChangeQuery} />
            <div className="content">
                <PlanetList planets={filteredPlanets} />
                <NewPlanetForm newPlanet={newPlanet} onChangeNewPlanet={onChangeNewPlanet} onSubmitNewPlanet={onSubmitNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;