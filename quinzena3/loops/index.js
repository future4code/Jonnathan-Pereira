/* Exercício 1 
É um loop que tem uma condição de continuação
atrelado a um número, ou seja, foram executados valores
contidos em um array.
O resultado é 10.


let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

*/


/* Exercício 2 
a) O que será impresso no console serão os números 19,21,
23,25,27,30.

b) Não, pois o for...of percorre a lista em ordem crescente. Porém para
o índice ou múltiplas posições da lista, é recomendado utilizar o for.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

*/


/* Desafio

O resultado seria:
0
00
000
0000

*/

/* Exercício 3 


a)


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let oArray of array) {
  console.log(oArray)
}


b)



const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0;i < array.length; i++){
  array[i] = array[i] / 10;
  console.log(array[i]);
}

*/

/* 

c) 

Não consegui fazer.

*/


/* d) 

Não consegui fazer.

*/

/* e) 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let valorMaximo = 0

for(let i = 0; i < array.length; i++) {
  if (valorMaximo < array[i]) (
    valorMaximo = array[i]
  )
}

console.log("O maior número é ", valorMaximo)

 */
