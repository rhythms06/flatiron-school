import React from "react"
import Store from "./Store"

function StoreList() {


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
                {/** Render a list of <Store> components here. */}
            </tbody>
        
        </table>
    );
}

export default StoreList;