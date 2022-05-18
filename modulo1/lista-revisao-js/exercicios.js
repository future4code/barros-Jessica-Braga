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
   let retornoPares = []
   for (let i=0; i<n*2; i++){
     if (i%2===0){
       retornoPares.push(i)
     }
   }
   return retornoPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if( ladoA === ladoB &&  ladoB === ladoC && ladoC === ladoA ){
  return "Equilátero"
}
else if (ladoA === ladoB && ladoC != ladoA || ladoB === ladoC && ladoC != ladoA || ladoC === ladoA && ladoA != ladoB){
  return "Isósceles"
}
else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){

return "Escaleno"

}

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let array2 = []
  const crescente = array.sort((item, index) => {
    return item - index
    
      })
     let segundoMaiorNumero = crescente[crescente.length -2]
     let segundoMenorNumero = crescente[1]
array2.push(segundoMaiorNumero, segundoMenorNumero)
    return array2
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa = {
    nome: pessoa.nome,
	idade: pessoa.idade,
	email: pessoa.email,
	endereco: pessoa.endereco
   }
   let pessoa2 ={
     ... pessoa,
     nome: "ANÔNIMO"
   }
   return pessoa2
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let permissaoEntrada = pessoas.filter ((item) => {
     if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60){
     return item
    }
   })
   return permissaoEntrada

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let NpermissaoEntrada = pessoas.filter ((item) => {
     if (item.altura < 1.5 || item.idade <= 14 || item.idade >= 60){
     return item
    }
   })
   return NpermissaoEntrada
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
let saldo = contas.map((item) => {
  return item.compras.reduce ((valor1, valor2) => {
    return valor1 + valor2
 }, 0)
})
for (let i = 0; i < contas.length; i++) {
  contas[i].saldoTotal -= saldo[i]
  contas[i].compras = []
}
return contas
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordenado = consultas.sort((item, index) => {
    return (item.nome > index.nome)? 1 : ((index.nome > item.nome)? -1 : 0)
    
      })
      return ordenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
}