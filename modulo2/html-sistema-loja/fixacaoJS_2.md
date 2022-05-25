 ```javascript
function calculaPrecoTotal(quantidade) {
   let valorMaca = 0
   if (quantidade < 12) {
     valorMaca = 1.30
   } else if (quantidade >= 12){
     valorMaca = 1
   }
   return valorMaca * quantidade
}
```