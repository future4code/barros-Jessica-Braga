// Exercícios de interpretação de código

/* 1. a) Matheus Nachtergael
Virginia Cavendish 
{canal: 'Globo', horario: '14h'} 
      

2. a)  {nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}

b)   A sintaxe dos três pontos é chamada de espalhamento ou spread, 
faz uma cópia do objeto, podendo ser manipulada,
mudando ou adicionando propriedades, como o exercício em questão demonstrou essas possibilidades.


3. a) false
undefined 

b) False, porque foi declarada a propriedade backenser dentro do objeto pessoa, atribuindo o valor de um booleano false;
Undefined, pois a propriedade altura não foi atribuída dentro do objeto pessoa.
*/

// Exercícios de escrita de código
//1. a)

let pessoa = {
nome: "Jessica",
apelidos: ["Jessi", "Jessiquinha", "Jessicat" ]
}
function frase (pessoa) {

console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}
frase(pessoa)

// b)

let novosApelidos = {
...pessoa,
apelidos: ["lindinha", "bonitinha", "pricesinha"]

}
console.log (frase(novosApelidos))

// 2. a)
let primeiroObjeto = {
    nome: "Liz",
    idade: 40,
    profissao: "enfermeira",
}

let segundoObjeto = {
    nome: "Alfredo",
    idade: 58,
    profissao: "vendedor",
}

// b) 

function receberObjetos (primeiroObjeto,segundoObjeto){

    let retornarArray = [primeiroObjeto.nome, primeiroObjeto.nome.length, primeiroObjeto.idade, primeiroObjeto.profissao, primeiroObjeto.profissao.length,
        segundoObjeto.nome, segundoObjeto.nome.length, segundoObjeto.idade, segundoObjeto.profissao, segundoObjeto.profissao.length]

        return retornarArray
}

console.log (receberObjetos(primeiroObjeto, segundoObjeto))

// 3.
//a)
let carrinho = []

// b)
let primeiraFruta = {
    nome: "morango",
    disponibilidade: true
}

let segundaFruta = {
    nome: "abacaxi",
    disponibilidade: false
}

let terceiraFruta = {
    nome: "melancia",
    disponibilidade: false
}

// c)
function receberFruta (fruta){
    carrinho.push (fruta)
}

receberFruta (primeiraFruta)
receberFruta (segundaFruta)
receberFruta (terceiraFruta)

//d)
console.log (carrinho)