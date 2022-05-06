/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const carta = comprarCarta()
    const carta2 = comprarCarta()
    const carta3 = comprarCarta()
    const carta4 = comprarCarta()
    const somaUsuario = carta.valor + carta2.valor
    const somaComputador = carta3.valor + carta4.valor

    console.log ("Boas vindas ao jogo de Blackjack!")

    let mensagem = confirm("Quer iniciar uma nova rodada?") 

    if (mensagem === true) {
       console.log (`Usuário - cartas:${carta.texto} ${carta2.texto} - ${somaUsuario}`)
       console.log (`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${somaComputador}`)
       if(somaUsuario > somaComputador) {
          console.log (`O usuario venceu!`)
       }
      else if (somaComputador > somaUsuario) {
         console.log (`O computador venceu!`)
      }
      else if (somaUsuario === somaComputador){
      console.log (`Empate!`)
      }
    } else {
       console.log ("O jogo acabou.")
    }
    

  
