import imagem from './fotoperfillabenu.jpg';
import './App.css';

function App() {
  function mensagem (){
    alert ("Boa Noite!")
  }
  const apresentacao = "Olá! Eu sou a Jessica!"
  return (
    <div className="App">
      <header className="App-header">
        <h1>{apresentacao}</h1>
        <img src={imagem} className="Foto-jessica" alt="imagem" />
        <p>
          Este é o meu primeiro site React!
        </p>
        <button onClick={mensagem}> Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
