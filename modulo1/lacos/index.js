//Exercícios de interpretação de código

/* 
1.
 O código está dizendo que enquanto o i for < 5, vai somar o i com mais 1 , e depois guradar o resultado
dentro de valor + i.
 e será impresso no console o valor 10.

2.
 a) 19,
 21, 
 23, 
 25, 
 27,
 30

b) Para acessar o índice de cada elemento dessa lista, o for... of,
é suficiente. Tendo que salvar o indexOf de lista, dentro da variavel criado do for of, e depois, imprimir
essa variavel.



3. 
Se o usuário digitasse o número 4, seria impresso no console
*
**
***
****

 */

// Exercícios de escrita de código

/*let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let quantidade = []
if (bichinhos === 0) { 
console.log ("Que pena! Você pode adotar um pet!")
 } else if ( bichinhos > 0) {
for (let bicho= 0; bicho < bichinhos; bicho ++) {
	let nomes= prompt(" Insira o nomes dos bichos um por um!")
	quantidade.push(nomes)
}
console.log(quantidade)
 }
*/


 //2.
 let arrayOriginal= [2, 3, 4, 10, 12, 19, 20]
function a () {
 for (let valor of arrayOriginal) { 
	 console.log(valor)	  
  }
}
  a()

  function b () {
	  for (let divisao of arrayOriginal){
		 divisao /=10
		console.log (divisao)
	  } 
  }
b()

function c () {
const newArray = []
for (valor of arrayOriginal){
	if ((valor %2)===0){
		newArray.push (valor)
		
	}
}

console.log (newArray)
}

c()
function d () {
for (let indice of arrayOriginal){
	let receberIndice= arrayOriginal.indexOf(indice)
	console.log (`O elemento do index ${receberIndice} é: ${indice}`)
}
}


function e (){
let valorMaximo= 0
for (let posicao=0; posicao < arrayOriginal.length; posicao++){
	let indiceArray= arrayOriginal[posicao]
	if (indiceArray>valorMaximo){
		valorMaximo=indiceArray
	}
}
 
let valorMinimo= valorMaximo
for (let posicao=0; posicao < arrayOriginal.length; posicao++){
	let indiceArray= arrayOriginal[posicao]
	if (indiceArray<valorMinimo){
		valorMinimo=indiceArray
	}
}
console.log (`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
}
e()