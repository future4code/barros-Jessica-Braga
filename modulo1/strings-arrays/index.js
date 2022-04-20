// Exercícios de interpretação de código

// 1.
/*let array
console.log('a. ', array)
Resposta: Indefinido, pois não foi atribuído nenhum valor.


array = null
console.log('b. ', array)
Resposta: Null, pois foi valor atribuído.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
Resposta: numero de itens 11

let i = 0
console.log('d. ', array[i])
Resposta: 3, pois o indice é 0

array[i+1] = 19
console.log('e. ', array)
Resposta: Substitituir o4 por 19. [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
Resposta: 9
*/


// 2.
/*const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
Resposta: SUBI NUM ONIBUS EM MIRROCOS (As letras ficam em maiuculo, troca todas as letras A pelo I, e possuem 27 caracteres incluindo o espaço)
*/ 


// Exercícios de escrita de código

// 1.
let nomeUsuario = prompt ("Qual é o seu nome?")
let emailUsuario = prompt ("Qual é o seu email?")
console.log (" O email" + emailUsuario + " foi cadastrado com sucesso. Seja bem vindo(a)" + nomeUsuario +"!")

// 2.
let comida = ["lasanha", "pizza", "hamburguer", "bolo", "batata"]

console.log (comida)

console.log (`Essas são minhas comidas favoritas:

${comida[0]}
${comida[1]}
${comida[2]}
${comida[3]}
${comida[4]} `)

let comidaFavorita =  prompt ("Qual é a sua comida favorita?")
comida.splice(1,1,comidaFavorita)
console.log (comida)

// 3. 
let listaDetarefas = []

let tarefa1 = prompt("Qual é a primeira tarefa?")
let tarefa2 = prompt("Qual é a segunda tarefa?")
let tarefa3 = prompt("Qual é a terceira tarefa?")

listaDetarefas = [tarefa1, tarefa2, tarefa3]
console.log ("As tarefas são:", listaDetarefas)

let indice = Number(prompt(" Qual tarefa já realizou?"))
listaDetarefas.splice (indice, 1)
console.log (`Falta realizar a tarefa ${listaDetarefas.length}, dentre as ${listaDetarefas}`)







