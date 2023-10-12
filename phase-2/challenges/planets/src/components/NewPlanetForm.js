import React from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({ newPlanet, onChangeNewPlanet, onSubmitNewPlanet }) {
    return(
        <form onSubmit={onSubmitNewPlanet}>
            <input type="text" name="name"
                   value={newPlanet.name} onChange={onChangeNewPlanet} placeholder="Name" />
            <input type="text" name="climate"
                   value={newPlanet.climate} onChange={onChangeNewPlanet} placeholder="Climate" />
            <input type="text" name="terrain"
                   value={newPlanet.terrain} onChange={onChangeNewPlanet} placeholder="Terrain"/>
            <input type="text" name="population"
                   value={newPlanet.population} onChange={onChangeNewPlanet} placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;