``` Javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const separador = arrayDeNumeros.filter((item)=> {
    if(numeroEscolhido === item){
      return item
    }
  })
  
  if (separador.length > 0){
    return `O número ${numeroEscolhido} aparece ${separador.length}x`
}
else {
  return `Número não encontrado`
}
}
```