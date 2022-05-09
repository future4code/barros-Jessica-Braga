// Exercícios de interpretação de código
/* 1.
a)
{nome: 'Amanda Rangel', apelido: 'Mandi'} 0
{nome: 'Laís Petra', apelido: 'Laura'} 1
{nome: 'Letícia Chijo', apelido: 'Chijo'} 2 


2.
a) (3) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
0: "Amanda Rangel"
1: "Laís Petra"
2: "Letícia Chijo"
length: 3

3.
a) 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
length: 2

*/

// Exercícios de escrita de código

// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomeDoguinhos = pets.map ((pets) => {
    console.log (pets.nome)
})

const cachorrosSalsicha = pets.filter ((item) => {
    if (item.raca === "Salsicha"){
console.log (item)}
})


const poodles = pets.filter ((item) => {
    if (item.raca === "Poodle")
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})



//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 // a)
 const listaMercado = produtos.filter ((produtos) => {
     console.log (produtos.nome)
 })



// b)
 const descontoProdutos = produtos.map ((produtos) => {
    const desconto = (produtos.preco * 5) / 100
    const resultado = {
        nome: produtos.nome, preco: produtos.preco - desconto
        
    }
console.log (resultado)
 })
 descontoProdutos



// c)

 const bebidas = produtos.filter ((produtos) => {
if (produtos.categoria === "Bebidas")
{
    console.log (produtos)
}
 })



// d)

 const palavra = produtos.filter ((produtos) => {
     if (produtos.nome.includes("Ypê"))
     {
return produtos
     }
 })


 // e)

 const itens = palavra.map ((produtos) => {
    return `Compre ${produtos.nome} por preco ${produtos.preco}`
    
 })
console.log (itens)