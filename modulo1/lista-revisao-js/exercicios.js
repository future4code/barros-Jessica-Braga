// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const crescente = array.sort((item, index) => {
return item - index

  })
  return crescente
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const par = array.filter((item) => {
if(item %2===0){
    return item
}
})
return par
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const pares = array.filter ((item) => {
if (item %2===0){
    return item 
}
 })
 const pareselevados = pares.map ((item) => {
return item * item
 })
 return pareselevados
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
  return  Math.max(... array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = 0
let menorNumero = 0
let divisao 
if (num1 > num2) {
    maiorNumero = num1
} else {
maiorNumero = num2
}
if (num1 < num2) {
    menorNumero = num1
} else {
    menorNumero = num2
}
if (maiorNumero % menorNumero ===0){
    divisao = true
} else {
divisao = false
}
let objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor:divisao,
    diferenca: maiorNumero - menorNumero
}
return objeto
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}