import React, {useState, useContext} from "react";

function ApiTesting(){

    const teams = fetch('https://api.football-data.org/v4/teams/', {
        headers: {"X-Auth-Token": "e7bbd1f177554369ab2ede0a91eac908", "offset" : 50}
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        });


    return (<div></div>)
}

export default ApiTesting

