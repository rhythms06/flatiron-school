import React from "react"
import Store from "./Store"

// This component maps `stores` to <Store> components, and passes down PATCH and DELETE handlers.
function StoreList({ stores, onUpdateStore, onDeleteStore }) {
    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {stores.map(store => 
                    <Store key={store.id} store={store} onUpdateStore={onUpdateStore} onDeleteStore={onDeleteStore} /> )
                }
            </tbody>
        </table>
    );
}

export default StoreList;