import React from "react";
import {useNavigate} from "react-router-dom";

function ListTripsPage () {

    const navigate= useNavigate()

    return(
        <>
        <h1>ListTrips</h1>
        <button onClick={()=>navigate("/Application")}>Inscreve-se</button>
        </>
    )
}

export default ListTripsPage;