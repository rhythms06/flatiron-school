import React from "react"
import Planet from "./Planet"

function PlanetList({ planets }) {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planets.map(planet => 
                    <Planet key={planet.id}
                            name={planet.name}
                            climate={planet.climate}
                            terrain={planet.terrain}
                            population={planet.population}
                    />    
                )}
            </tbody>
        </table>
    );
}

export default PlanetList;