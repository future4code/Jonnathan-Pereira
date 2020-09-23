/* console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!") */

/* Exercício 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

/* O exercício acima faz uma pergunta ao usuário. Ele testa se o número digitado tem 
resto 0 ou não. Se tem resto 0, aparece "Passou no teste". Caso contrário, se tem algum
outro tipo de resto da divisão, aparece "Não passou no teste". */

/* Exercício 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

/* a) Serve para verificar o preço da fruta que o cliente quer comprar.
   b) Aparecerá a mensagem: "O preço da fruta Maçã é R$ 2,25."
   c) Se retirar, entenderá que o preço da fruta é outro qualquer não
      especificado, ou seja, o preço será R$ 5,00.
*/

/* Exercício 3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

/* a) Pede na tela (aparece)para digitar o primeiro número.
   b) Se digitar o número 10, aparecerá a mensagem: "Esse número passou no teste". 
      Se digitar o número -10, aparecerá uma mensagem de erro no console.
   c) Sim. Significa que a variável "mensagem", pertence ao escopo, variável "numero".
   */

/* Exercício 4 

let idade = Number (prompt("Qual é a sua idade?"))

let respostaDoUsuario = Number(idade)

if (idade >= 18) {
    console.log("Você pode dirigir.")
}

else {
    console.log("Você não pode dirigir.")
}

*/

/* Exercício 5 

let turno = prompt("Qual turno você estuda? Digite M para matutino, ou V para vespertino, ou N para noturno.")

if (turno === "M") {
    console.log("Bom dia!") 
}

if (turno === "V") {
    console.log("Boa tarde!")
}

if (turno === "N") {
    console.log("Boa noite")
}

else {
    console.log("Digite M ou V ou N.")
}
*/


/* Exercício 6 

let turno = prompt("Qual turno você estuda? Digite M para matutino, ou V para vespertino, ou N para noturno.")

switch(turno) {
    case "M":
    console.log("Bom dia")
    break
    case "V":
    console.log("Boa tarde")
    break
    case "N":
    console.log("Boa noite")
    break
}

*/

/* Exercício 7 

let genero = prompt("Qual gênero de filme você prefere assistir?")

let ingresso = prompt("Até qual valor você pagaria por um ingresso de cinema?")

if(genero === "fantasia" && ingresso < 15) {
    console.log("Bom filme!")
}

else {
    console.log("Escolha outro filme.")
}

*/

/* Desafio 1 

let genero = prompt("Qual gênero de filme você prefere assistir?")

let ingresso = prompt("Até qual valor você pagaria por um ingresso de cinema?")

if(genero === "fantasia" && ingresso < 15) {
    let snack = prompt("Qual snack que você quer comprar?")
    console.log("Bom filme e com ", snack)
}

else {
    console.log("Escolha outro filme.")
}

*/


