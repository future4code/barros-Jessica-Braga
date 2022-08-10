import React from "react";
import {useNavigate} from "react-router-dom";

function LoginPage () {

    const navigate= useNavigate ()


    return(
        <> 
        <h1>Login</h1>
        <button onClick={()=>navigate("/AdminHome")}>Pagina do adiministrador</button>
        <button onClick={()=>navigate("/CreateTrip")}>Criar viagem</button>
        <button onClick={()=>navigate("/TripDetails")}> Detalhes da viagem</button>
        </>
    )
}

export default LoginPage;