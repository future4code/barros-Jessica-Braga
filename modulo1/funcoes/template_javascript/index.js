// ------------Exercícios de interpretação de código-------------
// 1.

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) 
console.log(minhaFuncao(10))

 a) O que vai ser impresso no console?
10
50

b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
 O resultado não será impresso.
   
}


*/


// 2.

/*a. Explique o que essa função faz e qual é sua utilidade
Trnsformando o texto em letras minusculas e procurando a existência da palavra cenoura.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
True
True
False
*/

// ------------Exercicio de escrita de código-------------

// 1.
// a) 
function sobreMim () {
console.log ("Eu sou Jessica, tenho 28 anos, moro em Rio de Janeiro e sou estudante")
}

// b)
function informacaoPessoa ( nome, idade, endereco, profissao ) {
	nome = "maria"
	idade = 30
	endereco = "Rio de Janeiro"
	profissao = "advogada"

	const texto = (`Eu sou ${nome} tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
	return texto
}

// 2. A)
function valores ( valor1, valor2){
	valor1 = 2
	valor2 = 4
	 let resultado = valor1 + valor2
return resultado

}
 console.log (valores ())

 // b)
 function comparacao (valor1, valor2){
	 valor1 = 5
	 valor2= 1
	 return valor1 >= valor2
 }

console.log (comparacao())





// c)
function par (valor1){
	valor1= 3
	let resultado = valor1 % 2
	
	let resultado1 = resultado === 0
	return resultado1

}


// d)
function mensagem (oi) {
	oi = " tudo bem ?"
	console.log (oi.length, oi.toUpperCase())
}
mensagem()

//3. 

function operacao (soma, subtracao, multiplicacao,divisao) {
let numero1 = Number(prompt("Insira um numero"))
let numero2 = Number(prompt("Insira um numero"))

soma = numero1 + numero2
subtracao = numero1 - numero2
multiplicacao = numero1 * numero2
divisao = numero1 / numero2

console.log (` numeros inseridos: ${numero1} e ${numero2}
soma: ${soma}
diferença: ${subtracao}
multiplicacao: ${multiplicacao}
divisao: ${divisao}`)


}
operacao ()

