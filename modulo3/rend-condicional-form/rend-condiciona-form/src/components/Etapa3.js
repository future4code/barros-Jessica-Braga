import React from "react";
import {Login} from "../style";

function Etapa3 (){
    return (
        <Login>
        <h1>Etapa3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <form>
<label> 1. Porque você não terminou o curso de graduação?</label>
<input type="text"></input>
<label>2. Você fez algum curso complementar?</label>
<select name="curso">
    <option value="">Selecione</option>
    <option value="1">Sim</option>
    <option value="2">Nenhum</option>
    </select>




        </form>
        </Login>

    );
}

export default Etapa3;