// Exercícios de interpretação de código
//1. 
/* a) Digitamos o número que queremos testar, SE o número que escolhemos, 
calculado por 2, restar 0, vai ser impresso no console: "passou no teste", SE NÃO restar 0,
 vai ser impresso no console : "Não passou nou teste"

 b) Numeros pares % 2, vai restar 0 por exemplo: 2, 4, 6 ... vai imprimir a mensagem: "Passou no teste"

 c) Numeros impares % 2, não vai restar 0, por exempl: 3, 5, 7 ... vai imprimir a mensagem "Não passou no teste"
*/

// 2.
/* a) Identificar o preço das frutas

b) O preço da fruta  maça  é  R$  5

c) O preço da fruta  Pêra  é  R$  5
*/

// 3.
/* a) A primeira linha está criando uma variavel número, que não poderá ser modificado e/ou alterado,
por estar usando "const" e usando o prompt para pedir ao usuario que digite um número,
 colocando o Number na frente do prompt, pois trata-de de um número, e não de uma string, por exemplo.

b) A mensagem seria: Esse número passou no teste, pois 10 é > 0;
 Se fosse o número -10, iria apresentar erro no console,
 pois não foi atribuido uma condição para um valor negativo.

c) Sim. Não vai ser impresso no console, pois está fora do escopo local, 
que é compreendido pelo o que está dentro das {}, ou seja, mudando a posição do console.log, de fora
para dentro do escopo, irá funcionar, imprimindo a mensagem " Essa mensagem é secreta".
*/

//------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código
//1.

/*let idadeUsuario= Number(prompt("Qual é a sua idade?"))
if (idadeUsuario>=18) {
     console.log("você pode dirigir")
} else 
    console.log ("você não pode dirigir")
    

    //---------------------------------------------------------------------------------------------------

    // 2.
 let turno= prompt(`Qual é o turno em que você estuda?"
Digite M (matutino), V (vespertino) ou N (noturno)`)

if (turno==="M" ) {
    console.log("Bom Dia!")
}

else if (turno==="V"){
    console.log("Boa Tarde!")
}

else if (turno==="N"){
    console.log("Boa Noite!")
}
 

//-----------------------------------------------------------------------------------------------------

//3.

let turnoDeEstudo= prompt(`Qual é o turno em que você estuda?"
Digite M (matutino), V (vespertino) ou N (noturno)`)

switch (turnoDeEstudo) {
case "M":
    console.log("Bom Dia!")
break
case "V":
console.log("Boa Tarde!")
break
case "N":
    console.log("Boa Noite!")
    defaul:
    break
    
}

//---------------------------------------------------------------------------------------------------------

//4.
*/
let generoFilme= prompt("Qual é o gênero do filme?")
let precoDoIngresso= Number(prompt(" Qual é o preço do ingresso?"))
if (generoFilme === "fantasia" && precoDoIngresso <=15)
{
    console.log ("Bom filme!")
}
else 
{
    console.log ("Escolha outro filme :( ")
}
