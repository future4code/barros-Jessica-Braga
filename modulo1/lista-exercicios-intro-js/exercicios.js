// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const alturaRetangulo = Number(prompt("Digite a altura do retangulo!"))
const larguraRetangulo = Number(prompt("Digite a largura do retangulo!"))
const area = alturaRetangulo * larguraRetangulo
console.log (area)



}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual é o ano atual?"))
const anoNascimento = Number(prompt("Qual é o ano de nascimento?"))
const idade = anoAtual - anoNascimento
console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc= peso / (altura * altura)
return imc 


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Digite o nome")
let idade = Number(prompt("Digite a idade"))
let email = prompt("Digite o email")
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)







}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Diga qual é a sua primeira cor favorita?")
  let cor2 = prompt("Diga qual é a sua segunda cor favorita?")
  let cor3 = prompt("Diga qual é a sua terceira cor favorita?")
  console.log ([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()



}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let primeiroItem = array[0]
let ultimoItem = array[array.length -1]
array[0] = ultimoItem
array[array.length -1] = primeiroItem
return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()

 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
//Desafio



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
// Desafio
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
// Desafio
}