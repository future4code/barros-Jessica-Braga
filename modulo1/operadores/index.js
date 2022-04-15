/*exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
 false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
true

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
retorna o oposto, era false e passou a ser true

console.log("d. ", typeof resultado)
true or false

exercício 2,3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

 O código não funciona, pois o prompt é usado para string.
Sendo assim, para correção tem que ser feita a troca do comando
prompt para Number
 O correto seria:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number (primeiroNumero) + Number (segundoNumero)

console.log (soma)

 Exercícios de escrita de código
1. Faça um programa que:
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua 
melhor amiga

c) **Imprima na console** a seguinte mensagem:
 "Sua idade é maior do que a do seu melhor amigo?",
  seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade 
(não tem problema se sair um número negativo
*/

/*let idadeUsuario= Number(prompt("Qual é a sua idade?"))
console.log ("Qual é a sua idade", idadeUsuario)

let idadeMelhorAmigo= Number(prompt("Qual é a idade do melhor amigo"))
console.log ("Qual é a idade do melhor amigo", idadeMelhorAmigo)

let IdadeMaiorAmigo= idadeUsuario > idadeMelhorAmigo
console.log ("Sua idade é maior do que a do seu melhor amigo?",IdadeMaiorAmigo)

let diferençaDeIdade= idadeUsuario - idadeMelhorAmigo
console.log ("a diferença de idade é:",diferençaDeIdade, "anos")*/

//=============================================================

/*a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

/*let numeroPar= Number(prompt("insira o numero par"))
let restoDaDivisao= numeroPar % 2
console.log ("O resto da divisão é:", restoDaDivisao)

Números pares vai restar 0 

Números impares vai restar 1.
*/
//=================================================================

/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/


/*let idadeEmAnos= Number(prompt("Qual é a sua idade em anos?"))
console.log ("a idade do usuario em anos é:", idadeEmAnos, "anos")

let idadeEmMeses= idadeEmAnos * 12
console.log (" a idade do usuario em meses é:", idadeEmMeses, "meses")

let idadeEmDias= idadeEmMeses * 30
console.log (" a idade do usuario em dias é:", idadeEmDias, "dias")

let idadeEmHoras= idadeEmDias * 24
console.log ("a idade do usuario em dia é:", idadeEmHoras, "horas")
*/

//=====================================


/*4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro?
obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

let numero1= Number(prompt("digite o primeiro numero"))
let numero2= Number(prompt("digite o segundo numero"))

let primeiroMaiorSegundo= numero1 > numero2
console.log("O primeiro numero é maior que segundo?", primeiroMaiorSegundo)

let igualSegundo= numero1 === numero2
console.log("O primeiro numero é igual ao segundo?", igualSegundo)

let primeiroDiviselSegundo= numero1 % numero2 === 0
console.log ("O primeiro numero é divisível pelo segundo?",primeiroDiviselSegundo )

let segundoDivisivelPrimeiro= numero2 % numero1 === 0
console.log ("O segundo numero é divisível pelo primeiro?", segundoDivisivelPrimeiro)









