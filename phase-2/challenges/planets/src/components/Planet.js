import React from "react"

function Planet({ name, climate, terrain, population }) {
    return(
        <tr>
            <td>{name}</td>
            <td>{climate}</td>
            <td>{terrain}</td>
            <td>{population}</td>
        </tr>
    );
}

export default Planet;