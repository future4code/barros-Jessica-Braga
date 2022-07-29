
import axios from "axios"
import './App.css';
import { useState } from "react"

function App() {
const [inputName, SetinputName] = useState("")
const [inputEmail, SetinputEmail] = useState("")


const atualizaName = (event) => {
SetinputName (event.target.value)
}


const atualizaEmail = (event) => {
SetinputEmail (event.target.value)
}


const body= {
name: inputName,
email: inputEmail
}

const myHeaders = {
headers:{
Authorization: "jessica-braga-barros"
}
}

const adicionarNameEmail = (event) => {
event.preventDefault();

axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, myHeaders)
.then(() => {
alert ("Sucesso!")
})
.catch(() =>{
alert ("Erro.")
}) 
}

return (
<div className="App">
<input type="text" value={inputName} onChange={atualizaName} placeholder="Digite seu nome"/>
<input type="email" value={inputEmail} onChange={atualizaEmail} placeholder="Digite seu email"/>
<button onClick={adicionarNameEmail}>Adicionar</button>
</div>
);
}


export default App;
