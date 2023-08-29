import React from 'react'

// This component takes a store and renders its properties,
//      and calls parent PATCH and DELETE handlers as needed.
function Store({ store, onUpdateStore, onDeleteStore }) {
    return (
        <>
            <tr>
                <td className="row-name">
                    <span>{store.name}</span>
                </td>
                <td>
                    <a href={store.image} target="_blank"><b>&#8599;</b></a>
                </td>
                <td>
                    <span>{store.season}</span>
                </td>
                <td>
                    <a href={store.episodeUrl} target="_blank">{store.episode}</a>
                </td>
            </tr>
            <tr>
                <td id="storeOptions">
                    <form id="updatedStoreForm" onSubmit={event => onUpdateStore(event, store.id)}>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="image" placeholder="Image URL" />
                        <input type="number" name="season" placeholder="Season" />
                        <input type="number" name="episode" placeholder="Episode" />
                        <input type="submit" value="✔️" />
                    </form>
                    <button onClick={() => onDeleteStore(store.id)}>X</button>
                </td>
            </tr>
            
            
        </>
    );
}

export default Store